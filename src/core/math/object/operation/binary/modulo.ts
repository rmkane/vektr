import type { Object2D } from '../../../../../types'

/**
 * TBD.
 *
 * @param {V} vector - First vector operand
 * @param {V} otherVector - Second vector operand
 * @param {V} referenceVector - The reference vector
 * @returns {V} The modified reference vector
 */
function modulo<V extends Object2D>(vector: V, otherVector: V, referenceVector: V): V {
  referenceVector.x = vector.x % otherVector.x
  referenceVector.y = vector.y % otherVector.y
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
function moduloX<V extends Object2D>(vector: V, otherVector: V, referenceVector: V): V {
  referenceVector.x = vector.x % otherVector.x
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
function moduloY<V extends Object2D>(vector: V, otherVector: V, referenceVector: V): V {
  referenceVector.y = vector.y % otherVector.y
  return referenceVector
}

/**
 * TBD.
 *
 * @param {V} vector - First vector operand
 * @param {V} value - Value to modulo
 * @param {V} referenceVector - The reference vector
 * @returns {V} The modified reference vector
 */
function moduloScalar<V extends Object2D>(vector: V, value: number, referenceVector: V): V {
  referenceVector.x = vector.x % value
  referenceVector.y = vector.y % value
  return referenceVector
}

/**
 * TBD.
 *
 * @param {V} vector - First vector operand
 * @param {V} x - Value to modulo to x
 * @param {V} referenceVector - The reference vector
 * @returns {V} The resulting vector
 */
function moduloScalarX<V extends Object2D>(vector: V, x: number, referenceVector: V): V {
  referenceVector.x = vector.x % x
  return referenceVector
}

/**
 * TBD.
 *
 * @param {V} vector - First vector operand
 * @param {V} y - Value to modulo to y
 * @param {V} referenceVector - The reference vector
 * @returns {V} The resulting vector
 */
function moduloScalarY<V extends Object2D>(vector: V, y: number, referenceVector: V): V {
  referenceVector.y = vector.y % y
  return referenceVector
}

export { modulo as moduloObject }
export { moduloX as moduloObjectX }
export { moduloY as moduloObjectY }
export { moduloScalar as moduloObjectScalar }
export { moduloScalarX as moduloObjectScalarX }
export { moduloScalarY as moduloObjectScalarY }
