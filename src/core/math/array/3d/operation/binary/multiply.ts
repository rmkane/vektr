import type { Array3D } from '../../../../../../types'

/**
 * Applies the product of two vectors to the reference vector and returns it.
 *
 * @param {V} vector - First vector operand
 * @param {V} otherVector - Second vector operand
 * @param {V} referenceVector - The reference vector
 * @returns {V} The modified reference vector
 */
function multiply3d<V extends Array3D>(vector: V, otherVector: V, referenceVector: V): V {
  referenceVector[0] = vector[0] * otherVector[0]
  referenceVector[1] = vector[1] * otherVector[1]
  referenceVector[2] = vector[2] * otherVector[2]
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
function multiply3dX<V extends Array3D>(vector: V, otherVector: V, referenceVector: V): V {
  referenceVector[0] = vector[0] * otherVector[0]
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
function multiply3dY<V extends Array3D>(vector: V, otherVector: V, referenceVector: V): V {
  referenceVector[1] = vector[1] * otherVector[1]
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
function multiply3dZ<V extends Array3D>(vector: V, otherVector: V, referenceVector: V): V {
  referenceVector[2] = vector[2] * otherVector[2]
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
function multiplyScalar3d<V extends Array3D>(vector: V, value: number, referenceVector: V): V {
  referenceVector[0] = vector[0] * value
  referenceVector[1] = vector[1] * value
  referenceVector[2] = vector[2] * value
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
function multiplyScalar3dX<V extends Array3D>(vector: V, x: number, referenceVector: V): V {
  referenceVector[0] = vector[0] * x
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
function multiplyScalar3dY<V extends Array3D>(vector: V, y: number, referenceVector: V): V {
  referenceVector[1] = vector[1] * y
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
function multiplyScalar3dZ<V extends Array3D>(vector: V, z: number, referenceVector: V): V {
  referenceVector[2] = vector[2] * z
  return referenceVector
}

export { multiply3d as multiplyArray3d }
export { multiply3dX as multiplyArray3dX }
export { multiply3dY as multiplyArray3dY }
export { multiply3dZ as multiplyArray3dZ }
export { multiplyScalar3d as multiplyArrayScalar3d }
export { multiplyScalar3dX as multiplyArrayScalar3dX }
export { multiplyScalar3dY as multiplyArrayScalar3dY }
export { multiplyScalar3dZ as multiplyArrayScalar3dZ }
