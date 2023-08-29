import { Object2D } from '../../../types'
import { magnitudeObject } from '../legacy/object'
import { divideObjectScalar } from './divide'

/**
 * TBD
 *
 * @param {Object2D} vector
 * @returns {number}
 */
function norm(vector: Object2D): Object2D {
  return divideObjectScalar(vector, magnitudeObject(vector))
}

export { norm as normObject }
