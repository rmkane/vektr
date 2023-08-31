import type { Object2D } from '../../../../../../types'
import { lerp as lerpFn } from '../../../../functions'

/**
 * TBD
 *
 * @param {V} start
 * @param {V} end
 * @param {number} amount
 * @param {V} referenceVector - The reference
 * @returns {V} The modified reference vector
 */
function lerp2d<V extends Object2D>(start: V, end: V, amount: number, referenceVector: V): V {
  referenceVector.x = lerpFn(start.x, end.x, amount)
  referenceVector.y = lerpFn(start.y, end.y, amount)
  return referenceVector
}

/**
 * TBD
 *
 * @param {V} start
 * @param {V} end
 * @param {number} amount
 * @param {V} referenceVector - The reference
 * @returns {V} The modified reference vector
 */
function lerp2dX<V extends Object2D>(start: V, end: V, amount: number, referenceVector: V): V {
  referenceVector.x = lerpFn(start.x, end.x, amount)
  return referenceVector
}

/**
 * TBD
 *
 * @param {V} start
 * @param {V} end
 * @param {number} amount
 * @param {V} referenceVector - The reference
 * @returns {V} The modified reference vector
 */
function lerp2dY<V extends Object2D>(start: V, end: V, amount: number, referenceVector: V): V {
  referenceVector.y = lerpFn(start.y, end.y, amount)
  return referenceVector
}

export { lerp2d as lerpObject2d }
export { lerp2dX as lerpObject2dX }
export { lerp2dY as lerpObject2dY }
