import type { Object2D } from '../../../../../../types'

/**
 * TBD.
 *
 * @param {V} vector - First vector operand
 * @param {V} otherVector - Second vector operand
 * @param {V} referenceVector - The reference vector
 * @returns {V} The modified reference vector
 */
function divide2d<V extends Object2D>(vector: V, otherVector: V, referenceVector: V): V {
  referenceVector.x = vector.x / otherVector.x
  referenceVector.y = vector.y / otherVector.y
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
function divide2dX<V extends Object2D>(vector: V, otherVector: V, referenceVector: V): V {
  referenceVector.x = vector.x / otherVector.x
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
function divide2dY<V extends Object2D>(vector: V, otherVector: V, referenceVector: V): V {
  referenceVector.y = vector.y / otherVector.y
  return referenceVector
}

/**
 * TBD.
 *
 * @param {V} vector - First vector operand
 * @param {V} value - Value to divide
 * @param {V} referenceVector - The reference vector
 * @returns {V} The modified reference vector
 */
function divideScalar2d<V extends Object2D>(vector: V, value: number, referenceVector: V): V {
  referenceVector.x = vector.x / value
  referenceVector.y = vector.y / value
  return referenceVector
}

/**
 * TBD.
 *
 * @param {V} vector - First vector operand
 * @param {V} x - Value to divide to x
 * @param {V} referenceVector - The reference vector
 * @returns {V} The resulting vector
 */
function divideScalar2dX<V extends Object2D>(vector: V, x: number, referenceVector: V): V {
  referenceVector.x = vector.x / x
  return referenceVector
}

/**
 * TBD.
 *
 * @param {V} vector - First vector operand
 * @param {V} y - Value to divide to y
 * @param {V} referenceVector - The reference vector
 * @returns {V} The resulting vector
 */
function divideScalar2dY<V extends Object2D>(vector: V, y: number, referenceVector: V): V {
  referenceVector.y = vector.y / y
  return referenceVector
}

export { divide2d as divideObject2d }
export { divide2dX as divideObject2dX }
export { divide2dY as divideObject2dY }
export { divideScalar2d as divideObjectScalar2d }
export { divideScalar2dX as divideObjectScalar2dX }
export { divideScalar2dY as divideObjectScalar2dY }
