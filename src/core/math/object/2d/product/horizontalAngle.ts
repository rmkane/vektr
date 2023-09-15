import type { Object2D } from '../../../../../types'

/**
 * Computes the horizontal angle (aka direction) of a vector in radians.
 *
 * @param {V} vector - A vector
 * @returns {number} Angle in radians
 */
function horizontalAngle2d<V extends Object2D>(vector: V): number {
  return Math.atan2(vector.y, vector.x)
}

export { horizontalAngle2d as horizontalAngleObject2d }
