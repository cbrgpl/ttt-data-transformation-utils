const Transformer = require( './../libs/transformer/transformer' )

// TODO Написать 2 сложных кейса по 1 на каждый класс

test( 'Transformer constructor - валидный массив функций', () => {
  expect( ( () => {
    const transformations = [
      val => val + 1,
      val => val + 2,
    ]

    const transformer = new Transformer( transformations )

    return transformer.chain.transformationArray.length
  } )() ).toBe( 2 )
} )

test( 'Transformer applyTransformations - не передал аргументы', () => {
  expect( () => ( () => {
    const transformations = [
      val => val + 1,
      val => val + 3
    ]

    const transformer = new Transformer( transformations )

    return transformer.applyTransformations()
  } )() ).toThrow( /One of functions return changed type of value/ )
} )

test( 'Transformer applyTransformations - ( null; false )', () => {
  expect( ( () => {
    const transformations = [
      val => val + 1,
      val => val + 3
    ]

    const transformer = new Transformer( transformations )

    return transformer.applyTransformations( null, false )
  } )() ).toBe( 4 )
} )


test( 'Transformer applyTransformations - ( object )', () => {
  expect( ( () => {
    const transformations = [
      val => { val.a = 2; return val },
      val => { val.b = 'not_default'; return val }
    ]

    const transformer = new Transformer( transformations )
    const testObject = {
      a: 1,
      b: 'default_str'
    }
    return transformer.applyTransformations( testObject )
  } )() ).toEqual( {
    a: 2,
    b: 'not_default'
  } )
} )

test( 'Transformer applyTransformations - ( number )', () => {
  expect( ( () => {
    const transformations = [
      val => val - 2,
      val => val + 3
    ]

    const transformer = new Transformer( transformations )

    return transformer.applyTransformations( 5 )
  } )() ).toBe( 6 )
} )
