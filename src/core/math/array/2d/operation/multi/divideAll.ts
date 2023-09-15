import type { Array2D } from '../../../../../../types'

/**
 * Applies the quotient of the the given vectors to the reference vector and returns it.
 *
 * @param {V} referenceVector - The reference vector vector
 * @param {V[]} vectors - Vector operands
 * @returns {V} The modified reference vector
 */
function divideAll2d<V extends Array2D>(referenceVector: V, ...vectors: V[]): V {
  const [initialVector, ...otherVectors] = vectors

  let x = initialVector?.[0] ?? 0
  let y = initialVector?.[1] ?? 0

  for (const vector of otherVectors) {
    x /= vector[0]
    y /= vector[1]
  }

  referenceVector[0] = x
  referenceVector[1] = y

  return referenceVector
}

export { divideAll2d as divideAllArray2d }
