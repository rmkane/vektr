import { Object2D } from '../../../types'

function dot(left: Object2D, right: Object2D): number {
  return left.x * right.x + left.y * right.y
}

export { dot as dotObject }
