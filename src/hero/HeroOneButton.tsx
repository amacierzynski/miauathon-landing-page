import type { ReactNode } from 'react';
import className from 'classnames';

type IHeroOneButtonProps = {
  title: ReactNode;
  description: string;
  button: ReactNode;
  className?: string;
};

const HeroOneButton = (props: IHeroOneButtonProps) => (
  <header className={className('text-center', props.className)}>
    <h1 className="whitespace-pre-line text-5xl font-bold leading-hero">
      {props.title}
    </h1>
    <div className="mb-16 mt-4 text-2xl">{props.description}</div>

    {props.button}
  </header>
);

export { HeroOneButton };
