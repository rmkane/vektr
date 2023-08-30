import type { Array2D } from '../../../../types'

/**
 * TBD
 *
 * @param {V} left
 * @param {V} right
 * @returns {number}
 */
function dot<V extends Array2D>(left: V, right: V): number {
  return left[0] * right[0] + left[1] * right[1]
}

export { dot as dotArray }
