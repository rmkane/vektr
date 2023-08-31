import type { Array2D } from '../../../../../../types'

/**
 * TBD
 *
 * @param {V} vector
 * @param {V} referenceVector - The reference
 * @returns {V} The modified reference vector
 */
function ceil<V extends Array2D>(vector: V, referenceVector: V): V {
  referenceVector[0] = Math.ceil(vector[0])
  referenceVector[1] = Math.ceil(vector[1])
  return referenceVector
}

/**
 * TBD
 *
 * @param {V} vector
 * @param {V} referenceVector - The reference
 * @returns {V} The modified reference vector
 */
function ceilX<V extends Array2D>(vector: V, referenceVector: V): V {
  referenceVector[0] = Math.ceil(vector[0])
  return referenceVector
}

/**
 * TBD
 *
 * @param {V} vector
 * @param {V} referenceVector - The reference
 * @returns {V} The modified reference vector
 */
function ceilY<V extends Array2D>(vector: V, referenceVector: V): V {
  referenceVector[1] = Math.ceil(vector[1])
  return referenceVector
}

export { ceil as ceilArray }
export { ceilX as ceilArrayX }
export { ceilY as ceilArrayY }
