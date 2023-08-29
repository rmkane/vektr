import { Object2D } from '../../../../types'
import { zeroObject } from '../../../util/object'

/**
 * TBD.
 *
 * @param {Object2D} vector - First vector operand
 * @param {Object2D} otherVector - Second vector operand
 * @returns {Object2D} The resulting vector
 */
function multiply(vector: Object2D, otherVector: Object2D): Object2D {
  return multiplyRef(vector, otherVector, zeroObject())
}

/**
 * TBD.
 *
 * @param {Object2D} vector - First vector operand
 * @param {Object2D} otherVector - Second vector operand
 * @param {Object2D} referenceVector - The reference vector
 * @returns {Object2D} The modified reference vector
 */
function multiplyRef(vector: Object2D, otherVector: Object2D, referenceVector: Object2D): Object2D {
  referenceVector.x = vector.x * otherVector.x
  referenceVector.y = vector.y * otherVector.y
  return referenceVector
}

/**
 * TBD.
 *
 * @param {Object2D} vector - First vector operand
 * @param {Object2D} otherVector - Second vector operand
 * @returns {Object2D} The resulting vector
 */
function multiplyX(vector: Object2D, otherVector: Object2D): Object2D {
  return multiplyRef(vector, otherVector, zeroObject())
}

/**
 * TBD.
 *
 * @param {Object2D} vector - First vector operand
 * @param {Object2D} otherVector - Second vector operand
 * @param {Object2D} referenceVector - The reference
 * @returns {Object2D} The modified reference vector
 */
function multiplyRefX(vector: Object2D, otherVector: Object2D, referenceVector: Object2D): Object2D {
  referenceVector.x = vector.x * otherVector.x
  return referenceVector
}

/**
 * TBD.
 *
 * @param {Object2D} vector - First vector operand
 * @param {Object2D} otherVector - Second vector operand
 * @returns {Object2D} The resulting vector
 */
function multiplyY(vector: Object2D, otherVector: Object2D): Object2D {
  return multiplyRefY(vector, otherVector, zeroObject())
}

/**
 * TBD.
 *
 * @param {Object2D} vector - First vector operand
 * @param {Object2D} otherVector - Second vector operand
 * @param {Object2D} referenceVector - The reference vector
 * @returns {Object2D} The modified reference vector
 */
function multiplyRefY(vector: Object2D, otherVector: Object2D, referenceVector: Object2D): Object2D {
  referenceVector.y = vector.y * otherVector.y
  return referenceVector
}

/**
 * TBD.
 *
 * @param {Object2D} vector - First vector operand
 * @param {Object2D} value - Value to multiply
 * @returns {Object2D} The resulting vector
 */
function multiplyScalar(vector: Object2D, value: number): Object2D {
  return multiplyScalarRef(vector, value, zeroObject())
}

/**
 * TBD.
 *
 * @param {Object2D} vector - First vector operand
 * @param {Object2D} value - Value to multiply
 * @param {Object2D} referenceVector - The reference vector
 * @returns {Object2D} The modified reference vector
 */
function multiplyScalarRef(vector: Object2D, value: number, referenceVector: Object2D): Object2D {
  referenceVector.x = vector.x * value
  referenceVector.y = vector.y * value
  return referenceVector
}

/**
 * TBD.
 *
 * @param {Object2D} vector - First vector operand
 * @param {Object2D} x - Value to multiply to x
 * @returns {Object2D} The resulting vector
 */
function multiplyScalarX(vector: Object2D, x: number): Object2D {
  return multiplyScalarRefX(vector, x, zeroObject())
}

/**
 * TBD.
 *
 * @param {Object2D} vector - First vector operand
 * @param {Object2D} x - Value to multiply to x
 * @param {Object2D} referenceVector - The reference vector
 * @returns {Object2D} The resulting vector
 */
function multiplyScalarRefX(vector: Object2D, x: number, referenceVector: Object2D): Object2D {
  referenceVector.x = vector.x * x
  return referenceVector
}

/**
 * TBD.
 *
 * @param {Object2D} vector - First vector operand
 * @param {Object2D} y - Value to multiply to y
 * @returns {Object2D} The resulting vector
 */
function multiplyScalarY(vector: Object2D, y: number): Object2D {
  return multiplyScalarRefY(vector, y, zeroObject())
}

/**
 * TBD.
 *
 * @param {Object2D} vector - First vector operand
 * @param {Object2D} y - Value to multiply to y
 * @param {Object2D} referenceVector - The reference vector
 * @returns {Object2D} The resulting vector
 */
function multiplyScalarRefY(vector: Object2D, y: number, referenceVector: Object2D): Object2D {
  referenceVector.y = vector.y * y
  return referenceVector
}

export { multiply as multiplyObject }
export { multiplyRef as multiplyObjectRef }
export { multiplyX as multiplyObjectX }
export { multiplyRefX as multiplyObjectRefX }
export { multiplyY as multiplyObjectY }
export { multiplyRefY as multiplyObjectRefY }
export { multiplyScalar as multiplyObjectScalar }
export { multiplyScalarRef as multiplyObjectScalarRef }
export { multiplyScalarX as multiplyObjectScalarX }
export { multiplyScalarRefX as multiplyObjectScalarRefX }
export { multiplyScalarY as multiplyObjectScalarY }
export { multiplyScalarRefY as multiplyObjectScalarRefY }
