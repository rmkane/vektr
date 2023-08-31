import type { Object2D } from '../../../../../types'

/**
 * TBD
 *
 * @param {V} vector
 * @param {V} referenceVector - The reference
 * @returns {V} The modified reference vector
 */
function abs<V extends Object2D>(vector: V, referenceVector: V): V {
  referenceVector.x = Math.abs(vector.x)
  referenceVector.y = Math.abs(vector.y)
  return referenceVector
}

/**
 * TBD
 *
 * @param {V} vector
 * @param {V} referenceVector - The reference
 * @returns {V} The modified reference vector
 */
function absX<V extends Object2D>(vector: V, referenceVector: V): V {
  referenceVector.x = Math.abs(vector.x)
  return referenceVector
}

/**
 * TBD
 *
 * @param {V} vector
 * @param {V} referenceVector - The reference
 * @returns {V} The modified reference vector
 */
function absY<V extends Object2D>(vector: V, referenceVector: V): V {
  referenceVector.y = Math.abs(vector.y)
  return referenceVector
}

export { abs as absObject }
export { absX as absObjectX }
export { absY as absObjectY }
