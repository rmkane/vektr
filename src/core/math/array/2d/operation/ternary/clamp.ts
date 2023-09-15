import type { Array2D } from '../../../../../../types'
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
function clamp2d<V extends Array2D>(vector: V, minVector: V, maxVector: V, referenceVector: V): V {
  referenceVector[0] = clampFn(vector[0], minVector[0], maxVector[0])
  referenceVector[1] = clampFn(vector[1], minVector[1], maxVector[1])
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
function clamp2dX<V extends Array2D>(vector: V, minVector: V, maxVector: V, referenceVector: V): V {
  referenceVector[0] = clampFn(vector[0], minVector[0], maxVector[0])
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
function clamp2dY<V extends Array2D>(vector: V, minVector: V, maxVector: V, referenceVector: V): V {
  referenceVector[1] = clampFn(vector[1], minVector[1], maxVector[1])
  return referenceVector
}

export { clamp2d as clampArray2d }
export { clamp2dX as clampArray2dX }
export { clamp2dY as clampArray2dY }
