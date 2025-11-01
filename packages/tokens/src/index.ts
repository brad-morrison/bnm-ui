// packages/tokens/src/index.ts
export const color = {
  bg: {
    default: '#0f1115',
    surface: '#191b22ff',
    accent: '#c34e4eff',
    accentContrast: '#001018',
    text: '#e6e9ef',
    subtle: '#9ca3af',
},
  colors: {
    textPrimary: '#222',
    textSecondary: '#555',
    border: '#ccc',
    error: '#d9534f',
    inputBg: '#fff',
    primary: '#007bff',
  },
};

export const space = {
  1: '0.25rem',
  2: '0.5rem',
  3: '0.75rem',
  4: '1rem',
  6: '1.5rem',
  8: '2rem',
  12: '3rem',
  16: '4rem',
};

export const radius = {
  sm: '6px',
  md: '10px',
  lg: '14px',
  xl: '20px',
};

export const font = {
  family: {
    base: `'Inter', system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif`,
    mono: `'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, Consolas, monospace`,
  },
  // Fluid sizes (mobile → desktop) using clamp()
  size: {
    1: 'clamp(0.875rem, 0.83rem + 0.3vw, 1.00rem)', // small
    2: 'clamp(1.00rem, 0.95rem + 0.5vw, 1.125rem)', // body
    3: 'clamp(1.125rem, 1.02rem + 0.8vw, 1.375rem)', // lead/small subhead
    4: 'clamp(1.375rem, 1.20rem + 1.3vw, 1.75rem)', // h4
    5: 'clamp(1.75rem, 1.40rem + 2.0vw, 2.25rem)',  // h3
    6: 'clamp(2.25rem, 1.70rem + 3.0vw, 3.00rem)',  // h2
    7: 'clamp(3.00rem, 2.20rem + 4.2vw, 3.75rem)',  // h1
  },
  lineHeight: {
    body: 1.55,
    heading: 1.12,
    tight: 1.1,
    loose: 1.7,
  },
  weight: {
    regular: 400,
    medium: 500,
    bold: 700,
  },
} as const;
;