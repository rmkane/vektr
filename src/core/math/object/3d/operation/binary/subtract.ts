import type { Object3D } from '../../../../../../types'

/**
 * Applies the difference of two vectors from the reference vector and returns it.
 *
 * @param {V} vector - First vector operand
 * @param {V} otherVector - Second vector operand
 * @param {V} referenceVector - The reference vector
 * @returns {V} The modified reference vector
 */
function subtract3d<V extends Object3D>(vector: V, otherVector: V, referenceVector: V): V {
  referenceVector.x = vector.x - otherVector.x
  referenceVector.y = vector.y - otherVector.y
  referenceVector.z = vector.z - otherVector.z
  return referenceVector
}

/**
 * Applies the difference of two vectors' x-coordinates from the reference vector and returns it.
 *
 * @param {V} vector - First vector operand
 * @param {V} otherVector - Second vector operand
 * @param {V} referenceVector - The reference vector
 * @returns {V} The modified reference vector
 */
function subtract3dX<V extends Object3D>(vector: V, otherVector: V, referenceVector: V): V {
  referenceVector.x = vector.x - otherVector.x
  return referenceVector
}

/**
 * Applies the difference of two vectors' y-coordinates from the reference vector and returns it.
 *
 * @param {V} vector - First vector operand
 * @param {V} otherVector - Second vector operand
 * @param {V} referenceVector - The reference vector
 * @returns {V} The modified reference vector
 */
function subtract3dY<V extends Object3D>(vector: V, otherVector: V, referenceVector: V): V {
  referenceVector.y = vector.y - otherVector.y
  return referenceVector
}

/**
 * Applies the difference of two vectors' z-coordinates from the reference vector and returns it.
 *
 * @param {V} vector - First vector operand
 * @param {V} otherVector - Second vector operand
 * @param {V} referenceVector - The reference vector
 * @returns {V} The modified reference vector
 */
function subtract3dZ<V extends Object3D>(vector: V, otherVector: V, referenceVector: V): V {
  referenceVector.z = vector.z - otherVector.z
  return referenceVector
}

/**
 * Applies the difference of a scalar from a vector to the reference vector and returns it.
 *
 * @param {V} vector - Vector operand
 * @param {number} value - Value to subtract
 * @param {V} referenceVector - The reference vector
 * @returns {V} The modified reference vector
 */
function subtractScalar3d<V extends Object3D>(vector: V, value: number, referenceVector: V): V {
  referenceVector.x = vector.x - value
  referenceVector.y = vector.y - value
  referenceVector.z = vector.z - value
  return referenceVector
}

/**
 * Applies the difference of a scalar from a vector's x-coordinate to the reference vector and returns it.
 *
 * @param {V} vector - Vector operand
 * @param {number} x - Value to subtract from x
 * @param {V} referenceVector - The reference vector
 * @returns {V} The modified reference vector
 */
function subtractScalar3dX<V extends Object3D>(vector: V, x: number, referenceVector: V): V {
  referenceVector.x = vector.x - x
  return referenceVector
}

/**
 * Applies the difference of a scalar from a vector's y-coordinate to the reference vector and returns it.
 *
 * @param {V} vector - Vector operand
 * @param {number} y - Value to subtract from y
 * @param {V} referenceVector - The reference vector
 * @returns {V} The modified reference vector
 */
function subtractScalar3dY<V extends Object3D>(vector: V, y: number, referenceVector: V): V {
  referenceVector.y = vector.y - y
  return referenceVector
}

/**
 * Applies the difference of a scalar from a vector's z-coordinate to the reference vector and returns it.
 *
 * @param {V} vector - Vector operand
 * @param {number} z - Value to subtract from z
 * @param {V} referenceVector - The reference vector
 * @returns {V} The modified reference vector
 */
function subtractScalar3dZ<V extends Object3D>(vector: V, z: number, referenceVector: V): V {
  referenceVector.z = vector.z - z
  return referenceVector
}

export { subtract3d as subtractObject3d }
export { subtract3dX as subtractObject3dX }
export { subtract3dY as subtractObject3dY }
export { subtract3dZ as subtractObject3dZ }
export { subtractScalar3d as subtractObjectScalar3d }
export { subtractScalar3dX as subtractObjectScalar3dX }
export { subtractScalar3dY as subtractObjectScalar3dY }
export { subtractScalar3dZ as subtractObjectScalar3dZ }
