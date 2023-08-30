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
const { addObject } = require('../lib/core/math/object/operation/binary/add.js')

const v4 = addObject(v1, v2, new Vector2D())

// eslint-disable-next-line no-console
console.log(v4.toJSON())

/*
 * ============================================================================
 * Example usage for addObject
 * ============================================================================
 */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { ObjectVectorMath2D } = require('../lib/core/math/index.js')

const v5 = ObjectVectorMath2D.add(v1, v2, new Vector2D())

// eslint-disable-next-line no-console
console.log(v5.toJSON())
