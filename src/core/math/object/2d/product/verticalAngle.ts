import type { Object2D } from '../../../../../types'

/**
 * TBD
 *
 * @param {V} vector
 * @returns {number} Angle in radians
 */
function verticalAngle2d<V extends Object2D>(vector: V): number {
  return Math.atan2(vector.x, vector.y)
}

export { verticalAngle2d as verticalAngleObject2d }
