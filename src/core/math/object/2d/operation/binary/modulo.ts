import type { Object2D } from '../../../../../../types'

/**
 * Applies the remainder of two vectors to the reference vector and returns it.
 *
 * @param {V} vector - First vector operand
 * @param {V} otherVector - Second vector operand
 * @param {V} referenceVector - The reference vector vector
 * @returns {V} The modified reference vector
 */
function modulo2d<V extends Object2D>(vector: V, otherVector: V, referenceVector: V): V {
  referenceVector.x = vector.x % otherVector.x
  referenceVector.y = vector.y % otherVector.y
  return referenceVector
}

/**
 * Applies the remainder of two vectors x-coordinates to the reference vector and returns it.
 *
 * @param {V} vector - First vector operand
 * @param {V} otherVector - Second vector operand
 * @param {V} referenceVector - The reference vector
 * @returns {V} The modified reference vector
 */
function modulo2dX<V extends Object2D>(vector: V, otherVector: V, referenceVector: V): V {
  referenceVector.x = vector.x % otherVector.x
  return referenceVector
}

/**
 * Applies the remainder of two vectors y-coordinates to the reference vector and returns it.
 *
 * @param {V} vector - First vector operand
 * @param {V} otherVector - Second vector operand
 * @param {V} referenceVector - The reference vector vector
 * @returns {V} The modified reference vector
 */
function modulo2dY<V extends Object2D>(vector: V, otherVector: V, referenceVector: V): V {
  referenceVector.y = vector.y % otherVector.y
  return referenceVector
}

/**
 * Applies the remainder of a vector and a scalar to the reference vector and returns it.
 *
 * @param {V} vector - First vector operand
 * @param {V} value - Value to modulo
 * @param {V} referenceVector - The reference vector vector
 * @returns {V} The modified reference vector
 */
function moduloScalar2d<V extends Object2D>(vector: V, value: number, referenceVector: V): V {
  referenceVector.x = vector.x % value
  referenceVector.y = vector.y % value
  return referenceVector
}

/**
 * Applies the remainder of a vector's x-coordinate and a scalar to the reference vector and returns it.
 *
 * @param {V} vector - First vector operand
 * @param {V} x - Value to modulo to x
 * @param {V} referenceVector - The reference vector vector
 * @returns {V} The resulting vector
 */
function moduloScalar2dX<V extends Object2D>(vector: V, x: number, referenceVector: V): V {
  referenceVector.x = vector.x % x
  return referenceVector
}

/**
 * Applies the remainder of a vector's y-coordinate and a scalar to the reference vector and returns it.
 *
 * @param {V} vector - First vector operand
 * @param {V} y - Value to modulo to y
 * @param {V} referenceVector - The reference vector vector
 * @returns {V} The resulting vector
 */
function moduloScalar2dY<V extends Object2D>(vector: V, y: number, referenceVector: V): V {
  referenceVector.y = vector.y % y
  return referenceVector
}

export { modulo2d as moduloObject2d }
export { modulo2dX as moduloObject2dX }
export { modulo2dY as moduloObject2dY }
export { moduloScalar2d as moduloObjectScalar2d }
export { moduloScalar2dX as moduloObjectScalar2dX }
export { moduloScalar2dY as moduloObjectScalar2dY }
