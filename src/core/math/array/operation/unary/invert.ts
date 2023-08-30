import type { Array2D } from '../../../../../types'

/**
 * TBD
 *
 * @param {V} vector
 * @param {V} referenceVector - The reference
 * @returns {V} The modified reference vector
 */
function invert<V extends Array2D>(vector: V, referenceVector: V): V {
  referenceVector[0] = vector[0] * -1
  referenceVector[1] = vector[1] * -1
  return referenceVector
}

/**
 * TBD
 *
 * @param {V} vector
 * @param {V} referenceVector - The reference
 * @returns {V} The modified reference vector
 */
function invertX<V extends Array2D>(vector: V, referenceVector: V): V {
  referenceVector[0] = vector[0] * -1
  referenceVector[1] = vector[1]
  return referenceVector
}

/**
 * TBD
 *
 * @param {V} vector
 * @param {V} referenceVector - The reference
 * @returns {V} The modified reference vector
 */
function invertY<V extends Array2D>(vector: V, referenceVector: V): V {
  referenceVector[0] = vector[0]
  referenceVector[1] = vector[1] * -1
  return referenceVector
}

export { invert as invertArray }
export { invertX as invertArrayX }
export { invertY as invertArrayY }
