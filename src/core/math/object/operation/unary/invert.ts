import type { Object2D } from '../../../../../types'

/**
 * TBD
 *
 * @param {V} vector
 * @param {V} referenceVector - The reference
 * @returns {V} The modified reference vector
 */
function invert<V extends Object2D>(vector: V, referenceVector: V): V {
  referenceVector.x = vector.x * -1
  referenceVector.y = vector.y * -1
  return referenceVector
}

/**
 * TBD
 *
 * @param {V} vector
 * @param {V} referenceVector - The reference
 * @returns {V} The modified reference vector
 */
function invertX<V extends Object2D>(vector: V, referenceVector: V): V {
  referenceVector.x = vector.x * -1
  referenceVector.y = vector.y
  return referenceVector
}

/**
 * TBD
 *
 * @param {V} vector
 * @param {V} referenceVector - The reference
 * @returns {V} The modified reference vector
 */
function invertY<V extends Object2D>(vector: V, referenceVector: V): V {
  referenceVector.x = vector.x
  referenceVector.y = vector.y * -1
  return referenceVector
}

export { invert as invertObject }
export { invertX as invertObjectX }
export { invertY as invertObjectY }
