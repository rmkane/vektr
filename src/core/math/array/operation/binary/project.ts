import type { Array2D } from '../../../../../types'
import { dotArray } from '../../product/dot'

function projectOnto<V extends Array2D>(vector: V, otherVector: V, referenceVector: V): V {
  const coeff = dotArray(vector, otherVector) / dotArray(otherVector, otherVector)
  referenceVector[0] = coeff * otherVector[0]
  referenceVector[1] = coeff * otherVector[1]
  return referenceVector
}

export { projectOnto as projectOntoArray }
