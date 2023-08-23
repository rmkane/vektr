import { FloatArray, Vector2DObject } from '../../types'
import { hashNumber } from '../util'

class Vector2D {
  private _x: number
  private _y: number

  constructor(x: number, y: number) {
    this._x = x
    this._y = y
  }

  // Accessors and mutators

  get x() {
    return this._x
  }

  set x(value: number) {
    this._x = value
  }

  get y() {
    return this._y
  }

  set y(value: number) {
    this._y = value
  }

  // Convenience

  static fromArray(arr: FloatArray) {
    return new Vector2D(arr[0], arr[1])
  }

  static fromObject(obj: Vector2DObject) {
    return new Vector2D(obj.x, obj.y)
  }

  // Utility

  toSerializable() {
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

  getClassName(): string {
    return 'Vector2D'
  }

  equals(other: Vector2D) {
    if (other == null) {
      return false
    }
    if (this === other) {
      return true
    }
    return this.getHashCode() === other.getHashCode()
  }

  getHashCode(): number {
    const x = hashNumber(this._x)
    const y = hashNumber(this._y)
    let hash = x
    hash = (hash * 397) ^ y
    return hash
  }

  clone() {
    return new Vector2D(this._x, this._y)
  }

  // Manipulation

  public static Add(vector: Vector2D, otherVector: Vector2D) {
    return vector.clone().addInPlace(otherVector)
  }

  public static Subtract(vector: Vector2D, otherVector: Vector2D) {
    return vector.clone().subtractInPlace(otherVector)
  }

  public static Multiply(vector: Vector2D, otherVector: Vector2D) {
    return vector.clone().multiplyInPlace(otherVector)
  }

  public static Divide(vector: Vector2D, otherVector: Vector2D) {
    return vector.clone().divideInPlace(otherVector)
  }

  add(otherVector: Vector2D) {
    return Vector2D.Add(this, otherVector)
  }

  addInPlace(otherVector: Vector2D) {
    this._x += otherVector.x
    this._y += otherVector.y
    return this
  }

  addToRef(otherVector: Vector2D, ref: Vector2D) {
    ref._x = this.x + otherVector.x
    ref._y = this.y + otherVector.y
    return this
  }

  subtract(otherVector: Vector2D) {
    return Vector2D.Subtract(this, otherVector)
  }

  subtractInPlace(otherVector: Vector2D) {
    this._x -= otherVector.x
    this._y -= otherVector.y
    return this
  }

  subtractToRef(otherVector: Vector2D, ref: Vector2D) {
    ref._x = this.x - otherVector.x
    ref._y = this.y - otherVector.y
    return this
  }

  multiply(otherVector: Vector2D) {
    return Vector2D.Multiply(this, otherVector)
  }

  multiplyInPlace(otherVector: Vector2D) {
    this._x *= otherVector.x
    this._y *= otherVector.y
    return this
  }

  multiplyToRef(otherVector: Vector2D, ref: Vector2D) {
    ref._x = this.x * otherVector.x
    ref._y = this.y * otherVector.y
    return this
  }

  divide(otherVector: Vector2D) {
    return Vector2D.Divide(this, otherVector)
  }

  divideInPlace(otherVector: Vector2D) {
    this._x /= otherVector.x
    this._y /= otherVector.y
    return this
  }

  divideToRef(otherVector: Vector2D, ref: Vector2D) {
    ref._x = this.x / otherVector.x
    ref._y = this.y / otherVector.y
    return this
  }
}

export default Vector2D
