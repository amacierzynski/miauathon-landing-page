import { useEffect, useState } from 'react';
import { Section } from '../layout/Section';
import { Background } from '../background/Background';
import { getStravaStats } from '../utils/strava';

const FunComparisons = () => {
  const [distanceInKm, setDistanceInKm] = useState(0);

  useEffect(() => {
    async function fetchDistance() {
      const stats = await getStravaStats('2024-04-01');
      setDistanceInKm(stats.totalDistance);
    }
    fetchDistance();
  }, []);

  const comparisons = [
    {
      title: 'Długość kotów',
      value: Math.round(distanceInKm * 1000 / 0.46), // Average cat length is 46cm
      unit: 'kotów',
      icon: '🐱'
    },
    {
      title: 'Słonie',
      value: Math.round(distanceInKm * 1000 / 600), // Average elephant length is 6m
      unit: 'słoni',
      icon: '🐘'
    },
    {
      title: 'Pielgrzymki do Częstochowy',
      value: (distanceInKm / 120).toFixed(1), // Distance from Łódź to Częstochowa is ~120km
      unit: 'pielgrzymek',
      icon: '🏰'
    },
    {
      title: 'Wieże Eiffla',
      value: Math.round(distanceInKm * 1000 / 324), // Eiffel Tower height is 324m
      unit: 'wież',
      icon: '🗼'
    },
    {
      title: 'Pizza Margherita',
      value: Math.round(distanceInKm * 1000 / 0.3), // Average pizza diameter is 30cm
      unit: 'pizz',
      icon: '🍕'
    },
    {
      title: 'Autobusy miejskie',
      value: Math.round(distanceInKm * 1000 / 12), // Average bus length is 12m
      unit: 'autobusów',
      icon: '🚌'
    }
  ];

  return (
    <Background color="bg-gray-100">
      <Section
        title="Ciekawostki"
        description="Zobacz, ile to naprawdę jest kilometrów w przeliczeniu na..."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {comparisons.map((comparison, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-lg text-center transform hover:scale-105 transition-transform duration-200">
              <div className="text-4xl mb-4">{comparison.icon}</div>
              <h3 className="text-xl font-bold text-primary-500 mb-2">{comparison.title}</h3>
              <p className="text-2xl font-bold">
                {comparison.value} {comparison.unit}
              </p>
            </div>
          ))}
        </div>
      </Section>
    </Background>
  );
};

export { FunComparisons }; 