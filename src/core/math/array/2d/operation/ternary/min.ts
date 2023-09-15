import type { Array2D } from '../../../../../../types'

/**
 * Compute the minimum x and y coordinates between two vectors.
 *
 * @param {V} vector
 * @param {V} otherVector
 * @param {V} referenceVector - The reference
 * @returns {V} The modified reference vector
 */
function min2d<V extends Array2D>(vector: V, otherVector: V, referenceVector: V): V {
  referenceVector[0] = Math.min(vector[0], otherVector[0])
  referenceVector[1] = Math.min(vector[1], otherVector[1])
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
function min2dX<V extends Array2D>(vector: V, otherVector: V, referenceVector: V): V {
  referenceVector[0] = Math.min(vector[0], otherVector[0])
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
function min2dY<V extends Array2D>(vector: V, otherVector: V, referenceVector: V): V {
  referenceVector[1] = Math.min(vector[1], otherVector[1])
  return referenceVector
}

export { min2d as minArray2d }
export { min2dX as minArray2dX }
export { min2dY as minArray2dY }
