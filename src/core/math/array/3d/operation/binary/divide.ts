import type { Array3D } from '../../../../../../types'

/**
 * Applies the quotient of two vectors to the reference vector and returns it.
 *
 * @param {V} vector - First vector operand
 * @param {V} otherVector - Second vector operand
 * @param {V} referenceVector - The reference vector
 * @returns {V} The modified reference vector
 */
function divide3d<V extends Array3D>(vector: V, otherVector: V, referenceVector: V): V {
  referenceVector[0] = vector[0] / otherVector[0]
  referenceVector[1] = vector[1] / otherVector[1]
  referenceVector[2] = vector[2] / otherVector[2]
  return referenceVector
}

/**
 * Applies the quotient of a vector's x-coordinate by another vector's x-coordinate to the reference vector and returns
 * it.
 *
 * @param {V} vector - First vector operand
 * @param {V} otherVector - Second vector operand
 * @param {V} referenceVector - The reference vector
 * @returns {V} The modified reference vector
 */
function divide3dX<V extends Array3D>(vector: V, otherVector: V, referenceVector: V): V {
  referenceVector[0] = vector[0] / otherVector[0]
  return referenceVector
}

/**
 * Applies the quotient of a vector's y-coordinate by another vector's y-coordinate to the reference vector and returns
 * it.
 *
 * @param {V} vector - First vector operand
 * @param {V} otherVector - Second vector operand
 * @param {V} referenceVector - The reference vector
 * @returns {V} The modified reference vector
 */
function divide3dY<V extends Array3D>(vector: V, otherVector: V, referenceVector: V): V {
  referenceVector[1] = vector[1] / otherVector[1]
  return referenceVector
}

/**
 * Applies the quotient of a vector's z-coordinate by another vector's z-coordinate to the reference vector and returns
 * it.
 *
 * @param {V} vector - First vector operand
 * @param {V} otherVector - Second vector operand
 * @param {V} referenceVector - The reference vector
 * @returns {V} The modified reference vector
 */
function divide3dZ<V extends Array3D>(vector: V, otherVector: V, referenceVector: V): V {
  referenceVector[2] = vector[2] / otherVector[2]
  return referenceVector
}

/**
 * Applies the quotient of a vector by a scalar to the reference vector and returns it.
 *
 * @param {V} vector - Vector operand
 * @param {number} value - Value to divide by
 * @param {V} referenceVector - The reference vector
 * @returns {V} The modified reference vector
 */
function divideScalar3d<V extends Array3D>(vector: V, value: number, referenceVector: V): V {
  referenceVector[0] = vector[0] / value
  referenceVector[1] = vector[1] / value
  referenceVector[2] = vector[2] / value
  return referenceVector
}

/**
 * Applies the quotient of a vector's x-coordinate by a scalar to the reference vector and returns it.
 *
 * @param {V} vector - Vector operand
 * @param {number} x - Value to divide x by
 * @param {V} referenceVector - The reference vector
 * @returns {V} The modified reference vector
 */
function divideScalar3dX<V extends Array3D>(vector: V, x: number, referenceVector: V): V {
  referenceVector[0] = vector[0] / x
  return referenceVector
}

/**
 * Applies the quotient of a vector's y-coordinate by a scalar to the reference vector and returns it.
 *
 * @param {V} vector - Vector operand
 * @param {number} y - Value to divide y by
 * @param {V} referenceVector - The reference vector
 * @returns {V} The modified reference vector
 */
function divideScalar3dY<V extends Array3D>(vector: V, y: number, referenceVector: V): V {
  referenceVector[1] = vector[1] / y
  return referenceVector
}

/**
 * Applies the quotient of a vector's z-coordinate by a scalar to the reference vector and returns it.
 *
 * @param {V} vector - Vector operand
 * @param {number} z - Value to divide z by
 * @param {V} referenceVector - The reference vector
 * @returns {V} The modified reference vector
 */
function divideScalar3dZ<V extends Array3D>(vector: V, z: number, referenceVector: V): V {
  referenceVector[2] = vector[2] / z
  return referenceVector
}

export { divide3d as divideArray3d }
export { divide3dX as divideArray3dX }
export { divide3dY as divideArray3dY }
export { divide3dZ as divideArray3dZ }
export { divideScalar3d as divideArrayScalar3d }
export { divideScalar3dX as divideArrayScalar3dX }
export { divideScalar3dY as divideArrayScalar3dY }
export { divideScalar3dZ as divideArrayScalar3dZ }
