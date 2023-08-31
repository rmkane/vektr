import type { Array2D } from '../../../../../../types'
import { dotArray2d } from '../../product/dot'

function projectOnto2d<V extends Array2D>(vector: V, otherVector: V, referenceVector: V): V {
  const coeff = dotArray2d(vector, otherVector) / dotArray2d(otherVector, otherVector)
  referenceVector[0] = coeff * otherVector[0]
  referenceVector[1] = coeff * otherVector[1]
  return referenceVector
}

export { projectOnto2d as projectOntoArray2d }
