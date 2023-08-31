import type { Object2D } from '../../../../../../types'

/**
 * TBD
 *
 * @param {V} vector
 * @param {V} referenceVector - The reference
 * @returns {V} The modified reference vector
 */
function floor2d<V extends Object2D>(vector: V, referenceVector: V): V {
  referenceVector.x = Math.floor(vector.x)
  referenceVector.y = Math.floor(vector.y)
  return referenceVector
}

/**
 * TBD
 *
 * @param {V} vector
 * @param {V} referenceVector - The reference
 * @returns {V} The modified reference vector
 */
function floor2dX<V extends Object2D>(vector: V, referenceVector: V): V {
  referenceVector.x = Math.floor(vector.x)
  return referenceVector
}

/**
 * TBD
 *
 * @param {V} vector
 * @param {V} referenceVector - The reference
 * @returns {V} The modified reference vector
 */
function floor2dY<V extends Object2D>(vector: V, referenceVector: V): V {
  referenceVector.y = Math.floor(vector.y)
  return referenceVector
}

export { floor2d as floorObject2d }
export { floor2dX as floorObject2dX }
export { floor2dY as floorObject2dY }
