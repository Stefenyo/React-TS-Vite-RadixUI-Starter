import { type FC } from 'react';
import { StyledContainer, StyledFlex } from './LandingPage.styles';
import { Button, Flex, Heading, Text } from '@radix-ui/themes';
import { FaceIcon, ImageIcon, SunIcon } from '@radix-ui/react-icons';

const LandingPage: FC = () => {
  const handleOnClick = () =>
    window.open('https://github.com/Stefenyo/React-TS-Vite-RadixUI-Starter', '_blank');

  return (
    <StyledFlex align="center" pl="9">
      <StyledContainer>
        <Flex direction="column" gap="4">
          <Heading as="h1" size="9">
            React, Typescript, Vite + Radix UI Starter template
          </Heading>
          <Text mb="4">Includes basic folder structure and linting rules.</Text>
          <Button onClick={handleOnClick} size="3">
            Let&apos;s go
          </Button>
          <Flex gap="3" mt="4">
            <FaceIcon />
            <ImageIcon />
            <SunIcon />
          </Flex>
        </Flex>
      </StyledContainer>
    </StyledFlex>
  );
};

export { LandingPage };
