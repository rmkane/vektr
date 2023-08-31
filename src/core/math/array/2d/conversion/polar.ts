import type { Array2D, Polar2DArray } from '../../../../../types'
import { fromPolarX, fromPolarY } from '../../../functions'
import { directionArray, magnitudeArray } from '../product/index'

/**
 * Converts a cartesian coordinate into a polar coordinate.
 *
 * @param {V} vector
 * @returns {Polar2DArray}
 */
function toPolar<V extends Array2D>(vector: V): Polar2DArray {
  return [magnitudeArray(vector), directionArray(vector)]
}

/**
 * Converts a polar coordinate into a cartesian coordinate.
 *
 * @param {Polar2DArray} polar - A polar coordinate Array
 * @returns {V} A point Array in cartesian space
 */
function fromPolar<V extends Array2D>(polar: Polar2DArray, referenceVector: V): V {
  referenceVector[0] = fromPolarX(polar[0], polar[1])
  referenceVector[1] = fromPolarY(polar[0], polar[1])
  return referenceVector
}

export { toPolar as toArrayPolar }
export { fromPolar as fromArrayPolar }
