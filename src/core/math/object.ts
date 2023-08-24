import { Polar2DObject, Vector2DObject } from '../../types'
import { clamp, fraction, lerp, polarX, polarY } from './functions'

export function addObjects(
  a: Vector2DObject,
  b: Vector2DObject
): Vector2DObject {
  return {
    x: a.x + b.x,
    y: a.y + b.y,
  }
}

export function addObject(a: Vector2DObject, value: number): Vector2DObject {
  return {
    x: a.x + value,
    y: a.y + value,
  }
}

export function subtractObjects(
  a: Vector2DObject,
  b: Vector2DObject
): Vector2DObject {
  return {
    x: a.x - b.x,
    y: a.y - b.y,
  }
}

export function subtractObject(
  a: Vector2DObject,
  value: number
): Vector2DObject {
  return {
    x: a.x - value,
    y: a.y - value,
  }
}

export function multiplyObjects(
  a: Vector2DObject,
  b: Vector2DObject
): Vector2DObject {
  return {
    x: a.x * b.x,
    y: a.y * b.y,
  }
}

export function multiplyObject(
  a: Vector2DObject,
  value: number
): Vector2DObject {
  return {
    x: a.x * value,
    y: a.y * value,
  }
}

export function divideObjects(
  a: Vector2DObject,
  b: Vector2DObject
): Vector2DObject {
  return {
    x: a.x / b.x,
    y: a.y / b.y,
  }
}

export function divideObject(a: Vector2DObject, value: number): Vector2DObject {
  return {
    x: a.x / value,
    y: a.y / value,
  }
}

export function negateObject(a: Vector2DObject): Vector2DObject {
  return {
    x: a.x * -1,
    y: a.y * -1,
  }
}

export function floorObject(a: Vector2DObject): Vector2DObject {
  return {
    x: Math.floor(a.x),
    y: Math.floor(a.y),
  }
}

export function ceilObject(a: Vector2DObject): Vector2DObject {
  return {
    x: Math.ceil(a.x),
    y: Math.ceil(a.y),
  }
}

export function roundObject(a: Vector2DObject): Vector2DObject {
  return {
    x: Math.round(a.x),
    y: Math.round(a.y),
  }
}

export function fractObject(a: Vector2DObject): Vector2DObject {
  return {
    x: fraction(a.x),
    y: fraction(a.y),
  }
}

export function magnitudeObject(a: Vector2DObject): number {
  return Math.hypot(a.x, a.y)
}

export function normalizeObject(a: Vector2DObject): Vector2DObject {
  return divideObject(a, magnitudeObject(a))
}

export function directionObject(a: Vector2DObject): number {
  return Math.atan2(a.y, a.x)
}

export function clampObject(
  a: Vector2DObject,
  min: Vector2DObject,
  max: Vector2DObject
): Vector2DObject {
  return {
    x: clamp(a.x, min.x, max.x),
    y: clamp(a.y, min.y, max.y),
  }
}

export function lerpObject(
  start: Vector2DObject,
  end: Vector2DObject,
  amount: number
): Vector2DObject {
  return {
    x: lerp(start.x, end.x, amount),
    y: lerp(start.y, end.y, amount),
  }
}

export function dotObject(left: Vector2DObject, right: Vector2DObject): number {
  return left.x * right.x + left.y * right.y
}

export function toPolar(vector: Vector2DObject): Polar2DObject {
  return {
    magnitude: magnitudeObject(vector),
    direction: directionObject(vector),
  }
}

export function fromPolar(polar: Polar2DObject): Vector2DObject {
  return {
    x: polarX(polar.magnitude, polar.direction),
    y: polarY(polar.magnitude, polar.direction),
  }
}
