import type { Array2D } from '../../../../../../types'

/**
 * TBD.
 *
 * @param {V} vector - First vector operand
 * @param {V} otherVector - Second vector operand
 * @param {V} referenceVector - The reference vector
 * @returns {V} The modified reference vector
 */
function divide<V extends Array2D>(vector: V, otherVector: V, referenceVector: V): V {
  referenceVector[0] = vector[0] / otherVector[0]
  referenceVector[1] = vector[1] / otherVector[1]
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
function divideX<V extends Array2D>(vector: V, otherVector: V, referenceVector: V): V {
  referenceVector[0] = vector[0] / otherVector[0]
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
function divideY<V extends Array2D>(vector: V, otherVector: V, referenceVector: V): V {
  referenceVector[1] = vector[1] / otherVector[1]
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
function divideScalar<V extends Array2D>(vector: V, value: number, referenceVector: V): V {
  referenceVector[0] = vector[0] / value
  referenceVector[1] = vector[1] / value
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
function divideScalarX<V extends Array2D>(vector: V, x: number, referenceVector: V): V {
  referenceVector[0] = vector[0] / x
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
function divideScalarY<V extends Array2D>(vector: V, y: number, referenceVector: V): V {
  referenceVector[1] = vector[1] / y
  return referenceVector
}

export { divide as divideArray }
export { divideX as divideArrayX }
export { divideY as divideArrayY }
export { divideScalar as divideArrayScalar }
export { divideScalarX as divideArrayScalarX }
export { divideScalarY as divideArrayScalarY }
