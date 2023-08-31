import type { Object2D } from '../../../../../types'

/**
 * TBD
 *
 * @param {V} vector
 * @param {V} referenceVector - The reference
 * @returns {V} The modified reference vector
 */
function round<V extends Object2D>(vector: V, referenceVector: V): V {
  referenceVector.x = Math.round(vector.x)
  referenceVector.y = Math.round(vector.y)
  return referenceVector
}

/**
 * TBD
 *
 * @param {V} vector
 * @param {V} referenceVector - The reference
 * @returns {V} The modified reference vector
 */
function roundX<V extends Object2D>(vector: V, referenceVector: V): V {
  referenceVector.x = Math.round(vector.x)
  return referenceVector
}

/**
 * TBD
 *
 * @param {V} vector
 * @param {V} referenceVector - The reference
 * @returns {V} The modified reference vector
 */
function roundY<V extends Object2D>(vector: V, referenceVector: V): V {
  referenceVector.y = Math.round(vector.y)
  return referenceVector
}

export { round as roundObject }
export { roundX as roundObjectX }
export { roundY as roundObjectY }
