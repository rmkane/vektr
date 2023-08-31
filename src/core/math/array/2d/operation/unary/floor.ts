import type { Array2D } from '../../../../../../types'

/**
 * TBD
 *
 * @param {V} vector
 * @param {V} referenceVector - The reference
 * @returns {V} The modified reference vector
 */
function floor2d<V extends Array2D>(vector: V, referenceVector: V): V {
  referenceVector[0] = Math.floor(vector[0])
  referenceVector[1] = Math.floor(vector[1])
  return referenceVector
}

/**
 * TBD
 *
 * @param {V} vector
 * @param {V} referenceVector - The reference
 * @returns {V} The modified reference vector
 */
function floor2dX<V extends Array2D>(vector: V, referenceVector: V): V {
  referenceVector[0] = Math.floor(vector[0])
  return referenceVector
}

/**
 * TBD
 *
 * @param {V} vector
 * @param {V} referenceVector - The reference
 * @returns {V} The modified reference vector
 */
function floor2dY<V extends Array2D>(vector: V, referenceVector: V): V {
  referenceVector[1] = Math.floor(vector[1])
  return referenceVector
}

export { floor2d as floorArray2d }
export { floor2dX as floorArray2dX }
export { floor2dY as floorArray2dY }
