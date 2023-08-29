import type { Object2D } from '../../../../../types'
import { zeroObject } from '../../../../util/object'

/**
 * TBD.
 *
 * @param {Object2D} vector - First vector operand
 * @param {Object2D} otherVector - Second vector operand
 * @returns {Object2D} The resulting vector
 */
function subtract(vector: Object2D, otherVector: Object2D): Object2D {
  return subtractRef(vector, otherVector, zeroObject())
}

/**
 * TBD.
 *
 * @param {Object2D} vector - First vector operand
 * @param {Object2D} otherVector - Second vector operand
 * @param {Object2D} referenceVector - The reference vector
 * @returns {Object2D} The modified reference vector
 */
function subtractRef(vector: Object2D, otherVector: Object2D, referenceVector: Object2D): Object2D {
  referenceVector.x = vector.x - otherVector.x
  referenceVector.y = vector.y - otherVector.y
  return referenceVector
}

/**
 * TBD.
 *
 * @param {Object2D} vector - First vector operand
 * @param {Object2D} otherVector - Second vector operand
 * @returns {Object2D} The resulting vector
 */
function subtractX(vector: Object2D, otherVector: Object2D): Object2D {
  return subtractRef(vector, otherVector, zeroObject())
}

/**
 * TBD.
 *
 * @param {Object2D} vector - First vector operand
 * @param {Object2D} otherVector - Second vector operand
 * @param {Object2D} referenceVector - The reference
 * @returns {Object2D} The modified reference vector
 */
function subtractRefX(vector: Object2D, otherVector: Object2D, referenceVector: Object2D): Object2D {
  referenceVector.x = vector.x - otherVector.x
  return referenceVector
}

/**
 * TBD.
 *
 * @param {Object2D} vector - First vector operand
 * @param {Object2D} otherVector - Second vector operand
 * @returns {Object2D} The resulting vector
 */
function subtractY(vector: Object2D, otherVector: Object2D): Object2D {
  return subtractRefY(vector, otherVector, zeroObject())
}

/**
 * TBD.
 *
 * @param {Object2D} vector - First vector operand
 * @param {Object2D} otherVector - Second vector operand
 * @param {Object2D} referenceVector - The reference vector
 * @returns {Object2D} The modified reference vector
 */
function subtractRefY(vector: Object2D, otherVector: Object2D, referenceVector: Object2D): Object2D {
  referenceVector.y = vector.y - otherVector.y
  return referenceVector
}

/**
 * TBD.
 *
 * @param {Object2D} vector - First vector operand
 * @param {Object2D} value - Value to subtract
 * @returns {Object2D} The resulting vector
 */
function subtractScalar(vector: Object2D, value: number): Object2D {
  return subtractScalarRef(vector, value, zeroObject())
}

/**
 * TBD.
 *
 * @param {Object2D} vector - First vector operand
 * @param {Object2D} value - Value to subtract
 * @param {Object2D} referenceVector - The reference vector
 * @returns {Object2D} The modified reference vector
 */
function subtractScalarRef(vector: Object2D, value: number, referenceVector: Object2D): Object2D {
  referenceVector.x = vector.x - value
  referenceVector.y = vector.y - value
  return referenceVector
}

/**
 * TBD.
 *
 * @param {Object2D} vector - First vector operand
 * @param {Object2D} x - Value to subtract to x
 * @returns {Object2D} The resulting vector
 */
function subtractScalarX(vector: Object2D, x: number): Object2D {
  return subtractScalarRefX(vector, x, zeroObject())
}

/**
 * TBD.
 *
 * @param {Object2D} vector - First vector operand
 * @param {Object2D} x - Value to subtract to x
 * @param {Object2D} referenceVector - The reference vector
 * @returns {Object2D} The resulting vector
 */
function subtractScalarRefX(vector: Object2D, x: number, referenceVector: Object2D): Object2D {
  referenceVector.x = vector.x - x
  return referenceVector
}

/**
 * TBD.
 *
 * @param {Object2D} vector - First vector operand
 * @param {Object2D} y - Value to subtract to y
 * @returns {Object2D} The resulting vector
 */
function subtractScalarY(vector: Object2D, y: number): Object2D {
  return subtractScalarRefY(vector, y, zeroObject())
}

/**
 * TBD.
 *
 * @param {Object2D} vector - First vector operand
 * @param {Object2D} y - Value to subtract to y
 * @param {Object2D} referenceVector - The reference vector
 * @returns {Object2D} The resulting vector
 */
function subtractScalarRefY(vector: Object2D, y: number, referenceVector: Object2D): Object2D {
  referenceVector.y = vector.y - y
  return referenceVector
}

export { subtract as subtractObject }
export { subtractRef as subtractObjectRef }
export { subtractX as subtractObjectX }
export { subtractRefX as subtractObjectRefX }
export { subtractY as subtractObjectY }
export { subtractRefY as subtractObjectRefY }
export { subtractScalar as subtractObjectScalar }
export { subtractScalarRef as subtractObjectScalarRef }
export { subtractScalarX as subtractObjectScalarX }
export { subtractScalarRefX as subtractObjectScalarRefX }
export { subtractScalarY as subtractObjectScalarY }
export { subtractScalarRefY as subtractObjectScalarRefY }
