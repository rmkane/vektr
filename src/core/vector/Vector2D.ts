import { Array2D, Object2D } from '../../types'
import {
  addObjects,
  ceilObject,
  clampObject,
  directionObject,
  divideObjects,
  dotObject,
  floorObject,
  fractObject,
  lerpObject,
  magnitudeObject,
  multiplyObject,
  multiplyObjects,
  negateObject,
  normalizeObject,
  roundObject,
  subtractObjects,
} from '../math/object'
import Point2D from './Point2D'

class Vector2D extends Point2D<Vector2D> {
  constructor(x: number = 0, y: number = 0) {
    super(x, y)
  }

  // Convenience

  static fromArray(arr: Array2D): Vector2D {
    return new Vector2D(arr[0], arr[1])
  }

  static fromObject(obj: Object2D): Vector2D {
    return new Vector2D(obj.x, obj.y)
  }

  static fromVector(vector: Vector2D): Vector2D {
    return new Vector2D(vector.x, vector.y)
  }

  static zero(): Vector2D {
    return new Vector2D(0, 0)
  }

  // Static methods

  static add(vector: Object2D, otherVector: Object2D): Vector2D {
    return Vector2D.fromObject(addObjects(vector, otherVector))
  }

  static subtract(vector: Object2D, otherVector: Object2D): Vector2D {
    return Vector2D.fromObject(subtractObjects(vector, otherVector))
  }

  static multiply(vector: Object2D, otherVector: Object2D): Vector2D {
    return Vector2D.fromObject(multiplyObjects(vector, otherVector))
  }

  static divide(vector: Object2D, otherVector: Object2D): Vector2D {
    return Vector2D.fromObject(divideObjects(vector, otherVector))
  }

  static negate(vector: Object2D): Vector2D {
    return Vector2D.fromObject(negateObject(vector))
  }

  static scale(vector: Object2D, factor: number): Vector2D {
    return Vector2D.fromObject(multiplyObject(vector, factor))
  }

  static floor(vector: Object2D): Vector2D {
    return Vector2D.fromObject(floorObject(vector))
  }

  static ceil(vector: Object2D): Vector2D {
    return Vector2D.fromObject(ceilObject(vector))
  }

  static round(vector: Object2D): Vector2D {
    return Vector2D.fromObject(roundObject(vector))
  }

  static fract(vector: Object2D): Vector2D {
    return Vector2D.fromObject(fractObject(vector))
  }

  static magnitude(vector: Object2D): number {
    return magnitudeObject(vector)
  }

  static direction(vector: Object2D): number {
    return directionObject(vector)
  }

  static normalize(vector: Object2D): Vector2D {
    return Vector2D.fromObject(normalizeObject(vector))
  }

  static clamp(value: Object2D, min: Object2D, max: Object2D): Vector2D {
    return Vector2D.fromObject(clampObject(value, min, max))
  }

  static lerp(start: Object2D, end: Object2D, amount: number): Vector2D {
    return Vector2D.fromObject(lerpObject(start, end, amount))
  }

  static dot(left: Object2D, right: Object2D): number {
    return dotObject(left, right)
  }

  /**
   * Gets the class name.
   *
   * @returns {string} the name of the class
   * @override
   */
  getClassName(): string {
    return 'Vector2D'
  }

  /**
   * Clones a vector.
   *
   * @returns {Vector2D} a coloned vector
   * @override
   */
  clone(): Vector2D {
    return new Vector2D(this._x, this._y)
  }

  add(otherVector: Vector2D): Vector2D {
    return Vector2D.add(this, otherVector)
  }

  addInPlace(otherVector: Vector2D): Vector2D {
    return this.addToRef(otherVector, this)
  }

  addToRef(otherVector: Vector2D, ref: Vector2D): Vector2D {
    ref._x = this.x + otherVector.x
    ref._y = this.y + otherVector.y
    return ref
  }

  subtract(otherVector: Vector2D): Vector2D {
    return Vector2D.subtract(this, otherVector)
  }

  subtractInPlace(otherVector: Vector2D): Vector2D {
    return this.subtractToRef(otherVector, this)
  }

  subtractToRef(otherVector: Vector2D, ref: Vector2D): Vector2D {
    ref._x = this.x - otherVector.x
    ref._y = this.y - otherVector.y
    return ref
  }

  multiply(otherVector: Vector2D): Vector2D {
    return Vector2D.multiply(this, otherVector)
  }

  multiplyInPlace(otherVector: Vector2D): Vector2D {
    return this.multiplyToRef(otherVector, this)
  }

  multiplyToRef(otherVector: Vector2D, ref: Vector2D): Vector2D {
    ref._x = this.x * otherVector.x
    ref._y = this.y * otherVector.y
    return ref
  }

  divide(otherVector: Vector2D): Vector2D {
    return Vector2D.divide(this, otherVector)
  }

  divideInPlace(otherVector: Vector2D): Vector2D {
    return this.divideToRef(otherVector, this)
  }

  divideToRef(otherVector: Vector2D, ref: Vector2D): Vector2D {
    ref._x = this.x / otherVector.x
    ref._y = this.y / otherVector.y
    return ref
  }

  negate(): Vector2D {
    return Vector2D.negate(this)
  }

  negateInPlace(): Vector2D {
    this._x *= -1
    this._y *= -1
    return this
  }

  scale(factor: number): Vector2D {
    return Vector2D.scale(this, factor)
  }

  scaleInPlace(factor: number): Vector2D {
    return this.scaleToRef(factor, this)
  }

  scaleToRef(factor: number, ref: Vector2D): Vector2D {
    ref.x = this.x * factor
    ref.y = this.y * factor
    return ref
  }

  scaleAndAddToRef(factor: number, ref: Vector2D): Vector2D {
    return ref.addInPlace(this.scale(factor))
  }

  floor(): Vector2D {
    return Vector2D.floor(this)
  }

  ceil(): Vector2D {
    return Vector2D.ceil(this)
  }

  round(): Vector2D {
    return Vector2D.round(this)
  }

  fract(): Vector2D {
    return Vector2D.fract(this)
  }

  magnitude(): number {
    return Vector2D.magnitude(this)
  }

  direction(): number {
    return Vector2D.direction(this)
  }

  normalize(): Vector2D {
    return Vector2D.normalize(this)
  }
}

new Vector2D().clone()

export default Vector2D
