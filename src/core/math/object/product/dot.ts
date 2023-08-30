import type { Object2D } from '../../../../types'

/**
 * TBD
 *
 * @param {V} left
 * @param {V} right
 * @returns {number}
 */
function dot<V extends Object2D>(left: V, right: V): number {
  return left.x * right.x + left.y * right.y
}

export { dot as dotObject }
