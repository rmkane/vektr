import type { Object2D } from '../../../../types'

/**
 * TBD
 *
 * @param {Object2D} vector
 * @returns {number} Angle in radians
 */
function horizontalAngle(vector: Object2D): number {
  return Math.atan2(vector.y, vector.x)
}

export { horizontalAngle as horizontalAngleObject }
