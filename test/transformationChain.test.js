const TransformationChain = require( './../libs/transformer/transformationChain' )

test( 'TransformChain constructor - пустой массив', () => {
  expect( ( () => {
    const transformationChain = new TransformationChain( [] )
    return transformationChain.transformationArray.length
  } )() ).toBe( 0 )
} )


test( 'TransformChain constructor - аргумент не передан', () => {
  expect( () => ( () => {
    const transformationChain = new TransformationChain()
  } )() ).toThrow( TypeError )
} )

test( 'TransformChain constructor - массив с валидными функциями преобразователями', () => {
  expect( ( () => {
    const transformationArray = [
      val => val + 1,
      val => val + 2
    ]

    const transformationChain = new TransformationChain( transformationArray )
    return transformationChain.transformationArray.length
  } )() ).toBe( 2 )
} )

// Array с невалидной функцией
test( 'TransformChain constructor - массив с невалидной функцией', () => {
  expect( () => ( () => {
    const transformationArray = [
      val => val + 1,
      3,
      val => val + 2
    ]

    const transformationChain = new TransformationChain( transformationArray )
  } )() ).toThrow( 'One of passed transformations is not typeof \'function\'' )
} )
