import type { Array2D } from '../../../../../types'
import { zeroArray } from '../../../../util/array'

/**
 * Computes a new vector, result of the addition of {@link vector} and the {@link otherVector}.
 *
 * @param {Array2D} vector - First vector operand
 * @param {Array2D} otherVector - Second vector operand
 * @returns {Array2D} The resulting vector
 */
function add(vector: Array2D, otherVector: Array2D): Array2D {
  return addRef(vector, otherVector, zeroArray())
}

/**
 * Adds the result of the addition of {@link vector} and the {@link otherVector} to {@link referenceVector}.
 *
 * @param {Array2D} vector - First vector operand
 * @param {Array2D} otherVector - Second vector operand
 * @param {Array2D} referenceVector - The reference vector
 * @returns {Array2D} The modified reference vector
 */
function addRef(vector: Array2D, otherVector: Array2D, referenceVector: Array2D): Array2D {
  referenceVector[0] = vector[0] + otherVector[0]
  referenceVector[1] = vector[1] + otherVector[1]
  return referenceVector
}

/**
 * Computes a new vector, sum of {@link otherVector} and {@link vector} x-coordinates.
 *
 * @param {Array2D} vector - First vector operand
 * @param {Array2D} otherVector - Second vector operand
 * @returns {Array2D} The resulting vector
 */
function addX(vector: Array2D, otherVector: Array2D): Array2D {
  return addRef(vector, otherVector, zeroArray())
}

/**
 * Sums the {@link vector} x-coordinate and {@link otherVector} to {@link referenceVector} and returns it.
 *
 * @param {Array2D} vector - First vector operand
 * @param {Array2D} otherVector - Second vector operand
 * @param {Array2D} referenceVector - The reference
 * @returns {Array2D} The modified reference vector
 */
function addRefX(vector: Array2D, otherVector: Array2D, referenceVector: Array2D): Array2D {
  referenceVector[0] = vector[0] + otherVector[0]
  return referenceVector
}

/**
 * Computes a new vector, sum of {@link otherVector} and {@link vector} y-coordinates.
 *
 * @param {Array2D} vector - First vector operand
 * @param {Array2D} otherVector - Second vector operand
 * @returns {Array2D} The resulting vector
 */
function addY(vector: Array2D, otherVector: Array2D): Array2D {
  return addRefY(vector, otherVector, zeroArray())
}

/**
 * Sums {@link vector} and {@link otherVector} y-coordinates to {@link referenceVector} and returns it.
 *
 * @param {Array2D} vector - First vector operand
 * @param {Array2D} otherVector - Second vector operand
 * @param {Array2D} referenceVector - The reference vector
 * @returns {Array2D} The modified reference vector
 */
function addRefY(vector: Array2D, otherVector: Array2D, referenceVector: Array2D): Array2D {
  referenceVector[1] = vector[1] + otherVector[1]
  return referenceVector
}

/**
 * Computes a new vector, sum of {@link vector} and {@link value}.
 *
 * @param {Array2D} vector - First vector operand
 * @param {Array2D} value - Value to add
 * @returns {Array2D} The resulting vector
 */
function addScalar(vector: Array2D, value: number): Array2D {
  return addScalarRef(vector, value, zeroArray())
}

/**
 * Sums {@link vector} and {@link value} to {@link referenceVector} and returns it.
 *
 * @param {Array2D} vector - First vector operand
 * @param {Array2D} value - Value to add
 * @param {Array2D} referenceVector - The reference vector
 * @returns {Array2D} The modified reference vector
 */
function addScalarRef(vector: Array2D, value: number, referenceVector: Array2D): Array2D {
  referenceVector[0] = vector[0] + value
  referenceVector[1] = vector[1] + value
  return referenceVector
}

/**
 * Computes a new vector, sum of the {@link vector} x-coordinate and {@link x}.
 *
 * @param {Array2D} vector - First vector operand
 * @param {Array2D} x - Value to add to x
 * @returns {Array2D} The resulting vector
 */
function addScalarX(vector: Array2D, x: number): Array2D {
  return addScalarRefX(vector, x, zeroArray())
}

/**
 * Sums the {@link vector} x-coordinate and {@link x} to {@link referenceVector} and returns it.
 *
 * @param {Array2D} vector - First vector operand
 * @param {Array2D} x - Value to add to x
 * @param {Array2D} referenceVector - The reference vector
 * @returns {Array2D} The resulting vector
 */
function addScalarRefX(vector: Array2D, x: number, referenceVector: Array2D): Array2D {
  referenceVector[0] = vector[0] + x
  return referenceVector
}

/**
 * Computes a new vector, sum of the {@link vector} y-coordinates and {@link y}.
 *
 * @param {Array2D} vector - First vector operand
 * @param {Array2D} y - Value to add to y
 * @returns {Array2D} The resulting vector
 */
function addScalarY(vector: Array2D, y: number): Array2D {
  return addScalarRefY(vector, y, zeroArray())
}

/**
 * Sums the {@link vector} y-coordinate and {@link y} to {@link referenceVector} and returns it.
 *
 * @param {Array2D} vector - First vector operand
 * @param {Array2D} y - Value to add to y
 * @param {Array2D} referenceVector - The reference vector
 * @returns {Array2D} The resulting vector
 */
function addScalarRefY(vector: Array2D, y: number, referenceVector: Array2D): Array2D {
  referenceVector[1] = vector[1] + y
  return referenceVector
}

export { add as addArray }
export { addRef as addArrayRef }
export { addX as addArrayX }
export { addRefX as addArrayRefX }
export { addY as addArrayY }
export { addRefY as addArrayRefY }
export { addScalar as addArrayScalar }
export { addScalarRef as addArrayScalarRef }
export { addScalarX as addArrayScalarX }
export { addScalarRefX as addArrayScalarRefX }
export { addScalarY as addArrayScalarY }
export { addScalarRefY as addArrayScalarRefY }
