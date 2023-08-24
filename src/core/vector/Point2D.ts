import { hashNumber } from '..'
import { FloatArray, Point2DObject, Point2DSerialized } from '../../types'

/**
 * A class representing a point in 2D.
 */
class Point2D {
  protected _x: number
  protected _y: number

  /**
   * Create a point.
   *
   * @param {number} x - the x value
   * @param {number} y - the y value
   */
  constructor(x: number, y: number) {
    this._x = x
    this._y = y
  }

  /**
   * Get the x value.
   *
   * @returns {number} the x value
   */
  get x(): number {
    return this._x
  }

  /**
   * Set the x value.
   *
   * @param {number} value - new value for x
   */
  set x(value: number) {
    this._x = value
  }

  /**
   * Get the y value.
   *
   * @returns {number} the y value
   */
  get y(): number {
    return this._y
  }

  /**
   * Set the y value.
   *
   * @param {number} value - new value for y
   */
  set y(value: number) {
    this._y = value
  }

  /**
   * Gets the class name.
   *
   * @returns {string} the name of the class
   */
  getClassName(): string {
    return 'Vector2D'
  }

  toSerializable(): Point2DSerialized {
    return { type: this.getClassName(), ...this.toObject() }
  }

  toString(): string {
    return JSON.stringify(this.toSerializable())
  }

  toArray(): FloatArray {
    return [this._x, this._y]
  }

  toObject(): Point2DObject {
    return { x: this._x, y: this._y }
  }

  equals(other: Point2D): boolean {
    return other && this._x === other.x && this._y == other.y
  }

  hashCode(): number {
    const x = hashNumber(this._x)
    const y = hashNumber(this._y)
    let hash = x
    hash = (hash * 397) ^ y
    return hash
  }

  clone(): Point2D {
    return new Point2D(this._x, this._y)
  }

  copyFrom(otherVector: Point2D): Point2D {
    return this.set(otherVector.x, otherVector.y)
  }

  copyFromFloats(x: number, y: number): Point2D {
    return this.set(x, y)
  }

  set(x: number, y: number): Point2D {
    this._x = x
    this._y = y
    return this
  }
}

export default Point2D
