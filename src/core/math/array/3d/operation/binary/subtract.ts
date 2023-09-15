import type { Array3D } from '../../../../../../types'

/**
 * Applies the difference of two vectors from the reference vector and returns it.
 *
 * @param {V} vector - First vector operand
 * @param {V} otherVector - Second vector operand
 * @param {V} referenceVector - The reference vector
 * @returns {V} The modified reference vector
 */
function subtract3d<V extends Array3D>(vector: V, otherVector: V, referenceVector: V): V {
  referenceVector[0] = vector[0] - otherVector[0]
  referenceVector[1] = vector[1] - otherVector[1]
  referenceVector[2] = vector[2] - otherVector[2]
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
function subtract3dX<V extends Array3D>(vector: V, otherVector: V, referenceVector: V): V {
  referenceVector[0] = vector[0] - otherVector[0]
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
function subtract3dY<V extends Array3D>(vector: V, otherVector: V, referenceVector: V): V {
  referenceVector[1] = vector[1] - otherVector[1]
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
function subtract3dZ<V extends Array3D>(vector: V, otherVector: V, referenceVector: V): V {
  referenceVector[2] = vector[2] - otherVector[2]
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
function subtractScalar3d<V extends Array3D>(vector: V, value: number, referenceVector: V): V {
  referenceVector[0] = vector[0] - value
  referenceVector[1] = vector[1] - value
  referenceVector[2] = vector[2] - value
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
function subtractScalar3dX<V extends Array3D>(vector: V, x: number, referenceVector: V): V {
  referenceVector[0] = vector[0] - x
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
function subtractScalar3dY<V extends Array3D>(vector: V, y: number, referenceVector: V): V {
  referenceVector[1] = vector[1] - y
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
function subtractScalar3dZ<V extends Array3D>(vector: V, z: number, referenceVector: V): V {
  referenceVector[2] = vector[2] - z
  return referenceVector
}

export { subtract3d as subtractArray3d }
export { subtract3dX as subtractArray3dX }
export { subtract3dY as subtractArray3dY }
export { subtract3dZ as subtractArray3dZ }
export { subtractScalar3d as subtractArrayScalar3d }
export { subtractScalar3dX as subtractArrayScalar3dX }
export { subtractScalar3dY as subtractArrayScalar3dY }
export { subtractScalar3dZ as subtractArrayScalar3dZ }
