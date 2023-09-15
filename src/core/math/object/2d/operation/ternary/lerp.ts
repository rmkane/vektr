import type { Object2D } from '../../../../../../types'
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
function lerp2d<V extends Object2D>(startVector: V, endVector: V, amount: number, referenceVector: V): V {
  referenceVector.x = lerpFn(startVector.x, endVector.x, amount)
  referenceVector.y = lerpFn(startVector.y, endVector.y, amount)
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
function lerp2dX<V extends Object2D>(startVector: V, endVector: V, amount: number, referenceVector: V): V {
  referenceVector.x = lerpFn(startVector.x, endVector.x, amount)
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
function lerp2dY<V extends Object2D>(startVector: V, endVector: V, amount: number, referenceVector: V): V {
  referenceVector.y = lerpFn(startVector.y, endVector.y, amount)
  return referenceVector
}

export { lerp2d as lerpObject2d }
export { lerp2dX as lerpObject2dX }
export { lerp2dY as lerpObject2dY }
