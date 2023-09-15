import type { Array2D } from '../../../../../types'

/**
 * Calculates the Euclidean distance between two vectors.
 *
 * @param {V} vector - The left vector operand
 * @param {V} otherVector - The right vector operand
 * @returns {number} The Euclidean distance
 */
function distance2d<V extends Array2D>(vector: V, otherVector: V): number {
  return Math.hypot(distance2dX(vector, otherVector), distance2dY(vector, otherVector))
}

/**
 * Calculates the distance between the x-coordinates of two vectors.
 *
 * @param {V} vector - The left vector operand
 * @param {V} otherVector - The right vector operand
 * @returns {number} The distance between the two vector's x-coordinates
 */
function distance2dX<V extends Array2D>(vector: V, otherVector: V): number {
  return vector[0] - otherVector[0]
}

/**
 * Calculates the distance between the y-coordinates of two vectors.
 *
 * @param {V} vector - The left vector operand
 * @param {V} otherVector - The right vector operand
 * @returns {number} The distance between the two vector's y-coordinates
 */
function distance2dY<V extends Array2D>(vector: V, otherVector: V): number {
  return vector[1] - otherVector[1]
}

export { distance2d as distanceArray2d, distance2dX as distanceArray2dX, distance2dY as distanceArray2dY }
