import type { Object2D } from '../../../../types'

/**
 * TBD
 *
 * @param {V} vector
 * @returns {number} Angle in radians
 */
function verticalAngle<V extends Object2D>(vector: V): number {
  return Math.atan2(vector.x, vector.y)
}

export { verticalAngle as verticalAngleObject }
