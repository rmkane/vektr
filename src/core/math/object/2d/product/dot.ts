import type { Object2D } from '../../../../../types'

/**
 * TBD
 *
 * @param {V} left
 * @param {V} right
 * @returns {number}
 */
function dot2d<V extends Object2D>(left: V, right: V): number {
  return left.x * right.x + left.y * right.y
}

export { dot2d as dotObject2d }
