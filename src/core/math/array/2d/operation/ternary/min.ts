import type { Array2D } from '../../../../../../types'

/**
 * Applies the minimum x and y coordinates between two vectors to the reference vector and returns it.
 *
 * @param {V} vector - A vector to compare
 * @param {V} otherVector - A vector to compare with
 * @param {V} referenceVector - The reference vector
 * @returns {V} The modified reference vector
 */
function min2d<V extends Array2D>(vector: V, otherVector: V, referenceVector: V): V {
  referenceVector[0] = Math.min(vector[0], otherVector[0])
  referenceVector[1] = Math.min(vector[1], otherVector[1])
  return referenceVector
}

/**
 * Applies the minimum x-coordinate between two vectors to the reference vector and returns it.
 *
 * @param {V} vector - A vector to compare
 * @param {V} otherVector - A vector to compare with
 * @param {V} referenceVector - The reference vector
 * @returns {V} The modified reference vector
 */
function min2dX<V extends Array2D>(vector: V, otherVector: V, referenceVector: V): V {
  referenceVector[0] = Math.min(vector[0], otherVector[0])
  return referenceVector
}

/**
 * Applies the minimum y-coordinate between two vectors to the reference vector and returns it.
 *
 * @param {V} vector - A vector to compare
 * @param {V} otherVector - A vector to compare with
 * @param {V} referenceVector - The reference vector
 * @returns {V} The modified reference vector
 */
function min2dY<V extends Array2D>(vector: V, otherVector: V, referenceVector: V): V {
  referenceVector[1] = Math.min(vector[1], otherVector[1])
  return referenceVector
}

export { min2d as minArray2d }
export { min2dX as minArray2dX }
export { min2dY as minArray2dY }
