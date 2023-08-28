import { Object2D } from '../../../types'
import { zeroObject } from '../../util/object'

/**
 * TBD
 *
 * @param {Object2D} vector
 * @returns {Object2D} The resulting vector
 */
function negate(vector: Object2D): Object2D {
  return negateRef(vector, zeroObject())
}

/**
 * TBD
 *
 * @param {Object2D} vector
 * @param {Object2D} referenceVector - The reference
 * @returns {Object2D} The modified reference vector
 */
function negateRef(vector: Object2D, referenceVector: Object2D): Object2D {
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
function negateX(vector: Object2D): Object2D {
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
function negateRefX(vector: Object2D, referenceVector: Object2D): Object2D {
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
function negateY(vector: Object2D): Object2D {
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
function negateRefY(vector: Object2D, referenceVector: Object2D): Object2D {
  referenceVector.x = vector.x
  referenceVector.y = vector.y * -1
  return referenceVector
}

export { negate as negateObject }
export { negateRef as negateObjectRef }
export { negateX as negateObjectX }
export { negateRefX as negateObjectRefX }
export { negateY as negateObjectY }
export { negateRefY as negateObjectRefY }
