import { Array2D } from '../../../../../types'
import { zeroArray } from '../../../../util/array'

/**
 * TBD.
 *
 * @param {Array2D} vector - First vector operand
 * @param {Array2D} otherVector - Second vector operand
 * @returns {Array2D} The resulting vector
 */
function divide(vector: Array2D, otherVector: Array2D): Array2D {
  return divideRef(vector, otherVector, zeroArray())
}

/**
 * TBD.
 *
 * @param {Array2D} vector - First vector operand
 * @param {Array2D} otherVector - Second vector operand
 * @param {Array2D} referenceVector - The reference vector
 * @returns {Array2D} The modified reference vector
 */
function divideRef(vector: Array2D, otherVector: Array2D, referenceVector: Array2D): Array2D {
  referenceVector[0] = vector[0] / otherVector[0]
  referenceVector[1] = vector[1] / otherVector[1]
  return referenceVector
}

/**
 * TBD.
 *
 * @param {Array2D} vector - First vector operand
 * @param {Array2D} otherVector - Second vector operand
 * @returns {Array2D} The resulting vector
 */
function divideX(vector: Array2D, otherVector: Array2D): Array2D {
  return divideRef(vector, otherVector, zeroArray())
}

/**
 * TBD.
 *
 * @param {Array2D} vector - First vector operand
 * @param {Array2D} otherVector - Second vector operand
 * @param {Array2D} referenceVector - The reference
 * @returns {Array2D} The modified reference vector
 */
function divideRefX(vector: Array2D, otherVector: Array2D, referenceVector: Array2D): Array2D {
  referenceVector[0] = vector[0] / otherVector[0]
  return referenceVector
}

/**
 * TBD.
 *
 * @param {Array2D} vector - First vector operand
 * @param {Array2D} otherVector - Second vector operand
 * @returns {Array2D} The resulting vector
 */
function divideY(vector: Array2D, otherVector: Array2D): Array2D {
  return divideRefY(vector, otherVector, zeroArray())
}

/**
 * TBD.
 *
 * @param {Array2D} vector - First vector operand
 * @param {Array2D} otherVector - Second vector operand
 * @param {Array2D} referenceVector - The reference vector
 * @returns {Array2D} The modified reference vector
 */
function divideRefY(vector: Array2D, otherVector: Array2D, referenceVector: Array2D): Array2D {
  referenceVector[1] = vector[1] / otherVector[1]
  return referenceVector
}

/**
 * TBD.
 *
 * @param {Array2D} vector - First vector operand
 * @param {Array2D} value - Value to divide
 * @returns {Array2D} The resulting vector
 */
function divideScalar(vector: Array2D, value: number): Array2D {
  return divideScalarRef(vector, value, zeroArray())
}

/**
 * TBD.
 *
 * @param {Array2D} vector - First vector operand
 * @param {Array2D} value - Value to divide
 * @param {Array2D} referenceVector - The reference vector
 * @returns {Array2D} The modified reference vector
 */
function divideScalarRef(vector: Array2D, value: number, referenceVector: Array2D): Array2D {
  referenceVector[0] = vector[0] / value
  referenceVector[1] = vector[1] / value
  return referenceVector
}

/**
 * TBD.
 *
 * @param {Array2D} vector - First vector operand
 * @param {Array2D} x - Value to divide to x
 * @returns {Array2D} The resulting vector
 */
function divideScalarX(vector: Array2D, x: number): Array2D {
  return divideScalarRefX(vector, x, zeroArray())
}

/**
 * TBD.
 *
 * @param {Array2D} vector - First vector operand
 * @param {Array2D} x - Value to divide to x
 * @param {Array2D} referenceVector - The reference vector
 * @returns {Array2D} The resulting vector
 */
function divideScalarRefX(vector: Array2D, x: number, referenceVector: Array2D): Array2D {
  referenceVector[0] = vector[0] / x
  return referenceVector
}

/**
 * TBD.
 *
 * @param {Array2D} vector - First vector operand
 * @param {Array2D} y - Value to divide to y
 * @returns {Array2D} The resulting vector
 */
function divideScalarY(vector: Array2D, y: number): Array2D {
  return divideScalarRefY(vector, y, zeroArray())
}

/**
 * TBD.
 *
 * @param {Array2D} vector - First vector operand
 * @param {Array2D} y - Value to divide to y
 * @param {Array2D} referenceVector - The reference vector
 * @returns {Array2D} The resulting vector
 */
function divideScalarRefY(vector: Array2D, y: number, referenceVector: Array2D): Array2D {
  referenceVector[1] = vector[1] / y
  return referenceVector
}

export { divide as divideArray }
export { divideRef as divideArrayRef }
export { divideX as divideArrayX }
export { divideRefX as divideArrayRefX }
export { divideY as divideArrayY }
export { divideRefY as divideArrayRefY }
export { divideScalar as divideArrayScalar }
export { divideScalarRef as divideArrayScalarRef }
export { divideScalarX as divideArrayScalarX }
export { divideScalarRefX as divideArrayScalarRefX }
export { divideScalarY as divideArrayScalarY }
export { divideScalarRefY as divideArrayScalarRefY }
