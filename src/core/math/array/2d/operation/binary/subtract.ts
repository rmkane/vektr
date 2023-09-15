import type { Array2D } from '../../../../../../types'

/**
 * Applies the difference of two vectors to the reference vector and returns it.
 *
 * @param {V} vector - First vector operand
 * @param {V} otherVector - Second vector operand
 * @param {V} referenceVector - The reference vector vector
 * @returns {V} The modified reference vector
 */
function subtract2d<V extends Array2D>(vector: V, otherVector: V, referenceVector: V): V {
  referenceVector[0] = vector[0] - otherVector[0]
  referenceVector[1] = vector[1] - otherVector[1]
  return referenceVector
}

/**
 * Applies the difference of two vectors x-coordinates to the reference vector and returns it.
 *
 * @param {V} vector - First vector operand
 * @param {V} otherVector - Second vector operand
 * @param {V} referenceVector - The reference vector
 * @returns {V} The modified reference vector
 */
function subtract2dX<V extends Array2D>(vector: V, otherVector: V, referenceVector: V): V {
  referenceVector[0] = vector[0] - otherVector[0]
  return referenceVector
}

/**
 * Applies the difference of two vectors y-coordinates to the reference vector and returns it.
 *
 * @param {V} vector - First vector operand
 * @param {V} otherVector - Second vector operand
 * @param {V} referenceVector - The reference vector vector
 * @returns {V} The modified reference vector
 */
function subtract2dY<V extends Array2D>(vector: V, otherVector: V, referenceVector: V): V {
  referenceVector[1] = vector[1] - otherVector[1]
  return referenceVector
}

/**
 * Applies the difference of a vector and a scalar to the reference vector and returns it.
 *
 * @param {V} vector - First vector operand
 * @param {V} value - Value to subtract
 * @param {V} referenceVector - The reference vector vector
 * @returns {V} The modified reference vector
 */
function subtractScalar2d<V extends Array2D>(vector: V, value: number, referenceVector: V): V {
  referenceVector[0] = vector[0] - value
  referenceVector[1] = vector[1] - value
  return referenceVector
}

/**
 * Applies the difference of a vector's x-coordinate and a scalar to the reference vector and returns it.
 *
 * @param {V} vector - First vector operand
 * @param {V} x - Value to subtract to x
 * @param {V} referenceVector - The reference vector vector
 * @returns {V} The resulting vector
 */
function subtractScalar2dX<V extends Array2D>(vector: V, x: number, referenceVector: V): V {
  referenceVector[0] = vector[0] - x
  return referenceVector
}

/**
 * Applies the difference of a vector's y-coordinate and a scalar to the reference vector and returns it.
 *
 * @param {V} vector - First vector operand
 * @param {V} y - Value to subtract to y
 * @param {V} referenceVector - The reference vector vector
 * @returns {V} The resulting vector
 */
function subtractScalar2dY<V extends Array2D>(vector: V, y: number, referenceVector: V): V {
  referenceVector[1] = vector[1] - y
  return referenceVector
}

export { subtract2d as subtractArray2d }
export { subtract2dX as subtractArray2dX }
export { subtract2dY as subtractArray2dY }
export { subtractScalar2d as subtractArrayScalar2d }
export { subtractScalar2dX as subtractArrayScalar2dX }
export { subtractScalar2dY as subtractArrayScalar2dY }
