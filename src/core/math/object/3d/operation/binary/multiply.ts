import type { Object3D } from '../../../../../../types'

/**
 * Applies the product of two vectors to the reference vector and returns it.
 *
 * @param {V} vector - First vector operand
 * @param {V} otherVector - Second vector operand
 * @param {V} referenceVector - The reference vector
 * @returns {V} The modified reference vector
 */
function multiply3d<V extends Object3D>(vector: V, otherVector: V, referenceVector: V): V {
  referenceVector.x = vector.x * otherVector.x
  referenceVector.y = vector.y * otherVector.y
  referenceVector.z = vector.z * otherVector.z
  return referenceVector
}

/**
 * Applies the product of a vector's x-coordinate by another vector's x-coordinate to the reference vector and returns
 * it.
 *
 * @param {V} vector - First vector operand
 * @param {V} otherVector - Second vector operand
 * @param {V} referenceVector - The reference vector
 * @returns {V} The modified reference vector
 */
function multiply3dX<V extends Object3D>(vector: V, otherVector: V, referenceVector: V): V {
  referenceVector.x = vector.x * otherVector.x
  return referenceVector
}

/**
 * Applies the product of a vector's y-coordinate by another vector's y-coordinate to the reference vector and returns
 * it.
 *
 * @param {V} vector - First vector operand
 * @param {V} otherVector - Second vector operand
 * @param {V} referenceVector - The reference vector
 * @returns {V} The modified reference vector
 */
function multiply3dY<V extends Object3D>(vector: V, otherVector: V, referenceVector: V): V {
  referenceVector.y = vector.y * otherVector.y
  return referenceVector
}

/**
 * Applies the product of a vector's z-coordinate by another vector's z-coordinate to the reference vector and returns
 * it.
 *
 * @param {V} vector - First vector operand
 * @param {V} otherVector - Second vector operand
 * @param {V} referenceVector - The reference vector
 * @returns {V} The modified reference vector
 */
function multiply3dZ<V extends Object3D>(vector: V, otherVector: V, referenceVector: V): V {
  referenceVector.z = vector.z * otherVector.z
  return referenceVector
}

/**
 * Applies the product of a vector by a scalar to the reference vector and returns it.
 *
 * @param {V} vector - Vector operand
 * @param {number} value - Value to multiply by
 * @param {V} referenceVector - The reference vector
 * @returns {V} The modified reference vector
 */
function multiplyScalar3d<V extends Object3D>(vector: V, value: number, referenceVector: V): V {
  referenceVector.x = vector.x * value
  referenceVector.y = vector.y * value
  referenceVector.z = vector.z * value
  return referenceVector
}

/**
 * Applies the product of a vector's x-coordinate by a scalar to the reference vector and returns it.
 *
 * @param {V} vector - Vector operand
 * @param {number} x - Value to multiply x by
 * @param {V} referenceVector - The reference vector
 * @returns {V} The modified reference vector
 */
function multiplyScalar3dX<V extends Object3D>(vector: V, x: number, referenceVector: V): V {
  referenceVector.x = vector.x * x
  return referenceVector
}

/**
 * Applies the product of a vector's y-coordinate by a scalar to the reference vector and returns it.
 *
 * @param {V} vector - Vector operand
 * @param {number} y - Value to multiply y by
 * @param {V} referenceVector - The reference vector
 * @returns {V} The modified reference vector
 */
function multiplyScalar3dY<V extends Object3D>(vector: V, y: number, referenceVector: V): V {
  referenceVector.y = vector.y * y
  return referenceVector
}

/**
 * Applies the product of a vector's z-coordinate by a scalar to the reference vector and returns it.
 *
 * @param {V} vector - Vector operand
 * @param {number} z - Value to multiply z by
 * @param {V} referenceVector - The reference vector
 * @returns {V} The modified reference vector
 */
function multiplyScalar3dZ<V extends Object3D>(vector: V, z: number, referenceVector: V): V {
  referenceVector.z = vector.z * z
  return referenceVector
}

export { multiply3d as multiplyObject3d }
export { multiply3dX as multiplyObject3dX }
export { multiply3dY as multiplyObject3dY }
export { multiply3dZ as multiplyObject3dZ }
export { multiplyScalar3d as multiplyObjectScalar3d }
export { multiplyScalar3dX as multiplyObjectScalar3dX }
export { multiplyScalar3dY as multiplyObjectScalar3dY }
export { multiplyScalar3dZ as multiplyObjectScalar3dZ }
