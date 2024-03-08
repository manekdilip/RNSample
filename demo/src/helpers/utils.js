import {moderateWidth} from './responsive';

// Get Header font size
export const headerFontSizes = size => {
  let _size;
  switch (size) {
    case 'extraSmall':
      _size = moderateWidth(4.5);
      break;
    case 'small':
      _size = moderateWidth(5);
      break;
    case 'regular':
      _size = moderateWidth(7);
      break;
    case 'large':
      _size = moderateWidth(9);
      break;
    case 'extraLarge':
      _size = moderateWidth(11);
      break;
    default:
      _size = moderateWidth(5.5);
      break;
  }
  return _size;
};

// Get Custom text font size
export const commonTextfontSizes = size => {
  let _size;
  switch (size) {
    case 'small':
      _size = moderateWidth(3);
      break;
    case 'regular':
      _size = moderateWidth(4);
      break;
    case 'large':
      _size = moderateWidth(5);
      break;
    case 'extraLarge':
      _size = moderateWidth(6);
      break;
    default:
      _size = moderateWidth(3.5);
      break;
  }
  return _size;
};

// Regex validation that allows onlu latters and space between characters
export const onlyLettersAndSpaces = str => {
  const regx = /[a-zA-Z]+([\s][a-zA-Z]+)*/;
  return regx.test(str);
};
