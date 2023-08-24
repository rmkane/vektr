import { Vector2DObject } from '../../types'

/**
 * Creates a new vector at (0, 0).
 *
 * @returns {Vector2DObject} A vector at (0, 0)
 */
export function zeroObject(): Vector2DObject {
  return {
    x: 0,
    y: 0,
  }
}
