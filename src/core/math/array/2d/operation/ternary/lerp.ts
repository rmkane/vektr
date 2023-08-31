import type { Array2D } from '../../../../../../types'
import { lerp as lerpFn } from '../../../../functions'

/**
 * TBD
 *
 * @param {V} start
 * @param {V} end
 * @param {number} amount
 * @param {V} referenceVector - The reference
 * @returns {V} The modified reference vector
 */
function lerp<V extends Array2D>(start: V, end: V, amount: number, referenceVector: V): V {
  referenceVector[0] = lerpFn(start[0], end[0], amount)
  referenceVector[1] = lerpFn(start[1], end[1], amount)
  return referenceVector
}

/**
 * TBD
 *
 * @param {V} start
 * @param {V} end
 * @param {number} amount
 * @param {V} referenceVector - The reference
 * @returns {V} The modified reference vector
 */
function lerpX<V extends Array2D>(start: V, end: V, amount: number, referenceVector: V): V {
  referenceVector[0] = lerpFn(start[0], end[0], amount)
  return referenceVector
}

/**
 * TBD
 *
 * @param {V} start
 * @param {V} end
 * @param {number} amount
 * @param {V} referenceVector - The reference
 * @returns {V} The modified reference vector
 */
function lerpY<V extends Array2D>(start: V, end: V, amount: number, referenceVector: V): V {
  referenceVector[1] = lerpFn(start[1], end[1], amount)
  return referenceVector
}

export { lerp as lerpArray }
export { lerpX as lerpArrayX }
export { lerpY as lerpArrayY }
