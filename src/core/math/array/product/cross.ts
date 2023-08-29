import { Array2D } from '../../../../types'

/**
 * TBD
 *
 * @param {Array2D} left
 * @param {Array2D} right
 * @returns {number}
 */
function cross(left: Array2D, right: Array2D): number {
  return left[0] * right[1] - left[1] * right[0]
}

export { cross as crossArray }
