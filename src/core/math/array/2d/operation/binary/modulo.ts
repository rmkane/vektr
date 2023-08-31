import type { Array2D } from '../../../../../../types'

/**
 * TBD.
 *
 * @param {V} vector - First vector operand
 * @param {V} otherVector - Second vector operand
 * @param {V} referenceVector - The reference vector
 * @returns {V} The modified reference vector
 */
function modulo2d<V extends Array2D>(vector: V, otherVector: V, referenceVector: V): V {
  referenceVector[0] = vector[0] % otherVector[0]
  referenceVector[1] = vector[1] % otherVector[1]
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
function modulo2dX<V extends Array2D>(vector: V, otherVector: V, referenceVector: V): V {
  referenceVector[0] = vector[0] % otherVector[0]
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
function modulo2dY<V extends Array2D>(vector: V, otherVector: V, referenceVector: V): V {
  referenceVector[1] = vector[1] % otherVector[1]
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
function moduloScalar2d<V extends Array2D>(vector: V, value: number, referenceVector: V): V {
  referenceVector[0] = vector[0] % value
  referenceVector[1] = vector[1] % value
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
function moduloScalar2dX<V extends Array2D>(vector: V, x: number, referenceVector: V): V {
  referenceVector[0] = vector[0] % x
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
function moduloScalar2dY<V extends Array2D>(vector: V, y: number, referenceVector: V): V {
  referenceVector[1] = vector[1] % y
  return referenceVector
}

export { modulo2d as moduloArray2d }
export { modulo2dX as moduloArray2dX }
export { modulo2dY as moduloArray2dY }
export { moduloScalar2d as moduloArrayScalar2d }
export { moduloScalar2dX as moduloArrayScalar2dX }
export { moduloScalar2dY as moduloArrayScalar2dY }
