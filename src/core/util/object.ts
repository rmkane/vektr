import type { Object2D } from '../../types'

/**
 * Creates a new vector at (0, 0).
 *
 * @returns {Object2D} A vector at (0, 0)
 */
export function zeroObject(): Object2D {
  return { x: 0, y: 0 }
}
