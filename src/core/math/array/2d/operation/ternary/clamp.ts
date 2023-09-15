import type { Array2D } from '../../../../../../types'
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
function clamp2d<V extends Array2D>(vector: V, min: V, max: V, referenceVector: V): V {
  referenceVector[0] = clampFn(vector[0], min[0], max[0])
  referenceVector[1] = clampFn(vector[1], min[1], max[1])
  return referenceVector
}

/**
 * Clamp a vector's x-coordinate between a minimum vector and a maximum vector.
 *
 * @param {V} vector - Vector to clamp
 * @param {V} min - Minimum vector limit
 * @param {V} max - Maximum vector limit
 * @param {V} referenceVector - The reference
 * @returns {V} The modified reference vector
 */
function clamp2dX<V extends Array2D>(vector: V, min: V, max: V, referenceVector: V): V {
  referenceVector[0] = clampFn(vector[0], min[0], max[0])
  return referenceVector
}

/**
 * Clamp a vector's y-coordinate between a minimum vector and a maximum vector.
 *
 * @param {V} vector - Vector to clamp
 * @param {V} min - Minimum vector limit
 * @param {V} max - Maximum vector limit
 * @param {V} referenceVector - The reference
 * @returns {V} The modified reference vector
 */
function clamp2dY<V extends Array2D>(vector: V, min: V, max: V, referenceVector: V): V {
  referenceVector[1] = clampFn(vector[1], min[1], max[1])
  return referenceVector
}

export { clamp2d as clampArray2d }
export { clamp2dX as clampArray2dX }
export { clamp2dY as clampArray2dY }
