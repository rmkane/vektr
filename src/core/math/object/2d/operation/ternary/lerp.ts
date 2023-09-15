import type { Object2D } from '../../../../../../types'
import { lerp as lerpFn } from '../../../../functions'

/**
 * Interpolate a vector between a start and end vector by an amount.
 *
 * @param {V} start - Start position vector
 * @param {V} end - End position vector
 * @param {number} amount - A value between [0, 1]
 * @param {V} referenceVector - The reference
 * @returns {V} The modified reference vector
 */
function lerp2d<V extends Object2D>(start: V, end: V, amount: number, referenceVector: V): V {
  referenceVector.x = lerpFn(start.x, end.x, amount)
  referenceVector.y = lerpFn(start.y, end.y, amount)
  return referenceVector
}

/**
 * Interpolate a vector's x-coordinate between a start and end vector by an amount.
 *
 * @param {V} start - Start position vector
 * @param {V} end - End position vector
 * @param {number} amount - A value between [0, 1]
 * @param {V} referenceVector - The reference
 * @returns {V} The modified reference vector
 */
function lerp2dX<V extends Object2D>(start: V, end: V, amount: number, referenceVector: V): V {
  referenceVector.x = lerpFn(start.x, end.x, amount)
  return referenceVector
}

/**
 * Interpolate a vector's y-coordinate between a start and end vector by an amount.
 *
 * @param {V} start - Start position vector
 * @param {V} end - End position vector
 * @param {number} amount - A value between [0, 1]
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
