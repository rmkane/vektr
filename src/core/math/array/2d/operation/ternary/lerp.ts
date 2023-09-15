import type { Array2D } from '../../../../../../types'
import { lerp as lerpFn } from '../../../../functions'

/**
 * Applies the interpolation between two vectors by an amount to the reference vector and returns it.
 *
 * @param {V} startVector - Start position vector
 * @param {V} endVector - End position vector
 * @param {number} amount - A value between [0, 1]
 * @param {V} referenceVector - The reference vector
 * @returns {V} The modified reference vector
 */
function lerp2d<V extends Array2D>(startVector: V, endVector: V, amount: number, referenceVector: V): V {
  referenceVector[0] = lerpFn(startVector[0], endVector[0], amount)
  referenceVector[1] = lerpFn(startVector[1], endVector[1], amount)
  return referenceVector
}

/**
 * Applies the interpolation between two vector's x-coordinates by an amount to the reference vector and returns it.
 *
 * @param {V} startVector - Start position vector
 * @param {V} endVector - End position vector
 * @param {number} amount - A value between [0, 1]
 * @param {V} referenceVector - The reference vector
 * @returns {V} The modified reference vector
 */
function lerp2dX<V extends Array2D>(startVector: V, endVector: V, amount: number, referenceVector: V): V {
  referenceVector[0] = lerpFn(startVector[0], endVector[0], amount)
  return referenceVector
}

/**
 * Applies the interpolation between two vector's y-coordinates by an amount to the reference vector and returns it.
 *
 * @param {V} startVector - Start position vector
 * @param {V} endVector - End position vector
 * @param {number} amount - A value between [0, 1]
 * @param {V} referenceVector - The reference vector
 * @returns {V} The modified reference vector
 */
function lerp2dY<V extends Array2D>(startVector: V, endVector: V, amount: number, referenceVector: V): V {
  referenceVector[1] = lerpFn(startVector[1], endVector[1], amount)
  return referenceVector
}

export { lerp2d as lerpArray2d }
export { lerp2dX as lerpArray2dX }
export { lerp2dY as lerpArray2dY }
