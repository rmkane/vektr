import type { Array2D } from '../../../../../../types'

/**
 * TBD
 *
 * @param {V} vector
 * @param {V} referenceVector - The reference
 * @returns {V} The modified reference vector
 */
function abs2d<V extends Array2D>(vector: V, referenceVector: V): V {
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
function abs2dX<V extends Array2D>(vector: V, referenceVector: V): V {
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
function abs2dY<V extends Array2D>(vector: V, referenceVector: V): V {
  referenceVector[1] = Math.abs(vector[1])
  return referenceVector
}

export { abs2d as absArray2d }
export { abs2dX as absArray2dX }
export { abs2dY as absArray2dY }
