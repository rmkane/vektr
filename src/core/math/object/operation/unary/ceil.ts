import type { Object2D } from '../../../../../types'

/**
 * TBD
 *
 * @param {V} vector
 * @param {V} referenceVector - The reference
 * @returns {V} The modified reference vector
 */
function ceil<V extends Object2D>(vector: V, referenceVector: V): V {
  referenceVector.x = Math.ceil(vector.x)
  referenceVector.y = Math.ceil(vector.y)
  return referenceVector
}

export { ceil as ceilObject }
