import type { Object2D } from '../../../../../../types'

/**
 * Applies the difference of the the given vectors to the reference vector and returns it.
 *
 * @param {V} referenceVector - The reference vector vector
 * @param {V[]} vectors - Vector operands
 * @returns {V} The modified reference vector
 */
function subtractAll2d<V extends Object2D>(referenceVector: V, ...vectors: V[]): V {
  const [initialVector, ...otherVectors] = vectors

  let x = initialVector?.x ?? 0
  let y = initialVector?.y ?? 0

  for (const vector of otherVectors) {
    x -= vector.x
    y -= vector.y
  }

  referenceVector.x = x
  referenceVector.y = y

  return referenceVector
}

export { subtractAll2d as subtractAllObject2d }
