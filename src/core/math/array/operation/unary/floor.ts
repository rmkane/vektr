import type { Array2D } from '../../../../../types'
import { zeroArray } from '../../../../util/array'

/**
 * TBD
 *
 * @param {Array2D} vector
 * @returns {Array2D} The resulting vector
 */
function floor(vector: Array2D): Array2D {
  return floorRef(vector, zeroArray())
}

/**
 * TBD
 *
 * @param {Array2D} vector
 * @param {Array2D} referenceVector - The reference
 * @returns {Array2D} The modified reference vector
 */
function floorRef(vector: Array2D, referenceVector: Array2D): Array2D {
  referenceVector[0] = Math.floor(vector[0])
  referenceVector[1] = Math.floor(vector[1])
  return referenceVector
}

export { floor as floorArray }
export { floorRef as floorArrayRef }
