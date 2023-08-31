import type { Array2D } from '../../../../../../types'

/**
 * TBD
 *
 * @param {V} vector
 * @param {V} referenceVector - The reference
 * @returns {V} The modified reference vector
 */
function floor<V extends Array2D>(vector: V, referenceVector: V): V {
  referenceVector[0] = Math.floor(vector[0])
  referenceVector[1] = Math.floor(vector[1])
  return referenceVector
}

/**
 * TBD
 *
 * @param {V} vector
 * @param {V} referenceVector - The reference
 * @returns {V} The modified reference vector
 */
function floorX<V extends Array2D>(vector: V, referenceVector: V): V {
  referenceVector[0] = Math.floor(vector[0])
  return referenceVector
}

/**
 * TBD
 *
 * @param {V} vector
 * @param {V} referenceVector - The reference
 * @returns {V} The modified reference vector
 */
function floorY<V extends Array2D>(vector: V, referenceVector: V): V {
  referenceVector[1] = Math.floor(vector[1])
  return referenceVector
}

export { floor as floorArray }
export { floorX as floorArrayX }
export { floorY as floorArrayY }
