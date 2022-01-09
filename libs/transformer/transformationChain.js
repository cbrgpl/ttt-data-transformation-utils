const { isFunction } = require( '../helpers/isFunction' )

module.exports = class TransformationChain {
  constructor( transformationArray ) {
    this.transformationArray = []

    for( const transformation of transformationArray ) {
      if( !isFunction( transformation ) ) {
        throw new TypeError( 'One of passed transformations is not typeof \'function\'' )
      } else {this.transformationArray.push( transformation )}
    }
  }

}
