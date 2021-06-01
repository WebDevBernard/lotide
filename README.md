# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @bernard9/lotide`

**Require it:**

`const _ = require('@bernard9/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(..)`: checks if two arrays are equal and prints an assertion message
* `assertEqual(..)`: checks if two elements are equal value and prints an assertion message
* `eqArrays(..)`: checks if two arrays are equal value
* `head(..)`: returns first element of array
* `tail(...)`: returns array elements - head
* `middle(...)`: returns middle array elements (ie. 1, 2, 3, 4 => 2, 3)
