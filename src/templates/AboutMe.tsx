import Image from 'next/image';
import { Section } from '../layout/Section';
import { Background } from '../background/Background';

const AboutMe = () => (
  <Background color="bg-white">
    <Section>
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">Kim jestem?</h2>
          <div className="space-y-4 text-lg">
            <p>
              Cześć! Jestem Dominika, wolontariuszka Fundacji Koty na zakręcie. Postanowiłam połączyć moją pasję do sportu z pomocą kotom w potrzebie.
            </p>
            <p>
              Moja misja jest prosta: <span className="font-semibold">za każde wpłacone 5zł przejadę 1km na rowerze</span>. Wszystkie zebrane środki zostaną przeznaczone na utworzenie Miaukowa - azylu dla 50 łódzkich kotów.
            </p>
            <p>
              Dlaczego to robię? Bo wierzę, że każdy kot zasługuje na bezpieczny dom i opiekę. W Miaukowie będziemy:
            </p>
            <ul className="list-disc list-inside pl-4 space-y-2">
              <li>Ratować koty w potrzebie</li>
              <li>Przeprowadzać sterylizacje</li>
              <li>Pomagać karmicielom</li>
              <li>Szukać kotom nowych domów</li>
              <li>Edukować o odpowiedzialnej opiece</li>
            </ul>
          </div>
        </div>
        <div className="md:w-1/2 relative h-[400px] w-full rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/assets/images/cat.png"
            alt="Kot na rowerze w chmurach"
            layout="fill"
            objectFit="cover"
            className="hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </Section>
  </Background>
);

export { AboutMe }; 