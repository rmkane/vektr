import type { Array2D } from '../../../../../../types'

/**
 * Applies the rounded-up values of the x and y coordinates to the reference vector and returns it.
 *
 * @param {V} vector - A vector to round up
 * @param {V} referenceVector - The reference vector
 * @returns {V} The modified reference vector
 */
function ceil2d<V extends Array2D>(vector: V, referenceVector: V): V {
  referenceVector[0] = Math.ceil(vector[0])
  referenceVector[1] = Math.ceil(vector[1])
  return referenceVector
}

/**
 * Applies the rounded-up value of the x-coordinate to the reference vector and returns it.
 *
 * @param {V} vector - A vector to round up
 * @param {V} referenceVector - The reference vector
 * @returns {V} The modified reference vector
 */
function ceil2dX<V extends Array2D>(vector: V, referenceVector: V): V {
  referenceVector[0] = Math.ceil(vector[0])
  return referenceVector
}

/**
 * Applies the rounded-up value of the y-coordinate to the reference vector and returns it.
 *
 * @param {V} vector - A vector to round up
 * @param {V} referenceVector - The reference vector
 * @returns {V} The modified reference vector
 */
function ceil2dY<V extends Array2D>(vector: V, referenceVector: V): V {
  referenceVector[1] = Math.ceil(vector[1])
  return referenceVector
}

export { ceil2d as ceilArray2d }
export { ceil2dX as ceilArray2dX }
export { ceil2dY as ceilArray2dY }
