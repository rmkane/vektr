import type { Array2D } from '../../../../types'

/**
 * TBD
 *
 * @param {Array2D} vector
 * @returns {number} Angle in radians
 */
function horizontalAngle(vector: Array2D): number {
  return Math.atan2(vector[1], vector[0])
}

export { horizontalAngle as horizontalAngleArray }
