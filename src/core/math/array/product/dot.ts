import { Array2D } from '../../../../types'

/**
 * TBD
 *
 * @param {Array2D} left
 * @param {Array2D} right
 * @returns {number}
 */
function dot(left: Array2D, right: Array2D): number {
  return left[0] * right[0] + left[1] * right[1]
}

export { dot as dotArray }
