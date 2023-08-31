import type { Array2D } from '../../../../../../types'
/**
 * Adds the result of the addition of {@link vector} and the {@link otherVector} to {@link referenceVector}.
 *
 * @typeParam V - A vector-like Array
 * @param {V} vector - First vector operand
 * @param {V} otherVector - Second vector operand
 * @param {V} referenceVector - The reference vector
 * @returns {V} The modified reference vector
 */
function add<V extends Array2D>(vector: V, otherVector: V, referenceVector: V): V {
  referenceVector[0] = vector[0] + otherVector[0]
  referenceVector[1] = vector[1] + otherVector[1]
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
function addX<V extends Array2D>(vector: V, otherVector: V, referenceVector: V): V {
  referenceVector[0] = vector[0] + otherVector[0]
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
function addY<V extends Array2D>(vector: V, otherVector: V, referenceVector: V): V {
  referenceVector[1] = vector[1] + otherVector[1]
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
function addScalar<V extends Array2D>(vector: V, value: number, referenceVector: V): V {
  referenceVector[0] = vector[0] + value
  referenceVector[1] = vector[1] + value
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
function addScalarX<V extends Array2D>(vector: V, x: number, referenceVector: V): V {
  referenceVector[0] = vector[0] + x
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
function addScalarY<V extends Array2D>(vector: V, y: number, referenceVector: V): V {
  referenceVector[1] = vector[1] + y
  return referenceVector
}

export { add as addArray }
export { addX as addArrayX }
export { addY as addArrayY }
export { addScalar as addArrayScalar }
export { addScalarX as addArrayScalarX }
export { addScalarY as addArrayScalarY }
