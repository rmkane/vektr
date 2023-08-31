import type { Array2D } from '../../../../../../types'

/**
 * Divides the given vectors by the reference vector and returns it.
 *
 * @param {V} referenceVector - The reference vector
 * @param {V[]} vectors - Vector operands
 * @returns {V} The modified reference vector
 */
function divideAll2d<V extends Array2D>(referenceVector: V, ...vectors: V[]): V {
  for (const vector of vectors) {
    referenceVector[0] /= vector[0]
    referenceVector[1] /= vector[1]
  }
  return referenceVector
}
export { divideAll2d as divideAllArray2d }
