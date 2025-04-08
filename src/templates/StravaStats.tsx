import { useEffect, useState } from 'react';
import { Section } from '../layout/Section';
import { Background } from '../background/Background';
import { getStravaStats } from '../utils/strava';

const StravaStats = () => {
  const [stats, setStats] = useState({
    totalDistance: 0,
    totalActivities: 0,
    startDate: '2025-05-01',
  });

  useEffect(() => {
    async function fetchStats() {
      const stravaStats = await getStravaStats('2025-05-01');
      setStats(stravaStats);
    }
    fetchStats();
  }, []);

  return (
    <Background color="bg-gray-100">
      <Section
        title="Moje postępy"
        description="Śledź moje postępy na rowerze w ramach Bike MIAUathon"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-primary-500">{stats.totalDistance} km</h3>
            <p className="mt-2">Przejechane kilometry</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-primary-500">{stats.totalActivities}</h3>
            <p className="mt-2">Liczba przejazdów</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-primary-500">
              {new Date(stats.startDate).toLocaleDateString('pl-PL', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </h3>
            <p className="mt-2">Data rozpoczęcia</p>
          </div>
        </div>
      </Section>
    </Background>
  );
};

export { StravaStats }; 