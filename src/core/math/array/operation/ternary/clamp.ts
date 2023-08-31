import type { Array2D } from '../../../../../types'
import { clamp as clampFn } from '../../../functions'

/**
 * TBD
 *
 * @param {V} vector
 * @param {V} min
 * @param {V} max
 * @param {V} referenceVector - The reference
 * @returns {V} The modified reference vector
 */
function clamp<V extends Array2D>(vector: V, min: V, max: V, referenceVector: V): V {
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
function clampX<V extends Array2D>(vector: V, min: V, max: V, referenceVector: V): V {
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
function clampY<V extends Array2D>(vector: V, min: V, max: V, referenceVector: V): V {
  referenceVector[1] = clampFn(vector[1], min[1], max[1])
  return referenceVector
}

export { clamp as clampArray }
export { clampX as clampArrayX }
export { clampY as clampArrayY }
