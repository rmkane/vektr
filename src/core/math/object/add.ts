import { Vector2DObject } from '../../../types'
import { zeroObject } from '../../util/object'

/**
 * Computes a new vector, result of the addition of vector and the otherVector.
 *
 * @param {Vector2DObject} vector - first operand
 * @param {Vector2DObject} otherVector - second operand
 * @returns {Vector2DObject} the resulting vector
 */
export function addObjects(
  vector: Vector2DObject,
  otherVector: Vector2DObject
): Vector2DObject {
  return addObjectsTo(vector, otherVector, zeroObject())
}

/**
 * Adds the result of the addition of vector and the otherVector to the reference.
 *
 * @param {Vector2DObject} vector - first operand
 * @param {Vector2DObject} otherVector - second operand
 * @param {Vector2DObject} ref - the reference
 * @returns {Vector2DObject} the modified reference
 */
export function addObjectsTo(
  vector: Vector2DObject,
  otherVector: Vector2DObject,
  ref: Vector2DObject
): Vector2DObject {
  ref.x = vector.x + otherVector.x
  ref.y = vector.y + otherVector.y
  return ref
}

export function addObjectsX(
  vector: Vector2DObject,
  otherVector: Vector2DObject
): Vector2DObject {
  return addObjectsToX(vector, otherVector, zeroObject())
}

export function addObjectsToX(
  vector: Vector2DObject,
  otherVector: Vector2DObject,
  ref: Vector2DObject
): Vector2DObject {
  ref.x = vector.x + otherVector.x
  return ref
}

export function addObjectsY(
  vector: Vector2DObject,
  otherVector: Vector2DObject
): Vector2DObject {
  return addObjectsToY(vector, otherVector, zeroObject())
}

export function addObjectsToY(
  vector: Vector2DObject,
  otherVector: Vector2DObject,
  ref: Vector2DObject
): Vector2DObject {
  ref.y = vector.y + otherVector.y
  return ref
}

export function addObject(
  vector: Vector2DObject,
  value: number
): Vector2DObject {
  return addObjectTo(vector, value, zeroObject())
}

export function addObjectTo(
  vector: Vector2DObject,
  value: number,
  ref: Vector2DObject
): Vector2DObject {
  ref.x = vector.x + value
  ref.y = vector.y + value
  return ref
}

export function addObjectX(vector: Vector2DObject, x: number): Vector2DObject {
  return addObjectToX(vector, x, zeroObject())
}

export function addObjectToX(
  vector: Vector2DObject,
  x: number,
  ref: Vector2DObject
): Vector2DObject {
  ref.x = vector.x + x
  return ref
}

export function addObjectY(vector: Vector2DObject, y: number): Vector2DObject {
  return addObjectToY(vector, y, zeroObject())
}

export function addObjectToY(
  vector: Vector2DObject,
  y: number,
  ref: Vector2DObject
): Vector2DObject {
  ref.y = vector.y + y
  return ref
}
