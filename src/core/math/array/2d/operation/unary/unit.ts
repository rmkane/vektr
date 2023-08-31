import type { Array2D } from '../../../../../../types'
import { divideArrayScalar2d } from '../binary/index'
import { magnitudeArray2d } from '../../product/index'

/**
 * TBD
 *
 * @param {V} vector
 * @returns {number}
 */
function unit2d<V extends Array2D>(vector: V, referenceVector: V): V {
  return divideArrayScalar2d(vector, magnitudeArray2d(vector), referenceVector)
}

export { unit2d as unitArray2d }
