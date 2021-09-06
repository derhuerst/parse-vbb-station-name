'use strict'

const {inspect} = require('util')
const {deepStrictEqual, strictEqual, fail} = require('assert')
const lexer = require('../lib/lexer')
const parse = require('..')
const cases = require('./cases')

for (const [id, name, expected] of cases) {
	console.error('\n\n', id, inspect(name, {colors: true}))

	lexer.reset(name)
	for (const {type, value} of lexer) {
		console.log('  ', type, inspect(value, {colors: true}))
	}

	const res = parse(name)
	console.log(inspect(res, {depth: null, colors: true})) // todo: indent
	if (expected) deepStrictEqual(res, expected)
}

(() => {
	try {
		parse('foo (bar) (baz)')
	} catch (err) {
		strictEqual(err.isParseError, true, `parse error's isParseError is invalid`)
		strictEqual(err.input, 'foo (bar) (baz)', `parse error's input is invalid`)
		return;
	}
	fail(`parsing "foo (bar) (baz)" didn't throw an error`)
})()

console.info('\n✔︎ all test cases passed')
