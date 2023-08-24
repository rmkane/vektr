import { Vector2DArray, Vector2DObject } from '../../types'

export function addObjects(
  a: Vector2DObject,
  b: Vector2DObject,
): Vector2DObject {
  return {
    x: a.x + b.x,
    y: a.y + b.y,
  }
}

export function addArrays(a: Vector2DArray, b: Vector2DArray): Vector2DArray {
  return [a[0] + b[0], a[1] + b[1]]
}

export function addObject(a: Vector2DObject, value: number): Vector2DObject {
  return {
    x: a.x + value,
    y: a.y + value,
  }
}

export function addArray(a: Vector2DArray, value: number): Vector2DArray {
  return [a[0] + value, a[1] + value]
}

export function subtractObjects(
  a: Vector2DObject,
  b: Vector2DObject,
): Vector2DObject {
  return {
    x: a.x - b.x,
    y: a.y - b.y,
  }
}

export function subtractArrays(
  a: Vector2DArray,
  b: Vector2DArray,
): Vector2DArray {
  return [a[0] - b[0], a[1] - b[1]]
}

export function subtractObject(
  a: Vector2DObject,
  value: number,
): Vector2DObject {
  return {
    x: a.x - value,
    y: a.y - value,
  }
}

export function subtractArray(a: Vector2DArray, value: number): Vector2DArray {
  return [a[0] - value, a[1] - value]
}

export function multiplyObjects(
  a: Vector2DObject,
  b: Vector2DObject,
): Vector2DObject {
  return {
    x: a.x * b.x,
    y: a.y * b.y,
  }
}

export function multiplyArrays(
  a: Vector2DArray,
  b: Vector2DArray,
): Vector2DArray {
  return [a[0] * b[0], a[1] * b[1]]
}

export function multiplyObject(
  a: Vector2DObject,
  value: number,
): Vector2DObject {
  return {
    x: a.x * value,
    y: a.y * value,
  }
}

export function multiplyArray(a: Vector2DArray, value: number): Vector2DArray {
  return [a[0] * value, a[1] * value]
}

export function divideObjects(
  a: Vector2DObject,
  b: Vector2DObject,
): Vector2DObject {
  return {
    x: a.x / b.x,
    y: a.y / b.y,
  }
}

export function divideArrays(
  a: Vector2DArray,
  b: Vector2DArray,
): Vector2DArray {
  return [a[0] / b[0], a[1] / b[1]]
}

export function divideObject(a: Vector2DObject, value: number): Vector2DObject {
  return {
    x: a.x / value,
    y: a.y / value,
  }
}

export function divideArray(a: Vector2DArray, value: number): Vector2DArray {
  return [a[0] / value, a[1] / value]
}

export function negateObject(a: Vector2DObject): Vector2DObject {
  return {
    x: a.x * -1,
    y: a.y * -1,
  }
}

export function negateArray(a: Vector2DArray): Vector2DArray {
  return [a[0] * -1, a[1] * -1]
}

export function floorObject(a: Vector2DObject): Vector2DObject {
  return {
    x: Math.floor(a.x),
    y: Math.floor(a.y),
  }
}

export function floorArray(a: Vector2DArray): Vector2DArray {
  return [Math.floor(a[0]), Math.floor(a[1])]
}

export function ceilObject(a: Vector2DObject): Vector2DObject {
  return {
    x: Math.ceil(a.x),
    y: Math.ceil(a.y),
  }
}

export function ceilArray(a: Vector2DArray): Vector2DArray {
  return [Math.ceil(a[0]), Math.ceil(a[1])]
}

export function roundObject(a: Vector2DObject): Vector2DObject {
  return {
    x: Math.round(a.x),
    y: Math.round(a.y),
  }
}

export function roundArray(a: Vector2DArray): Vector2DArray {
  return [Math.round(a[0]), Math.round(a[1])]
}

export function fractObject(a: Vector2DObject): Vector2DObject {
  return {
    x: a.x - Math.floor(a.x),
    y: a.y - Math.floor(a.y),
  }
}

export function fractArray(a: Vector2DArray): Vector2DArray {
  return [a[0] - Math.floor(a[0]), a[1] - Math.floor(a[1])]
}

export function magnitudeObject(a: Vector2DObject): number {
  return Math.hypot(a.x, a.y)
}

export function magnitudeArray(a: Vector2DArray): number {
  return Math.hypot(a[0], a[1])
}

export function normalizeObject(a: Vector2DObject): Vector2DObject {
  return divideObject(a, magnitudeObject(a))
}

export function normalizeArray(a: Vector2DArray): Vector2DArray {
  return divideArray(a, magnitudeArray(a))
}

export function directionObject(a: Vector2DObject): number {
  return Math.atan2(a.y, a.x)
}

export function directionArray(a: Vector2DArray): number {
  return Math.atan2(a[1], a[0])
}

function clampValue(value: number, min: number, max: number) {
  return Math.min(Math.max(value, max), min)
}

export function clampObject(
  a: Vector2DObject,
  min: Vector2DObject,
  max: Vector2DObject,
): Vector2DObject {
  return {
    x: clampValue(a.x, min.x, max.x),
    y: clampValue(a.y, min.y, max.y),
  }
}

export function clampArray(
  a: Vector2DArray,
  min: Vector2DArray,
  max: Vector2DArray,
): Vector2DArray {
  return [clampValue(a[0], min[0], max[0]), clampValue(a[1], min[1], max[1])]
}

function lerpValue(start: number, end: number, amount: number): number {
  return start + (end - start) * amount
}

export function lerpObject(
  start: Vector2DObject,
  end: Vector2DObject,
  amount: number,
): Vector2DObject {
  return {
    x: lerpValue(start.x, end.x, amount),
    y: lerpValue(start.y, end.y, amount),
  }
}

export function lerpArray(
  start: Vector2DArray,
  end: Vector2DArray,
  amount: number,
): Vector2DArray {
  return [
    lerpValue(start[0], end[0], amount),
    lerpValue(start[1], end[1], amount),
  ]
}

export function dotObject(left: Vector2DObject, right: Vector2DObject): number {
  return left.x * right.x + left.y * right.y
}

export function dotArray(left: Vector2DArray, right: Vector2DArray): number {
  return left[0] * right[0] + left[1] * right[1]
}
