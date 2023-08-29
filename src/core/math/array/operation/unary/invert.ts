import type { Array2D } from '../../../../../types'
import { zeroArray } from '../../../../util/array'

/**
 * TBD
 *
 * @param {Array2D} vector
 * @returns {Array2D} The resulting vector
 */
function invert(vector: Array2D): Array2D {
  return invertRef(vector, zeroArray())
}

/**
 * TBD
 *
 * @param {Array2D} vector
 * @param {Array2D} referenceVector - The reference
 * @returns {Array2D} The modified reference vector
 */
function invertRef(vector: Array2D, referenceVector: Array2D): Array2D {
  referenceVector[0] = vector[0] * -1
  referenceVector[1] = vector[1] * -1
  return referenceVector
}

/**
 * TBD
 *
 * @param {Array2D} vector
 * @returns {Array2D} The resulting vector
 */
function invertX(vector: Array2D): Array2D {
  return invertRefX(vector, zeroArray())
}

/**
 * TBD
 *
 * @param {Array2D} vector
 * @param {Array2D} referenceVector - The reference
 * @returns {Array2D} The modified reference vector
 */
function invertRefX(vector: Array2D, referenceVector: Array2D): Array2D {
  referenceVector[0] = vector[0] * -1
  referenceVector[1] = vector[1]
  return referenceVector
}

/**
 * TBD
 *
 * @param {Array2D} vector
 * @returns {Array2D} The resulting vector
 */
function invertY(vector: Array2D): Array2D {
  return invertRefY(vector, zeroArray())
}

/**
 * TBD
 *
 * @param {Array2D} vector
 * @param {Array2D} referenceVector - The reference
 * @returns {Array2D} The modified reference vector
 */
function invertRefY(vector: Array2D, referenceVector: Array2D): Array2D {
  referenceVector[0] = vector[0]
  referenceVector[1] = vector[1] * -1
  return referenceVector
}

export { invert as invertArray }
export { invertRef as invertArrayRef }
export { invertX as invertArrayX }
export { invertRefX as invertArrayRefX }
export { invertY as invertArrayY }
export { invertRefY as invertArrayRefY }
