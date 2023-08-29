import type { Array2D, Polar2DArray } from '../../../../types'
import { fromPolarX, fromPolarY } from '../../functions'
import { directionArray, magnitudeArray } from '../product/index'

/**
 * Converts a cartesian coordinate into a polar coordinate.
 *
 * @param {Array2D} vector
 * @returns {Polar2DArray}
 */
function toPolar(vector: Array2D): Polar2DArray {
  return [magnitudeArray(vector), directionArray(vector)]
}

/**
 * Converts a polar coordinate into a cartesian coordinate.
 *
 * @param {Polar2DArray} polar - A polar coordinate array
 * @returns {number} A point array in cartesian space
 */
function fromPolar(polar: Polar2DArray): Array2D {
  return [fromPolarX(polar[0], polar[1]), fromPolarY(polar[0], polar[1])]
}

export { toPolar as toArrayPolar }
export { fromPolar as fromArrayPolar }
