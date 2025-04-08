import { Background } from '../background/Background';
import { Section } from '../layout/Section';

const Footer = () => (
  <Background color="bg-gray-100">
    <Section>
      <div className="text-center text-sm text-gray-600">
        © {new Date().getFullYear()} Bike MIAUathon. Wszelkie prawa zastrzeżone. developed by macierz.dev
      </div>
    </Section>
  </Background>
);

export { Footer };
