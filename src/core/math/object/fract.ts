import { Object2D } from '../../../types'
import { zeroObject } from '../../util/object'
import { fract as fractFn } from '../functions'

/**
 * TBD
 *
 * @param {Object2D} vector
 * @returns {Object2D} The resulting vector
 */
function fract(vector: Object2D): Object2D {
  return fractRef(vector, zeroObject())
}

/**
 * TBD
 *
 * @param {Object2D} vector
 * @param {Object2D} referenceVector - The reference
 * @returns {Object2D} The modified reference vector
 */
function fractRef(vector: Object2D, referenceVector: Object2D): Object2D {
  referenceVector.x = fractFn(vector.x)
  referenceVector.y = fractFn(vector.y)
  return referenceVector
}

export { fract as fractObject }
export { fractRef as fractObjectRef }
