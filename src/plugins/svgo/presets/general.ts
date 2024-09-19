import SVGO from 'svgo';
import { mergeRight } from 'ramda';
import { getBaseConfig } from './base';

export const getGeneralConfig = (name: string, theme: string): SVGO.Options => {
  const baseConfig = getBaseConfig(name, theme);
  return mergeRight(baseConfig, {
    plugins: [...(baseConfig.plugins || []), { removeAttrs: { attrs: ['class', 'fill'] } }],
  });
};
