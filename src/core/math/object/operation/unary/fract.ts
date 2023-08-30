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

export { fract as fractObject }
