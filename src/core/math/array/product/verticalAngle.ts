import type { Array2D } from '../../../../types'

/**
 * TBD
 *
 * @param {V} vector
 * @returns {number} Angle in radians
 */
function verticalAngle<V extends Array2D>(vector: V): number {
  return Math.atan2(vector[0], vector[1])
}

export { verticalAngle as verticalAngleArray }
