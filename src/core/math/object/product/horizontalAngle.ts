import type { Object2D } from '../../../../types'

/**
 * TBD
 *
 * @param {V} vector
 * @returns {number} Angle in radians
 */
function horizontalAngle<V extends Object2D>(vector: V): number {
  return Math.atan2(vector.y, vector.x)
}

export { horizontalAngle as horizontalAngleObject }
