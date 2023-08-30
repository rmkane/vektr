import type { Object2D } from '../../../../../types'
/**
 * Adds the result of the addition of {@link vector} and the {@link otherVector} to {@link referenceVector}.
 *
 * @typeParam V - A vector-like object
 * @param {V} vector - First vector operand
 * @param {V} otherVector - Second vector operand
 * @param {V} referenceVector - The reference vector
 * @returns {V} The modified reference vector
 */
function add<V extends Object2D>(vector: V, otherVector: V, referenceVector: V): V {
  referenceVector.x = vector.x + otherVector.x
  referenceVector.y = vector.y + otherVector.y
  return referenceVector
}

/**
 * Sums the {@link vector} x-coordinate and {@link otherVector} to {@link referenceVector} and returns it.
 *
 * @param {V} vector - First vector operand
 * @param {V} otherVector - Second vector operand
 * @param {V} referenceVector - The reference
 * @returns {V} The modified reference vector
 */
function addX<V extends Object2D>(vector: V, otherVector: V, referenceVector: V): V {
  referenceVector.x = vector.x + otherVector.x
  return referenceVector
}

/**
 * Sums {@link vector} and {@link otherVector} y-coordinates to {@link referenceVector} and returns it.
 *
 * @param {V} vector - First vector operand
 * @param {V} otherVector - Second vector operand
 * @param {V} referenceVector - The reference vector
 * @returns {V} The modified reference vector
 */
function addY<V extends Object2D>(vector: V, otherVector: V, referenceVector: V): V {
  referenceVector.y = vector.y + otherVector.y
  return referenceVector
}

/**
 * Sums {@link vector} and {@link value} to {@link referenceVector} and returns it.
 *
 * @param {V} vector - First vector operand
 * @param {V} value - Value to add
 * @param {V} referenceVector - The reference vector
 * @returns {V} The modified reference vector
 */
function addScalar<V extends Object2D>(vector: V, value: number, referenceVector: V): V {
  referenceVector.x = vector.x + value
  referenceVector.y = vector.y + value
  return referenceVector
}

/**
 * Sums the {@link vector} x-coordinate and {@link x} to {@link referenceVector} and returns it.
 *
 * @param {V} vector - First vector operand
 * @param {V} x - Value to add to x
 * @param {V} referenceVector - The reference vector
 * @returns {V} The resulting vector
 */
function addScalarX<V extends Object2D>(vector: V, x: number, referenceVector: V): V {
  referenceVector.x = vector.x + x
  return referenceVector
}

/**
 * Sums the {@link vector} y-coordinate and {@link y} to {@link referenceVector} and returns it.
 *
 * @param {V} vector - First vector operand
 * @param {V} y - Value to add to y
 * @param {V} referenceVector - The reference vector
 * @returns {V} The resulting vector
 */
function addScalarY<V extends Object2D>(vector: V, y: number, referenceVector: V): V {
  referenceVector.y = vector.y + y
  return referenceVector
}

export { add as addObject }
export { addX as addObjectX }
export { addY as addObjectY }
export { addScalar as addObjectScalar }
export { addScalarX as addObjectScalarX }
export { addScalarY as addObjectScalarY }
