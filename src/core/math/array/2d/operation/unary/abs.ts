import type { Array2D } from '../../../../../../types'

/**
 * Compute the absolute value of the x and y coordinates.
 *
 * @param {V} vector - A vector which the absolute value is needed
 * @param {V} referenceVector - The reference
 * @returns {V} The modified reference vector
 */
function abs2d<V extends Array2D>(vector: V, referenceVector: V): V {
  referenceVector[0] = Math.abs(vector[0])
  referenceVector[1] = Math.abs(vector[1])
  return referenceVector
}

/**
 * Compute the absolute value of the x-coordinate.
 *
 * @param {V} vector - A vector which the absolute value is needed
 * @param {V} referenceVector - The reference
 * @returns {V} The modified reference vector
 */
function abs2dX<V extends Array2D>(vector: V, referenceVector: V): V {
  referenceVector[0] = Math.abs(vector[0])
  return referenceVector
}

/**
 * Compute the absolute value of the y-coordinate.
 *
 * @param {V} vector - A vector which the absolute value is needed
 * @param {V} referenceVector - The reference
 * @returns {V} The modified reference vector
 */
function abs2dY<V extends Array2D>(vector: V, referenceVector: V): V {
  referenceVector[1] = Math.abs(vector[1])
  return referenceVector
}

export { abs2d as absArray2d }
export { abs2dX as absArray2dX }
export { abs2dY as absArray2dY }
