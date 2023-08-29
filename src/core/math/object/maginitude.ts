import { Object2D } from '../../../types'

/**
 * TBD
 *
 * @param {Object2D} vector
 * @returns {number}
 */
function magnitude(vector: Object2D): number {
  return Math.hypot(vector.x, vector.y)
}

export { magnitude as magnitudeObject }
