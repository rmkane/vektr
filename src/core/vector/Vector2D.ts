import { FloatArray, Vector2DObject, Vector2DSerialized } from '../../types'
import { hashNumber } from '../util'

class Vector2D {
  private _x: number
  private _y: number

  constructor(x: number, y: number) {
    this._x = x
    this._y = y
  }

  // Accessors and mutators

  get x(): number {
    return this._x
  }

  set x(value: number) {
    this._x = value
  }

  get y(): number {
    return this._y
  }

  set y(value: number) {
    this._y = value
  }

  // Convenience

  static fromArray(arr: FloatArray): Vector2D {
    return new Vector2D(arr[0], arr[1])
  }

  static fromObject(obj: Vector2DObject): Vector2D {
    return new Vector2D(obj.x, obj.y)
  }

  static fromVector(vector: Vector2D): Vector2D {
    return vector.clone()
  }

  static zero(): Vector2D {
    return new Vector2D(0, 0)
  }

  // Utility

  getClassName(): string {
    return 'Vector2D'
  }

  toSerializable(): Vector2DSerialized {
    return { type: this.getClassName(), ...this.toObject() }
  }

  toString(): string {
    return JSON.stringify(this.toSerializable())
  }

  toArray(): FloatArray {
    return [this._x, this._y]
  }

  toObject(): Vector2DObject {
    return { x: this._x, y: this._y }
  }

  equals(other: Vector2D): boolean {
    return other && this._x === other.x && this._y == other.y
  }

  hashCode(): number {
    const x = hashNumber(this._x)
    const y = hashNumber(this._y)
    let hash = x
    hash = (hash * 397) ^ y
    return hash
  }

  clone(): Vector2D {
    return new Vector2D(this._x, this._y)
  }

  copyFrom(otherVector: Vector2D): Vector2D {
    return this.set(otherVector.x, otherVector.y)
  }

  copyFromFloats(x: number, y: number): Vector2D {
    return this.set(x, y)
  }

  set(x: number, y: number): Vector2D {
    this._x = x
    this._y = y
    return this
  }

  // Static methods

  static add(vector: Vector2D, otherVector: Vector2D): Vector2D {
    return vector.clone().addInPlace(otherVector)
  }

  static subtract(vector: Vector2D, otherVector: Vector2D): Vector2D {
    return vector.clone().subtractInPlace(otherVector)
  }

  static multiply(vector: Vector2D, otherVector: Vector2D): Vector2D {
    return vector.clone().multiplyInPlace(otherVector)
  }

  static divide(vector: Vector2D, otherVector: Vector2D): Vector2D {
    return vector.clone().divideInPlace(otherVector)
  }

  static negate(vector: Vector2D): Vector2D {
    return vector.clone().negateInPlace()
  }

  static scale(vector: Vector2D, factor: number): Vector2D {
    return vector.clone().scaleInPlace(factor)
  }

  static floor(vector: Vector2D): Vector2D {
    return new Vector2D(Math.floor(vector.x), Math.floor(vector.y))
  }

  static ceil(vector: Vector2D): Vector2D {
    return new Vector2D(Math.ceil(vector.x), Math.ceil(vector.y))
  }

  static round(vector: Vector2D): Vector2D {
    return new Vector2D(Math.round(vector.x), Math.round(vector.y))
  }

  static fract(vector: Vector2D): Vector2D {
    return new Vector2D(
      vector.x - Math.floor(vector.x),
      vector.y - Math.floor(vector.y),
    )
  }

  static lengthOf(vector: Vector2D): number {
    return Math.sqrt(Vector2D.lengthSquared(vector))
  }

  static lengthSquared(vector: Vector2D): number {
    return Math.pow(vector.x, 2) + Math.pow(vector.y, 2)
  }

  static normalize(vector: Vector2D): Vector2D {
    return Vector2D.normalizeToRef(vector, Vector2D.zero())
  }

  static normalizeToRef(vector: Vector2D, ref: Vector2D): Vector2D {
    const len = vector.length()
    if (len === 0) {
      return ref
    }
    return ref.divideInPlace(Vector2D.fromArray([len, len]))
  }

  static clamp(value: Vector2D, min: Vector2D, max: Vector2D): Vector2D {
    const x = Math.min(Math.max(value.x, max.x), min.x)
    const y = Math.min(Math.max(value.y, max.y), min.y)
    return new Vector2D(x, y)
  }

  static lerp(start: Vector2D, end: Vector2D, amount: number): Vector2D {
    const x = start.x + (end.x - start.x) * amount
    const y = start.y + (end.y - start.y) * amount
    return new Vector2D(x, y)
  }

  static dot(left: Vector2D, right: Vector2D): number {
    return left.x * right.x + left.y * right.y
  }

  // Instance methods

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

  length(): number {
    return Vector2D.lengthOf(this)
  }

  lengthSquared(): number {
    return Vector2D.lengthSquared(this)
  }

  normalize(): Vector2D {
    return Vector2D.normalize(this)
  }
}

export default Vector2D
