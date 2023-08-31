import type { Object2D } from '../../../../../../types'

/**
 * TBD
 *
 * @param {V} vector
 * @param {V} relativeVector
 * @param {V} referenceVector - The reference
 * @returns {V} The modified reference vector
 */
function max2d<V extends Object2D>(vector: V, relativeVector: V, referenceVector: V): V {
  referenceVector.x = Math.max(vector.x, relativeVector.x)
  referenceVector.y = Math.max(vector.y, relativeVector.y)
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
function max2dX<V extends Object2D>(vector: V, relativeVector: V, referenceVector: V): V {
  referenceVector.x = Math.max(vector.x, relativeVector.x)
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
function max2dY<V extends Object2D>(vector: V, relativeVector: V, referenceVector: V): V {
  referenceVector.y = Math.max(vector.y, relativeVector.y)
  return referenceVector
}

export { max2d as maxObject2d }
export { max2dX as maxObject2dX }
export { max2dY as maxObject2dY }
