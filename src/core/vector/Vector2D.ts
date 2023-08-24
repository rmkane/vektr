import { FloatArray, Vector2DObject, Vector2DSerialized } from '../../types'
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
    return Vector2D.fromObject(addObjects(vector, otherVector))
  }

  static subtract(vector: Vector2D, otherVector: Vector2D): Vector2D {
    return Vector2D.fromObject(subtractObjects(vector, otherVector))
  }

  static multiply(vector: Vector2D, otherVector: Vector2D): Vector2D {
    return Vector2D.fromObject(multiplyObjects(vector, otherVector))
  }

  static divide(vector: Vector2D, otherVector: Vector2D): Vector2D {
    return Vector2D.fromObject(divideObjects(vector, otherVector))
  }

  static negate(vector: Vector2D): Vector2D {
    return Vector2D.fromObject(negateObject(vector))
  }

  static scale(vector: Vector2D, factor: number): Vector2D {
    return Vector2D.fromObject(multiplyObject(vector, factor))
  }

  static floor(vector: Vector2D): Vector2D {
    return Vector2D.fromObject(floorObject(vector))
  }

  static ceil(vector: Vector2D): Vector2D {
    return Vector2D.fromObject(ceilObject(vector))
  }

  static round(vector: Vector2D): Vector2D {
    return Vector2D.fromObject(roundObject(vector))
  }

  static fract(vector: Vector2D): Vector2D {
    return Vector2D.fromObject(fractObject(vector))
  }

  static magnitude(vector: Vector2D): number {
    return magnitudeObject(vector)
  }

  static direction(vector: Vector2D): number {
    return directionObject(vector)
  }

  static normalize(vector: Vector2D): Vector2D {
    return Vector2D.fromObject(normalizeObject(vector))
  }

  static clamp(value: Vector2D, min: Vector2D, max: Vector2D): Vector2D {
    return Vector2D.fromObject(clampObject(value, min, max))
  }

  static lerp(start: Vector2D, end: Vector2D, amount: number): Vector2D {
    return Vector2D.fromObject(lerpObject(start, end, amount))
  }

  static dot(left: Vector2D, right: Vector2D): number {
    return dotObject(left, right)
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

export default Vector2D
