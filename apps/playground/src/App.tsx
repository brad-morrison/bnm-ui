// apps/playground/src/App.tsx
import React from 'react';
import { Container, SectionRoot, Heading, Text, Button, Input, VStack } from '@bnm/primitives';

export default function App() {
  return (
    <>
      <SectionRoot tone="default" paddingY='4rem'>
        <Container>
          <VStack gap="1rem">
            <Heading as="h1" $level={5}>This is the Default tone section</Heading>
            <Text $size={2}>This is some text inside the default section.</Text>
            <Button $variant="accent" $size="md" onClick={() => alert('Accent Button Clicked')}>Accent Button</Button>
            <Button $variant="surface" $size="md" fullWidth>Surface Button</Button>
            <Button $variant="ghost" $size="md">Ghost Button</Button>
          </VStack>
        </Container>
      </SectionRoot>

      <SectionRoot tone="surface" paddingY='4rem'>
        <Container>
          <VStack gap="1rem">
            <Heading as="h1" $level={5}>Surface tone section</Heading>
            <Text $size={2} $muted $weight={300}>Darker background, same vertical rhythm.</Text>
            <Button $variant="accent" $size="sm">Accent Button</Button>
            <Button $variant="surface" $size="sm">Surface Button</Button>
            <Button $variant="ghost" $size="sm">Ghost Button</Button>
          </VStack>
        </Container>
      </SectionRoot>

      <SectionRoot tone="accent" paddingY='4rem'>
        <Container>
          <VStack gap="1rem">
            <Heading as="h1" $level={5}>Accent tone section</Heading>
            <Text $size={2}>Shows that you can override padding per section.</Text>
            <Button $variant="accent" $size="lg">Accent Button</Button>
            <Button $variant="surface" $size="lg">Surface Button</Button>
            <Button $variant="ghost" $size="lg">Ghost Button</Button>
          </VStack>
        </Container>
      </SectionRoot>

      <SectionRoot tone="default" paddingY="4rem">
        <Container>
          <VStack gap="1.5rem">
            <Heading as="h2" $level={4}>Form controls</Heading>
            <Text $size={2} $muted>Quick check of different input states and configurations.</Text>

            <VStack gap="1rem">
              <Input
                label="Full name"
                placeholder="Ada Lovelace"
                fullWidth
              />
              <Input
                label="Email address"
                placeholder="you@example.com"
                type="email"
                fullWidth
              />
              <Input
                label="Password"
                placeholder="••••••••"
                type="password"
                fullWidth
              />
              <Input
                label="Email with error"
                placeholder="you@example.com"
                type="email"
                fullWidth
                error="Please enter a valid email address."
              />
              <Input
                label="Disabled"
                placeholder="Disabled input"
                disabled
                fullWidth
              />
              <Input
                label="Read only"
                value="You cannot edit this"
                readOnly
                fullWidth
              />
            </VStack>
          </VStack>
        </Container>
      </SectionRoot>

      
    </>
  );
}

