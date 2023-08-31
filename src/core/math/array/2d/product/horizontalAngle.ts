import type { Array2D } from '../../../../../types'

/**
 * TBD
 *
 * @param {V} vector
 * @returns {number} Angle in radians
 */
function horizontalAngle2d<V extends Array2D>(vector: V): number {
  return Math.atan2(vector[1], vector[0])
}

export { horizontalAngle2d as horizontalAngleArray2d }
