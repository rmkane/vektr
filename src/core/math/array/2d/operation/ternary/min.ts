import type { Array2D } from '../../../../../../types'

/**
 * TBD
 *
 * @param {V} vector
 * @param {V} relativeVector
 * @param {V} referenceVector - The reference
 * @returns {V} The modified reference vector
 */
function min2d<V extends Array2D>(vector: V, relativeVector: V, referenceVector: V): V {
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
function min2dX<V extends Array2D>(vector: V, relativeVector: V, referenceVector: V): V {
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
function min2dY<V extends Array2D>(vector: V, relativeVector: V, referenceVector: V): V {
  referenceVector[1] = Math.min(vector[1], relativeVector[1])
  return referenceVector
}

export { min2d as minArray2d }
export { min2dX as minArray2dX }
export { min2dY as minArray2dY }
