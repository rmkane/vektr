import type { Object2D } from '../../../../../../types'
import { fract as fractFn } from '../../../../functions'

/**
 * Keep the decimal portion of a vector's x and y coordinates.
 *
 * @param {V} vector - A vector
 * @param {V} referenceVector - The reference
 * @returns {V} The modified reference vector
 */
function fract2d<V extends Object2D>(vector: V, referenceVector: V): V {
  referenceVector.x = fractFn(vector.x)
  referenceVector.y = fractFn(vector.y)
  return referenceVector
}

/**
 * Keep the decimal portion of a vector's x-coordinate.
 *
 * @param {V} vector - A vector
 * @param {V} referenceVector - The reference
 * @returns {V} The modified reference vector
 */
function fract2dX<V extends Object2D>(vector: V, referenceVector: V): V {
  referenceVector.x = fractFn(vector.x)
  return referenceVector
}

/**
 * Keep the decimal portion of a vector's y-coordinate.
 *
 * @param {V} vector - A vector
 * @param {V} referenceVector - The reference
 * @returns {V} The modified reference vector
 */
function fract2dY<V extends Object2D>(vector: V, referenceVector: V): V {
  referenceVector.y = fractFn(vector.y)
  return referenceVector
}

export { fract2d as fractObject2d }
export { fract2dX as fractObject2dX }
export { fract2dY as fractObject2dY }
