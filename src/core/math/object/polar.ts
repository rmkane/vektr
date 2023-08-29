import { Object2D, Polar2DObject } from '../../../types'
import { fromPolarX, fromPolarY } from '../functions'
import { directionObject } from './direction'
import { magnitudeObject } from './maginitude'

/**
 * Converts a cartesian coordinate into a polar coordinate.
 *
 * @param {Object2D} vector
 * @returns {Polar2DObject}
 */
function toPolar(vector: Object2D): Polar2DObject {
  return {
    radius: magnitudeObject(vector),
    angle: directionObject(vector),
  }
}

/**
 * Converts a polar coordinate into a cartesian coordinate.
 *
 * @param {Polar2DObject} polar - A polar coordinate object
 * @returns {number} A point object in cartesian space
 */
function fromPolar(polar: Polar2DObject): Object2D {
  return {
    x: fromPolarX(polar.radius, polar.angle),
    y: fromPolarY(polar.radius, polar.angle),
  }
}

export { toPolar as toObjectPolar }
export { fromPolar as fromObjectPolar }
