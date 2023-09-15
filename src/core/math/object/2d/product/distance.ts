import type { Object2D } from '../../../../../types'

/**
 * Calculates the Euclidean distance between two vectors.
 *
 * @param {V} vector - The left vector operand
 * @param {V} otherVector - The right vector operand
 * @returns {number} The Euclidean distance
 */
function distance2d<V extends Object2D>(vector: V, otherVector: V): number {
  return Math.hypot(distance2dX(vector, otherVector), distance2dY(vector, otherVector))
}

/**
 * Calculates the distance between the x-coordinates of two vectors.
 *
 * @param {V} vector - The left vector operand
 * @param {V} otherVector - The right vector operand
 * @returns {number} The distance between the two vector's x-coordinates
 */
function distance2dX<V extends Object2D>(vector: V, otherVector: V): number {
  return vector.x - otherVector.x
}

/**
 * Calculates the distance between the y-coordinates of two vectors.
 *
 * @param {V} vector - The left vector operand
 * @param {V} otherVector - The right vector operand
 * @returns {number} The distance between the two vector's y-coordinates
 */
function distance2dY<V extends Object2D>(vector: V, otherVector: V): number {
  return vector.y - otherVector.y
}

export { distance2d as distanceObject2d, distance2dX as distanceObject2dX, distance2dY as distanceObject2dY }
