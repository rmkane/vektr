import { Object2D } from '../../../../types'
import { zeroObject } from '../../../util/object'

/**
 * TBD
 *
 * @param {Object2D} vector
 * @returns {Object2D} The resulting vector
 */
function invert(vector: Object2D): Object2D {
  return invertRef(vector, zeroObject())
}

/**
 * TBD
 *
 * @param {Object2D} vector
 * @param {Object2D} referenceVector - The reference
 * @returns {Object2D} The modified reference vector
 */
function invertRef(vector: Object2D, referenceVector: Object2D): Object2D {
  referenceVector.x = vector.x * -1
  referenceVector.y = vector.y * -1
  return referenceVector
}

/**
 * TBD
 *
 * @param {Object2D} vector
 * @returns {Object2D} The resulting vector
 */
function invertX(vector: Object2D): Object2D {
  return {
    x: vector.x * -1,
    y: vector.y,
  }
}

/**
 * TBD
 *
 * @param {Object2D} vector
 * @param {Object2D} referenceVector - The reference
 * @returns {Object2D} The modified reference vector
 */
function invertRefX(vector: Object2D, referenceVector: Object2D): Object2D {
  referenceVector.x = vector.x * -1
  referenceVector.y = vector.y
  return referenceVector
}

/**
 * TBD
 *
 * @param {Object2D} vector
 * @returns {Object2D} The resulting vector
 */
function invertY(vector: Object2D): Object2D {
  return {
    x: vector.x,
    y: vector.y * -1,
  }
}

/**
 * TBD
 *
 * @param {Object2D} vector
 * @param {Object2D} referenceVector - The reference
 * @returns {Object2D} The modified reference vector
 */
function invertRefY(vector: Object2D, referenceVector: Object2D): Object2D {
  referenceVector.x = vector.x
  referenceVector.y = vector.y * -1
  return referenceVector
}

export { invert as invertObject }
export { invertRef as invertObjectRef }
export { invertX as invertObjectX }
export { invertRefX as invertObjectRefX }
export { invertY as invertObjectY }
export { invertRefY as invertObjectRefY }
