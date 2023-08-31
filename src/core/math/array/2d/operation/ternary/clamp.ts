import type { Array2D } from '../../../../../../types'
import { clamp as clampFn } from '../../../../functions'

/**
 * TBD
 *
 * @param {V} vector
 * @param {V} min
 * @param {V} max
 * @param {V} referenceVector - The reference
 * @returns {V} The modified reference vector
 */
function clamp2d<V extends Array2D>(vector: V, min: V, max: V, referenceVector: V): V {
  referenceVector[0] = clampFn(vector[0], min[0], max[0])
  referenceVector[1] = clampFn(vector[1], min[1], max[1])
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
function clamp2dX<V extends Array2D>(vector: V, min: V, max: V, referenceVector: V): V {
  referenceVector[0] = clampFn(vector[0], min[0], max[0])
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
function clamp2dY<V extends Array2D>(vector: V, min: V, max: V, referenceVector: V): V {
  referenceVector[1] = clampFn(vector[1], min[1], max[1])
  return referenceVector
}

export { clamp2d as clampArray2d }
export { clamp2dX as clampArray2dX }
export { clamp2dY as clampArray2dY }
