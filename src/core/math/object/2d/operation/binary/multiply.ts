import type { Object2D } from '../../../../../../types'

/**
 * TBD.
 *
 * @param {V} vector - First vector operand
 * @param {V} otherVector - Second vector operand
 * @param {V} referenceVector - The reference vector
 * @returns {V} The modified reference vector
 */
function multiply2d<V extends Object2D>(vector: V, otherVector: V, referenceVector: V): V {
  referenceVector.x = vector.x * otherVector.x
  referenceVector.y = vector.y * otherVector.y
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
function multiply2dX<V extends Object2D>(vector: V, otherVector: V, referenceVector: V): V {
  referenceVector.x = vector.x * otherVector.x
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
function multiply2dY<V extends Object2D>(vector: V, otherVector: V, referenceVector: V): V {
  referenceVector.y = vector.y * otherVector.y
  return referenceVector
}

/**
 * TBD.
 *
 * @param {V} vector - First vector operand
 * @param {V} value - Value to multiply
 * @param {V} referenceVector - The reference vector
 * @returns {V} The modified reference vector
 */
function multiplyScalar2d<V extends Object2D>(vector: V, value: number, referenceVector: V): V {
  referenceVector.x = vector.x * value
  referenceVector.y = vector.y * value
  return referenceVector
}

/**
 * TBD.
 *
 * @param {V} vector - First vector operand
 * @param {V} x - Value to multiply to x
 * @param {V} referenceVector - The reference vector
 * @returns {V} The resulting vector
 */
function multiplyScalar2dX<V extends Object2D>(vector: V, x: number, referenceVector: V): V {
  referenceVector.x = vector.x * x
  return referenceVector
}

/**
 * TBD.
 *
 * @param {V} vector - First vector operand
 * @param {V} y - Value to multiply to y
 * @param {V} referenceVector - The reference vector
 * @returns {V} The resulting vector
 */
function multiplyScalar2dY<V extends Object2D>(vector: V, y: number, referenceVector: V): V {
  referenceVector.y = vector.y * y
  return referenceVector
}

export { multiply2d as multiplyObject2d }
export { multiply2dX as multiplyObject2dX }
export { multiply2dY as multiplyObject2dY }
export { multiplyScalar2d as multiplyObjectScalar2d }
export { multiplyScalar2dX as multiplyObjectScalar2dX }
export { multiplyScalar2dY as multiplyObjectScalar2dY }
