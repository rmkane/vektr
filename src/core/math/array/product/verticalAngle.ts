import type { Array2D } from '../../../../types'

/**
 * TBD
 *
 * @param {Array2D} vector
 * @returns {number} Angle in radians
 */
function verticalAngle(vector: Array2D): number {
  return Math.atan2(vector[0], vector[1])
}

export { verticalAngle as verticalAngleArray }
