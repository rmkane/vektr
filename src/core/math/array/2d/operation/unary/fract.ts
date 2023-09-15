import type { Array2D } from '../../../../../../types'
import { fract as fractFn } from '../../../../functions'

/**
 * Applies the decimal portion of a vector's x and y coordinates to the reference vector and returns it.
 *
 * @param {V} vector - A vector
 * @param {V} referenceVector - The reference vector
 * @returns {V} The modified reference vector
 */
function fract2d<V extends Array2D>(vector: V, referenceVector: V): V {
  referenceVector[0] = fractFn(vector[0])
  referenceVector[1] = fractFn(vector[1])
  return referenceVector
}

/**
 * Applies the decimal portion of a vector's x-coordinate to the reference vector and returns it.
 *
 * @param {V} vector - A vector
 * @param {V} referenceVector - The reference vector
 * @returns {V} The modified reference vector
 */
function fract2dX<V extends Array2D>(vector: V, referenceVector: V): V {
  referenceVector[0] = fractFn(vector[0])
  return referenceVector
}

/**
 * Applies the decimal portion of a vector's y-coordinate to the reference vector and returns it.
 *
 * @param {V} vector - A vector
 * @param {V} referenceVector - The reference vector
 * @returns {V} The modified reference vector
 */
function fract2dY<V extends Array2D>(vector: V, referenceVector: V): V {
  referenceVector[1] = fractFn(vector[1])
  return referenceVector
}

export { fract2d as fractArray2d }
export { fract2dX as fractArray2dX }
export { fract2dY as fractArray2dY }
