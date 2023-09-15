import type { Array2D } from '../../../../../types'
import { radiansToDegrees } from '../../../functions'
import { verticalAngleArray2d } from './verticalAngle'

/**
 * Calculates the vertical angle of a vector in degrees.
 *
 * @param {V} vector - A vector
 * @returns {number} Angle in degrees
 */
function verticalAngleDegrees2d<V extends Array2D>(vector: V): number {
  return radiansToDegrees(verticalAngleArray2d(vector))
}

export { verticalAngleDegrees2d as verticalAngleDegreesArray2d }
