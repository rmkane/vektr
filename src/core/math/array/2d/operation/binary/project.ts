import type { Array2D } from '../../../../../../types'
import { dotArray2d } from '../../product/dot'

/**
 * Applies the projection of {@link vector} onto {@link otherVector} to {@link referenceVector} and returns it.
 *
 * @param {V} vector - Projection source
 * @param {V} otherVector - Projection target
 * @param {V} referenceVector - The reference vector
 * @returns {V} The resulting vector
 */
function projectOnto2d<V extends Array2D>(vector: V, otherVector: V, referenceVector: V): V {
  const coeff = dotArray2d(vector, otherVector) / dotArray2d(otherVector, otherVector)
  referenceVector[0] = coeff * otherVector[0]
  referenceVector[1] = coeff * otherVector[1]
  return referenceVector
}

export { projectOnto2d as projectOntoArray2d }
