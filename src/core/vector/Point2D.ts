import { hashNumber } from '../util/hash'
import { Array2D, Object2D, Point2DSerialized } from '../../types'

/** A class representing a point in 2D. */
class Point2D<T extends Point2D<T>> {
  protected _x: number
  protected _y: number

  /**
   * Create a point.
   *
   * @param {number} x - The x value
   * @param {number} y - The y value
   */
  constructor(x: number, y: number) {
    this._x = x
    this._y = y
  }

  /**
   * Get the x value.
   *
   * @returns {number} The x value
   */
  get x(): number {
    return this._x
  }

  /**
   * Set the x value.
   *
   * @param {number} value - New value for x
   */
  set x(value: number) {
    this._x = value
  }

  /**
   * Get the y value.
   *
   * @returns {number} The y value
   */
  get y(): number {
    return this._y
  }

  /**
   * Set the y value.
   *
   * @param {number} value - New value for y
   */
  set y(value: number) {
    this._y = value
  }

  /**
   * Gets the class name.
   *
   * @returns {string} The name of the class
   */
  getClassName(): string {
    return 'Point2D'
  }

  toSerializable(): Point2DSerialized {
    return { type: this.getClassName(), ...this.toObject() }
  }

  toString(): string {
    return JSON.stringify(this.toSerializable())
  }

  toArray(): Array2D {
    return [this._x, this._y]
  }

  toObject(): Object2D {
    return { x: this._x, y: this._y }
  }

  toJSON(): string {
    return JSON.stringify(this.toObject())
  }

  equals(other: Object2D): boolean {
    return other && this._x === other.x && this._y === other.y
  }

  hashCode(): number {
    const x = hashNumber(this._x)
    const y = hashNumber(this._y)
    let hash = x
    hash = (hash * 397) ^ y
    return hash
  }

  /**
   * Clones a point.
   *
   * @returns {Point2D} A coloned point
   */
  clone(): T {
    return new Point2D(this._x, this._y) as T
  }

  copyFrom(otherVector: T): T {
    return this.set(otherVector.x, otherVector.y)
  }

  copyFromFloats(x: number, y: number): T {
    return this.set(x, y)
  }

  set(x: number, y: number): T {
    this._x = x
    this._y = y
    return this as unknown as T
  }
}

export default Point2D
