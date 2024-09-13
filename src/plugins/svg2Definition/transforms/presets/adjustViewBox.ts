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

export const adjustViewBox: TransformFactory = assignAttrsAtTag(
  'svg',
  ({ name, previousAttrs }) => {
    let newViewBox;
    if (previousAttrs.viewBox === '0 0 1024 1024') {
      if (ICON_NAMES_1024.includes(name)) {
        newViewBox = '0 0 1024 1024';
      } else {
        newViewBox = '64 64 896 896';
      }
    } else {
      newViewBox = previousAttrs.viewBox;
    }
    return {
      viewBox: newViewBox,
    };
  }
);
