import type { Array2D } from '../../../../../../types'

/**
 * TBD
 *
 * @param {V} vector
 * @param {V} relativeVector
 * @param {V} referenceVector - The reference
 * @returns {V} The modified reference vector
 */
function min<V extends Array2D>(vector: V, relativeVector: V, referenceVector: V): V {
  referenceVector[0] = Math.min(vector[0], relativeVector[0])
  referenceVector[1] = Math.min(vector[1], relativeVector[1])
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
function minX<V extends Array2D>(vector: V, relativeVector: V, referenceVector: V): V {
  referenceVector[0] = Math.min(vector[0], relativeVector[0])
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
function minY<V extends Array2D>(vector: V, relativeVector: V, referenceVector: V): V {
  referenceVector[1] = Math.min(vector[1], relativeVector[1])
  return referenceVector
}

export { min as minArray }
export { minX as minArrayX }
export { minY as minArrayY }
