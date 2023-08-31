import type { Array2D } from '../../../../../../types'
import { fract as fractFn } from '../../../../functions'

/**
 * TBD
 *
 * @param {V} vector
 * @param {V} referenceVector - The reference
 * @returns {V} The modified reference vector
 */
function fract<V extends Array2D>(vector: V, referenceVector: V): V {
  referenceVector[0] = fractFn(vector[0])
  referenceVector[1] = fractFn(vector[1])
  return referenceVector
}

/**
 * TBD
 *
 * @param {V} vector
 * @param {V} referenceVector - The reference
 * @returns {V} The modified reference vector
 */
function fractX<V extends Array2D>(vector: V, referenceVector: V): V {
  referenceVector[0] = fractFn(vector[0])
  return referenceVector
}

/**
 * TBD
 *
 * @param {V} vector
 * @param {V} referenceVector - The reference
 * @returns {V} The modified reference vector
 */
function fractY<V extends Array2D>(vector: V, referenceVector: V): V {
  referenceVector[1] = fractFn(vector[1])
  return referenceVector
}

export { fract as fractArray }
export { fractX as fractArrayX }
export { fractY as fractArrayY }
