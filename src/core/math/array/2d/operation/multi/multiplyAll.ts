import type { Array2D } from '../../../../../../types'

/**
 * Multiplies the given vectors by the reference vector and returns it.
 *
 * @param {V} referenceVector - The reference vector
 * @param {V[]} vectors - Vector operands
 * @returns {V} The modified reference vector
 */
function multiplyAll2d<V extends Array2D>(referenceVector: V, ...vectors: V[]): V {
  const [initialVector, ...otherVectors] = vectors

  let x = initialVector?.[0] ?? 0
  let y = initialVector?.[1] ?? 0

  for (const vector of otherVectors) {
    x *= vector[0]
    y *= vector[1]
  }

  referenceVector[0] = x
  referenceVector[1] = y

  return referenceVector
}

export { multiplyAll2d as multiplyAllArray2d }
