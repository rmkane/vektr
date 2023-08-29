import type { Array2D } from '../../../../../types'
import { zeroArray } from '../../../../util/array'

/**
 * TBD.
 *
 * @param {Array2D} vector - First vector operand
 * @param {Array2D} otherVector - Second vector operand
 * @returns {Array2D} The resulting vector
 */
function subtract(vector: Array2D, otherVector: Array2D): Array2D {
  return subtractRef(vector, otherVector, zeroArray())
}

/**
 * TBD.
 *
 * @param {Array2D} vector - First vector operand
 * @param {Array2D} otherVector - Second vector operand
 * @param {Array2D} referenceVector - The reference vector
 * @returns {Array2D} The modified reference vector
 */
function subtractRef(vector: Array2D, otherVector: Array2D, referenceVector: Array2D): Array2D {
  referenceVector[0] = vector[0] - otherVector[0]
  referenceVector[1] = vector[1] - otherVector[1]
  return referenceVector
}

/**
 * TBD.
 *
 * @param {Array2D} vector - First vector operand
 * @param {Array2D} otherVector - Second vector operand
 * @returns {Array2D} The resulting vector
 */
function subtractX(vector: Array2D, otherVector: Array2D): Array2D {
  return subtractRef(vector, otherVector, zeroArray())
}

/**
 * TBD.
 *
 * @param {Array2D} vector - First vector operand
 * @param {Array2D} otherVector - Second vector operand
 * @param {Array2D} referenceVector - The reference
 * @returns {Array2D} The modified reference vector
 */
function subtractRefX(vector: Array2D, otherVector: Array2D, referenceVector: Array2D): Array2D {
  referenceVector[0] = vector[0] - otherVector[0]
  return referenceVector
}

/**
 * TBD.
 *
 * @param {Array2D} vector - First vector operand
 * @param {Array2D} otherVector - Second vector operand
 * @returns {Array2D} The resulting vector
 */
function subtractY(vector: Array2D, otherVector: Array2D): Array2D {
  return subtractRefY(vector, otherVector, zeroArray())
}

/**
 * TBD.
 *
 * @param {Array2D} vector - First vector operand
 * @param {Array2D} otherVector - Second vector operand
 * @param {Array2D} referenceVector - The reference vector
 * @returns {Array2D} The modified reference vector
 */
function subtractRefY(vector: Array2D, otherVector: Array2D, referenceVector: Array2D): Array2D {
  referenceVector[1] = vector[1] - otherVector[1]
  return referenceVector
}

/**
 * TBD.
 *
 * @param {Array2D} vector - First vector operand
 * @param {Array2D} value - Value to subtract
 * @returns {Array2D} The resulting vector
 */
function subtractScalar(vector: Array2D, value: number): Array2D {
  return subtractScalarRef(vector, value, zeroArray())
}

/**
 * TBD.
 *
 * @param {Array2D} vector - First vector operand
 * @param {Array2D} value - Value to subtract
 * @param {Array2D} referenceVector - The reference vector
 * @returns {Array2D} The modified reference vector
 */
function subtractScalarRef(vector: Array2D, value: number, referenceVector: Array2D): Array2D {
  referenceVector[0] = vector[0] - value
  referenceVector[1] = vector[1] - value
  return referenceVector
}

/**
 * TBD.
 *
 * @param {Array2D} vector - First vector operand
 * @param {Array2D} x - Value to subtract to x
 * @returns {Array2D} The resulting vector
 */
function subtractScalarX(vector: Array2D, x: number): Array2D {
  return subtractScalarRefX(vector, x, zeroArray())
}

/**
 * TBD.
 *
 * @param {Array2D} vector - First vector operand
 * @param {Array2D} x - Value to subtract to x
 * @param {Array2D} referenceVector - The reference vector
 * @returns {Array2D} The resulting vector
 */
function subtractScalarRefX(vector: Array2D, x: number, referenceVector: Array2D): Array2D {
  referenceVector[0] = vector[0] - x
  return referenceVector
}

/**
 * TBD.
 *
 * @param {Array2D} vector - First vector operand
 * @param {Array2D} y - Value to subtract to y
 * @returns {Array2D} The resulting vector
 */
function subtractScalarY(vector: Array2D, y: number): Array2D {
  return subtractScalarRefY(vector, y, zeroArray())
}

/**
 * TBD.
 *
 * @param {Array2D} vector - First vector operand
 * @param {Array2D} y - Value to subtract to y
 * @param {Array2D} referenceVector - The reference vector
 * @returns {Array2D} The resulting vector
 */
function subtractScalarRefY(vector: Array2D, y: number, referenceVector: Array2D): Array2D {
  referenceVector[1] = vector[1] - y
  return referenceVector
}

export { subtract as subtractArray }
export { subtractRef as subtractArrayRef }
export { subtractX as subtractArrayX }
export { subtractRefX as subtractArrayRefX }
export { subtractY as subtractArrayY }
export { subtractRefY as subtractArrayRefY }
export { subtractScalar as subtractArrayScalar }
export { subtractScalarRef as subtractArrayScalarRef }
export { subtractScalarX as subtractArrayScalarX }
export { subtractScalarRefX as subtractArrayScalarRefX }
export { subtractScalarY as subtractArrayScalarY }
export { subtractScalarRefY as subtractArrayScalarRefY }
