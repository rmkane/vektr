import type { Object2D, Polar2DObject } from '../../../../types'
import { fromPolarX, fromPolarY } from '../../functions'
import { directionObject, magnitudeObject } from '../product/index'

/**
 * Converts a cartesian coordinate into a polar coordinate.
 *
 * @param {V} vector
 * @returns {Polar2DObject}
 */
function toPolar<V extends Object2D>(vector: V): Polar2DObject {
  return {
    radius: magnitudeObject(vector),
    angle: directionObject(vector),
  }
}

/**
 * Converts a polar coordinate into a cartesian coordinate.
 *
 * @param {Polar2DObject} polar - A polar coordinate object
 * @returns {V} A point object in cartesian space
 */
function fromPolar<V extends Object2D>(polar: Polar2DObject, referenceVector: V): V {
  referenceVector.x = fromPolarX(polar.radius, polar.angle)
  referenceVector.y = fromPolarY(polar.radius, polar.angle)
  return referenceVector
}

export { toPolar as toObjectPolar }
export { fromPolar as fromObjectPolar }
