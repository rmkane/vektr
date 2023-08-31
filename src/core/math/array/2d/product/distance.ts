import type { Array2D } from '../../../../../types'

/**
 * Calculates the Euclidean distance between two vectors.
 *
 * @param {V} vector
 * @param {V} otherVector
 * @returns {number} The distance
 */
function distance2d<V extends Array2D>(vector: V, otherVector: V): number {
  return Math.hypot(distance2dX(vector, otherVector), distance2dY(vector, otherVector))
}

/**
 * TBD
 *
 * @param {V} vector
 * @param {V} otherVector
 * @returns {number}
 */
function distance2dX<V extends Array2D>(vector: V, otherVector: V): number {
  return vector[0] - otherVector[0]
}

/**
 * TBD
 *
 * @param {V} vector
 * @param {V} otherVector
 * @returns {number}
 */
function distance2dY<V extends Array2D>(vector: V, otherVector: V): number {
  return vector[1] - otherVector[1]
}

export { distance2d as distanceArray2d, distance2dX as distanceArray2dX, distance2dY as distanceArray2dY }
