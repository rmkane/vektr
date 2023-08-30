import type { Object2D } from '../../../../../types'
import { clamp as clampFn } from '../../../functions'

/**
 * TBD
 *
 * @param {V} vector
 * @param {V} min
 * @param {V} max
 * @param {V} referenceVector - The reference
 * @returns {V} The modified reference vector
 */
function clamp<V extends Object2D>(vector: V, min: V, max: V, referenceVector: V): V {
  referenceVector.x = clampFn(vector.x, min.x, max.x)
  referenceVector.y = clampFn(vector.y, min.y, max.y)
  return referenceVector
}

export { clamp as clampObject }
