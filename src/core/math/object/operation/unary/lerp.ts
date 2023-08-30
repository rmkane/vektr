import type { Object2D } from '../../../../../types'
import { lerp as lerpFn } from '../../../functions'

/**
 * TBD
 *
 * @param {V} start
 * @param {V} end
 * @param {number} amount
 * @param {V} referenceVector - The reference
 * @returns {V} The modified reference vector
 */
function lerp<V extends Object2D>(start: V, end: V, amount: number, referenceVector: V): V {
  referenceVector.x = lerpFn(start.x, end.x, amount)
  referenceVector.y = lerpFn(start.y, end.y, amount)
  return referenceVector
}

export { lerp as lerpObject }
