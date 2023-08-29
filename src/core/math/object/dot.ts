import { Object2D } from '../../../types'

/**
 * TBD
 *
 * @param {Object2D} left
 * @param {Object2D} right
 * @returns {number}
 */
function dot(left: Object2D, right: Object2D): number {
  return left.x * right.x + left.y * right.y
}

export { dot as dotObject }
