import type { Array2D } from '../../../../../types'
import { radiansToDegrees } from '../../../functions'
import { verticalAngleArray } from './verticalAngle'

/**
 * TBD
 *
 * @param {V} vector
 * @returns {number} Angle in degrees
 */
function verticalAngleDegrees<V extends Array2D>(vector: V): number {
  return radiansToDegrees(verticalAngleArray(vector))
}

export { verticalAngleDegrees as verticalAngleDegreesArray }
