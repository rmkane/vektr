import type { Object2D } from '../../../../types'

/**
 * TBD
 *
 * @param {Object2D} vector
 * @param {Object2D} otherVector
 * @returns {number}
 */
function distanceX(vector: Object2D, otherVector: Object2D): number {
  return vector.x - otherVector.x
}

/**
 * TBD
 *
 * @param {Object2D} vector
 * @param {Object2D} otherVector
 * @returns {number}
 */
function distanceY(vector: Object2D, otherVector: Object2D): number {
  return vector.y - otherVector.y
}

/**
 * Calculates the Euclidean distance between two vectors.
 *
 * @param {Object2D} vector
 * @param {Object2D} otherVector
 * @returns {number} The distance
 */
function distance(vector: Object2D, otherVector: Object2D): number {
  return Math.hypot(distanceX(vector, otherVector), distanceY(vector, otherVector))
}

export { distance as distanceObject, distanceX as distanceObjectX, distanceY as distanceObjectY }
