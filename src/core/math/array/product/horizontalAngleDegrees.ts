import { Array2D } from '../../../../types'
import { radiansToDegrees } from '../../functions'
import { horizontalAngleArray } from './horizontalAngle'

/**
 * TBD
 *
 * @param {Array2D} vector
 * @returns {number} Angle in degrees
 */
function horizontalAngleDegrees(vector: Array2D): number {
  return radiansToDegrees(horizontalAngleArray(vector))
}

export { horizontalAngleDegrees as horizontalAngleDegreesArray }
