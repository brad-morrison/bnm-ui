import 'styled-components';
import { theme } from '../../packages/theme/src/ThemeProvider';

type AppTheme = typeof theme;

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  interface DefaultTheme extends AppTheme {}
}
