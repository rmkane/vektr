import type { Object2D } from '../../../../../../types'

/**
 * Applies the rounded-down values of the x and y coordinates to the reference vector and returns it.
 *
 * @param {V} vector - A vector to round down
 * @param {V} referenceVector - The reference vector
 * @returns {V} The modified reference vector
 */
function floor2d<V extends Object2D>(vector: V, referenceVector: V): V {
  referenceVector.x = Math.floor(vector.x)
  referenceVector.y = Math.floor(vector.y)
  return referenceVector
}

/**
 * Applies the rounded-down value of the x-coordinate to the reference vector and returns it.
 *
 * @param {V} vector - A vector to round down
 * @param {V} referenceVector - The reference vector
 * @returns {V} The modified reference vector
 */
function floor2dX<V extends Object2D>(vector: V, referenceVector: V): V {
  referenceVector.x = Math.floor(vector.x)
  return referenceVector
}

/**
 * Applies the rounded-down value of the y-coordinate to the reference vector and returns it.
 *
 * @param {V} vector - A vector to round down
 * @param {V} referenceVector - The reference vector
 * @returns {V} The modified reference vector
 */
function floor2dY<V extends Object2D>(vector: V, referenceVector: V): V {
  referenceVector.y = Math.floor(vector.y)
  return referenceVector
}

export { floor2d as floorObject2d }
export { floor2dX as floorObject2dX }
export { floor2dY as floorObject2dY }
