import type { Object2D } from '../../../../../types'
import { radiansToDegrees } from '../../../functions'
import { horizontalAngleObject2d } from './horizontalAngle'

/**
 * TBD
 *
 * @param {V} vector
 * @returns {number} Angle in degrees
 */
function horizontalAngleDegrees2d<V extends Object2D>(vector: V): number {
  return radiansToDegrees(horizontalAngleObject2d(vector))
}

export { horizontalAngleDegrees2d as horizontalAngleDegreesObject2d }
