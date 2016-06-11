/**
 * @author Arman Yeghiazaryan
 * @copyright LinguaCode 2016
 * @license Apache-2.0
 */

var commands = require('../commands/variables');

module.exports = [{
  which: commands.then,
  toWhat: 'ապա'
}, {
  which: commands.not,
  toWhat: 'ոչ'
}, {
  which: commands.false,
  toWhat: 'սխալ'
}, {
  which: commands.true,
  toWhat: 'ճիշտ'
}, {
  which: commands.or,
  toWhat: 'կամ'
}, {
  which: commands.and1,
  toWhat: 'և'
}, {
  which: commands.and2,
  toWhat: 'եւ'
}, {
  which: commands.input,
  toWhat: 'գրել'
}, {
  which: commands.do,
  toWhat: 'կատարել'
}, {
  which: commands.output,
  toWhat: 'տպել'
}, {
  which: commands.if,
  toWhat: 'եթե'
}, {
  which: commands.else,
  toWhat: 'այլապես'
}, {
  which: commands.var,
  toWhat: 'փոփոխական'
}, {
  which: commands.break,
  toWhat: 'ընդհատել'
}, {
  which: commands.continue,
  toWhat: 'շարունակել'
}, {
  which: commands.while,
  toWhat: 'մինչ'
}, {
  which: commands.repeat,
  toWhat: 'կրկնել'
}, {
  which: commands.times,
  toWhat: 'անգամ'
}, {
  which: commands.function,
  toWhat: 'ֆունկցիա'
}
];