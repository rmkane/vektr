import type { Array2D } from '../../../../types'

/**
 * TBD
 *
 * @param {V} vector
 * @param {V} otherVector
 * @returns {number}
 */
function distanceX<V extends Array2D>(vector: V, otherVector: V): number {
  return vector[0] - otherVector[0]
}

/**
 * TBD
 *
 * @param {V} vector
 * @param {V} otherVector
 * @returns {number}
 */
function distanceY<V extends Array2D>(vector: V, otherVector: V): number {
  return vector[1] - otherVector[1]
}

/**
 * Calculates the Euclidean distance between two vectors.
 *
 * @param {V} vector
 * @param {V} otherVector
 * @returns {number} The distance
 */
function distance<V extends Array2D>(vector: V, otherVector: V): number {
  return Math.hypot(distanceX(vector, otherVector), distanceY(vector, otherVector))
}

export { distance as distanceArray, distanceX as distanceArrayX, distanceY as distanceArrayY }
