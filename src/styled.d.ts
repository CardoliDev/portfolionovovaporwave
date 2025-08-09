import 'styled-components';
import { CyberpunkTheme } from '@styles/theme';

declare module 'styled-components' {
  export interface DefaultTheme extends CyberpunkTheme {}
}
