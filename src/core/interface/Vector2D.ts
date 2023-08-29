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

  add<T extends Vector2D>(otherVector: T): T {
    return Vector2D.Add(this, otherVector) as T
  }

  addInPlace<T extends Vector2D>(otherVector: T): this {
    this._x += otherVector.x
    this._y += otherVector.y
    return this
  }

  addToRef<T extends Vector2D>(otherVector: T, ref: T): T {
    ref._x = this.x + otherVector.x
    ref._y = this.y + otherVector.y
    return ref
  }

  subtract<T extends Vector2D>(otherVector: T): T {
    return Vector2D.Subtract(this, otherVector) as T
  }

  subtractInPlace<T extends Vector2D>(otherVector: T): this {
    this._x -= otherVector.x
    this._y -= otherVector.y
    return this
  }

  subtractToRef<T extends Vector2D>(otherVector: T, ref: T): T {
    ref._x = this.x - otherVector.x
    ref._y = this.y - otherVector.y
    return ref
  }

  multiply<T extends Vector2D>(otherVector: T): T {
    return Vector2D.Multiply(this, otherVector) as T
  }

  multiplyInPlace<T extends Vector2D>(otherVector: T): this {
    this._x *= otherVector.x
    this._y *= otherVector.y
    return this
  }

  multiplyToRef<T extends Vector2D>(otherVector: T, ref: T): T {
    ref._x = this.x * otherVector.x
    ref._y = this.y * otherVector.y
    return ref
  }

  divide<T extends Vector2D>(otherVector: T): T {
    return Vector2D.Divide(this, otherVector) as T
  }

  divideInPlace<T extends Vector2D>(otherVector: T): this {
    this._x /= otherVector.x
    this._y /= otherVector.y
    return this
  }

  divideToRef<T extends Vector2D>(otherVector: T, ref: T): T {
    ref._x = this.x / otherVector.x
    ref._y = this.y / otherVector.y
    return ref
  }

  invert(): Vector2D {
    return Vector2D.Invert(this)
  }

  invertInPlace(): this {
    this._x *= -1
    this._y *= -1
    return this
  }

  scale(factor: number): Vector2D {
    return Vector2D.Scale(this, factor)
  }

  scaleInPlace(factor: number): this {
    this.x *= factor
    this.y *= factor
    return this
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
