import type { Object2D } from '../../../../types'
import { radiansToDegrees } from '../../functions'
import { verticalAngleObject } from './verticalAngle'

/**
 * TBD
 *
 * @param {V} vector
 * @returns {number} Angle in degrees
 */
function verticalAngleDegrees<V extends Object2D>(vector: V): number {
  return radiansToDegrees(verticalAngleObject(vector))
}

export { verticalAngleDegrees as verticalAngleDegreesObject }
