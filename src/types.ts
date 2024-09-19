export interface AbstractNode {
  tag: string;
  attrs: {
    [key: string]: string;
  };
  children?: AbstractNode[];
  text?: string;
}

export interface IconDefinition {
  name: string; // kebab-case-style
  theme: ThemeType;
  icon: ((primaryColor: string, secondaryColor: string) => AbstractNode) | AbstractNode;
}

export type ThemeType = 'filled' | 'outlined' | 'twotone' | 'gray' | 'colored' | 'svg';
export type ThemeTypeUpperCase = 'Filled' | 'Outlined' | 'TwoTone' | 'Gray' | 'Colored' | 'Svg';
