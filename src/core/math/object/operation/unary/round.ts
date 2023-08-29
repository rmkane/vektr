import { Object2D } from '../../../../../types'
import { zeroObject } from '../../../../util/object'

/**
 * TBD
 *
 * @param {Object2D} vector
 * @returns {Object2D} The resulting vector
 */
function round(vector: Object2D): Object2D {
  return roundRef(vector, zeroObject())
}

/**
 * TBD
 *
 * @param {Object2D} vector
 * @param {Object2D} referenceVector - The reference
 * @returns {Object2D} The modified reference vector
 */
function roundRef(vector: Object2D, referenceVector: Object2D): Object2D {
  referenceVector.x = Math.round(vector.x)
  referenceVector.y = Math.round(vector.y)
  return referenceVector
}

export { round as roundObject }
export { roundRef as roundObjectRef }
