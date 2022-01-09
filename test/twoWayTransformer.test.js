const TwoWayTransformer = require( './../libs/transformer/twoWayTransformer' )

test( 'TwoWayTransformer MODS - доступность переменной', () => {
  expect( ( ()=>{
    return TwoWayTransformer.MODS
  } )() ).toEqual( {
    DIRECT: 'DIRECT_MODE',
    INVERSE: 'INVERSE_MODE'
  } )
} )

test( 'TwoWayTransformer constructor - ({directChain, inverseChain})', () => {
  expect( ( ()=>{
    const directTransformations = [
      val => {val.c += '_chainEl1'; return val},
      val => { val.c += '_chainEl2'; return val }
    ]

    const inverseTransformations = [
      ( val ) => {val.c.replace( '_chainEl1', '' ); return val},
      ( val ) => {val.c.replace( '_chainEl2', ' ' ); return val}
    ]

    const twoWayTransformations = {}
    twoWayTransformations[ TwoWayTransformer.MODS.DIRECT ] = directTransformations
    twoWayTransformations[ TwoWayTransformer.MODS.INVERSE ] = inverseTransformations

    const twoWayTransformer = new TwoWayTransformer( twoWayTransformations )

    const transMods = twoWayTransformer.transformationMods
    return transMods[ TwoWayTransformer.MODS.DIRECT ].transformationArray.length + transMods[ TwoWayTransformer.MODS.INVERSE ].transformationArray.length
  } )() ).toBe( 4 )
} )

test( 'TwoWayTransformer constructor - ({ directChain })', () => {
  expect( () => ( () => {
    const directTransformations = [
      val => {val.c += '_chainEl1'; return val},
      val => { val.c += '_chainEl2'; return val }
    ]

    const twoWayTransformations = {}
    twoWayTransformations[ TwoWayTransformer.MODS.DIRECT ] = directTransformations

    const twoWayTransformer = new TwoWayTransformer( twoWayTransformations )

    const transMods = twoWayTransformer.transformationMods
    return transMods[ TwoWayTransformer.MODS.DIRECT ].transformationArray.length
  } )() ).toThrow( TypeError )
} )

test( 'TwoWayTransformer directTransform - (object)', () => {
  expect( ( () => {
    const directTransformations = [
      val => {val.a += 11 ; return val},
      val => { val.c += '_chainEl2'; return val }
    ]

    const inverseTransformations = [
      ( val ) => {val.a -= 11; return val},
      ( val ) => {val.c = val.c.replace( 'chainEl2', '' ); return val}
    ]

    const twoWayTransformations = {}
    twoWayTransformations[ TwoWayTransformer.MODS.DIRECT ] = directTransformations
    twoWayTransformations[ TwoWayTransformer.MODS.INVERSE ] = inverseTransformations

    const twoWayTransformer = new TwoWayTransformer( twoWayTransformations )

    const trasnformativeValue = {
      a: 1,
      c: 'str'
    }

    return twoWayTransformer.directTranform( trasnformativeValue )

  } )() ).toEqual( {
    a: 12,
    c: 'str_chainEl2'
  } )
} )

test( 'TwoWayTransformer inverseTransform - (object)', () => {
  expect( ( () => {
    const directTransformations = [
      val => {val.a += 11 ; return val},
      val => { val.c += '_chainEl2'; return val }
    ]

    const inverseTransformations = [
      ( val ) => {val.a -= 11; return val},
      ( val ) => {val.c = val.c.replace( '_chainEl2', '' ); return val}
    ]

    const twoWayTransformations = {}
    twoWayTransformations[ TwoWayTransformer.MODS.DIRECT ] = directTransformations
    twoWayTransformations[ TwoWayTransformer.MODS.INVERSE ] = inverseTransformations

    const twoWayTransformer = new TwoWayTransformer( twoWayTransformations )

    const trasnformativeValue = {
      a: 12,
      c: 'str_chainEl2'
    }

    return twoWayTransformer.inverseTransform( trasnformativeValue )

  } )() ).toEqual( {
    a: 1,
    c: 'str'
  } )
} )

test( 'TwoWayTransformer - эквивалентность преобразований', () => {
  expect( ( () => {
    const directTransformations = [
      val => {val.a += 11 ; return val},
      val => { val.c += '_chainEl2'; return val }
    ]

    const inverseTransformations = [
      ( val ) => {val.a -= 11; return val},
      ( val ) => {val.c = val.c.replace( '_chainEl2', '' ); return val}
    ]

    const twoWayTransformations = {}
    twoWayTransformations[ TwoWayTransformer.MODS.DIRECT ] = directTransformations
    twoWayTransformations[ TwoWayTransformer.MODS.INVERSE ] = inverseTransformations

    const twoWayTransformer = new TwoWayTransformer( twoWayTransformations )

    const trasnformativeValue = {
      a: 1,
      c: 'str'
    }

    const directTrasformatedVal = twoWayTransformer.directTranform( trasnformativeValue )
    const inverseTransformatedVal = twoWayTransformer.inverseTransform( directTrasformatedVal )

    return inverseTransformatedVal
  } )() ).toEqual( {
    a: 1,
    c: 'str'
  } )
} )
