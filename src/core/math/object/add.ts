import { Object2D } from '../../../types'
import { zeroObject } from '../../util/object'

/**
 * Computes a new vector, result of the addition of vector and the otherVector.
 *
 * @param {Object2D} vector - first operand
 * @param {Object2D} otherVector - second operand
 * @returns {Object2D} the resulting vector
 */
export function addObjects(vector: Object2D, otherVector: Object2D): Object2D {
  return addObjectsTo(vector, otherVector, zeroObject())
}

/**
 * Adds the result of the addition of vector and the otherVector to the reference.
 *
 * @param {Object2D} vector - first operand
 * @param {Object2D} otherVector - second operand
 * @param {Object2D} ref - the reference
 * @returns {Object2D} the modified reference
 */
export function addObjectsTo(
  vector: Object2D,
  otherVector: Object2D,
  ref: Object2D
): Object2D {
  ref.x = vector.x + otherVector.x
  ref.y = vector.y + otherVector.y
  return ref
}

export function addObjectsX(vector: Object2D, otherVector: Object2D): Object2D {
  return addObjectsToX(vector, otherVector, zeroObject())
}

export function addObjectsToX(
  vector: Object2D,
  otherVector: Object2D,
  ref: Object2D
): Object2D {
  ref.x = vector.x + otherVector.x
  return ref
}

export function addObjectsY(vector: Object2D, otherVector: Object2D): Object2D {
  return addObjectsToY(vector, otherVector, zeroObject())
}

export function addObjectsToY(
  vector: Object2D,
  otherVector: Object2D,
  ref: Object2D
): Object2D {
  ref.y = vector.y + otherVector.y
  return ref
}

export function addObject(vector: Object2D, value: number): Object2D {
  return addObjectTo(vector, value, zeroObject())
}

export function addObjectTo(
  vector: Object2D,
  value: number,
  ref: Object2D
): Object2D {
  ref.x = vector.x + value
  ref.y = vector.y + value
  return ref
}

export function addObjectX(vector: Object2D, x: number): Object2D {
  return addObjectToX(vector, x, zeroObject())
}

export function addObjectToX(
  vector: Object2D,
  x: number,
  ref: Object2D
): Object2D {
  ref.x = vector.x + x
  return ref
}

export function addObjectY(vector: Object2D, y: number): Object2D {
  return addObjectToY(vector, y, zeroObject())
}

export function addObjectToY(
  vector: Object2D,
  y: number,
  ref: Object2D
): Object2D {
  ref.y = vector.y + y
  return ref
}
