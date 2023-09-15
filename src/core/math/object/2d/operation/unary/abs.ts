import type { Object2D } from '../../../../../../types'

/**
 * Compute the absolute value of the x and y coordinates.
 *
 * @param {V} vector - A vector which the absolute value is needed
 * @param {V} referenceVector - The reference
 * @returns {V} The modified reference vector
 */
function abs2d<V extends Object2D>(vector: V, referenceVector: V): V {
  referenceVector.x = Math.abs(vector.x)
  referenceVector.y = Math.abs(vector.y)
  return referenceVector
}

/**
 * Compute the absolute value of the x-coordinate.
 *
 * @param {V} vector - A vector which the absolute value is needed
 * @param {V} referenceVector - The reference
 * @returns {V} The modified reference vector
 */
function abs2dX<V extends Object2D>(vector: V, referenceVector: V): V {
  referenceVector.x = Math.abs(vector.x)
  return referenceVector
}

/**
 * Compute the absolute value of the y-coordinate.
 *
 * @param {V} vector - A vector which the absolute value is needed
 * @param {V} referenceVector - The reference
 * @returns {V} The modified reference vector
 */
function abs2dY<V extends Object2D>(vector: V, referenceVector: V): V {
  referenceVector.y = Math.abs(vector.y)
  return referenceVector
}

export { abs2d as absObject2d }
export { abs2dX as absObject2dX }
export { abs2dY as absObject2dY }
