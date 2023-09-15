import type { Array2D } from '../../../../../../types'

/**
 * Inverts the x and y coordinates of a vector.
 *
 * @param {V} vector - A vector to invert
 * @param {V} referenceVector - The reference
 * @returns {V} The modified reference vector
 */
function invert2d<V extends Array2D>(vector: V, referenceVector: V): V {
  referenceVector[0] = vector[0] * -1
  referenceVector[1] = vector[1] * -1
  return referenceVector
}

/**
 * Inverts the x-coordinate of a vector.
 *
 * @param {V} vector - A vector to invert
 * @param {V} referenceVector - The reference
 * @returns {V} The modified reference vector
 */
function invert2dX<V extends Array2D>(vector: V, referenceVector: V): V {
  referenceVector[0] = vector[0] * -1
  referenceVector[1] = vector[1]
  return referenceVector
}

/**
 * Inverts the y-coordinate of a vector.
 *
 * @param {V} vector - A vector to invert
 * @param {V} referenceVector - The reference
 * @returns {V} The modified reference vector
 */
function invert2dY<V extends Array2D>(vector: V, referenceVector: V): V {
  referenceVector[0] = vector[0]
  referenceVector[1] = vector[1] * -1
  return referenceVector
}

export { invert2d as invertArray2d }
export { invert2dX as invertArray2dX }
export { invert2dY as invertArray2dY }
