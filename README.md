# data-transformation-utils
JS Library representing utility allowing assigning a chain of transformations to be executed over input value.
<br>
<br>
<br>

# Installation
`npm i --save data-transformation-utils`
<br>
<br>
<br>

# Getting Started
```js
console.log('hello')
```
<br>
<br>
<br>


# Examples of usage

## Transformer
<br>

<p>default usage</p>

```js
const transformativeValue = {
  massProp: 1000,
  stringProp: '',
}

const transformationChain = [
  ( object ) => {
    object.massProp = object.massProp / 1000
    return object
  },
  ( object ) => {
    object.stringProp = object.stringProp === '' ? null : object.stringProp
    return object
  }
]


const transformer = new Transformer( transformationChain )

transformer.applyTransformations( transformativeValue )


Result:

    {
        massProp: 1,
        stringProp: null
    }

```
<br>
<br>


<p>Ignore changing the data type in the transformation functions</p>

```js
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


Result:

    {
        value:'null13'
    }
```

## TwoWayTransformer
<br>

```js
const transformativeValue = {
  massProp: 1000,
  stringProp: '',
}

const directTransformation = [
  ( object ) => {
    object.massProp = object.massProp / 1000
    return object
  },
  ( object ) => {
    object.stringProp = object.stringProp === '' ? null : object.stringProp
    return object
  }
]

const inverseTransformation = [
  ( object ) => {
    object.massProp = object.massProp * 1000
    return object
  },
  ( object ) => {
    object.stringProp = object.stringProp === null ? '' : object.stringProp
    return object
  }
]

const transformerMods = {}
transformerMods[ TwoWayTransformer.MODS.DIRECT ] = directTransformation
transformerMods[ TwoWayTransformer.MODS.INVERSE ] = inverseTransformation


const transformer = new TwoWayTransformer( transformerMods )

const directTransformedValue = transformer.directTranform( transformativeValue )
const inverseTransformedValue = transformer.inverseTransform( directTransformedValue )

console.log( inverseTransformedValue )


Result:

    {
        massProp: 1000,
        stringProp: ''
    }

```

<br>
<br>
<br>

# Class Properties
<br>

## *Transformation*
<br>

### **constructor( transformationChain )**
<br>

| Arg | Type | Default | Description |
| --- | --- | --- | --- |
| transformationChain | array | undefined | transformation function array |

<br>
<br>

### **applyTransformations( transformativeValue, keepTypeof )**
<br>

| Arg | Type | Default | Description |
| --- | --- | --- | --- |
| transformativeValue | any | undefined | Value to be transformed by the function chain |
| keepTypeof | boolean | true | Flag responsible for tracking the returned data type from converter functions |

<br>
<br>
<br>

## *TwoWayTransformer*
<br>

### **static MODS**

| property | Description |
| --- | --- |
| DIRECT | Direct transformation of data |
| INVERSE | Inverse transformation |

*The sequence of functions of converters in a chain is important*

<br>
<br>

### **constructor( transformationMods )**
<br>

| Arg | Type | Default | Description |
| --- | --- | --- | --- |
| transformationMods | object | undefined | Object of transformation chains corresponding to a particular mod |

<br>

```js
pseudocode:

transformationMods = {
        TwoWayTransformer.MODS.DIRECT: array[],
        TwoWayTransformer.MODS.INVERSE: array[]
}
```

<br>
<br>

### **directTransform( transformativeValue, keepTypeof)**

<br>

| Arg | Type | Default | Description |
| --- | --- | --- | --- |
| transformativeValue | any | undefined | Value to be transformed by the function chain |
| keepTypeof | boolean | true | Flag responsible for tracking the returned data type from converter functions |

<br>
<br>

### **inverseTransform( transformativeValue, keepTypeof)**

<br>

| Arg | Type | Default | Description |
| --- | --- | --- | --- |
| transformativeValue | any | undefined | Value to be transformed by the function chain |
| keepTypeof | boolean | true | Flag responsible for tracking the returned data type from converter functions |
