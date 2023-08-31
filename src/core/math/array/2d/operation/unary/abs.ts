import type { Array2D } from '../../../../../../types'

/**
 * TBD
 *
 * @param {V} vector
 * @param {V} referenceVector - The reference
 * @returns {V} The modified reference vector
 */
function abs<V extends Array2D>(vector: V, referenceVector: V): V {
  referenceVector[0] = Math.abs(vector[0])
  referenceVector[1] = Math.abs(vector[1])
  return referenceVector
}

/**
 * TBD
 *
 * @param {V} vector
 * @param {V} referenceVector - The reference
 * @returns {V} The modified reference vector
 */
function absX<V extends Array2D>(vector: V, referenceVector: V): V {
  referenceVector[0] = Math.abs(vector[0])
  return referenceVector
}

/**
 * TBD
 *
 * @param {V} vector
 * @param {V} referenceVector - The reference
 * @returns {V} The modified reference vector
 */
function absY<V extends Array2D>(vector: V, referenceVector: V): V {
  referenceVector[1] = Math.abs(vector[1])
  return referenceVector
}

export { abs as absArray }
export { absX as absArrayX }
export { absY as absArrayY }
