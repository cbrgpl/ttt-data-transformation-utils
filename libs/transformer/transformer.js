const TransformationChain = require( './transformationChain' )

module.exports = class Transformer {
  constructor( transformationChain ) {
    this.chain = new TransformationChain( transformationChain )
  }

  applyTransformations( transformativeValue, keepTypeof = true ) {
    let valueRef = transformativeValue

    for( let i = 0; i < this.chain.transformationArray.length; ++i ) {
      const transformation = this.chain.transformationArray[ i ]
      valueRef = transformation( valueRef )

      if( keepTypeof ) {
        this.compareValuesTypeof( transformativeValue, valueRef, i )
      }

      // if transformativeValue is reference and transformation changes reference value, but transformation returns nothing
      valueRef = valueRef === undefined ? transformativeValue : valueRef
    }

    return valueRef
  }

  compareValuesTypeof( transformativeValue, valueRef, transformationIndex ) {
    if( typeof valueRef !== typeof transformativeValue ) {
      throw TypeError( `One of functions return changed type of value;\n
            Transformation index is ${ transformationIndex }` )
    }
  }
}
