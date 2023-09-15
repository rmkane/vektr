import type { Array3D } from '../../../../../../types'

/**
 * Applies the sum of two vectors to the reference vector and returns it.
 *
 * @param {V} vector - First vector operand
 * @param {V} otherVector - Second vector operand
 * @param {V} referenceVector - The reference vector vector
 * @returns {V} The modified reference vector
 */
function add3d<V extends Array3D>(vector: V, otherVector: V, referenceVector: V): V {
  referenceVector[0] = vector[0] + otherVector[0]
  referenceVector[1] = vector[1] + otherVector[1]
  referenceVector[2] = vector[2] + otherVector[2]
  return referenceVector
}

/**
 * Applies the sum of two vectors' x-coordinates to the reference vector and returns it.
 *
 * @param {V} vector - First vector operand
 * @param {V} otherVector - Second vector operand
 * @param {V} referenceVector - The reference vector
 * @returns {V} The modified reference vector
 */
function add3dX<V extends Array3D>(vector: V, otherVector: V, referenceVector: V): V {
  referenceVector[0] = vector[0] + otherVector[0]
  return referenceVector
}

/**
 * Applies the sum of two vectors' y-coordinates to the reference vector and returns it.
 *
 * @param {V} vector - First vector operand
 * @param {V} otherVector - Second vector operand
 * @param {V} referenceVector - The reference vector vector
 * @returns {V} The modified reference vector
 */
function add3dY<V extends Array3D>(vector: V, otherVector: V, referenceVector: V): V {
  referenceVector[1] = vector[1] + otherVector[1]
  return referenceVector
}

/**
 * Applies the sum of two vectors' z-coordinates to the reference vector and returns it.
 *
 * @param {V} vector - First vector operand
 * @param {V} otherVector - Second vector operand
 * @param {V} referenceVector - The reference vector vector
 * @returns {V} The modified reference vector
 */
function add3dZ<V extends Array3D>(vector: V, otherVector: V, referenceVector: V): V {
  referenceVector[2] = vector[2] + otherVector[2]
  return referenceVector
}

/**
 * Applies the sum of a vector and a scalar to the reference vector and returns it.
 *
 * @param {V} vector - First vector operand
 * @param {V} value - Value to add
 * @param {V} referenceVector - The reference vector vector
 * @returns {V} The modified reference vector
 */
function addScalar3d<V extends Array3D>(vector: V, value: number, referenceVector: V): V {
  referenceVector[0] = vector[0] + value
  referenceVector[1] = vector[1] + value
  return referenceVector
}

/**
 * Applies the sum of a vector's x-coordinate and a scalar to the reference vector and returns it.
 *
 * @param {V} vector - First vector operand
 * @param {V} x - Value to add to x
 * @param {V} referenceVector - The reference vector vector
 * @returns {V} The resulting vector
 */
function addScalar3dX<V extends Array3D>(vector: V, x: number, referenceVector: V): V {
  referenceVector[0] = vector[0] + x
  return referenceVector
}

/**
 * Applies the sum of a vector's y-coordinate and a scalar to the reference vector and returns it.
 *
 * @param {V} vector - First vector operand
 * @param {V} y - Value to add to y
 * @param {V} referenceVector - The reference vector vector
 * @returns {V} The resulting vector
 */
function addScalar3dY<V extends Array3D>(vector: V, y: number, referenceVector: V): V {
  referenceVector[1] = vector[1] + y
  return referenceVector
}

/**
 * Applies the sum of a vector's z-coordinate and a scalar to the reference vector and returns it.
 *
 * @param {V} vector - First vector operand
 * @param {V} z - Value to add to z
 * @param {V} referenceVector - The reference vector vector
 * @returns {V} The resulting vector
 */
function addScalar3dZ<V extends Array3D>(vector: V, z: number, referenceVector: V): V {
  referenceVector[2] = vector[2] + z
  return referenceVector
}

export { add3d as addArray3d }
export { add3dX as addArray3dX }
export { add3dY as addArray3dY }
export { add3dZ as addArray3dZ }
export { addScalar3d as addArrayScalar3d }
export { addScalar3dX as addArrayScalar3dX }
export { addScalar3dY as addArrayScalar3dY }
export { addScalar3dZ as addArrayScalar3dZ }
