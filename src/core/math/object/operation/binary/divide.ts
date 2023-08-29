import { Object2D } from '../../../../../types'
import { zeroObject } from '../../../../util/object'

/**
 * TBD.
 *
 * @param {Object2D} vector - First vector operand
 * @param {Object2D} otherVector - Second vector operand
 * @returns {Object2D} The resulting vector
 */
function divide(vector: Object2D, otherVector: Object2D): Object2D {
  return divideRef(vector, otherVector, zeroObject())
}

/**
 * TBD.
 *
 * @param {Object2D} vector - First vector operand
 * @param {Object2D} otherVector - Second vector operand
 * @param {Object2D} referenceVector - The reference vector
 * @returns {Object2D} The modified reference vector
 */
function divideRef(vector: Object2D, otherVector: Object2D, referenceVector: Object2D): Object2D {
  referenceVector.x = vector.x / otherVector.x
  referenceVector.y = vector.y / otherVector.y
  return referenceVector
}

/**
 * TBD.
 *
 * @param {Object2D} vector - First vector operand
 * @param {Object2D} otherVector - Second vector operand
 * @returns {Object2D} The resulting vector
 */
function divideX(vector: Object2D, otherVector: Object2D): Object2D {
  return divideRef(vector, otherVector, zeroObject())
}

/**
 * TBD.
 *
 * @param {Object2D} vector - First vector operand
 * @param {Object2D} otherVector - Second vector operand
 * @param {Object2D} referenceVector - The reference
 * @returns {Object2D} The modified reference vector
 */
function divideRefX(vector: Object2D, otherVector: Object2D, referenceVector: Object2D): Object2D {
  referenceVector.x = vector.x / otherVector.x
  return referenceVector
}

/**
 * TBD.
 *
 * @param {Object2D} vector - First vector operand
 * @param {Object2D} otherVector - Second vector operand
 * @returns {Object2D} The resulting vector
 */
function divideY(vector: Object2D, otherVector: Object2D): Object2D {
  return divideRefY(vector, otherVector, zeroObject())
}

/**
 * TBD.
 *
 * @param {Object2D} vector - First vector operand
 * @param {Object2D} otherVector - Second vector operand
 * @param {Object2D} referenceVector - The reference vector
 * @returns {Object2D} The modified reference vector
 */
function divideRefY(vector: Object2D, otherVector: Object2D, referenceVector: Object2D): Object2D {
  referenceVector.y = vector.y / otherVector.y
  return referenceVector
}

/**
 * TBD.
 *
 * @param {Object2D} vector - First vector operand
 * @param {Object2D} value - Value to divide
 * @returns {Object2D} The resulting vector
 */
function divideScalar(vector: Object2D, value: number): Object2D {
  return divideScalarRef(vector, value, zeroObject())
}

/**
 * TBD.
 *
 * @param {Object2D} vector - First vector operand
 * @param {Object2D} value - Value to divide
 * @param {Object2D} referenceVector - The reference vector
 * @returns {Object2D} The modified reference vector
 */
function divideScalarRef(vector: Object2D, value: number, referenceVector: Object2D): Object2D {
  referenceVector.x = vector.x / value
  referenceVector.y = vector.y / value
  return referenceVector
}

/**
 * TBD.
 *
 * @param {Object2D} vector - First vector operand
 * @param {Object2D} x - Value to divide to x
 * @returns {Object2D} The resulting vector
 */
function divideScalarX(vector: Object2D, x: number): Object2D {
  return divideScalarRefX(vector, x, zeroObject())
}

/**
 * TBD.
 *
 * @param {Object2D} vector - First vector operand
 * @param {Object2D} x - Value to divide to x
 * @param {Object2D} referenceVector - The reference vector
 * @returns {Object2D} The resulting vector
 */
function divideScalarRefX(vector: Object2D, x: number, referenceVector: Object2D): Object2D {
  referenceVector.x = vector.x / x
  return referenceVector
}

/**
 * TBD.
 *
 * @param {Object2D} vector - First vector operand
 * @param {Object2D} y - Value to divide to y
 * @returns {Object2D} The resulting vector
 */
function divideScalarY(vector: Object2D, y: number): Object2D {
  return divideScalarRefY(vector, y, zeroObject())
}

/**
 * TBD.
 *
 * @param {Object2D} vector - First vector operand
 * @param {Object2D} y - Value to divide to y
 * @param {Object2D} referenceVector - The reference vector
 * @returns {Object2D} The resulting vector
 */
function divideScalarRefY(vector: Object2D, y: number, referenceVector: Object2D): Object2D {
  referenceVector.y = vector.y / y
  return referenceVector
}

export { divide as divideObject }
export { divideRef as divideObjectRef }
export { divideX as divideObjectX }
export { divideRefX as divideObjectRefX }
export { divideY as divideObjectY }
export { divideRefY as divideObjectRefY }
export { divideScalar as divideObjectScalar }
export { divideScalarRef as divideObjectScalarRef }
export { divideScalarX as divideObjectScalarX }
export { divideScalarRefX as divideObjectScalarRefX }
export { divideScalarY as divideObjectScalarY }
export { divideScalarRefY as divideObjectScalarRefY }
