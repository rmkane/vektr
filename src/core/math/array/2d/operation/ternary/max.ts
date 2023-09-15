import type { Array2D } from '../../../../../../types'

/**
 * Applies the maximum x and y coordinates between two vectors to the reference vector and returns it.
 *
 * @param {V} vector - A vector to compare
 * @param {V} otherVector - A vector to compare with
 * @param {V} referenceVector - The reference vector
 * @returns {V} The modified reference vector
 */
function max2d<V extends Array2D>(vector: V, otherVector: V, referenceVector: V): V {
  referenceVector[0] = Math.max(vector[0], otherVector[0])
  referenceVector[1] = Math.max(vector[1], otherVector[1])
  return referenceVector
}

/**
 * Applies the maximum x-coordinate between two vectors to the reference vector and returns it.
 *
 * @param {V} vector - A vector to compare
 * @param {V} otherVector - A vector to compare with
 * @param {V} referenceVector - The reference vector
 * @returns {V} The modified reference vector
 */
function max2dX<V extends Array2D>(vector: V, otherVector: V, referenceVector: V): V {
  referenceVector[0] = Math.max(vector[0], otherVector[0])
  return referenceVector
}

/**
 * Applies the maximum y-coordinate between two vectors to the reference vector and returns it.
 *
 * @param {V} vector - A vector to compare
 * @param {V} otherVector - A vector to compare with
 * @param {V} referenceVector - The reference vector
 * @returns {V} The modified reference vector
 */
function max2dY<V extends Array2D>(vector: V, otherVector: V, referenceVector: V): V {
  referenceVector[1] = Math.max(vector[1], otherVector[1])
  return referenceVector
}

export { max2d as maxArray2d }
export { max2dX as maxArray2dX }
export { max2dY as maxArray2dY }
