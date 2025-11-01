import 'styled-components';
import { theme } from '../../packages/theme/src/ThemeProvider';

type AppTheme = typeof theme;

declare module 'styled-components' {
  interface DefaultTheme extends AppTheme {}
}
