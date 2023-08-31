import type { Object2D } from '../../../../../../types'

/**
 * TBD
 *
 * @param {V} vector
 * @param {V} referenceVector - The reference
 * @returns {V} The modified reference vector
 */
function ceil2d<V extends Object2D>(vector: V, referenceVector: V): V {
  referenceVector.x = Math.ceil(vector.x)
  referenceVector.y = Math.ceil(vector.y)
  return referenceVector
}

/**
 * TBD
 *
 * @param {V} vector
 * @param {V} referenceVector - The reference
 * @returns {V} The modified reference vector
 */
function ceil2dX<V extends Object2D>(vector: V, referenceVector: V): V {
  referenceVector.x = Math.ceil(vector.x)
  return referenceVector
}

/**
 * TBD
 *
 * @param {V} vector
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
