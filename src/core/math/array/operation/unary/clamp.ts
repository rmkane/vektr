import type { Array2D } from '../../../../../types'
import { zeroArray } from '../../../../util/array'
import { clamp as clampFn } from '../../../functions'

/**
 * TBD
 *
 * @param {Array2D} vector
 * @param {Array2D} min
 * @param {Array2D} max
 * @returns {Array2D} The resulting vector
 */
function clamp(vector: Array2D, min: Array2D, max: Array2D): Array2D {
  return clampRef(vector, min, max, zeroArray())
}

/**
 * TBD
 *
 * @param {Array2D} vector
 * @param {Array2D} min
 * @param {Array2D} max
 * @param {Array2D} referenceVector - The reference
 * @returns {Array2D} The modified reference vector
 */
function clampRef(vector: Array2D, min: Array2D, max: Array2D, referenceVector: Array2D): Array2D {
  referenceVector[0] = clampFn(vector[0], min[0], max[0])
  referenceVector[1] = clampFn(vector[1], min[1], max[1])
  return referenceVector
}

export { clamp as clampArray }
export { clampRef as clampArrayRef }
