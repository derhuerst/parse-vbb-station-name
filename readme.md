# parse-vbb-station-name

Station names in [VBB](https://en.wikipedia.org/wiki/Verkehrsverbund_Berlin-Brandenburg)/[BVG](https://en.wikipedia.org/wiki/Berliner_Verkehrsbetriebe) data are terribly inconsistent, cluttered with abbreviations, phrases to tell identically named places apart, and unhelpful suffixes like `, Bahnhof`. **`parse-vbb-station-name` tries to parse those names into a meaningful structure**.

[![npm version](https://img.shields.io/npm/v/parse-vbb-station-name.svg)](https://www.npmjs.com/package/parse-vbb-station-name)
![ISC-licensed](https://img.shields.io/github/license/derhuerst/parse-vbb-station-name.svg)
![minimum Node.js version](https://img.shields.io/node/v/parse-vbb-station-name.svg)
[![support me via GitHub Sponsors](https://img.shields.io/badge/support%20me-donate-fa7664.svg)](https://github.com/sponsors/derhuerst)
[![chat with me on Twitter](https://img.shields.io/badge/chat%20with%20me-on%20Twitter-1da1f2.svg)](https://twitter.com/derhuerst)


## Installing

```shell
npm install parse-vbb-station-name
```


## Usage

```js
const parse = require('parse-vbb-station-name')

console.log(parse('S+U Neukölln (Berlin) [U7]')) // 900078272
```

```js
{
	sbahnUbahn: {type: 'sbahnUbahn', text: 'S+U', offset: 0},
	name: {type: 'text', text: 'Neukölln', offset: 4},
	differentiators: [
		{type: 'differentiator', text: 'Berlin', offset: 14},
	],
	part: [
		{type: 'line', text: 'U7', offset: 23},
	],
}
```

```js
console.log(parse('Eggersdorf (Strausberg), Schule')) // 900320601
```

```js
{
	name: {type: 'text', text: 'Schule', offset: 25},
	group: {
		type: 'text',
		offset: 0,
		text: 'Eggersdorf',
		differentiators: [
			{type: 'differentiator', text: 'Strausberg', offset: 12},
		],
	},
}
```

```js
console.log(parse('Abzw. n Schossin, Warsow b Schwerin (Meckl)')) // 900552438
```

```js
{
	name: {type: 'text', text: 'Abzw. n Schossin', offset: 0},
	group: {
		type: 'text',
		offset: 18,
		text: 'Warsow',
		differentiators: [
			{
				type: 'differentiator',
				offset: 25,
				text: 'b Schwerin',
				raw: {type: 'differentiator', text: 'Schwerin', offset: 27},
			},
			{type: 'differentiator', text: 'Meckl', offset: 37},
		],
	},
}
```


## Contributing

If you have a question or need support using `parse-vbb-station-name`, please double-check your code and setup first. If you think you have found a bug or want to propose a feature, use [the issues page](https://github.com/derhuerst/parse-vbb-station-name/issues).
