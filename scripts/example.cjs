/*
 * ============================================================================
 * Example usage for Vector2D
 * ============================================================================
 */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const Vektr = require('../lib/index.js')

const { Vector2D } = Vektr

const v1 = new Vector2D(3, 4)
const v2 = new Vector2D(6, 8)
const v3 = v1.add(v2)

// eslint-disable-next-line no-console
console.log(v3.toJSON())

/*
 * ============================================================================
 * Example usage for addObject
 * ============================================================================
 */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { addObject2d } = require('../lib/core/math/object/2d/operation/binary/add.js')

const v4 = addObject2d(v1, v2, new Vector2D())

// eslint-disable-next-line no-console
console.log(v4.toJSON())

/*
 * ============================================================================
 * Example usage for addObject
 * ============================================================================
 */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { ObjectVectorMath2D } = require('../lib/core/math/index.js')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { zeroObject } = require('../lib/core/util/object.js')

const v5 = ObjectVectorMath2D.add(v1, v2, zeroObject())

// eslint-disable-next-line no-console
console.log(v5)

/*
 * ============================================================================
 * Example usage for addObject
 * ============================================================================
 */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { ArrayVectorMath2D } = require('../lib/core/math/index.js')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { zeroArray } = require('../lib/core/util/array.js')

const v6 = ArrayVectorMath2D.add(v1.toArray(), v2.toArray(), zeroArray())
// eslint-disable-next-line no-console
console.log(v6)
