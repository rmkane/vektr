import { Array2D, Object2D } from '../../types'
import {
  addObject,
  ceilObject,
  clampObject,
  directionObject,
  divideObject,
  dotObject,
  floorObject,
  fractObject,
  invertObject,
  lengthObject,
  lerpObject,
  multiplyObject,
  multiplyObjectScalar,
  roundObject,
  subtractObject,
  unitObject,
} from '../math/object/index'
import Point2D from './Point2D'

class Vector2D extends Point2D {
  constructor(x: number = 0, y: number = 0) {
    super(x, y)
  }

  // Convenience

  static FromArray(arr: Array2D): Vector2D {
    return new Vector2D(arr[0], arr[1])
  }

  static FromObject(obj: Object2D): Vector2D {
    return new Vector2D(obj.x, obj.y)
  }

  static FromVector(vector: Vector2D): Vector2D {
    return new Vector2D(vector.x, vector.y)
  }

  static zero(): Vector2D {
    return new Vector2D(0, 0)
  }

  // Static methods

  static Add(vector: Object2D, otherVector: Object2D): Vector2D {
    return Vector2D.FromObject(addObject(vector, otherVector))
  }

  static Subtract(vector: Object2D, otherVector: Object2D): Vector2D {
    return Vector2D.FromObject(subtractObject(vector, otherVector))
  }

  static Multiply(vector: Object2D, otherVector: Object2D): Vector2D {
    return Vector2D.FromObject(multiplyObject(vector, otherVector))
  }

  static Divide(vector: Object2D, otherVector: Object2D): Vector2D {
    return Vector2D.FromObject(divideObject(vector, otherVector))
  }

  static Invert(vector: Object2D): Vector2D {
    return Vector2D.FromObject(invertObject(vector))
  }

  static Scale(vector: Object2D, factor: number): Vector2D {
    return Vector2D.FromObject(multiplyObjectScalar(vector, factor))
  }

  static Floor(vector: Object2D): Vector2D {
    return Vector2D.FromObject(floorObject(vector))
  }

  static Ceil(vector: Object2D): Vector2D {
    return Vector2D.FromObject(ceilObject(vector))
  }

  static Round(vector: Object2D): Vector2D {
    return Vector2D.FromObject(roundObject(vector))
  }

  static Fract(vector: Object2D): Vector2D {
    return Vector2D.FromObject(fractObject(vector))
  }

  static Length(vector: Object2D): number {
    return lengthObject(vector)
  }

  static Direction(vector: Object2D): number {
    return directionObject(vector)
  }

  static Unit(vector: Object2D): Vector2D {
    return Vector2D.FromObject(unitObject(vector))
  }

  static Clamp(value: Object2D, min: Object2D, max: Object2D): Vector2D {
    return Vector2D.FromObject(clampObject(value, min, max))
  }

  static Lerp(start: Object2D, end: Object2D, amount: number): Vector2D {
    return Vector2D.FromObject(lerpObject(start, end, amount))
  }

  static Dot(left: Object2D, right: Object2D): number {
    return dotObject(left, right)
  }

  /**
   * Gets the class name.
   *
   * @returns {string} The name of the class
   * @override
   */
  getClassName(): string {
    return 'Vector2D'
  }

  /**
   * Clones a vector.
   *
   * @returns {Vector2D} A coloned vector
   * @override
   */
  clone(): Vector2D {
    return new Vector2D(this._x, this._y)
  }

  add(otherVector: Vector2D): Vector2D {
    return Vector2D.Add(this, otherVector)
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
    return Vector2D.Subtract(this, otherVector)
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
    return Vector2D.Multiply(this, otherVector)
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
    return Vector2D.Divide(this, otherVector)
  }

  divideInPlace(otherVector: Vector2D): Vector2D {
    return this.divideToRef(otherVector, this)
  }

  divideToRef(otherVector: Vector2D, ref: Vector2D): Vector2D {
    ref._x = this.x / otherVector.x
    ref._y = this.y / otherVector.y
    return ref
  }

  invert(): Vector2D {
    return Vector2D.Invert(this)
  }

  invertInPlace(): Vector2D {
    this._x *= -1
    this._y *= -1
    return this
  }

  scale(factor: number): Vector2D {
    return Vector2D.Scale(this, factor)
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
    return Vector2D.Floor(this)
  }

  ceil(): Vector2D {
    return Vector2D.Ceil(this)
  }

  round(): Vector2D {
    return Vector2D.Round(this)
  }

  fract(): Vector2D {
    return Vector2D.Fract(this)
  }

  length(): number {
    return Vector2D.Length(this)
  }

  direction(): number {
    return Vector2D.Direction(this)
  }

  unit(): Vector2D {
    return Vector2D.Unit(this)
  }
}

export default Vector2D
