import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="Jak to działa?"
    description="Wspólnie możemy pomóc kotom w potrzebie. Oto jak działa nasza akcja:"
  >
    <VerticalFeatureRow
      title="1. Wesprzyj na zrzutka.pl"
      description="Wpłać dowolną kwotę na naszą zrzutkę. Za każde 5zł przejadę 1km rowerem. Im więcej wsparcia, tym więcej kilometrów dla kotów!"
      image="/assets/images/1.png"
      imageAlt="Wesprzyj na zrzutka.pl"
    />
    <VerticalFeatureRow
      title="2. Ja będę jeździć"
      description="Wsiadam na rower i pedałuję! Każda wpłata motywuje mnie do pokonywania kolejnych kilometrów. Będę dokumentować moją trasę na Instagramie."
      image="/assets/images/2.png"
      imageAlt="Rowerzysta na trasie"
      reverse
    />
    <VerticalFeatureRow
      title="3. Koty są szczęśliwe"
      description="Wszystkie zebrane środki zostaną przeznaczone na pomoc kotom w potrzebie. Każda złotówka ma znaczenie!"
      image="/assets/images/3.png"
      imageAlt="Szczęśliwe koty"
    />
  </Section>
);

export { VerticalFeatures };
