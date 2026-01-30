// apps/bnm-software/src/App.tsx
import React from 'react';
import { ThemeProvider as SCThemeProvider } from 'styled-components';
import type { DefaultTheme } from 'styled-components';
import { theme as baseTheme } from '@bnm/theme/ThemeProvider';
import {
  Box,
  Flex,
  Grid,
  GridItem,
  Container,
  SectionRoot,
  Heading,
  Text,
  Button,
  Input,
  VStack,
  HStack,
} from '@bnm/primitives';

const brutalTheme: DefaultTheme = {
  ...baseTheme,
  color: {
    ...baseTheme.color,
    bg: {
      default: '#f5f2e9',
      surface: '#ffffff',
      accent: '#0b0b0b',
      accentContrast: '#f5f2e9',
      text: '#0b0b0b',
      subtle: '#2a2a2a',
    },
    colors: {
      ...baseTheme.color.colors,
      textPrimary: '#0b0b0b',
      textSecondary: '#1f1f1f',
      border: '#0b0b0b',
      error: '#c1121f',
      inputBg: '#ffffff',
      primary: '#0b0b0b',
    },
  },
};

export default function App() {
  return (
    <SCThemeProvider theme={brutalTheme}>
      <Box
        sx={(theme: DefaultTheme) => `
          min-height: 100vh;
          background: ${theme.color.bg.default};
          color: ${theme.color.bg.text};
        `}
      >
        <SectionRoot tone="default" paddingY="3.5rem">
          <Container>
            <VStack gap="2.5rem">
              <Flex align="center" justify="space-between" wrap="wrap" gap="1rem">
                <HStack gap="0.75rem" align="center">
                  <Box
                    as="span"
                    sx={(theme: DefaultTheme) => `
                      display: inline-flex;
                      align-items: center;
                      justify-content: center;
                      width: 52px;
                      height: 52px;
                      border: 3px solid ${theme.color.colors.border};
                      background: ${theme.color.bg.accent};
                      color: ${theme.color.bg.accentContrast};
                      font-weight: 800;
                      letter-spacing: 0.06em;
                      transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                      cursor: pointer;
                      &:hover {
                        transform: rotate(-5deg) scale(1.05);
                      }
                    `}
                  >
                    BNM
                  </Box>
                  <Heading as="h1" $level={3}>
                    BNM Software
                  </Heading>
                </HStack>

                <HStack gap="1rem" align="center" wrap="wrap">
                  <Text as="span" $size={2} $muted>
                    Work
                  </Text>
                  <Text as="span" $size={2} $muted>
                    Capabilities
                  </Text>
                  <Text as="span" $size={2} $muted>
                    Studio
                  </Text>
                  <Button variant="ghost" size="sm">
                    Get in touch
                  </Button>
                  <Button variant="accent" size="sm">
                    Start a build
                  </Button>
                </HStack>
              </Flex>

              <Grid
                columns="1.2fr 0.8fr"
                sx={(theme: DefaultTheme) => `
                  gap: ${theme.space[8]};
                  align-items: start;
                  @media (max-width: 900px) {
                    grid-template-columns: 1fr;
                  }
                `}
              >
                <VStack gap="1.5rem">
                  <Box
                    as="span"
                    sx={(theme: DefaultTheme) => `
                      display: inline-flex;
                      align-items: center;
                      padding: ${theme.space[1]} ${theme.space[3]};
                      border: 2px solid ${theme.color.colors.border};
                      background: ${theme.color.bg.surface};
                      font-size: ${theme.font.size[1]};
                      font-weight: 600;
                      animation: slideInLeft 0.6s cubic-bezier(0.4, 0, 0.2, 1);
                      @keyframes slideInLeft {
                        from {
                          transform: translateX(-20px);
                          opacity: 0;
                        }
                        to {
                          transform: translateX(0);
                          opacity: 1;
                        }
                      }
                    `}
                  >
                    SINCE 2014 • PRODUCT ENGINEERING
                  </Box>
                  <Heading as="h2" $level={5}>
                    Brutalist digital experiences for teams that ship fast and stay sharp.
                  </Heading>
                  <Text $size={3} $muted>
                    BNM Software is a studio building resilient products, design systems, and platform
                    tooling. We pair blunt visuals with precision engineering.
                  </Text>
                  <HStack gap="1rem" wrap="wrap" align="center">
                    <Button variant="accent" size="lg">
                      Book a discovery call
                    </Button>
                    <Button variant="surface" size="lg">
                      View case file
                    </Button>
                  </HStack>
                  <HStack gap="2rem" wrap="wrap">
                    <VStack gap="0.25rem">
                      <Heading as="h3" $level={4}>
                        180+
                      </Heading>
                      <Text $size={1} $muted>
                        Products shipped
                      </Text>
                    </VStack>
                    <VStack gap="0.25rem">
                      <Heading as="h3" $level={4}>
                        12 yrs
                      </Heading>
                      <Text $size={1} $muted>
                        In enterprise builds
                      </Text>
                    </VStack>
                    <VStack gap="0.25rem">
                      <Heading as="h3" $level={4}>
                        4.8★
                      </Heading>
                      <Text $size={1} $muted>
                        Client rating
                      </Text>
                    </VStack>
                  </HStack>
                </VStack>

                <Box
                  sx={(theme: DefaultTheme) => `
                    border: 3px solid ${theme.color.colors.border};
                    padding: ${theme.space[6]};
                    background: ${theme.color.bg.surface};
                    box-shadow: 12px 12px 0 ${theme.color.colors.border};
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                    animation: slideInRight 0.8s cubic-bezier(0.4, 0, 0.2, 1);
                    &:hover {
                      box-shadow: 18px 18px 0 ${theme.color.colors.border};
                      transform: translate(-6px, -6px);
                    }
                    @keyframes slideInRight {
                      from {
                        transform: translateX(30px);
                        opacity: 0;
                      }
                      to {
                        transform: translateX(0);
                        opacity: 1;
                      }
                    }
                  `}
                >
                  <VStack gap="1.5rem">
                    <Heading as="h3" $level={4}>
                      Current Operations
                    </Heading>
                    <VStack gap="0.75rem">
                      {[
                        'Design system migration • Week 04',
                        'Payments platform hardening • Week 09',
                        'AI enablement sprint • Week 02',
                      ].map((item) => (
                        <Flex key={item} align="center" justify="space-between">
                          <Text $size={2}>{item}</Text>
                          <Text $size={1} $muted>
                            Active
                          </Text>
                        </Flex>
                      ))}
                    </VStack>
                    <Box
                      sx={(theme: DefaultTheme) => `
                        border: 2px solid ${theme.color.colors.border};
                        padding: ${theme.space[4]};
                        background: ${theme.color.bg.default};
                        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                        &:hover {
                          background: ${theme.color.bg.accent};
                          color: ${theme.color.bg.accentContrast};
                          transform: scale(1.05);
                        }
                      `}
                    >
                      <Text $size={1} $muted>
                        SLAs met
                      </Text>
                      <Heading as="h4" $level={3}>
                        99.98%
                      </Heading>
                    </Box>
                  </VStack>
                </Box>
              </Grid>
            </VStack>
          </Container>
        </SectionRoot>

        <SectionRoot tone="surface" paddingY="3.5rem">
          <Container>
            <VStack gap="2.5rem">
              <HStack align="center" justify="space-between" wrap="wrap">
                <Heading as="h2" $level={4}>
                  Capabilities built to last
                </Heading>
                <Text $size={2} $muted>
                  Clear scope. Sharp edges. No fluff.
                </Text>
              </HStack>
              <Grid
                columns="repeat(3, minmax(0, 1fr))"
                sx={(theme: DefaultTheme) => `
                  gap: ${theme.space[6]};
                  @media (max-width: 900px) {
                    grid-template-columns: 1fr;
                  }
                `}
              >
                {[
                  {
                    title: 'Product Engineering',
                    copy: 'Delivery pods that embed with your team to build, launch, and scale core platforms.',
                  },
                  {
                    title: 'Design Systems',
                    copy: 'Tokenized UI kits and governance to keep every surface consistent and fast.',
                  },
                  {
                    title: 'AI Enablement',
                    copy: 'Operational copilots, workflow automation, and data readiness for real-world teams.',
                  },
                ].map((feature, index) => (
                  <Box
                    key={feature.title}
                    sx={(theme: DefaultTheme) => `
                      border: 3px solid ${theme.color.colors.border};
                      background: ${theme.color.bg.surface};
                      padding: ${theme.space[6]};
                      box-shadow: 10px 10px 0 ${theme.color.colors.border};
                      transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
                      cursor: pointer;
                      animation: fadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.1}s both;
                      &:hover {
                        box-shadow: 16px 16px 0 ${theme.color.colors.border};
                        transform: translate(-6px, -6px);
                      }
                      @keyframes fadeInUp {
                        from {
                          transform: translateY(20px);
                          opacity: 0;
                        }
                        to {
                          transform: translateY(0);
                          opacity: 1;
                        }
                      }
                    `}
                  >
                    <VStack gap="0.75rem">
                      <Text $size={1} $muted>
                        0{index + 1}
                      </Text>
                      <Heading as="h3" $level={3}>
                        {feature.title}
                      </Heading>
                      <Text $size={2} $muted>
                        {feature.copy}
                      </Text>
                      <Button variant="ghost" size="sm">
                        View methodology
                      </Button>
                    </VStack>
                  </Box>
                ))}
              </Grid>
            </VStack>
          </Container>
        </SectionRoot>

        <SectionRoot tone="default" paddingY="3.5rem">
          <Container>
            <VStack gap="2rem">
              <Heading as="h2" $level={4}>
                Selected case files
              </Heading>
              <Grid
                columns="repeat(2, minmax(0, 1fr))"
                sx={(theme: DefaultTheme) => `
                  gap: ${theme.space[6]};
                  @media (max-width: 900px) {
                    grid-template-columns: 1fr;
                  }
                `}
              >
                {[
                  {
                    title: 'Nordline Logistics',
                    summary: 'Rebuilt the dispatch platform with real-time routing and zero-downtime cutover.',
                    stat: '34% faster dispatch',
                  },
                  {
                    title: 'Mosaic Health',
                    summary: 'Unified patient scheduling with a new design system and secure tooling.',
                    stat: '2.4M sessions supported',
                  },
                ].map((project) => (
                  <Box
                    key={project.title}
                    sx={(theme: DefaultTheme) => `
                      border: 3px solid ${theme.color.colors.border};
                      background: ${theme.color.bg.surface};
                      padding: ${theme.space[6]};
                      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                      cursor: pointer;
                      &:hover {
                        transform: translateY(-8px);
                        box-shadow: 0 12px 0 ${theme.color.colors.border};
                      }
                    `}
                  >
                    <VStack gap="1rem">
                      <Heading as="h3" $level={3}>
                        {project.title}
                      </Heading>
                      <Text $size={2} $muted>
                        {project.summary}
                      </Text>
                      <Box
                        sx={(theme: DefaultTheme) => `
                          border: 2px solid ${theme.color.colors.border};
                          padding: ${theme.space[3]};
                          display: inline-flex;
                          align-items: center;
                          gap: ${theme.space[2]};
                          background: ${theme.color.bg.default};
                          transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                          &:hover {
                            transform: translateX(8px);
                          }
                        `}
                      >
                        <Text $size={1} $muted>
                          Outcome
                        </Text>
                        <Text $size={2}>{project.stat}</Text>
                      </Box>
                      <Button variant="accent" size="sm">
                        Open case file
                      </Button>
                    </VStack>
                  </Box>
                ))}
              </Grid>
            </VStack>
          </Container>
        </SectionRoot>

        <SectionRoot tone="surface" paddingY="3.5rem">
          <Container>
            <Grid
              columns="1fr 1fr"
              sx={(theme: DefaultTheme) => `
                gap: ${theme.space[8]};
                align-items: start;
                @media (max-width: 900px) {
                  grid-template-columns: 1fr;
                }
              `}
            >
              <VStack gap="1.25rem">
                <Heading as="h2" $level={4}>
                  The build process
                </Heading>
                <Text $size={2} $muted>
                  We align on outcomes, prove it fast, then scale with hardened delivery. Each step is
                  documented, measured, and re-validated.
                </Text>
                <Button variant="ghost" size="sm">
                  Download the playbook
                </Button>
              </VStack>
              <Grid
                columns="repeat(2, minmax(0, 1fr))"
                gap="1rem"
                sx={(theme: DefaultTheme) => `
                  @media (max-width: 600px) {
                    grid-template-columns: 1fr;
                  }
                `}
              >
                {[
                  'Audit + Discovery',
                  'Rapid Prototyping',
                  'Build + Instrument',
                  'Handoff + Support',
                ].map((step, index) => (
                  <GridItem
                    key={step}
                    sx={(theme: DefaultTheme) => `
                      border: 3px solid ${theme.color.colors.border};
                      padding: ${theme.space[5]};
                      background: ${theme.color.bg.surface};
                      transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
                      cursor: pointer;
                      animation: popIn 0.5s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.1}s both;
                      &:hover {
                        background: ${theme.color.bg.accent};
                        color: ${theme.color.bg.accentContrast};
                        transform: scale(1.05);
                      }
                      @keyframes popIn {
                        from {
                          transform: scale(0.8);
                          opacity: 0;
                        }
                        to {
                          transform: scale(1);
                          opacity: 1;
                        }
                      }
                    `}
                  >
                    <Text $size={1} $muted>
                      Step 0{index + 1}
                    </Text>
                    <Heading as="h3" $level={3}>
                      {step}
                    </Heading>
                  </GridItem>
                ))}
              </Grid>
            </Grid>
          </Container>
        </SectionRoot>

        <SectionRoot tone="accent" paddingY="3.5rem">
          <Container>
            <Grid
              columns="1.4fr 1fr"
              sx={(theme: DefaultTheme) => `
                gap: ${theme.space[8]};
                align-items: center;
                @media (max-width: 900px) {
                  grid-template-columns: 1fr;
                }
              `}
            >
              <VStack gap="1rem">
                <Heading as="h2" $level={4}>
                  Ready to build with BNM Software?
                </Heading>
                <Text $size={2}>
                  Tell us the system you need. We reply with a concise scope and timeline in 48 hours.
                </Text>
              </VStack>
              <VStack gap="1rem">
                <Input label="Work email" placeholder="you@company.com" fullWidth />
                <Button variant="surface" size="lg" fullWidth>
                  Request a proposal
                </Button>
                <Text $size={1} $muted>
                  We keep outreach minimal and only follow up once.
                </Text>
              </VStack>
            </Grid>
          </Container>
        </SectionRoot>

        <SectionRoot tone="surface" paddingY="2.5rem">
          <Container>
            <Flex align="center" justify="space-between" wrap="wrap" gap="1rem">
              <Text $size={1} $muted>
                © 2026 BNM Software. All rights reserved.
              </Text>
              <HStack gap="1rem" wrap="wrap">
                <Text as="span" $size={1} $muted>
                  Privacy
                </Text>
                <Text as="span" $size={1} $muted>
                  Terms
                </Text>
                <Text as="span" $size={1} $muted>
                  Contact
                </Text>
              </HStack>
            </Flex>
          </Container>
        </SectionRoot>
      </Box>
    </SCThemeProvider>
  );
}
