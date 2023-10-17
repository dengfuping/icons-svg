import { assignAttrsAtTag } from '..';
import { TransformFactory } from '../..';

// icons with `0 0 1024 1024` viewBox
const SPECIAL_ICON_NAMES = [
  'settings',
  'douyin',
  'numeral',
  'letter',
  'letter-lower',
  'letter-upper',
  'funtion-bold',
  'sql',
  'timer',
  'wifi',
];

export const adjustViewBox: TransformFactory = assignAttrsAtTag('svg', ({ name }) => ({
  viewBox: SPECIAL_ICON_NAMES.includes(name) ? '0 0 1024 1024' : '64 64 896 896',
}));
