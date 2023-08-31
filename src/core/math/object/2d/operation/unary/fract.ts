import type { Object2D } from '../../../../../../types'
import { fract as fractFn } from '../../../../functions'

/**
 * TBD
 *
 * @param {V} vector
 * @param {V} referenceVector - The reference
 * @returns {V} The modified reference vector
 */
function fract2d<V extends Object2D>(vector: V, referenceVector: V): V {
  referenceVector.x = fractFn(vector.x)
  referenceVector.y = fractFn(vector.y)
  return referenceVector
}

/**
 * TBD
 *
 * @param {V} vector
 * @param {V} referenceVector - The reference
 * @returns {V} The modified reference vector
 */
function fract2dX<V extends Object2D>(vector: V, referenceVector: V): V {
  referenceVector.x = fractFn(vector.x)
  return referenceVector
}

/**
 * TBD
 *
 * @param {V} vector
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
