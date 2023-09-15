import type { Object2D } from '../../../../../types'
import { radiansToDegrees } from '../../../functions'
import { verticalAngleObject2d } from './verticalAngle'

/**
 * Calculates the vertical angle of a vector in degrees.
 *
 * @param {V} vector - A vector
 * @returns {number} Angle in degrees
 */
function verticalAngleDegrees2d<V extends Object2D>(vector: V): number {
  return radiansToDegrees(verticalAngleObject2d(vector))
}

export { verticalAngleDegrees2d as verticalAngleDegreesObject2d }
