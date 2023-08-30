import type { Object2D } from '../../../../../types'

/**
 * TBD.
 *
 * @param {V} vector - First vector operand
 * @param {V} otherVector - Second vector operand
 * @param {V} referenceVector - The reference vector
 * @returns {V} The modified reference vector
 */
function divide<V extends Object2D>(vector: V, otherVector: V, referenceVector: V): V {
  referenceVector.x = vector.x / otherVector.x
  referenceVector.y = vector.y / otherVector.y
  return referenceVector
}

/**
 * TBD.
 *
 * @param {V} vector - First vector operand
 * @param {V} otherVector - Second vector operand
 * @param {V} referenceVector - The reference
 * @returns {V} The modified reference vector
 */
function divideX<V extends Object2D>(vector: V, otherVector: V, referenceVector: V): V {
  referenceVector.x = vector.x / otherVector.x
  return referenceVector
}

/**
 * TBD.
 *
 * @param {V} vector - First vector operand
 * @param {V} otherVector - Second vector operand
 * @param {V} referenceVector - The reference vector
 * @returns {V} The modified reference vector
 */
function divideY<V extends Object2D>(vector: V, otherVector: V, referenceVector: V): V {
  referenceVector.y = vector.y / otherVector.y
  return referenceVector
}

/**
 * TBD.
 *
 * @param {V} vector - First vector operand
 * @param {V} value - Value to divide
 * @param {V} referenceVector - The reference vector
 * @returns {V} The modified reference vector
 */
function divideScalar<V extends Object2D>(vector: V, value: number, referenceVector: V): V {
  referenceVector.x = vector.x / value
  referenceVector.y = vector.y / value
  return referenceVector
}

/**
 * TBD.
 *
 * @param {V} vector - First vector operand
 * @param {V} x - Value to divide to x
 * @param {V} referenceVector - The reference vector
 * @returns {V} The resulting vector
 */
function divideScalarX<V extends Object2D>(vector: V, x: number, referenceVector: V): V {
  referenceVector.x = vector.x / x
  return referenceVector
}

/**
 * TBD.
 *
 * @param {V} vector - First vector operand
 * @param {V} y - Value to divide to y
 * @param {V} referenceVector - The reference vector
 * @returns {V} The resulting vector
 */
function divideScalarY<V extends Object2D>(vector: V, y: number, referenceVector: V): V {
  referenceVector.y = vector.y / y
  return referenceVector
}

export { divide as divideObject }
export { divideX as divideObjectX }
export { divideY as divideObjectY }
export { divideScalar as divideObjectScalar }
export { divideScalarX as divideObjectScalarX }
export { divideScalarY as divideObjectScalarY }
