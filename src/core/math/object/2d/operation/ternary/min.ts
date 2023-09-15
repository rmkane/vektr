import type { Object2D } from '../../../../../../types'

/**
 * Compute the minimum x and y coordinates between two vectors.
 *
 * @param {V} vector
 * @param {V} otherVector
 * @param {V} referenceVector - The reference
 * @returns {V} The modified reference vector
 */
function min2d<V extends Object2D>(vector: V, otherVector: V, referenceVector: V): V {
  referenceVector.x = Math.min(vector.x, otherVector.x)
  referenceVector.y = Math.min(vector.y, otherVector.y)
  return referenceVector
}

/**
 * Compute the minimum x-coordinate between two vectors.
 *
 * @param {V} vector
 * @param {V} otherVector
 * @param {V} referenceVector - The reference
 * @returns {V} The modified reference vector
 */
function min2dX<V extends Object2D>(vector: V, otherVector: V, referenceVector: V): V {
  referenceVector.x = Math.min(vector.x, otherVector.x)
  return referenceVector
}

/**
 * Compute the minimum y-coordinate between two vectors.
 *
 * @param {V} vector
 * @param {V} otherVector
 * @param {V} referenceVector - The reference
 * @returns {V} The modified reference vector
 */
function min2dY<V extends Object2D>(vector: V, otherVector: V, referenceVector: V): V {
  referenceVector.y = Math.min(vector.y, otherVector.y)
  return referenceVector
}

export { min2d as minObject2d }
export { min2dX as minObject2dX }
export { min2dY as minObject2dY }
