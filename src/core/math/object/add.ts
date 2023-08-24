import { Object2D } from '../../../types'
import { zeroObject } from '../../util/object'

/**
 * Computes a new vector, result of the addition of {@link vector} and the {@link otherVector}.
 *
 * @param {Object2D} vector - First vector operand
 * @param {Object2D} otherVector - Second vector operand
 * @returns {Object2D} The resulting vector
 */
function add(vector: Object2D, otherVector: Object2D): Object2D {
  return addRef(vector, otherVector, zeroObject())
}

/**
 * Adds the result of the addition of {@link vector} and the {@link otherVector} to {@link referenceVector}.
 *
 * @param {Object2D} vector - First vector operand
 * @param {Object2D} otherVector - Second vector operand
 * @param {Object2D} referenceVector - The reference vector
 * @returns {Object2D} The modified reference vector
 */
function addRef(vector: Object2D, otherVector: Object2D, referenceVector: Object2D): Object2D {
  referenceVector.x = vector.x + otherVector.x
  referenceVector.y = vector.y + otherVector.y
  return referenceVector
}

/**
 * Computes a new vector, sum of {@link otherVector.x} and {@link vector.x}.
 *
 * @param {Object2D} vector - First vector operand
 * @param {Object2D} otherVector - Second vector operand
 * @returns {Object2D} The resulting vector
 */
function addX(vector: Object2D, otherVector: Object2D): Object2D {
  return addRef(vector, otherVector, zeroObject())
}

/**
 * Sums {@link vector.x} and {@link otherVector.x} to {@link referenceVector} and returns it.
 *
 * @param {Object2D} vector - First vector operand
 * @param {Object2D} otherVector - Second vector operand
 * @param {Object2D} referenceVector - The reference
 * @returns {Object2D} The modified reference vector
 */
function addRefX(vector: Object2D, otherVector: Object2D, referenceVector: Object2D): Object2D {
  referenceVector.x = vector.x + otherVector.x
  return referenceVector
}

/**
 * Computes a new vector, sum of {@link otherVector.y} and {@link vector.y}.
 *
 * @param {Object2D} vector - First vector operand
 * @param {Object2D} otherVector - Second vector operand
 * @returns {Object2D} The resulting vector
 */
function addY(vector: Object2D, otherVector: Object2D): Object2D {
  return addRefY(vector, otherVector, zeroObject())
}

/**
 * Sums {@link vector.y} and {@link otherVector.y} to {@link referenceVector} and returns it.
 *
 * @param {Object2D} vector - First vector operand
 * @param {Object2D} otherVector - Second vector operand
 * @param {Object2D} referenceVector - The reference vector
 * @returns {Object2D} The modified reference vector
 */
function addRefY(vector: Object2D, otherVector: Object2D, referenceVector: Object2D): Object2D {
  referenceVector.y = vector.y + otherVector.y
  return referenceVector
}

/**
 * Computes a new vector, sum of {@link vector} and {@link value}.
 *
 * @param {Object2D} vector - First vector operand
 * @param {Object2D} value - Value to add
 * @returns {Object2D} The resulting vector
 */
function addScalar(vector: Object2D, value: number): Object2D {
  return addScalarRef(vector, value, zeroObject())
}

/**
 * Sums {@link vector} and {@link value} to {@link referenceVector} and returns it.
 *
 * @param {Object2D} vector - First vector operand
 * @param {Object2D} value - Value to add
 * @param {Object2D} referenceVector - The reference vector
 * @returns {Object2D} The modified reference vector
 */
function addScalarRef(vector: Object2D, value: number, referenceVector: Object2D): Object2D {
  referenceVector.x = vector.x + value
  referenceVector.y = vector.y + value
  return referenceVector
}

/**
 * Computes a new vector, sum of {@link vector.x} and {@link x}.
 *
 * @param {Object2D} vector - First vector operand
 * @param {Object2D} x - Value to add to x
 * @returns {Object2D} The resulting vector
 */
function addScalarX(vector: Object2D, x: number): Object2D {
  return addScalarRefX(vector, x, zeroObject())
}

/**
 * Sums {@link vector.x} and {@link x} to {@link referenceVector} and returns it.
 *
 * @param {Object2D} vector - First vector operand
 * @param {Object2D} x - Value to add to x
 * @param {Object2D} referenceVector - The reference vector
 * @returns {Object2D} The resulting vector
 */
function addScalarRefX(vector: Object2D, x: number, referenceVector: Object2D): Object2D {
  referenceVector.x = vector.x + x
  return referenceVector
}

/**
 * Computes a new vector, sum of {@link vector.t} and {@link y}.
 *
 * @param {Object2D} vector - First vector operand
 * @param {Object2D} y - Value to add to y
 * @returns {Object2D} The resulting vector
 */
function addScalarY(vector: Object2D, y: number): Object2D {
  return addScalarRefY(vector, y, zeroObject())
}

/**
 * Sums {@link vector.y} and {@link y} to {@link referenceVector} and returns it.
 *
 * @param {Object2D} vector - First vector operand
 * @param {Object2D} y - Value to add to y
 * @param {Object2D} referenceVector - The reference vector
 * @returns {Object2D} The resulting vector
 */
function addScalarRefY(vector: Object2D, y: number, referenceVector: Object2D): Object2D {
  referenceVector.y = vector.y + y
  return referenceVector
}

export { add as addObjects }
export { addRef as addObjectsTo }
export { addX as addObjectsX }
export { addRefX as addObjectsToX }
export { addY as addObjectsY }
export { addRefY as addObjectsToY }
export { addScalar as addObject }
export { addScalarRef as addObjectTo }
export { addScalarX as addObjectX }
export { addScalarRefX as addObjectToX }
export { addScalarY as addObjectY }
export { addScalarRefY as addObjectToY }
