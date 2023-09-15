import type { Object2D } from '../../../../../../types'

/**
 * Compute the maximum x and y coordinates between two vectors.
 *
 * @param {V} vector - A vector to compare
 * @param {V} otherVector - A vector to compare with
 * @param {V} referenceVector - The reference
 * @returns {V} The modified reference vector
 */
function max2d<V extends Object2D>(vector: V, otherVector: V, referenceVector: V): V {
  referenceVector.x = Math.max(vector.x, otherVector.x)
  referenceVector.y = Math.max(vector.y, otherVector.y)
  return referenceVector
}

/**
 * Compute the maximum x-coordinate between two vectors.
 *
 * @param {V} vector - A vector to compare
 * @param {V} otherVector - A vector to compare with
 * @param {V} referenceVector - The reference
 * @returns {V} The modified reference vector
 */
function max2dX<V extends Object2D>(vector: V, otherVector: V, referenceVector: V): V {
  referenceVector.x = Math.max(vector.x, otherVector.x)
  return referenceVector
}

/**
 * Compute the maximum y-coordinate between two vectors.
 *
 * @param {V} vector - A vector to compare
 * @param {V} otherVector - A vector to compare with
 * @param {V} referenceVector - The reference
 * @returns {V} The modified reference vector
 */
function max2dY<V extends Object2D>(vector: V, otherVector: V, referenceVector: V): V {
  referenceVector.y = Math.max(vector.y, otherVector.y)
  return referenceVector
}

export { max2d as maxObject2d }
export { max2dX as maxObject2dX }
export { max2dY as maxObject2dY }
