import type { Object2D } from '../../../../../../types'
import { clamp as clampFn } from '../../../../functions'

/**
 * Clamp a vector between a minimum vector and a maximum vector.
 *
 * @param {V} vector - Vector to clamp
 * @param {V} min - Minimum vector limit
 * @param {V} max - Maximum vector limit
 * @param {V} referenceVector - The reference
 * @returns {V} The modified reference vector
 */
function clamp2d<V extends Object2D>(vector: V, min: V, max: V, referenceVector: V): V {
  referenceVector.x = clampFn(vector.x, min.x, max.x)
  referenceVector.y = clampFn(vector.y, min.y, max.y)
  return referenceVector
}

/**
 * TBD
 *
 * @param {V} vector
 * @param {V} min
 * @param {V} max
 * @param {V} referenceVector - The reference
 * @returns {V} The modified reference vector
 */
function clamp2dX<V extends Object2D>(vector: V, min: V, max: V, referenceVector: V): V {
  referenceVector.x = clampFn(vector.x, min.x, max.x)
  return referenceVector
}

/**
 * TBD
 *
 * @param {V} vector
 * @param {V} min
 * @param {V} max
 * @param {V} referenceVector - The reference
 * @returns {V} The modified reference vector
 */
function clamp2dY<V extends Object2D>(vector: V, min: V, max: V, referenceVector: V): V {
  referenceVector.y = clampFn(vector.y, min.y, max.y)
  return referenceVector
}

export { clamp2d as clampObject2d }
export { clamp2dX as clampObject2dX }
export { clamp2dY as clampObject2dY }
