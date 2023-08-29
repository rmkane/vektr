import type { Array2D } from '../../../../../types'
import { zeroArray } from '../../../../util/array'

/**
 * TBD.
 *
 * @param {Array2D} vector - First vector operand
 * @param {Array2D} otherVector - Second vector operand
 * @returns {Array2D} The resulting vector
 */
function multiply(vector: Array2D, otherVector: Array2D): Array2D {
  return multiplyRef(vector, otherVector, zeroArray())
}

/**
 * TBD.
 *
 * @param {Array2D} vector - First vector operand
 * @param {Array2D} otherVector - Second vector operand
 * @param {Array2D} referenceVector - The reference vector
 * @returns {Array2D} The modified reference vector
 */
function multiplyRef(vector: Array2D, otherVector: Array2D, referenceVector: Array2D): Array2D {
  referenceVector[0] = vector[0] * otherVector[0]
  referenceVector[1] = vector[1] * otherVector[1]
  return referenceVector
}

/**
 * TBD.
 *
 * @param {Array2D} vector - First vector operand
 * @param {Array2D} otherVector - Second vector operand
 * @returns {Array2D} The resulting vector
 */
function multiplyX(vector: Array2D, otherVector: Array2D): Array2D {
  return multiplyRef(vector, otherVector, zeroArray())
}

/**
 * TBD.
 *
 * @param {Array2D} vector - First vector operand
 * @param {Array2D} otherVector - Second vector operand
 * @param {Array2D} referenceVector - The reference
 * @returns {Array2D} The modified reference vector
 */
function multiplyRefX(vector: Array2D, otherVector: Array2D, referenceVector: Array2D): Array2D {
  referenceVector[0] = vector[0] * otherVector[0]
  return referenceVector
}

/**
 * TBD.
 *
 * @param {Array2D} vector - First vector operand
 * @param {Array2D} otherVector - Second vector operand
 * @returns {Array2D} The resulting vector
 */
function multiplyY(vector: Array2D, otherVector: Array2D): Array2D {
  return multiplyRefY(vector, otherVector, zeroArray())
}

/**
 * TBD.
 *
 * @param {Array2D} vector - First vector operand
 * @param {Array2D} otherVector - Second vector operand
 * @param {Array2D} referenceVector - The reference vector
 * @returns {Array2D} The modified reference vector
 */
function multiplyRefY(vector: Array2D, otherVector: Array2D, referenceVector: Array2D): Array2D {
  referenceVector[1] = vector[1] * otherVector[1]
  return referenceVector
}

/**
 * TBD.
 *
 * @param {Array2D} vector - First vector operand
 * @param {Array2D} value - Value to multiply
 * @returns {Array2D} The resulting vector
 */
function multiplyScalar(vector: Array2D, value: number): Array2D {
  return multiplyScalarRef(vector, value, zeroArray())
}

/**
 * TBD.
 *
 * @param {Array2D} vector - First vector operand
 * @param {Array2D} value - Value to multiply
 * @param {Array2D} referenceVector - The reference vector
 * @returns {Array2D} The modified reference vector
 */
function multiplyScalarRef(vector: Array2D, value: number, referenceVector: Array2D): Array2D {
  referenceVector[0] = vector[0] * value
  referenceVector[1] = vector[1] * value
  return referenceVector
}

/**
 * TBD.
 *
 * @param {Array2D} vector - First vector operand
 * @param {Array2D} x - Value to multiply to x
 * @returns {Array2D} The resulting vector
 */
function multiplyScalarX(vector: Array2D, x: number): Array2D {
  return multiplyScalarRefX(vector, x, zeroArray())
}

/**
 * TBD.
 *
 * @param {Array2D} vector - First vector operand
 * @param {Array2D} x - Value to multiply to x
 * @param {Array2D} referenceVector - The reference vector
 * @returns {Array2D} The resulting vector
 */
function multiplyScalarRefX(vector: Array2D, x: number, referenceVector: Array2D): Array2D {
  referenceVector[0] = vector[0] * x
  return referenceVector
}

/**
 * TBD.
 *
 * @param {Array2D} vector - First vector operand
 * @param {Array2D} y - Value to multiply to y
 * @returns {Array2D} The resulting vector
 */
function multiplyScalarY(vector: Array2D, y: number): Array2D {
  return multiplyScalarRefY(vector, y, zeroArray())
}

/**
 * TBD.
 *
 * @param {Array2D} vector - First vector operand
 * @param {Array2D} y - Value to multiply to y
 * @param {Array2D} referenceVector - The reference vector
 * @returns {Array2D} The resulting vector
 */
function multiplyScalarRefY(vector: Array2D, y: number, referenceVector: Array2D): Array2D {
  referenceVector[1] = vector[1] * y
  return referenceVector
}

export { multiply as multiplyArray }
export { multiplyRef as multiplyArrayRef }
export { multiplyX as multiplyArrayX }
export { multiplyRefX as multiplyArrayRefX }
export { multiplyY as multiplyArrayY }
export { multiplyRefY as multiplyArrayRefY }
export { multiplyScalar as multiplyArrayScalar }
export { multiplyScalarRef as multiplyArrayScalarRef }
export { multiplyScalarX as multiplyArrayScalarX }
export { multiplyScalarRefX as multiplyArrayScalarRefX }
export { multiplyScalarY as multiplyArrayScalarY }
export { multiplyScalarRefY as multiplyArrayScalarRefY }
