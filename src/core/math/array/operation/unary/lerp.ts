import { Array2D } from '../../../../../types'
import { zeroArray } from '../../../../util/array'
import { lerp as lerpFn } from '../../../functions'

/**
 * TBD
 *
 * @param {Array2D} start
 * @param {Array2D} end
 * @param {number} amount
 * @returns {Array2D} The resulting vector
 */
function lerp(start: Array2D, end: Array2D, amount: number): Array2D {
  return lerpRef(start, end, amount, zeroArray())
}

/**
 * TBD
 *
 * @param {Array2D} start
 * @param {Array2D} end
 * @param {number} amount
 * @param {Array2D} referenceVector - The reference
 * @returns {Array2D} The modified reference vector
 */
function lerpRef(start: Array2D, end: Array2D, amount: number, referenceVector: Array2D): Array2D {
  referenceVector[0] = lerpFn(start[0], end[0], amount)
  referenceVector[1] = lerpFn(start[1], end[1], amount)
  return referenceVector
}

export { lerp as lerpArray }
export { lerpRef as lerpArrayRef }
