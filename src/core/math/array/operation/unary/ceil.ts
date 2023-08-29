import type { Array2D } from '../../../../../types'
import { zeroArray } from '../../../../util/array'

/**
 * TBD
 *
 * @param {Array2D} vector
 * @returns {Array2D} The resulting vector
 */
function ceil(vector: Array2D): Array2D {
  return ceilRef(vector, zeroArray())
}

/**
 * TBD
 *
 * @param {Array2D} vector
 * @param {Array2D} referenceVector - The reference
 * @returns {Array2D} The modified reference vector
 */
function ceilRef(vector: Array2D, referenceVector: Array2D): Array2D {
  referenceVector[0] = Math.ceil(vector[0])
  referenceVector[1] = Math.ceil(vector[1])
  return referenceVector
}

export { ceil as ceilArray }
export { ceilRef as ceilArrayRef }
