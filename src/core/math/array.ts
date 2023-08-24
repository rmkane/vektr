import { Polar2DArray, Vector2DArray } from '../../types'
import { clamp, fraction, lerp, polarX, polarY } from './functions'

export function addArrays(a: Vector2DArray, b: Vector2DArray): Vector2DArray {
  return [a[0] + b[0], a[1] + b[1]]
}

export function addArray(a: Vector2DArray, value: number): Vector2DArray {
  return [a[0] + value, a[1] + value]
}

export function subtractArrays(a: Vector2DArray, b: Vector2DArray): Vector2DArray {
  return [a[0] - b[0], a[1] - b[1]]
}

export function subtractArray(a: Vector2DArray, value: number): Vector2DArray {
  return [a[0] - value, a[1] - value]
}

export function multiplyArrays(a: Vector2DArray, b: Vector2DArray): Vector2DArray {
  return [a[0] * b[0], a[1] * b[1]]
}

export function multiplyArray(a: Vector2DArray, value: number): Vector2DArray {
  return [a[0] * value, a[1] * value]
}

export function divideArrays(a: Vector2DArray, b: Vector2DArray): Vector2DArray {
  return [a[0] / b[0], a[1] / b[1]]
}

export function divideArray(a: Vector2DArray, value: number): Vector2DArray {
  return [a[0] / value, a[1] / value]
}

export function negateArray(a: Vector2DArray): Vector2DArray {
  return [a[0] * -1, a[1] * -1]
}

export function floorArray(a: Vector2DArray): Vector2DArray {
  return [Math.floor(a[0]), Math.floor(a[1])]
}

export function ceilArray(a: Vector2DArray): Vector2DArray {
  return [Math.ceil(a[0]), Math.ceil(a[1])]
}

export function roundArray(a: Vector2DArray): Vector2DArray {
  return [Math.round(a[0]), Math.round(a[1])]
}

export function fractArray(a: Vector2DArray): Vector2DArray {
  return [fraction(a[0]), fraction(a[1])]
}

export function magnitudeArray(a: Vector2DArray): number {
  return Math.hypot(a[0], a[1])
}

export function normalizeArray(a: Vector2DArray): Vector2DArray {
  return divideArray(a, magnitudeArray(a))
}

export function directionArray(a: Vector2DArray): number {
  return Math.atan2(a[1], a[0])
}

export function clampArray(a: Vector2DArray, min: Vector2DArray, max: Vector2DArray): Vector2DArray {
  return [clamp(a[0], min[0], max[0]), clamp(a[1], min[1], max[1])]
}

export function lerpArray(start: Vector2DArray, end: Vector2DArray, amount: number): Vector2DArray {
  return [lerp(start[0], end[0], amount), lerp(start[1], end[1], amount)]
}

export function dotArray(left: Vector2DArray, right: Vector2DArray): number {
  return left[0] * right[0] + left[1] * right[1]
}

export function toPolar(vector: Vector2DArray): Polar2DArray {
  return [magnitudeArray(vector), directionArray(vector)]
}

export function fromPolar(polar: Polar2DArray): Vector2DArray {
  return [polarX(polar[0], polar[1]), polarY(polar[0], polar[1])]
}
