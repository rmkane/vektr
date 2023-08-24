import { Object2D, Polar2DObject } from '../../../types'
import { zeroObject } from '../../util/object'
import { clamp, fraction, fromPolarX, fromPolarY, lerp } from '../functions'

export function addObjects(a: Object2D, b: Object2D): Object2D {
  return addObjectsTo(a, b, zeroObject())
}

export function addObjectsTo(a: Object2D, b: Object2D, ref: Object2D): Object2D {
  ref.x = a.x + b.x
  ref.y = a.y + b.y
  return ref
}

export function addObject(a: Object2D, value: number): Object2D {
  return addObjectTo(a, value, zeroObject())
}

export function addObjectTo(a: Object2D, value: number, ref: Object2D): Object2D {
  ref.x = a.x + value
  ref.y = a.y + value
  return ref
}

export function subtractObjects(a: Object2D, b: Object2D): Object2D {
  return {
    x: a.x - b.x,
    y: a.y - b.y,
  }
}

export function subtractObject(a: Object2D, value: number): Object2D {
  return {
    x: a.x - value,
    y: a.y - value,
  }
}

export function multiplyObjects(a: Object2D, b: Object2D): Object2D {
  return {
    x: a.x * b.x,
    y: a.y * b.y,
  }
}

export function multiplyObject(a: Object2D, value: number): Object2D {
  return {
    x: a.x * value,
    y: a.y * value,
  }
}

export function divideObjects(a: Object2D, b: Object2D): Object2D {
  return {
    x: a.x / b.x,
    y: a.y / b.y,
  }
}

export function divideObject(a: Object2D, value: number): Object2D {
  return {
    x: a.x / value,
    y: a.y / value,
  }
}

export function negateObject(a: Object2D): Object2D {
  return {
    x: a.x * -1,
    y: a.y * -1,
  }
}

export function floorObject(a: Object2D): Object2D {
  return {
    x: Math.floor(a.x),
    y: Math.floor(a.y),
  }
}

export function ceilObject(a: Object2D): Object2D {
  return {
    x: Math.ceil(a.x),
    y: Math.ceil(a.y),
  }
}

export function roundObject(a: Object2D): Object2D {
  return {
    x: Math.round(a.x),
    y: Math.round(a.y),
  }
}

export function fractObject(a: Object2D): Object2D {
  return {
    x: fraction(a.x),
    y: fraction(a.y),
  }
}

export function magnitudeObject(a: Object2D): number {
  return Math.hypot(a.x, a.y)
}

export function normalizeObject(a: Object2D): Object2D {
  return divideObject(a, magnitudeObject(a))
}

export function directionObject(a: Object2D): number {
  return Math.atan2(a.y, a.x)
}

export function clampObject(a: Object2D, min: Object2D, max: Object2D): Object2D {
  return {
    x: clamp(a.x, min.x, max.x),
    y: clamp(a.y, min.y, max.y),
  }
}

export function lerpObject(start: Object2D, end: Object2D, amount: number): Object2D {
  return {
    x: lerp(start.x, end.x, amount),
    y: lerp(start.y, end.y, amount),
  }
}

export function dotObject(left: Object2D, right: Object2D): number {
  return left.x * right.x + left.y * right.y
}

export function toPolar(vector: Object2D): Polar2DObject {
  return {
    magnitude: magnitudeObject(vector),
    direction: directionObject(vector),
  }
}

/**
 * Converts a polar coordinate into a cartesian point object.
 *
 * @param {Polar2DObject} polar - A polar coordinate object
 * @returns {number} A point object in cartesian space
 */
export function fromPolarObject(polar: Polar2DObject): Object2D {
  return {
    x: fromPolarX(polar.magnitude, polar.direction),
    y: fromPolarY(polar.magnitude, polar.direction),
  }
}
