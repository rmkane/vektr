import { Object2D } from '../../../../types'
import { divideObjectScalar } from './divide'
import { magnitudeObject } from '../product/index'

/**
 * TBD
 *
 * @param {Object2D} vector
 * @returns {number}
 */
function unit(vector: Object2D): Object2D {
  return divideObjectScalar(vector, magnitudeObject(vector))
}

export { unit as unitObject }
