import { assignAttrsAtTag } from '..';
import { TransformFactory } from '../..';

// icons with `0 0 1024 1024` viewBox
const ICON_NAMES_1024 = [
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

// icons with `0 0 12 12` viewBox
const ICON_NAMES_12 = ['ellipsis-circle'];

export const adjustViewBox: TransformFactory = assignAttrsAtTag('svg', ({ name }) => ({
  viewBox: ICON_NAMES_1024.includes(name)
    ? '0 0 1024 1024'
    : ICON_NAMES_12.includes(name)
    ? '0 0 12 12'
    : '64 64 896 896',
}));
