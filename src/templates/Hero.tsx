import Link from 'next/link';
import Image from 'next/image';

import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';

const Hero = () => (
  <div className="relative min-h-screen">
    {/* Full background image */}
    <div className="absolute inset-0 w-full h-full">
      <Image
        src="/assets/images/background.jpg"
        alt="Black cat eyes in the dark"
        layout="fill"
        objectFit="cover"
        objectPosition="bottom"
        priority
        className="brightness-90"
      />
    </div>

    {/* Content */}
    <div className="relative z-10">
      <Section yPadding="pt-20 pb-32">
        <div className="min-h-[600px] flex items-center justify-center">
          <div className="w-4/5 md:w-3/5 text-center">
            <HeroOneButton
              title={
                <>
                  {'Bike MIAUathon\n'}
                  <span className="text-yellow-300">Kilometry dla Miaukowa</span>
                </>
              }
              description="Za każde 5zł przejadę 1km rowerem, aby pomóc kotom w potrzebie. Wspólnie możemy zdziałać cuda!"
              button={
                <Link href="https://zrzutka.pl/hzauea/s/3dscys">
                  <Button xl className="bg-yellow-400 hover:bg-yellow-500 text-black">
                    Wesprzyj na zrzutka.pl
                  </Button>
                </Link>
              }
              className="text-white"
            />
          </div>
        </div>
      </Section>
    </div>
  </div>
);

export { Hero };
