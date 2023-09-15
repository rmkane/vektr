import type { Object2D } from '../../../../../../types'
import { clamp as clampFn } from '../../../../functions'

/**
 * Applies the clamped result between a minimum and maximum vector to the reference vector and returns it.
 *
 * @param {V} vector - Vector to clamp
 * @param {V} minVector - Minimum vector limit
 * @param {V} maxVector - Maximum vector limit
 * @param {V} referenceVector - The reference vector
 * @returns {V} The modified reference vector
 */
function clamp2d<V extends Object2D>(vector: V, minVector: V, maxVector: V, referenceVector: V): V {
  referenceVector.x = clampFn(vector.x, minVector.x, maxVector.x)
  referenceVector.y = clampFn(vector.y, minVector.y, maxVector.y)
  return referenceVector
}

/**
 * Applies the clamped x-coordinate between a minimum and maximum vector to the reference vector and returns it.
 *
 * @param {V} vector - Vector to clamp
 * @param {V} minVector - Minimum vector limit
 * @param {V} maxVector - Maximum vector limit
 * @param {V} referenceVector - The reference vector
 * @returns {V} The modified reference vector
 */
function clamp2dX<V extends Object2D>(vector: V, minVector: V, maxVector: V, referenceVector: V): V {
  referenceVector.x = clampFn(vector.x, minVector.x, maxVector.x)
  return referenceVector
}

/**
 * Applies the clamped y-coordinate between a minimum and maximum vector to the reference vector and returns it.
 *
 * @param {V} vector - Vector to clamp
 * @param {V} minVector - Minimum vector limit
 * @param {V} maxVector - Maximum vector limit
 * @param {V} referenceVector - The reference vector
 * @returns {V} The modified reference vector
 */
function clamp2dY<V extends Object2D>(vector: V, minVector: V, maxVector: V, referenceVector: V): V {
  referenceVector.y = clampFn(vector.y, minVector.y, maxVector.y)
  return referenceVector
}

export { clamp2d as clampObject2d }
export { clamp2dX as clampObject2dX }
export { clamp2dY as clampObject2dY }
