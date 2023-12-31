import type { Object2D } from '../../../../../types'
import { fract as fractFn } from '../../../functions'

/**
 * TBD
 *
 * @param {V} vector
 * @param {V} referenceVector - The reference
 * @returns {V} The modified reference vector
 */
function fract<V extends Object2D>(vector: V, referenceVector: V): V {
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
function fractX<V extends Object2D>(vector: V, referenceVector: V): V {
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
function fractY<V extends Object2D>(vector: V, referenceVector: V): V {
  referenceVector.y = fractFn(vector.y)
  return referenceVector
}

export { fract as fractObject }
export { fractX as fractObjectX }
export { fractY as fractObjectY }
