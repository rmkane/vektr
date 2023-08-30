import type { Object2D } from '../../../../types'
import { radiansToDegrees } from '../../functions'
import { horizontalAngleObject } from './horizontalAngle'

/**
 * TBD
 *
 * @param {V} vector
 * @returns {number} Angle in degrees
 */
function horizontalAngleDegrees<V extends Object2D>(vector: V): number {
  return radiansToDegrees(horizontalAngleObject(vector))
}

export { horizontalAngleDegrees as horizontalAngleDegreesObject }
