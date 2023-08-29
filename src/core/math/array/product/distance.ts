import { Array2D } from '../../../../types'

/**
 * TBD
 *
 * @param {Array2D} vector
 * @param {Array2D} otherVector
 * @returns {number}
 */
function distanceX(vector: Array2D, otherVector: Array2D): number {
  return vector[0] - otherVector[0]
}

/**
 * TBD
 *
 * @param {Array2D} vector
 * @param {Array2D} otherVector
 * @returns {number}
 */
function distanceY(vector: Array2D, otherVector: Array2D): number {
  return vector[1] - otherVector[1]
}

/**
 * Calculates the Euclidean distance between two vectors.
 *
 * @param {Array2D} vector
 * @param {Array2D} otherVector
 * @returns {number} The distance
 */
function distance(vector: Array2D, otherVector: Array2D): number {
  return Math.hypot(distanceX(vector, otherVector), distanceY(vector, otherVector))
}

export { distance as distanceArray, distanceX as distanceArrayX, distanceY as distanceArrayY }
