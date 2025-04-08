import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Footer } from './Footer';
import { Hero } from './Hero';
import { VerticalFeatures } from './VerticalFeatures';
import { StravaStats } from './StravaStats';
import { FunComparisons } from './FunComparisons';
import { AboutMe } from './AboutMe';

const Base = () => (
  <div className="text-gray-600 antialiased">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Hero />
    <AboutMe />
    <VerticalFeatures />
    <StravaStats />
    <FunComparisons />
    <Footer />
  </div>
);

export { Base };
