import type { Array2D } from '../../../../../../types'

/**
 * TBD
 *
 * @param {V} vector
 * @param {V} referenceVector - The reference
 * @returns {V} The modified reference vector
 */
function ceil2d<V extends Array2D>(vector: V, referenceVector: V): V {
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
function ceil2dX<V extends Array2D>(vector: V, referenceVector: V): V {
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
function ceil2dY<V extends Array2D>(vector: V, referenceVector: V): V {
  referenceVector[1] = Math.ceil(vector[1])
  return referenceVector
}

export { ceil2d as ceilArray2d }
export { ceil2dX as ceilArray2dX }
export { ceil2dY as ceilArray2dY }
