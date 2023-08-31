import type { Object2D } from '../../../../../../types'

/**
 * Applies the difference of {@link vector} and {@link otherVector} to {@link referenceVector}.
 *
 * @param {V} vector - First vector operand
 * @param {V} otherVector - Second vector operand
 * @param {V} referenceVector - The reference vector
 * @returns {V} The modified reference vector
 */
function subtract2d<V extends Object2D>(vector: V, otherVector: V, referenceVector: V): V {
  referenceVector.x = vector.x - otherVector.x
  referenceVector.y = vector.y - otherVector.y
  return referenceVector
}

/**
 * Applies the difference of {@link vector} x-coordinate and {@link otherVector} to {@link referenceVector} and returns it.
 *
 * @param {V} vector - First vector operand
 * @param {V} otherVector - Second vector operand
 * @param {V} referenceVector - The reference
 * @returns {V} The modified reference vector
 */
function subtract2dX<V extends Object2D>(vector: V, otherVector: V, referenceVector: V): V {
  referenceVector.x = vector.x - otherVector.x
  return referenceVector
}

/**
 * Applies the difference of {@link vector} and {@link otherVector} y-coordinates to {@link referenceVector} and returns
 * it.
 *
 * @param {V} vector - First vector operand
 * @param {V} otherVector - Second vector operand
 * @param {V} referenceVector - The reference vector
 * @returns {V} The modified reference vector
 */
function subtract2dY<V extends Object2D>(vector: V, otherVector: V, referenceVector: V): V {
  referenceVector.y = vector.y - otherVector.y
  return referenceVector
}

/**
 * Applies the difference of {@link vector} and {@link value} to {@link referenceVector} and returns it.
 *
 * @param {V} vector - First vector operand
 * @param {V} value - Value to subtract
 * @param {V} referenceVector - The reference vector
 * @returns {V} The modified reference vector
 */
function subtractScalar2d<V extends Object2D>(vector: V, value: number, referenceVector: V): V {
  referenceVector.x = vector.x - value
  referenceVector.y = vector.y - value
  return referenceVector
}

/**
 * Applies the difference of {@link vector} x-coordinate and {@link x} to {@link referenceVector} and returns it.
 *
 * @param {V} vector - First vector operand
 * @param {V} x - Value to subtract to x
 * @param {V} referenceVector - The reference vector
 * @returns {V} The resulting vector
 */
function subtractScalar2dX<V extends Object2D>(vector: V, x: number, referenceVector: V): V {
  referenceVector.x = vector.x - x
  return referenceVector
}

/**
 * Applies the difference of {@link vector} y-coordinate and {@link y} to {@link referenceVector} and returns it.
 *
 * @param {V} vector - First vector operand
 * @param {V} y - Value to subtract to y
 * @param {V} referenceVector - The reference vector
 * @returns {V} The resulting vector
 */
function subtractScalar2dY<V extends Object2D>(vector: V, y: number, referenceVector: V): V {
  referenceVector.y = vector.y - y
  return referenceVector
}

export { subtract2d as subtractObject2d }
export { subtract2dX as subtractObject2dX }
export { subtract2dY as subtractObject2dY }
export { subtractScalar2d as subtractObjectScalar2d }
export { subtractScalar2dX as subtractObjectScalar2dX }
export { subtractScalar2dY as subtractObjectScalar2dY }
