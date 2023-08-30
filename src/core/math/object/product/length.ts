import type { Object2D } from '../../../../types'

/**
 * TBD
 *
 * @param {V} vector
 * @returns {number}
 */
function length<V extends Object2D>(vector: V): number {
  return Math.hypot(vector.x, vector.y)
}

export { length as lengthObject }
