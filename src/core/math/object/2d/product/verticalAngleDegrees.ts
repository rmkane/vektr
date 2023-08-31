import type { Object2D } from '../../../../../types'
import { radiansToDegrees } from '../../../functions'
import { verticalAngleObject2d } from './verticalAngle'

/**
 * TBD
 *
 * @param {V} vector
 * @returns {number} Angle in degrees
 */
function verticalAngleDegrees2d<V extends Object2D>(vector: V): number {
  return radiansToDegrees(verticalAngleObject2d(vector))
}

export { verticalAngleDegrees2d as verticalAngleDegreesObject2d }