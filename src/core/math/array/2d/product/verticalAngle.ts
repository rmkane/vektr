import type { Array2D } from '../../../../../types'

/**
 * Calculates the vertical angle of a vector in radians.
 *
 * @param {V} vector - A vector
 * @returns {number} Angle in radians
 */
function verticalAngle2d<V extends Array2D>(vector: V): number {
  return Math.atan2(vector[0], vector[1])
}

export { verticalAngle2d as verticalAngleArray2d }
