import { Array2D } from '../../../../../types'
import { zeroArray } from '../../../../util/array'
import { fract as fractFn } from '../../../functions'

/**
 * TBD
 *
 * @param {Array2D} vector
 * @returns {Array2D} The resulting vector
 */
function fract(vector: Array2D): Array2D {
  return fractRef(vector, zeroArray())
}

/**
 * TBD
 *
 * @param {Array2D} vector
 * @param {Array2D} referenceVector - The reference
 * @returns {Array2D} The modified reference vector
 */
function fractRef(vector: Array2D, referenceVector: Array2D): Array2D {
  referenceVector[0] = fractFn(vector[0])
  referenceVector[1] = fractFn(vector[1])
  return referenceVector
}

export { fract as fractArray }
export { fractRef as fractArrayRef }
