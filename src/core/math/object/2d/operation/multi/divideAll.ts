import type { Object2D } from '../../../../../../types'

/**
 * Divides the given vectors by the reference vector and returns it.
 *
 * @param {V} referenceVector - The reference vector
 * @param {V[]} vectors - Vector operands
 * @returns {V} The modified reference vector
 */
function divideAll2d<V extends Object2D>(referenceVector: V, ...vectors: V[]): V {
  for (const vector of vectors) {
    referenceVector.x /= vector.x
    referenceVector.y /= vector.y
  }
  return referenceVector
}
export { divideAll2d as divideAllObject2d }
