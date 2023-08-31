import type { Array2D } from '../../../../../../types'

/**
 * TBD
 *
 * @param {V} vector
 * @param {V} relativeVector
 * @param {V} referenceVector - The reference
 * @returns {V} The modified reference vector
 */
function max2d<V extends Array2D>(vector: V, relativeVector: V, referenceVector: V): V {
  referenceVector[0] = Math.max(vector[0], relativeVector[0])
  referenceVector[1] = Math.max(vector[1], relativeVector[1])
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
function max2dX<V extends Array2D>(vector: V, relativeVector: V, referenceVector: V): V {
  referenceVector[0] = Math.max(vector[0], relativeVector[0])
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
function max2dY<V extends Array2D>(vector: V, relativeVector: V, referenceVector: V): V {
  referenceVector[1] = Math.max(vector[1], relativeVector[1])
  return referenceVector
}

export { max2d as maxArray2d }
export { max2dX as maxArray2dX }
export { max2dY as maxArray2dY }
