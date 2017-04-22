const fs = require('fs');
const _ = require('lodash');
const colorArray = require('./json/colorArray.json');

const Colors = [];
const Names = {};
const ColorByName = {};

_.each(colorArray, color => {
  Colors.push(color.hex);
  Names[color.hex] = color.name;
  ColorByName[color.name.toLowerCase()] = color.hex;
});

fs.writeFileSync('./json/generated/Colors.json', JSON.stringify(Colors));
fs.writeFileSync('./json/generated/Names.json', JSON.stringify(Names));
fs.writeFileSync('./json/generated/ColorByName.json', JSON.stringify(ColorByName));