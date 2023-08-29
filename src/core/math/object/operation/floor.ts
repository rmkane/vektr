import { Object2D } from '../../../../types'
import { zeroObject } from '../../../util/object'

/**
 * TBD
 *
 * @param {Object2D} vector
 * @returns {Object2D} The resulting vector
 */
function floor(vector: Object2D): Object2D {
  return floorRef(vector, zeroObject())
}

/**
 * TBD
 *
 * @param {Object2D} vector
 * @param {Object2D} referenceVector - The reference
 * @returns {Object2D} The modified reference vector
 */
function floorRef(vector: Object2D, referenceVector: Object2D): Object2D {
  referenceVector.x = Math.floor(vector.x)
  referenceVector.y = Math.floor(vector.y)
  return referenceVector
}

export { floor as floorObject }
export { floorRef as floorObjectRef }
