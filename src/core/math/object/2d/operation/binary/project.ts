import type { Object2D } from '../../../../../../types'
import { dotObject2d } from '../../product/dot'

/**
 * Applies the projection of {@link vector} onto {@link otherVector} to {@link referenceVector} and returns it.
 *
 * @param {V} vector - Projection source
 * @param {V} otherVector - Projection target
 * @param {V} referenceVector - The reference vector
 * @returns {V} The resulting vector
 */
function projectOnto2d<V extends Object2D>(vector: V, otherVector: V, referenceVector: V): V {
  const coeff = dotObject2d(vector, otherVector) / dotObject2d(otherVector, otherVector)
  referenceVector.x = coeff * otherVector.x
  referenceVector.y = coeff * otherVector.y
  return referenceVector
}

export { projectOnto2d as projectOntoObject2d }
