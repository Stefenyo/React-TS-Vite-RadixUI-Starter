import { type FC } from 'react';
import { Theme } from '@radix-ui/themes';
import { LandingPage } from './LandingPage';

const App: FC = () => (
  <Theme appearance="light" accentColor="iris" radius="large">
    <LandingPage />
  </Theme>
);

export { App };
