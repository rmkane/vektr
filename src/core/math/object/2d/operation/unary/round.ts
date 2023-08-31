import type { Object2D } from '../../../../../../types'

/**
 * TBD
 *
 * @param {V} vector
 * @param {V} referenceVector - The reference
 * @returns {V} The modified reference vector
 */
function round2d<V extends Object2D>(vector: V, referenceVector: V): V {
  referenceVector.x = Math.round(vector.x)
  referenceVector.y = Math.round(vector.y)
  return referenceVector
}

/**
 * TBD
 *
 * @param {V} vector
 * @param {V} referenceVector - The reference
 * @returns {V} The modified reference vector
 */
function round2dX<V extends Object2D>(vector: V, referenceVector: V): V {
  referenceVector.x = Math.round(vector.x)
  return referenceVector
}

/**
 * TBD
 *
 * @param {V} vector
 * @param {V} referenceVector - The reference
 * @returns {V} The modified reference vector
 */
function round2dY<V extends Object2D>(vector: V, referenceVector: V): V {
  referenceVector.y = Math.round(vector.y)
  return referenceVector
}

export { round2d as roundObject2d }
export { round2dX as roundObject2dX }
export { round2dY as roundObject2dY }
