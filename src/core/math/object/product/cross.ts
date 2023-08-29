import type { Object2D } from '../../../../types'

/**
 * TBD
 *
 * @param {Object2D} left
 * @param {Object2D} right
 * @returns {number}
 */
function cross(left: Object2D, right: Object2D): number {
  return left.x * right.y - left.y * right.x
}

export { cross as crossObject }
