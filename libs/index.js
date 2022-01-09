const Transformer = require( './transformer/transformer' )


const transformativeValue = null

const transformations = [
  ( value ) => value + '13', // always returns string
  ( value ) => {
    return {
      value
    }
  }
]

const transformer = new Transformer( transformations )

const transformedValue = transformer.applyTransformations( transformativeValue, false )

console.log( transformedValue )

/*
{
    massProp: 1000,
    stringProp: ''
}
*/
