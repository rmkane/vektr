import type { Object2D } from '../../../../types'

/**
 * TBD
 *
 * @param {V} vector
 * @param {V} otherVector
 * @returns {number}
 */
function distanceX<V extends Object2D>(vector: V, otherVector: V): number {
  return vector.x - otherVector.x
}

/**
 * TBD
 *
 * @param {V} vector
 * @param {V} otherVector
 * @returns {number}
 */
function distanceY<V extends Object2D>(vector: V, otherVector: V): number {
  return vector.y - otherVector.y
}

/**
 * Calculates the Euclidean distance between two vectors.
 *
 * @param {V} vector
 * @param {V} otherVector
 * @returns {number} The distance
 */
function distance<V extends Object2D>(vector: V, otherVector: V): number {
  return Math.hypot(distanceX(vector, otherVector), distanceY(vector, otherVector))
}

export { distance as distanceObject, distanceX as distanceObjectX, distanceY as distanceObjectY }
