import type { Object2D } from '../../../../../../types'

/**
 * Inverts the x and y coordinates of a vector.
 *
 * @param {V} vector - A vector to invert
 * @param {V} referenceVector - The reference
 * @returns {V} The modified reference vector
 */
function invert2d<V extends Object2D>(vector: V, referenceVector: V): V {
  referenceVector.x = vector.x * -1
  referenceVector.y = vector.y * -1
  return referenceVector
}

/**
 * Inverts the x-coordinate of a vector.
 *
 * @param {V} vector - A vector to invert
 * @param {V} referenceVector - The reference
 * @returns {V} The modified reference vector
 */
function invert2dX<V extends Object2D>(vector: V, referenceVector: V): V {
  referenceVector.x = vector.x * -1
  referenceVector.y = vector.y
  return referenceVector
}

/**
 * Inverts the y-coordinate of a vector.
 *
 * @param {V} vector - A vector to invert
 * @param {V} referenceVector - The reference
 * @returns {V} The modified reference vector
 */
function invert2dY<V extends Object2D>(vector: V, referenceVector: V): V {
  referenceVector.x = vector.x
  referenceVector.y = vector.y * -1
  return referenceVector
}

export { invert2d as invertObject2d }
export { invert2dX as invertObject2dX }
export { invert2dY as invertObject2dY }
