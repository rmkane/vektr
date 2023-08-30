import type { Array2D } from '../../../../../types'

/**
 * TBD.
 *
 * @param {V} vector - First vector operand
 * @param {V} otherVector - Second vector operand
 * @param {V} referenceVector - The reference vector
 * @returns {V} The modified reference vector
 */
function subtract<V extends Array2D>(vector: V, otherVector: V, referenceVector: V): V {
  referenceVector[0] = vector[0] - otherVector[0]
  referenceVector[1] = vector[1] - otherVector[1]
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
function subtractX<V extends Array2D>(vector: V, otherVector: V, referenceVector: V): V {
  referenceVector[0] = vector[0] - otherVector[0]
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
function subtractY<V extends Array2D>(vector: V, otherVector: V, referenceVector: V): V {
  referenceVector[1] = vector[1] - otherVector[1]
  return referenceVector
}

/**
 * TBD.
 *
 * @param {V} vector - First vector operand
 * @param {V} value - Value to subtract
 * @param {V} referenceVector - The reference vector
 * @returns {V} The modified reference vector
 */
function subtractScalar<V extends Array2D>(vector: V, value: number, referenceVector: V): V {
  referenceVector[0] = vector[0] - value
  referenceVector[1] = vector[1] - value
  return referenceVector
}

/**
 * TBD.
 *
 * @param {V} vector - First vector operand
 * @param {V} x - Value to subtract to x
 * @param {V} referenceVector - The reference vector
 * @returns {V} The resulting vector
 */
function subtractScalarX<V extends Array2D>(vector: V, x: number, referenceVector: V): V {
  referenceVector[0] = vector[0] - x
  return referenceVector
}

/**
 * TBD.
 *
 * @param {V} vector - First vector operand
 * @param {V} y - Value to subtract to y
 * @param {V} referenceVector - The reference vector
 * @returns {V} The resulting vector
 */
function subtractScalarY<V extends Array2D>(vector: V, y: number, referenceVector: V): V {
  referenceVector[1] = vector[1] - y
  return referenceVector
}

export { subtract as subtractArray }
export { subtractX as subtractArrayX }
export { subtractY as subtractArrayY }
export { subtractScalar as subtractArrayScalar }
export { subtractScalarX as subtractArrayScalarX }
export { subtractScalarY as subtractArrayScalarY }
