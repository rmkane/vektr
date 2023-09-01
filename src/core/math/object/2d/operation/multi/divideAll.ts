import type { Object2D } from '../../../../../../types'

/**
 * Divides the given vectors by the reference vector and returns it.
 *
 * @param {V} referenceVector - The reference vector
 * @param {V[]} vectors - Vector operands
 * @returns {V} The modified reference vector
 */
function divideAll2d<V extends Object2D>(referenceVector: V, ...vectors: V[]): V {
  const [initialVector, ...otherVectors] = vectors

  let x = initialVector?.x ?? 0
  let y = initialVector?.y ?? 0

  for (const vector of otherVectors) {
    x /= vector.x
    y /= vector.y
  }

  referenceVector.x = x
  referenceVector.y = y

  return referenceVector
}

export { divideAll2d as divideAllObject2d }
