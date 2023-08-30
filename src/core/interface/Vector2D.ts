import type { Array2D, Object2D } from '../../types'
import { ObjectVectorMath2D } from '../math/index'
import Point2D from './Point2D'

const {
  add,
  ceil,
  clamp,
  direction,
  divide,
  dot,
  floor,
  fract,
  invert,
  length,
  lerp,
  multiply,
  multiplyScalar,
  round,
  subtract,
  unit,
} = ObjectVectorMath2D

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

  static Zero(): Vector2D {
    return new Vector2D(0, 0)
  }

  // Static methods

  static Add(vector: Object2D, otherVector: Object2D): Vector2D {
    return add(vector, otherVector, Vector2D.Zero()) as Vector2D
  }

  static Subtract(vector: Object2D, otherVector: Object2D): Vector2D {
    return subtract(vector, otherVector, Vector2D.Zero()) as Vector2D
  }

  static Multiply(vector: Object2D, otherVector: Object2D): Vector2D {
    return multiply(vector, otherVector, Vector2D.Zero()) as Vector2D
  }

  static Divide(vector: Object2D, otherVector: Object2D): Vector2D {
    return divide(vector, otherVector, Vector2D.Zero()) as Vector2D
  }

  static Invert(vector: Object2D): Vector2D {
    return invert(vector, Vector2D.Zero()) as Vector2D
  }

  static Scale(vector: Object2D, factor: number): Vector2D {
    return multiplyScalar(vector, factor, Vector2D.Zero()) as Vector2D
  }

  static Floor(vector: Object2D): Vector2D {
    return floor(vector, Vector2D.Zero()) as Vector2D
  }

  static Ceil(vector: Object2D): Vector2D {
    return ceil(vector, Vector2D.Zero()) as Vector2D
  }

  static Round(vector: Object2D): Vector2D {
    return round(vector, Vector2D.Zero()) as Vector2D
  }

  static Fract(vector: Object2D): Vector2D {
    return fract(vector, Vector2D.Zero()) as Vector2D
  }

  static Length(vector: Object2D): number {
    return length(vector)
  }

  static Direction(vector: Object2D): number {
    return direction(vector)
  }

  static Unit(vector: Object2D): Vector2D {
    return unit(vector, Vector2D.Zero()) as Vector2D
  }

  static Clamp(value: Object2D, min: Object2D, max: Object2D): Vector2D {
    return clamp(value, min, max, Vector2D.Zero()) as Vector2D
  }

  static Lerp(start: Object2D, end: Object2D, amount: number): Vector2D {
    return lerp(start, end, amount, Vector2D.Zero()) as Vector2D
  }

  static Dot(left: Object2D, right: Object2D): number {
    return dot(left, right)
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
    return Vector2D.Add(this, otherVector) as Vector2D
  }

  addInPlace(otherVector: Vector2D): this {
    return add(this, otherVector, this) as this
  }

  addToRef(otherVector: Vector2D, ref: Vector2D): Vector2D {
    return add(this, otherVector, ref)
  }

  subtract(otherVector: Vector2D): Vector2D {
    return Vector2D.Subtract(this, otherVector) as Vector2D
  }

  subtractInPlace(otherVector: Vector2D): this {
    return subtract(this, otherVector, this) as this
  }

  subtractToRef(otherVector: Vector2D, ref: Vector2D): Vector2D {
    return subtract(this, otherVector, ref)
  }

  multiply(otherVector: Vector2D): Vector2D {
    return Vector2D.Multiply(this, otherVector) as Vector2D
  }

  multiplyInPlace(otherVector: Vector2D): this {
    return multiply(this, otherVector, this) as this
  }

  multiplyToRef(otherVector: Vector2D, ref: Vector2D): Vector2D {
    return multiply(this, otherVector, ref)
  }

  divide(otherVector: Vector2D): Vector2D {
    return Vector2D.Divide(this, otherVector) as Vector2D
  }

  divideInPlace(otherVector: Vector2D): this {
    return divide(this, otherVector, this) as this
  }

  divideToRef(otherVector: Vector2D, ref: Vector2D): Vector2D {
    return divide(this, otherVector, ref)
  }

  invert(): Vector2D {
    return Vector2D.Invert(this)
  }

  invertInPlace(): this {
    return invert(this, this)
  }

  scale(factor: number): Vector2D {
    return Vector2D.Scale(this, factor)
  }

  scaleInPlace(factor: number): this {
    return multiplyScalar(this, factor, this)
  }

  scaleToRef(factor: number, ref: Vector2D): Vector2D {
    return multiplyScalar(this, factor, ref)
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
