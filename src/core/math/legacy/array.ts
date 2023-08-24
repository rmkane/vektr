import { Array2D, Polar2DArray } from '../../../types'
import { clamp, fraction, fromPolarX, fromPolarY, lerp } from '../functions'

export function addArrays(a: Array2D, b: Array2D): Array2D {
  return [a[0] + b[0], a[1] + b[1]]
}

export function addArray(a: Array2D, value: number): Array2D {
  return [a[0] + value, a[1] + value]
}

export function subtractArrays(a: Array2D, b: Array2D): Array2D {
  return [a[0] - b[0], a[1] - b[1]]
}

export function subtractArray(a: Array2D, value: number): Array2D {
  return [a[0] - value, a[1] - value]
}

export function multiplyArrays(a: Array2D, b: Array2D): Array2D {
  return [a[0] * b[0], a[1] * b[1]]
}

export function multiplyArray(a: Array2D, value: number): Array2D {
  return [a[0] * value, a[1] * value]
}

export function divideArrays(a: Array2D, b: Array2D): Array2D {
  return [a[0] / b[0], a[1] / b[1]]
}

export function divideArray(a: Array2D, value: number): Array2D {
  return [a[0] / value, a[1] / value]
}

export function negateArray(a: Array2D): Array2D {
  return [a[0] * -1, a[1] * -1]
}

export function floorArray(a: Array2D): Array2D {
  return [Math.floor(a[0]), Math.floor(a[1])]
}

export function ceilArray(a: Array2D): Array2D {
  return [Math.ceil(a[0]), Math.ceil(a[1])]
}

export function roundArray(a: Array2D): Array2D {
  return [Math.round(a[0]), Math.round(a[1])]
}

export function fractArray(a: Array2D): Array2D {
  return [fraction(a[0]), fraction(a[1])]
}

export function magnitudeArray(a: Array2D): number {
  return Math.hypot(a[0], a[1])
}

export function normalizeArray(a: Array2D): Array2D {
  return divideArray(a, magnitudeArray(a))
}

export function directionArray(a: Array2D): number {
  return Math.atan2(a[1], a[0])
}

export function clampArray(a: Array2D, min: Array2D, max: Array2D): Array2D {
  return [clamp(a[0], min[0], max[0]), clamp(a[1], min[1], max[1])]
}

export function lerpArray(start: Array2D, end: Array2D, amount: number): Array2D {
  return [lerp(start[0], end[0], amount), lerp(start[1], end[1], amount)]
}

export function dotArray(left: Array2D, right: Array2D): number {
  return left[0] * right[0] + left[1] * right[1]
}

export function toPolar(vector: Array2D): Polar2DArray {
  return [magnitudeArray(vector), directionArray(vector)]
}

/**
 * Converts a polar coordinate into a cartesian point array.
 *
 * @param {Polar2DArray} polar - A polar coordinate array
 * @returns {number} A point array in cartesian space
 */
export function fromPolarArray(polar: Polar2DArray): Array2D {
  return [fromPolarX(polar[0], polar[1]), fromPolarY(polar[0], polar[1])]
}
