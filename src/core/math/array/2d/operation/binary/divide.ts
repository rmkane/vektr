import type { Array2D } from '../../../../../../types'

/**
 * Applies the quotient of two vectors to the reference vector and returns it.
 *
 * @param {V} vector - First vector operand
 * @param {V} otherVector - Second vector operand
 * @param {V} referenceVector - The reference vector vector
 * @returns {V} The modified reference vector
 */
function divide2d<V extends Array2D>(vector: V, otherVector: V, referenceVector: V): V {
  referenceVector[0] = vector[0] / otherVector[0]
  referenceVector[1] = vector[1] / otherVector[1]
  return referenceVector
}

/**
 * Applies the quotient of two vectors x-coordinates to the reference vector and returns it.
 *
 * @param {V} vector - First vector operand
 * @param {V} otherVector - Second vector operand
 * @param {V} referenceVector - The reference vector
 * @returns {V} The modified reference vector
 */
function divide2dX<V extends Array2D>(vector: V, otherVector: V, referenceVector: V): V {
  referenceVector[0] = vector[0] / otherVector[0]
  return referenceVector
}

/**
 * Applies the quotient of two vectors y-coordinates to the reference vector and returns it.
 *
 * @param {V} vector - First vector operand
 * @param {V} otherVector - Second vector operand
 * @param {V} referenceVector - The reference vector vector
 * @returns {V} The modified reference vector
 */
function divide2dY<V extends Array2D>(vector: V, otherVector: V, referenceVector: V): V {
  referenceVector[1] = vector[1] / otherVector[1]
  return referenceVector
}

/**
 * Applies the quotient of a vector and a scalar to the reference vector and returns it.
 *
 * @param {V} vector - First vector operand
 * @param {V} value - Value to divide
 * @param {V} referenceVector - The reference vector vector
 * @returns {V} The modified reference vector
 */
function divideScalar2d<V extends Array2D>(vector: V, value: number, referenceVector: V): V {
  referenceVector[0] = vector[0] / value
  referenceVector[1] = vector[1] / value
  return referenceVector
}

/**
 * Applies the quotient of a vector's x-coordinate and a scalar to the reference vector and returns it.
 *
 * @param {V} vector - First vector operand
 * @param {V} x - Value to divide to x
 * @param {V} referenceVector - The reference vector vector
 * @returns {V} The resulting vector
 */
function divideScalar2dX<V extends Array2D>(vector: V, x: number, referenceVector: V): V {
  referenceVector[0] = vector[0] / x
  return referenceVector
}

/**
 * Applies the quotient of a vector's y-coordinate and a scalar to the reference vector and returns it.
 *
 * @param {V} vector - First vector operand
 * @param {V} y - Value to divide to y
 * @param {V} referenceVector - The reference vector vector
 * @returns {V} The resulting vector
 */
function divideScalar2dY<V extends Array2D>(vector: V, y: number, referenceVector: V): V {
  referenceVector[1] = vector[1] / y
  return referenceVector
}

export { divide2d as divideArray2d }
export { divide2dX as divideArray2dX }
export { divide2dY as divideArray2dY }
export { divideScalar2d as divideArrayScalar2d }
export { divideScalar2dX as divideArrayScalar2dX }
export { divideScalar2dY as divideArrayScalar2dY }
