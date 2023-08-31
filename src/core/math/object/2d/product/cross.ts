import type { Object2D } from '../../../../../types'

/**
 * TBD
 *
 * @param {V} left
 * @param {V} right
 * @returns {number}
 */
function cross2d<V extends Object2D>(left: V, right: V): number {
  return left.x * right.y - left.y * right.x
}

export { cross2d as crossObject2d }
