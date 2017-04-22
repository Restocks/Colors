import Colors from '../json/generated/Colors.json';
import Names from '../json/generated/Names.json';
import ColorByName from '../json/generated/ColorByName.json';

const GetNameOfColor = (color) => {
  const name = Names[color];
  if (typeof name === 'string') {
    return name;
  }
  return '';
};

const GetColorByName = (input) => {
  if (typeof input === 'string') {
    const name = input.toLowerCase();
    const color = ColorByName[name];
    if (typeof color === 'string') {
      return color;
    }
  }
  return null;
};

export { Colors, GetNameOfColor, GetColorByName };
