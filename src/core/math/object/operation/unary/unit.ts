import type { Object2D } from '../../../../../types'
import { divideObjectScalar } from '../binary/index'
import { magnitudeObject } from '../../product/index'

/**
 * TBD
 *
 * @param {V} vector
 * @returns {number}
 */
function unit<V extends Object2D>(vector: V, referenceVector: V): V {
  return divideObjectScalar(vector, magnitudeObject(vector), referenceVector)
}

export { unit as unitObject }
