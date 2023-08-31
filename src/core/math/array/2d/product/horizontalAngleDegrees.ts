import type { Array2D } from '../../../../../types'
import { radiansToDegrees } from '../../../functions'
import { horizontalAngleArray } from './horizontalAngle'

/**
 * TBD
 *
 * @param {V} vector
 * @returns {number} Angle in degrees
 */
function horizontalAngleDegrees<V extends Array2D>(vector: V): number {
  return radiansToDegrees(horizontalAngleArray(vector))
}

export { horizontalAngleDegrees as horizontalAngleDegreesArray }
