import type { Array2D } from '../../../../../../types'
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
function lerp2d<V extends Array2D>(start: V, end: V, amount: number, referenceVector: V): V {
  referenceVector[0] = lerpFn(start[0], end[0], amount)
  referenceVector[1] = lerpFn(start[1], end[1], amount)
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
function lerp2dX<V extends Array2D>(start: V, end: V, amount: number, referenceVector: V): V {
  referenceVector[0] = lerpFn(start[0], end[0], amount)
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
function lerp2dY<V extends Array2D>(start: V, end: V, amount: number, referenceVector: V): V {
  referenceVector[1] = lerpFn(start[1], end[1], amount)
  return referenceVector
}

export { lerp2d as lerpArray2d }
export { lerp2dX as lerpArray2dX }
export { lerp2dY as lerpArray2dY }
