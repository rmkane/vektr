import type { Array2D } from '../../../../../../types'

/**
 * Applies the rounded values of the x and y coordinates to the reference vector and returns it.
 *
 * @param {V} vector - A vector to round
 * @param {V} referenceVector - The reference vector
 * @returns {V} The modified reference vector
 */
function round2d<V extends Array2D>(vector: V, referenceVector: V): V {
  referenceVector[0] = Math.round(vector[0])
  referenceVector[1] = Math.round(vector[1])
  return referenceVector
}

/**
 * Applies the rounded value of the x-coordinate to the reference vector and returns it.
 *
 * @param {V} vector - A vector to round
 * @param {V} referenceVector - The reference vector
 * @returns {V} The modified reference vector
 */
function round2dX<V extends Array2D>(vector: V, referenceVector: V): V {
  referenceVector[0] = Math.round(vector[0])
  return referenceVector
}

/**
 * Applies the rounded value of the y-coordinate to the reference vector and returns it.
 *
 * @param {V} vector - A vector to round
 * @param {V} referenceVector - The reference vector
 * @returns {V} The modified reference vector
 */
function round2dY<V extends Array2D>(vector: V, referenceVector: V): V {
  referenceVector[1] = Math.round(vector[1])
  return referenceVector
}

export { round2d as roundArray2d }
export { round2dX as roundArray2dX }
export { round2dY as roundArray2dY }
