'use strict'

const {pipeline} = require('stream')
const parseCsv = require('csv-parser')
const {inspect} = require('util')
const lexer = require('../lib/lexer')
const parse = require('..')

process.stdin
.pipe(parseCsv())
.on('data', (row) => {
	const {stop_id: id, stop_name: name} = row

	lexer.reset(name)
	const tokens = Array.from(lexer)

	try {
		const res = parse(name)
	} catch (err) {
		err.id = id
		err.name = name
		err.tokens = tokens
		throw err
	}
})
.once('end', () => {
	console.info('✔︎ all parsed successfully')
})
