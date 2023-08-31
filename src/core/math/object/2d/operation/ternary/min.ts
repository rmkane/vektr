import type { Object2D } from '../../../../../../types'

/**
 * TBD
 *
 * @param {V} vector
 * @param {V} relativeVector
 * @param {V} referenceVector - The reference
 * @returns {V} The modified reference vector
 */
function min2d<V extends Object2D>(vector: V, relativeVector: V, referenceVector: V): V {
  referenceVector.x = Math.min(vector.x, relativeVector.x)
  referenceVector.y = Math.min(vector.y, relativeVector.y)
  return referenceVector
}

/**
 * TBD
 *
 * @param {V} vector
 * @param {V} relativeVector
 * @param {V} referenceVector - The reference
 * @returns {V} The modified reference vector
 */
function min2dX<V extends Object2D>(vector: V, relativeVector: V, referenceVector: V): V {
  referenceVector.x = Math.min(vector.x, relativeVector.x)
  return referenceVector
}

/**
 * TBD
 *
 * @param {V} vector
 * @param {V} relativeVector
 * @param {V} referenceVector - The reference
 * @returns {V} The modified reference vector
 */
function min2dY<V extends Object2D>(vector: V, relativeVector: V, referenceVector: V): V {
  referenceVector.y = Math.min(vector.y, relativeVector.y)
  return referenceVector
}

export { min2d as minObject2d }
export { min2dX as minObject2dX }
export { min2dY as minObject2dY }
