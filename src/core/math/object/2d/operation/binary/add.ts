import type { Object2D } from '../../../../../../types'

/**
 * Applies the sum of {@link vector} and {@link otherVector} to {@link referenceVector}.
 *
 * @typeParam V - A vector-like object
 * @param {V} vector - First vector operand
 * @param {V} otherVector - Second vector operand
 * @param {V} referenceVector - The reference vector
 * @returns {V} The modified reference vector
 */
function add2d<V extends Object2D>(vector: V, otherVector: V, referenceVector: V): V {
  referenceVector.x = vector.x + otherVector.x
  referenceVector.y = vector.y + otherVector.y
  return referenceVector
}

/**
 * Applies the sum of {@link vector} x-coordinate and {@link otherVector} to {@link referenceVector} and returns it.
 *
 * @param {V} vector - First vector operand
 * @param {V} otherVector - Second vector operand
 * @param {V} referenceVector - The reference
 * @returns {V} The modified reference vector
 */
function add2dX<V extends Object2D>(vector: V, otherVector: V, referenceVector: V): V {
  referenceVector.x = vector.x + otherVector.x
  return referenceVector
}

/**
 * Applies the sum of {@link vector} and {@link otherVector} y-coordinates to {@link referenceVector} and returns it.
 *
 * @param {V} vector - First vector operand
 * @param {V} otherVector - Second vector operand
 * @param {V} referenceVector - The reference vector
 * @returns {V} The modified reference vector
 */
function add2dY<V extends Object2D>(vector: V, otherVector: V, referenceVector: V): V {
  referenceVector.y = vector.y + otherVector.y
  return referenceVector
}

/**
 * Applies the sum of {@link vector} and {@link value} to {@link referenceVector} and returns it.
 *
 * @param {V} vector - First vector operand
 * @param {V} value - Value to add
 * @param {V} referenceVector - The reference vector
 * @returns {V} The modified reference vector
 */
function addScalar2d<V extends Object2D>(vector: V, value: number, referenceVector: V): V {
  referenceVector.x = vector.x + value
  referenceVector.y = vector.y + value
  return referenceVector
}

/**
 * Applies the sum of {@link vector} x-coordinate and {@link x} to {@link referenceVector} and returns it.
 *
 * @param {V} vector - First vector operand
 * @param {V} x - Value to add to x
 * @param {V} referenceVector - The reference vector
 * @returns {V} The resulting vector
 */
function addScalar2dX<V extends Object2D>(vector: V, x: number, referenceVector: V): V {
  referenceVector.x = vector.x + x
  return referenceVector
}

/**
 * Applies the sum of {@link vector} y-coordinate and {@link y} to {@link referenceVector} and returns it.
 *
 * @param {V} vector - First vector operand
 * @param {V} y - Value to add to y
 * @param {V} referenceVector - The reference vector
 * @returns {V} The resulting vector
 */
function addScalar2dY<V extends Object2D>(vector: V, y: number, referenceVector: V): V {
  referenceVector.y = vector.y + y
  return referenceVector
}

export { add2d as addObject2d }
export { add2dX as addObject2dX }
export { add2dY as addObject2dY }
export { addScalar2d as addObjectScalar2d }
export { addScalar2dX as addObjectScalar2dX }
export { addScalar2dY as addObjectScalar2dY }
