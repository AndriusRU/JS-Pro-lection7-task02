import correctNumber from '../app';

const numbers = [
  ['2', '2'],
  ['8 (927) 000-00-00', '+79270000000'],
  ['+7 960 000 00 00', '+79600000000'],
  ['+86 000 000 0000', '+860000000000'],
  ['7 960 000 00 00', '+79600000000'],
  ['960 000 00 00', '+79600000000'],
];

test.each(numbers)(('change number %s to %s'), (number, expected) => {
  const result = correctNumber(number);
  expect(result).toBe(expected);
});
