import { Object2D } from '../../../types'
import { radiansToDegrees } from '../functions'
import { horizontalAngleObject } from './horizontalAngle'

/**
 * TBD
 *
 * @param {Object2D} vector
 * @returns {number} Angle in degrees
 */
function horizontalAngleDegrees(vector: Object2D): number {
  return radiansToDegrees(horizontalAngleObject(vector))
}

export { horizontalAngleDegrees as horizontalAngleDegreesObject }
