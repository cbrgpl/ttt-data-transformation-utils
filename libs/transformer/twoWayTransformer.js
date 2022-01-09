const Tranformer = require('./transformer')
const TransformationChain = require('./transformationChain')

module.exports = class TwoWayTransformer extends Tranformer {
    static MODS = {
            DIRECT: 'DIRECT_MODE',
            INVERSE: 'INVERSE_MODE'
    }

    constructor( transformationMods ) {
        super([])

        this.transformationMods = {}

        this.transformationMods[TwoWayTransformer.MODS.DIRECT] = this.createChain(transformationMods[TwoWayTransformer.MODS.DIRECT])
        this.transformationMods[TwoWayTransformer.MODS.INVERSE] = this.createChain(transformationMods[TwoWayTransformer.MODS.INVERSE])
    }

    createChain(transformationArray) {
        return new TransformationChain(transformationArray)
    }

    directTranform( transformativeValue, keepTypeof ) {
        // switch this.chain ref to transformation chain in accordance with mode
        this.chain = this.transformationMods[TwoWayTransformer.MODS.DIRECT]
        return this.applyTransformations(transformativeValue, keepTypeof)
    }

    inverseTransform( transformativeValue, keepTypeof) {
        this.chain = this.transformationMods[TwoWayTransformer.MODS.INVERSE]
        return this.applyTransformations(transformativeValue, keepTypeof)
    }
}
