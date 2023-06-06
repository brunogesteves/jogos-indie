import React from 'react';

import Slide from '../../components/Home/Slide/Slide.view';
import Middle from '../../components/Home/Middle/Middle.view';
import GamePlays from '../../components/Home/GamePlays/Gameplay.view';
import Main from '../../components/Home/Main/Main.view';

import Container from '../../components/Container/Container';

export default function Home() {
  return (
    <Container>
      <div className="flex flex-col">
        <div className="flex justify-between w-full mt-2 h-auto max-sm:flex-col max-sm:gap-y-10">
          <Slide />
          <Middle />
          <GamePlays />
        </div>
        <div>
          <Main />
        </div>
      </div>
    </Container>
  );
}
