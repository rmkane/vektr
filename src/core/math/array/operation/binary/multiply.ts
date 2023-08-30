import type { Array2D } from '../../../../../types'

/**
 * TBD.
 *
 * @param {V} vector - First vector operand
 * @param {V} otherVector - Second vector operand
 * @param {V} referenceVector - The reference vector
 * @returns {V} The modified reference vector
 */
function multiply<V extends Array2D>(vector: V, otherVector: V, referenceVector: V): V {
  referenceVector[0] = vector[0] * otherVector[0]
  referenceVector[1] = vector[1] * otherVector[1]
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
function multiplyX<V extends Array2D>(vector: V, otherVector: V, referenceVector: V): V {
  referenceVector[0] = vector[0] * otherVector[0]
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
function multiplyY<V extends Array2D>(vector: V, otherVector: V, referenceVector: V): V {
  referenceVector[1] = vector[1] * otherVector[1]
  return referenceVector
}

/**
 * TBD.
 *
 * @param {V} vector - First vector operand
 * @param {V} value - Value to multiply
 * @param {V} referenceVector - The reference vector
 * @returns {V} The modified reference vector
 */
function multiplyScalar<V extends Array2D>(vector: V, value: number, referenceVector: V): V {
  referenceVector[0] = vector[0] * value
  referenceVector[1] = vector[1] * value
  return referenceVector
}

/**
 * TBD.
 *
 * @param {V} vector - First vector operand
 * @param {V} x - Value to multiply to x
 * @param {V} referenceVector - The reference vector
 * @returns {V} The resulting vector
 */
function multiplyScalarX<V extends Array2D>(vector: V, x: number, referenceVector: V): V {
  referenceVector[0] = vector[0] * x
  return referenceVector
}

/**
 * TBD.
 *
 * @param {V} vector - First vector operand
 * @param {V} y - Value to multiply to y
 * @param {V} referenceVector - The reference vector
 * @returns {V} The resulting vector
 */
function multiplyScalarY<V extends Array2D>(vector: V, y: number, referenceVector: V): V {
  referenceVector[1] = vector[1] * y
  return referenceVector
}

export { multiply as multiplyArray }
export { multiplyX as multiplyArrayX }
export { multiplyY as multiplyArrayY }
export { multiplyScalar as multiplyArrayScalar }
export { multiplyScalarX as multiplyArrayScalarX }
export { multiplyScalarY as multiplyArrayScalarY }
