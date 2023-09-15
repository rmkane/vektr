import type { Object3D } from '../../../../../../types'

/**
 * Applies the quotient of two vectors to the reference vector and returns it.
 *
 * @param {V} vector - First vector operand
 * @param {V} otherVector - Second vector operand
 * @param {V} referenceVector - The reference vector
 * @returns {V} The modified reference vector
 */
function divide3d<V extends Object3D>(vector: V, otherVector: V, referenceVector: V): V {
  referenceVector.x = vector.x / otherVector.x
  referenceVector.y = vector.y / otherVector.y
  referenceVector.z = vector.z / otherVector.z
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
function divide3dX<V extends Object3D>(vector: V, otherVector: V, referenceVector: V): V {
  referenceVector.x = vector.x / otherVector.x
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
function divide3dY<V extends Object3D>(vector: V, otherVector: V, referenceVector: V): V {
  referenceVector.y = vector.y / otherVector.y
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
function divide3dZ<V extends Object3D>(vector: V, otherVector: V, referenceVector: V): V {
  referenceVector.z = vector.z / otherVector.z
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
function divideScalar3d<V extends Object3D>(vector: V, value: number, referenceVector: V): V {
  referenceVector.x = vector.x / value
  referenceVector.y = vector.y / value
  referenceVector.z = vector.z / value
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
function divideScalar3dX<V extends Object3D>(vector: V, x: number, referenceVector: V): V {
  referenceVector.x = vector.x / x
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
function divideScalar3dY<V extends Object3D>(vector: V, y: number, referenceVector: V): V {
  referenceVector.y = vector.y / y
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
function divideScalar3dZ<V extends Object3D>(vector: V, z: number, referenceVector: V): V {
  referenceVector.z = vector.z / z
  return referenceVector
}

export { divide3d as divideObject3d }
export { divide3dX as divideObject3dX }
export { divide3dY as divideObject3dY }
export { divide3dZ as divideObject3dZ }
export { divideScalar3d as divideObjectScalar3d }
export { divideScalar3dX as divideObjectScalar3dX }
export { divideScalar3dY as divideObjectScalar3dY }
export { divideScalar3dZ as divideObjectScalar3dZ }
