import type { Object2D, Polar2DObject } from '../../../../../types'
import { fromPolarX, fromPolarY } from '../../../functions'
import { directionObject2d, magnitudeObject2d } from '../product/index'

/**
 * Converts a cartesian coordinate into a polar coordinate.
 *
 * @param {V} vector
 * @returns {Polar2DObject}
 */
function toPolar2d<V extends Object2D>(vector: V): Polar2DObject {
  return {
    radius: magnitudeObject2d(vector),
    polarAngle: directionObject2d(vector),
  }
}

/**
 * Converts a polar coordinate into a cartesian coordinate.
 *
 * @param {Polar2DObject} polar - A polar coordinate object
 * @returns {V} A point object in cartesian space
 */
function fromPolar2d<V extends Object2D>(polar: Polar2DObject, referenceVector: V): V {
  referenceVector.x = fromPolarX(polar.radius, polar.polarAngle)
  referenceVector.y = fromPolarY(polar.radius, polar.polarAngle)
  return referenceVector
}

export { toPolar2d as toObjectPolar2d }
export { fromPolar2d as fromObjectPolar2d }
