import type { Object3D } from '../../../../../../types'

/**
 * Applies the sum of two vectors to the reference vector and returns it.
 *
 * @param {V} vector - First vector operand
 * @param {V} otherVector - Second vector operand
 * @param {V} referenceVector - The reference vector vector
 * @returns {V} The modified reference vector
 */
function add3d<V extends Object3D>(vector: V, otherVector: V, referenceVector: V): V {
  referenceVector.x = vector.x + otherVector.x
  referenceVector.y = vector.y + otherVector.y
  referenceVector.z = vector.z + otherVector.z
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
function add3dX<V extends Object3D>(vector: V, otherVector: V, referenceVector: V): V {
  referenceVector.x = vector.x + otherVector.x
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
function add3dY<V extends Object3D>(vector: V, otherVector: V, referenceVector: V): V {
  referenceVector.y = vector.y + otherVector.y
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
function add3dZ<V extends Object3D>(vector: V, otherVector: V, referenceVector: V): V {
  referenceVector.z = vector.z + otherVector.z
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
function addScalar3d<V extends Object3D>(vector: V, value: number, referenceVector: V): V {
  referenceVector.x = vector.x + value
  referenceVector.y = vector.y + value
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
function addScalar3dX<V extends Object3D>(vector: V, x: number, referenceVector: V): V {
  referenceVector.x = vector.x + x
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
function addScalar3dY<V extends Object3D>(vector: V, y: number, referenceVector: V): V {
  referenceVector.y = vector.y + y
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
function addScalar3dZ<V extends Object3D>(vector: V, z: number, referenceVector: V): V {
  referenceVector.z = vector.z + z
  return referenceVector
}

export { add3d as addObject3d }
export { add3dX as addObject3dX }
export { add3dY as addObject3dY }
export { add3dZ as addObject3dZ }
export { addScalar3d as addObjectScalar3d }
export { addScalar3dX as addObjectScalar3dX }
export { addScalar3dY as addObjectScalar3dY }
export { addScalar3dZ as addObjectScalar3dZ }
