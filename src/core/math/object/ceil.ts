import { Object2D } from '../../../types'
import { zeroObject } from '../../util/object'

/**
 * TBD
 *
 * @param {Object2D} vector
 * @returns {Object2D} The resulting vector
 */
function ceil(vector: Object2D): Object2D {
  return ceilRef(vector, zeroObject())
}

/**
 * TBD
 *
 * @param {Object2D} vector
 * @param {Object2D} referenceVector - The reference
 * @returns {Object2D} The modified reference vector
 */
function ceilRef(vector: Object2D, referenceVector: Object2D): Object2D {
  referenceVector.x = Math.ceil(vector.x)
  referenceVector.y = Math.ceil(vector.y)
  return referenceVector
}

export { ceil as ceilObject }
export { ceilRef as ceilObjectRef }
