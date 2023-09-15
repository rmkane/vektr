import type { Array2D } from '../../../../../../types'

/**
 * Applies the product of two vectors to the reference vector and returns it.
 *
 * @param {V} vector - First vector operand
 * @param {V} otherVector - Second vector operand
 * @param {V} referenceVector - The reference vector vector
 * @returns {V} The modified reference vector
 */
function multiply2d<V extends Array2D>(vector: V, otherVector: V, referenceVector: V): V {
  referenceVector[0] = vector[0] * otherVector[0]
  referenceVector[1] = vector[1] * otherVector[1]
  return referenceVector
}

/**
 * Applies the product of two vectors x-coordinates to the reference vector and returns it.
 *
 * @param {V} vector - First vector operand
 * @param {V} otherVector - Second vector operand
 * @param {V} referenceVector - The reference vector
 * @returns {V} The modified reference vector
 */
function multiply2dX<V extends Array2D>(vector: V, otherVector: V, referenceVector: V): V {
  referenceVector[0] = vector[0] * otherVector[0]
  return referenceVector
}

/**
 * Applies the product of two vectors y-coordinates to the reference vector and returns it.
 *
 * @param {V} vector - First vector operand
 * @param {V} otherVector - Second vector operand
 * @param {V} referenceVector - The reference vector vector
 * @returns {V} The modified reference vector
 */
function multiply2dY<V extends Array2D>(vector: V, otherVector: V, referenceVector: V): V {
  referenceVector[1] = vector[1] * otherVector[1]
  return referenceVector
}

/**
 * Applies the product of a vector and a scalar to the reference vector and returns it.
 *
 * @param {V} vector - First vector operand
 * @param {V} value - Value to multiply
 * @param {V} referenceVector - The reference vector vector
 * @returns {V} The modified reference vector
 */
function multiplyScalar2d<V extends Array2D>(vector: V, value: number, referenceVector: V): V {
  referenceVector[0] = vector[0] * value
  referenceVector[1] = vector[1] * value
  return referenceVector
}

/**
 * Applies the product of a vector's x-coordinate and a scalar to the reference vector and returns it.
 *
 * @param {V} vector - First vector operand
 * @param {V} x - Value to multiply to x
 * @param {V} referenceVector - The reference vector vector
 * @returns {V} The resulting vector
 */
function multiplyScalar2dX<V extends Array2D>(vector: V, x: number, referenceVector: V): V {
  referenceVector[0] = vector[0] * x
  return referenceVector
}

/**
 * Applies the product of a vector's y-coordinate and a scalar to the reference vector and returns it.
 *
 * @param {V} vector - First vector operand
 * @param {V} y - Value to multiply to y
 * @param {V} referenceVector - The reference vector vector
 * @returns {V} The resulting vector
 */
function multiplyScalar2dY<V extends Array2D>(vector: V, y: number, referenceVector: V): V {
  referenceVector[1] = vector[1] * y
  return referenceVector
}

export { multiply2d as multiplyArray2d }
export { multiply2dX as multiplyArray2dX }
export { multiply2dY as multiplyArray2dY }
export { multiplyScalar2d as multiplyArrayScalar2d }
export { multiplyScalar2dX as multiplyArrayScalar2dX }
export { multiplyScalar2dY as multiplyArrayScalar2dY }
