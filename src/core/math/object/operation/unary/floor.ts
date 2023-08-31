import type { Object2D } from '../../../../../types'

/**
 * TBD
 *
 * @param {V} vector
 * @param {V} referenceVector - The reference
 * @returns {V} The modified reference vector
 */
function floor<V extends Object2D>(vector: V, referenceVector: V): V {
  referenceVector.x = Math.floor(vector.x)
  referenceVector.y = Math.floor(vector.y)
  return referenceVector
}

/**
 * TBD
 *
 * @param {V} vector
 * @param {V} referenceVector - The reference
 * @returns {V} The modified reference vector
 */
function floorX<V extends Object2D>(vector: V, referenceVector: V): V {
  referenceVector.x = Math.floor(vector.x)
  return referenceVector
}

/**
 * TBD
 *
 * @param {V} vector
 * @param {V} referenceVector - The reference
 * @returns {V} The modified reference vector
 */
function floorY<V extends Object2D>(vector: V, referenceVector: V): V {
  referenceVector.y = Math.floor(vector.y)
  return referenceVector
}

export { floor as floorObject }
export { floorX as floorObjectX }
export { floorY as floorObjectY }
