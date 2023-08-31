import type { Array2D } from '../../../../../types'

/**
 * TBD
 *
 * @param {V} vector
 * @param {V} referenceVector - The reference
 * @returns {V} The modified reference vector
 */
function round<V extends Array2D>(vector: V, referenceVector: V): V {
  referenceVector[0] = Math.round(vector[0])
  referenceVector[1] = Math.round(vector[1])
  return referenceVector
}

/**
 * TBD
 *
 * @param {V} vector
 * @param {V} referenceVector - The reference
 * @returns {V} The modified reference vector
 */
function roundX<V extends Array2D>(vector: V, referenceVector: V): V {
  referenceVector[0] = Math.round(vector[0])
  return referenceVector
}

/**
 * TBD
 *
 * @param {V} vector
 * @param {V} referenceVector - The reference
 * @returns {V} The modified reference vector
 */
function roundY<V extends Array2D>(vector: V, referenceVector: V): V {
  referenceVector[1] = Math.round(vector[1])
  return referenceVector
}

export { round as roundArray }
export { roundX as roundArrayX }
export { roundY as roundArrayY }
