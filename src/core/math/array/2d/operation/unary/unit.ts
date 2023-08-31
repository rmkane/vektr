import type { Array2D } from '../../../../../../types'
import { divideArrayScalar } from '../binary/index'
import { magnitudeArray } from '../../product/index'

/**
 * TBD
 *
 * @param {V} vector
 * @returns {number}
 */
function unit<V extends Array2D>(vector: V, referenceVector: V): V {
  return divideArrayScalar(vector, magnitudeArray(vector), referenceVector)
}

export { unit as unitArray }
