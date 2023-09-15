import type { Object2D } from '../../../../../../types'

/**
 * Round the values of the x and y coordinates.
 *
 * @param {V} vector - A vector to round
 * @param {V} referenceVector - The reference
 * @returns {V} The modified reference vector
 */
function round2d<V extends Object2D>(vector: V, referenceVector: V): V {
  referenceVector.x = Math.round(vector.x)
  referenceVector.y = Math.round(vector.y)
  return referenceVector
}

/**
 * Round the value of the x-coordinate.
 *
 * @param {V} vector - A vector to round
 * @param {V} referenceVector - The reference
 * @returns {V} The modified reference vector
 */
function round2dX<V extends Object2D>(vector: V, referenceVector: V): V {
  referenceVector.x = Math.round(vector.x)
  return referenceVector
}

/**
 * Round the value of the y-coordinate.
 *
 * @param {V} vector - A vector to round
 * @param {V} referenceVector - The reference
 * @returns {V} The modified reference vector
 */
function round2dY<V extends Object2D>(vector: V, referenceVector: V): V {
  referenceVector.y = Math.round(vector.y)
  return referenceVector
}

export { round2d as roundObject2d }
export { round2dX as roundObject2dX }
export { round2dY as roundObject2dY }
