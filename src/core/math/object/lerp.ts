import { Object2D } from '../../../types'
import { zeroObject } from '../../util/object'
import { lerp as lerpFn } from '../functions'

/**
 * TBD
 *
 * @param {Object2D} start
 * @param {Object2D} end
 * @param {number} amount
 * @returns {Object2D} The resulting vector
 */
function lerp(start: Object2D, end: Object2D, amount: number): Object2D {
  return lerpRef(start, end, amount, zeroObject())
}

/**
 * TBD
 *
 * @param {Object2D} start
 * @param {Object2D} end
 * @param {number} amount
 * @param {Object2D} referenceVector - The reference
 * @returns {Object2D} The modified reference vector
 */
function lerpRef(start: Object2D, end: Object2D, amount: number, referenceVector: Object2D): Object2D {
  referenceVector.x = lerpFn(start.x, end.x, amount)
  referenceVector.y = lerpFn(start.y, end.y, amount)
  return referenceVector
}

export { lerp as lerpObject }
export { lerpRef as lerpObjectRef }
