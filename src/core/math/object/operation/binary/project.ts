import type { Object2D } from '../../../../../types'
import { dotObject } from '../../product/dot'

function projectOnto<V extends Object2D>(vector: V, otherVector: V, referenceVector: V): V {
  const coeff = dotObject(vector, otherVector) / dotObject(otherVector, otherVector)
  referenceVector.x = coeff * otherVector.x
  referenceVector.y = coeff * otherVector.y
  return referenceVector
}

export { projectOnto as projectOntoObject }
