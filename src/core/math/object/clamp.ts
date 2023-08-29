import { Object2D } from '../../../types'
import { zeroObject } from '../../util/object'
import { clamp as clampFn } from '../functions'

/**
 * TBD
 *
 * @param {Object2D} vector
 * @param {Object2D} min
 * @param {Object2D} max
 * @returns {Object2D} The resulting vector
 */
function clamp(vector: Object2D, min: Object2D, max: Object2D): Object2D {
  return clampRef(vector, min, max, zeroObject())
}

/**
 * TBD
 *
 * @param {Object2D} vector
 * @param {Object2D} min
 * @param {Object2D} max
 * @param {Object2D} referenceVector - The reference
 * @returns {Object2D} The modified reference vector
 */
function clampRef(vector: Object2D, min: Object2D, max: Object2D, referenceVector: Object2D): Object2D {
  referenceVector.x = clampFn(vector.x, min.x, max.x)
  referenceVector.y = clampFn(vector.y, min.y, max.y)
  return referenceVector
}

export { clamp as clampObject }
export { clampRef as clampObjectRef }
