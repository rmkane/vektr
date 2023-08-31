import type { Object2D } from '../../../../../types'
import { clamp as clampFn } from '../../../functions'

/**
 * TBD
 *
 * @param {V} vector
 * @param {V} min
 * @param {V} max
 * @param {V} referenceVector - The reference
 * @returns {V} The modified reference vector
 */
function clamp<V extends Object2D>(vector: V, min: V, max: V, referenceVector: V): V {
  referenceVector.x = clampFn(vector.x, min.x, max.x)
  referenceVector.y = clampFn(vector.y, min.y, max.y)
  return referenceVector
}

/**
 * TBD
 *
 * @param {V} vector
 * @param {V} min
 * @param {V} max
 * @param {V} referenceVector - The reference
 * @returns {V} The modified reference vector
 */
function clampX<V extends Object2D>(vector: V, min: V, max: V, referenceVector: V): V {
  referenceVector.x = clampFn(vector.x, min.x, max.x)
  return referenceVector
}

/**
 * TBD
 *
 * @param {V} vector
 * @param {V} min
 * @param {V} max
 * @param {V} referenceVector - The reference
 * @returns {V} The modified reference vector
 */
function clampY<V extends Object2D>(vector: V, min: V, max: V, referenceVector: V): V {
  referenceVector.y = clampFn(vector.y, min.y, max.y)
  return referenceVector
}

export { clamp as clampObject }
export { clampX as clampObjectX }
export { clampY as clampObjectY }
