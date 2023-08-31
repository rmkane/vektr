import type { Object2D } from '../../../../../../types'
import { dotObject2d } from '../../product/dot'

function projectOnto2d<V extends Object2D>(vector: V, otherVector: V, referenceVector: V): V {
  const coeff = dotObject2d(vector, otherVector) / dotObject2d(otherVector, otherVector)
  referenceVector.x = coeff * otherVector.x
  referenceVector.y = coeff * otherVector.y
  return referenceVector
}

export { projectOnto2d as projectOntoObject2d }
