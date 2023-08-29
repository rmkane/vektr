import { hashNumber } from '../util/hash'
import { Array2D, NumberPair, Object2D, Point2DSerialized } from '../../types'
import AbstractPoint from './AbstractPoint'

/** A class representing a point in 2D. */
class Point2D extends AbstractPoint<Point2D, Object2D, Array2D, Point2DSerialized> {
  protected _x: number
  protected _y: number

  /**
   * Create a point.
   *
   * @param {number} x - The x value
   * @param {number} y - The y value
   */
  constructor(x: number, y: number) {
    super()
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

  /** @override */
  toArray(): NumberPair {
    return [this._x, this._y]
  }

  /** @override */
  toObject(): Object2D {
    return { x: this._x, y: this._y }
  }

  /** @override */
  toSerializable(): Point2DSerialized {
    return { type: this.getClassName(), ...this.toObject() }
  }

  /** @override */
  equals(other: Point2D): boolean {
    return other && this._x === other.x && this._y === other.y
  }

  /** @override */
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
   * @override
   */
  clone(): Point2D {
    return new Point2D(this._x, this._y)
  }

  copyFrom(other: Point2D): Point2D {
    return this.set(other.x, other.y)
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
