import type { Object2D } from '../../../../../types'

/**
 * TBD.
 *
 * @param {V} vector - First vector operand
 * @param {V} otherVector - Second vector operand
 * @param {V} referenceVector - The reference vector
 * @returns {V} The modified reference vector
 */
function multiply<V extends Object2D>(vector: V, otherVector: V, referenceVector: V): V {
  referenceVector.x = vector.x * otherVector.x
  referenceVector.y = vector.y * otherVector.y
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
function multiplyX<V extends Object2D>(vector: V, otherVector: V, referenceVector: V): V {
  referenceVector.x = vector.x * otherVector.x
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
function multiplyY<V extends Object2D>(vector: V, otherVector: V, referenceVector: V): V {
  referenceVector.y = vector.y * otherVector.y
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
function multiplyScalar<V extends Object2D>(vector: V, value: number, referenceVector: V): V {
  referenceVector.x = vector.x * value
  referenceVector.y = vector.y * value
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
function multiplyScalarX<V extends Object2D>(vector: V, x: number, referenceVector: V): V {
  referenceVector.x = vector.x * x
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
function multiplyScalarY<V extends Object2D>(vector: V, y: number, referenceVector: V): V {
  referenceVector.y = vector.y * y
  return referenceVector
}

export { multiply as multiplyObject }
export { multiplyX as multiplyObjectX }
export { multiplyY as multiplyObjectY }
export { multiplyScalar as multiplyObjectScalar }
export { multiplyScalarX as multiplyObjectScalarX }
export { multiplyScalarY as multiplyObjectScalarY }
