import type { Object2D } from '../../../../../types'

/**
 * TBD
 *
 * @param {V} vector
 * @param {V} referenceVector - The reference
 * @returns {V} The modified reference vector
 */
function ceil<V extends Object2D>(vector: V, referenceVector: V): V {
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
function ceilX<V extends Object2D>(vector: V, referenceVector: V): V {
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
function ceilY<V extends Object2D>(vector: V, referenceVector: V): V {
  referenceVector.y = Math.ceil(vector.y)
  return referenceVector
}

export { ceil as ceilObject }
export { ceilX as ceilObjectX }
export { ceilY as ceilObjectY }
