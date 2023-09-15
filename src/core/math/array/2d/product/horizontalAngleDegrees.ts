import type { Array2D } from '../../../../../types'
import { radiansToDegrees } from '../../../functions'
import { horizontalAngleArray2d } from './horizontalAngle'

/**
 * Computes the horizontal angle (aka direction) of a vector in degrees.
 *
 * @param {V} vector - A vector
 * @returns {number} Angle in degrees
 */
function horizontalAngleDegrees2d<V extends Array2D>(vector: V): number {
  return radiansToDegrees(horizontalAngleArray2d(vector))
}

export { horizontalAngleDegrees2d as horizontalAngleDegreesArray2d }
