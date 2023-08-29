import { Object2D } from '../../../types'

/**
 * TBD
 *
 * @param {Object2D} vector
 * @returns {number} Angle in radians
 */
function verticalAngle(vector: Object2D): number {
  return Math.atan2(vector.x, vector.y)
}

export { verticalAngle as verticalAngleObject }
