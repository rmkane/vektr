import type { Array2D } from '../../../../types'
import { radiansToDegrees } from '../../functions'
import { verticalAngleArray } from './verticalAngle'

/**
 * TBD
 *
 * @param {Array2D} vector
 * @returns {number} Angle in degrees
 */
function verticalAngleDegrees(vector: Array2D): number {
  return radiansToDegrees(verticalAngleArray(vector))
}

export { verticalAngleDegrees as verticalAngleDegreesArray }
