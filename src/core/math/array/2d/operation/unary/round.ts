import type { Array2D } from '../../../../../../types'

/**
 * Round the values of the x and y coordinates.
 *
 * @param {V} vector - A vector to round
 * @param {V} referenceVector - The reference
 * @returns {V} The modified reference vector
 */
function round2d<V extends Array2D>(vector: V, referenceVector: V): V {
  referenceVector[0] = Math.round(vector[0])
  referenceVector[1] = Math.round(vector[1])
  return referenceVector
}

/**
 * Round the value of the x-coordinate.
 *
 * @param {V} vector - A vector to round
 * @param {V} referenceVector - The reference
 * @returns {V} The modified reference vector
 */
function round2dX<V extends Array2D>(vector: V, referenceVector: V): V {
  referenceVector[0] = Math.round(vector[0])
  return referenceVector
}

/**
 * Round the value of the y-coordinate.
 *
 * @param {V} vector - A vector to round
 * @param {V} referenceVector - The reference
 * @returns {V} The modified reference vector
 */
function round2dY<V extends Array2D>(vector: V, referenceVector: V): V {
  referenceVector[1] = Math.round(vector[1])
  return referenceVector
}

export { round2d as roundArray2d }
export { round2dX as roundArray2dX }
export { round2dY as roundArray2dY }
