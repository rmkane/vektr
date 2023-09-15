import type { Object2D } from '../../../../../../types'

/**
 * Round the values of the x and y coordinates up.
 *
 * @param {V} vector - A vector to round up
 * @param {V} referenceVector - The reference
 * @returns {V} The modified reference vector
 */
function ceil2d<V extends Object2D>(vector: V, referenceVector: V): V {
  referenceVector.x = Math.ceil(vector.x)
  referenceVector.y = Math.ceil(vector.y)
  return referenceVector
}

/**
 * Round the value of the x-coordinate up.
 *
 * @param {V} vector - A vector to round up
 * @param {V} referenceVector - The reference
 * @returns {V} The modified reference vector
 */
function ceil2dX<V extends Object2D>(vector: V, referenceVector: V): V {
  referenceVector.x = Math.ceil(vector.x)
  return referenceVector
}

/**
 * Round the value of the y-coordinate up.
 *
 * @param {V} vector - A vector to round up
 * @param {V} referenceVector - The reference
 * @returns {V} The modified reference vector
 */
function ceil2dY<V extends Object2D>(vector: V, referenceVector: V): V {
  referenceVector.y = Math.ceil(vector.y)
  return referenceVector
}

export { ceil2d as ceilObject2d }
export { ceil2dX as ceilObject2dX }
export { ceil2dY as ceilObject2dY }
