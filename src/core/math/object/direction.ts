import { Object2D } from '../../../types'

function direction(a: Object2D): number {
  return Math.atan2(a.y, a.x)
}

export { direction as directionObject }
