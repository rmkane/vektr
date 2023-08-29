import type { Array2D } from '../../../../../types'
import { divideArrayScalar } from '../binary/index'
import { magnitudeArray } from '../../product/index'

/**
 * TBD
 *
 * @param {Array2D} vector
 * @returns {number}
 */
function unit(vector: Array2D): Array2D {
  return divideArrayScalar(vector, magnitudeArray(vector))
}

export { unit as unitArray }
