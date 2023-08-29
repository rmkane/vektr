import { Object2D } from '../../../types'

/**
 * TBD
 *
 * @param {Object2D} vector
 * @returns {number}
 */
function direction(vector: Object2D): number {
  return Math.atan2(vector.y, vector.x)
}

export { direction as directionObject }
