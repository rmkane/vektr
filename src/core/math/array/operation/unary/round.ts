import { Array2D } from '../../../../../types'
import { zeroArray } from '../../../../util/array'

/**
 * TBD
 *
 * @param {Array2D} vector
 * @returns {Array2D} The resulting vector
 */
function round(vector: Array2D): Array2D {
  return roundRef(vector, zeroArray())
}

/**
 * TBD
 *
 * @param {Array2D} vector
 * @param {Array2D} referenceVector - The reference
 * @returns {Array2D} The modified reference vector
 */
function roundRef(vector: Array2D, referenceVector: Array2D): Array2D {
  referenceVector[0] = Math.round(vector[0])
  referenceVector[1] = Math.round(vector[1])
  return referenceVector
}

export { round as roundArray }
export { roundRef as roundArrayRef }
