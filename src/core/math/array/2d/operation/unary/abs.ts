import type { Array2D } from '../../../../../../types'

/**
 * Applies the absolute value of the x and y coordinates to the reference vector and returns it.
 *
 * @param {V} vector - A vector which the absolute value is needed
 * @param {V} referenceVector - The reference vector
 * @returns {V} The modified reference vector
 */
function abs2d<V extends Array2D>(vector: V, referenceVector: V): V {
  referenceVector[0] = Math.abs(vector[0])
  referenceVector[1] = Math.abs(vector[1])
  return referenceVector
}

/**
 * Applies the absolute value of the x-coordinate to the reference vector and returns it.
 *
 * @param {V} vector - A vector which the absolute value is needed
 * @param {V} referenceVector - The reference vector
 * @returns {V} The modified reference vector
 */
function abs2dX<V extends Array2D>(vector: V, referenceVector: V): V {
  referenceVector[0] = Math.abs(vector[0])
  return referenceVector
}

/**
 * Applies the absolute value of the y-coordinate to the reference vector and returns it.
 *
 * @param {V} vector - A vector which the absolute value is needed
 * @param {V} referenceVector - The reference vector
 * @returns {V} The modified reference vector
 */
function abs2dY<V extends Array2D>(vector: V, referenceVector: V): V {
  referenceVector[1] = Math.abs(vector[1])
  return referenceVector
}

export { abs2d as absArray2d }
export { abs2dX as absArray2dX }
export { abs2dY as absArray2dY }
