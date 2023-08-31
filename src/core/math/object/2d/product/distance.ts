import type { Object2D } from '../../../../../types'

/**
 * Calculates the Euclidean distance between two vectors.
 *
 * @param {V} vector
 * @param {V} otherVector
 * @returns {number} The distance
 */
function distance2d<V extends Object2D>(vector: V, otherVector: V): number {
  return Math.hypot(distance2dX(vector, otherVector), distance2dY(vector, otherVector))
}

/**
 * TBD
 *
 * @param {V} vector
 * @param {V} otherVector
 * @returns {number}
 */
function distance2dX<V extends Object2D>(vector: V, otherVector: V): number {
  return vector.x - otherVector.x
}

/**
 * TBD
 *
 * @param {V} vector
 * @param {V} otherVector
 * @returns {number}
 */
function distance2dY<V extends Object2D>(vector: V, otherVector: V): number {
  return vector.y - otherVector.y
}

export { distance2d as distanceObject2d, distance2dX as distanceObject2dX, distance2dY as distanceObject2dY }
