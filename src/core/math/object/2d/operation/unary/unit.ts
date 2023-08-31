import type { Object2D } from '../../../../../../types'
import { divideObjectScalar2d } from '../binary/index'
import { magnitudeObject2d } from '../../product/index'

/**
 * TBD
 *
 * @param {V} vector
 * @returns {number}
 */
function unit2d<V extends Object2D>(vector: V, referenceVector: V): V {
  return divideObjectScalar2d(vector, magnitudeObject2d(vector), referenceVector)
}

export { unit2d as unitObject2d }