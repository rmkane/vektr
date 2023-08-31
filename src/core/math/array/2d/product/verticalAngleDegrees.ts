import type { Array2D } from '../../../../../types'
import { radiansToDegrees } from '../../../functions'
import { verticalAngleArray2d } from './verticalAngle'

/**
 * TBD
 *
 * @param {V} vector
 * @returns {number} Angle in degrees
 */
function verticalAngleDegrees2d<V extends Array2D>(vector: V): number {
  return radiansToDegrees(verticalAngleArray2d(vector))
}

export { verticalAngleDegrees2d as verticalAngleDegreesArray2d }
