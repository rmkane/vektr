import type { Array2D } from '../../../../../types'

/**
 * TBD
 *
 * @param {V} left
 * @param {V} right
 * @returns {number}
 */
function cross<V extends Array2D>(left: V, right: V): number {
  return left[0] * right[1] - left[1] * right[0]
}

export { cross as crossArray }
