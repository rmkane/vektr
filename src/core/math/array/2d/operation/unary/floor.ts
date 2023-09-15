import type { Array2D } from '../../../../../../types'

/**
 * Applies the rounded-down values of the x and y coordinates to the reference vector and returns it.
 *
 * @param {V} vector - A vector to round down
 * @param {V} referenceVector - The reference vector
 * @returns {V} The modified reference vector
 */
function floor2d<V extends Array2D>(vector: V, referenceVector: V): V {
  referenceVector[0] = Math.floor(vector[0])
  referenceVector[1] = Math.floor(vector[1])
  return referenceVector
}

/**
 * Applies the rounded-down value of the x-coordinate to the reference vector and returns it.
 *
 * @param {V} vector - A vector to round down
 * @param {V} referenceVector - The reference vector
 * @returns {V} The modified reference vector
 */
function floor2dX<V extends Array2D>(vector: V, referenceVector: V): V {
  referenceVector[0] = Math.floor(vector[0])
  return referenceVector
}

/**
 * Applies the rounded-down value of the y-coordinate to the reference vector and returns it.
 *
 * @param {V} vector - A vector to round down
 * @param {V} referenceVector - The reference vector
 * @returns {V} The modified reference vector
 */
function floor2dY<V extends Array2D>(vector: V, referenceVector: V): V {
  referenceVector[1] = Math.floor(vector[1])
  return referenceVector
}

export { floor2d as floorArray2d }
export { floor2dX as floorArray2dX }
export { floor2dY as floorArray2dY }
