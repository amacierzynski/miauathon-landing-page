interface StravaActivity {
  distance: number;
  type: string;
  start_date: string;
}

interface StravaTokenResponse {
  access_token: string;
  refresh_token: string;
  expires_at: number;
}

interface CachedStravaStats {
  data: {
    totalDistance: number;
    totalActivities: number;
    startDate: string;
  };
  timestamp: number;
}

const STRAVA_CLIENT_ID = process.env.NEXT_PUBLIC_STRAVA_CLIENT_ID;
const STRAVA_CLIENT_SECRET = process.env.STRAVA_CLIENT_SECRET;
const STRAVA_REFRESH_TOKEN = process.env.STRAVA_REFRESH_TOKEN;
const STRAVA_ACCESS_TOKEN = process.env.STRAVA_ACCESS_TOKEN;
const CACHE_KEY = 'strava_stats_cache';
const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

async function refreshStravaToken(): Promise<string> {
  const response = await fetch('https://www.strava.com/oauth/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      client_id: STRAVA_CLIENT_ID,
      client_secret: STRAVA_CLIENT_SECRET,
      refresh_token: STRAVA_REFRESH_TOKEN,
      grant_type: 'refresh_token',
    }),
  });

  const data: StravaTokenResponse = await response.json();
  return data.access_token;
}

async function fetchStravaStats(since: string) {
  // If we have a refresh token, use it to get a fresh access token
  const accessToken = STRAVA_REFRESH_TOKEN 
    ? await refreshStravaToken()
    : STRAVA_ACCESS_TOKEN; // Fallback to static access token

  if (!accessToken) {
    throw new Error('No Strava access token available');
  }

  const after = new Date(since).getTime() / 1000; // Convert to Unix timestamp

  const response = await fetch(
    `https://www.strava.com/api/v3/athlete/activities?after=${after}&per_page=100`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

  const activities: StravaActivity[] = await response.json();
  
  // Filter only ride activities and calculate stats
  const rideActivities = activities.filter(activity => activity.type === 'Ride');
  const totalDistance = Math.round(
    rideActivities.reduce((sum, activity) => sum + activity.distance / 1000, 0)
  );

  return {
    totalDistance,
    totalActivities: rideActivities.length,
    startDate: since,
  };
}

function getCachedStats(): CachedStravaStats | null {
  if (typeof window === 'undefined') return null;
  
  const cached = localStorage.getItem(CACHE_KEY);
  if (!cached) return null;

  try {
    return JSON.parse(cached);
  } catch {
    return null;
  }
}

function setCachedStats(stats: CachedStravaStats['data']) {
  if (typeof window === 'undefined') return;

  const cache: CachedStravaStats = {
    data: stats,
    timestamp: Date.now(),
  };
  
  localStorage.setItem(CACHE_KEY, JSON.stringify(cache));
}

export async function getStravaStats(since: string): Promise<{
  totalDistance: number;
  totalActivities: number;
  startDate: string;
}> {
  try {
    // Check cache first
    const cached = getCachedStats();
    const now = Date.now();

    // If we have valid cache that's less than 24 hours old, use it
    if (cached && (now - cached.timestamp) < CACHE_DURATION) {
      console.log('Using cached Strava stats');
      return cached.data;
    }

    // Otherwise fetch new data
    console.log('Fetching fresh Strava stats');
    const freshStats = await fetchStravaStats(since);
    
    // Cache the new data
    setCachedStats(freshStats);
    
    return freshStats;
  } catch (error) {
    console.error('Error fetching Strava data:', error);
    
    // If we have any cached data, return it as fallback
    const cached = getCachedStats();
    if (cached) {
      console.log('Using cached data as fallback after error');
      return cached.data;
    }

    // If all else fails, return zeros
    return {
      totalDistance: 0,
      totalActivities: 0,
      startDate: since,
    };
  }
} 