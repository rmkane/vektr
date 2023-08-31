import type { Object2D } from '../../../../../types'

/**
 * TBD
 *
 * @param {V} vector
 * @param {V} relativeVector
 * @param {V} referenceVector - The reference
 * @returns {V} The modified reference vector
 */
function min<V extends Object2D>(vector: V, relativeVector: V, referenceVector: V): V {
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
function minX<V extends Object2D>(vector: V, relativeVector: V, referenceVector: V): V {
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
function minY<V extends Object2D>(vector: V, relativeVector: V, referenceVector: V): V {
  referenceVector.y = Math.min(vector.y, relativeVector.y)
  return referenceVector
}

export { min as minObject }
export { minX as minObjectX }
export { minY as minObjectY }
