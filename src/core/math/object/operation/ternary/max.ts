import type { Object2D } from '../../../../../types'

/**
 * TBD
 *
 * @param {V} vector
 * @param {V} relativeVector
 * @param {V} referenceVector - The reference
 * @returns {V} The modified reference vector
 */
function max<V extends Object2D>(vector: V, relativeVector: V, referenceVector: V): V {
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
function maxX<V extends Object2D>(vector: V, relativeVector: V, referenceVector: V): V {
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
function maxY<V extends Object2D>(vector: V, relativeVector: V, referenceVector: V): V {
  referenceVector.y = Math.max(vector.y, relativeVector.y)
  return referenceVector
}

export { max as maxObject }
export { maxX as maxObjectX }
export { maxY as maxObjectY }
