import type { Object2D } from '../../../../../types'

/**
 * TBD.
 *
 * @param {V} vector - First vector operand
 * @param {V} otherVector - Second vector operand
 * @param {V} referenceVector - The reference vector
 * @returns {V} The modified reference vector
 */
function subtract<V extends Object2D>(vector: V, otherVector: V, referenceVector: V): V {
  referenceVector.x = vector.x - otherVector.x
  referenceVector.y = vector.y - otherVector.y
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
function subtractX<V extends Object2D>(vector: V, otherVector: V, referenceVector: V): V {
  referenceVector.x = vector.x - otherVector.x
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
function subtractY<V extends Object2D>(vector: V, otherVector: V, referenceVector: V): V {
  referenceVector.y = vector.y - otherVector.y
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
function subtractScalar<V extends Object2D>(vector: V, value: number, referenceVector: V): V {
  referenceVector.x = vector.x - value
  referenceVector.y = vector.y - value
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
function subtractScalarX<V extends Object2D>(vector: V, x: number, referenceVector: V): V {
  referenceVector.x = vector.x - x
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
function subtractScalarY<V extends Object2D>(vector: V, y: number, referenceVector: V): V {
  referenceVector.y = vector.y - y
  return referenceVector
}

export { subtract as subtractObject }
export { subtractX as subtractObjectX }
export { subtractY as subtractObjectY }
export { subtractScalar as subtractObjectScalar }
export { subtractScalarX as subtractObjectScalarX }
export { subtractScalarY as subtractObjectScalarY }
