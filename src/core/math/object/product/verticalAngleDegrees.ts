import { Object2D } from '../../../../types'
import { radiansToDegrees } from '../../functions'
import { verticalAngleObject } from './verticalAngle'

/**
 * TBD
 *
 * @param {Object2D} vector
 * @returns {number} Angle in degrees
 */
function verticalAngleDegrees(vector: Object2D): number {
  return radiansToDegrees(verticalAngleObject(vector))
}

export { verticalAngleDegrees as verticalAngleDegreesObject }
