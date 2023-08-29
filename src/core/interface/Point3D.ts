import { hashNumber } from '../util/hash'
import { Array3D, NumberTrio, Object3D, Point3DSerialized } from '../../types'
import AbstractPoint from './AbstractPoint'

/** A class representing a point in 3D. */
class Point3D extends AbstractPoint<Point3D, Object3D, Array3D, Point3DSerialized> {
  protected _x: number
  protected _y: number
  protected _z: number

  /**
   * Create a point.
   *
   * @param {number} x - The x value
   * @param {number} y - The y value
   * @param {number} z - The z value
   */
  constructor(x: number, y: number, z: number) {
    super()
    this._x = x
    this._y = y
    this._z = z
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
   * Get the z value.
   *
   * @returns {number} The z value
   */
  get z(): number {
    return this._z
  }

  /**
   * Set the z value.
   *
   * @param {number} value - New value for z
   */
  set z(value: number) {
    this._z = value
  }

  /**
   * Gets the class name.
   *
   * @returns {string} The name of the class
   */
  getClassName(): string {
    return 'Point3D'
  }

  /** @override */
  toArray(): NumberTrio {
    return [this._x, this._y, this._z]
  }

  /** @override */
  toObject(): Object3D {
    return { x: this._x, y: this._y, z: this._z }
  }

  /** @override */
  toSerializable(): Point3DSerialized {
    return { type: this.getClassName(), ...this.toObject() }
  }

  /** @override */
  equals(other: Point3D): boolean {
    return other && this._x === other.x && this._y === other.y && this._z === other.z
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
  clone(): Point3D {
    return new Point3D(this._x, this._y, this._z)
  }

  copyFrom(other: Point3D): Point3D {
    return this.set(other.x, other.y, other.z)
  }

  copyFromFloats(x: number, y: number, z: number): Point3D {
    return this.set(x, y, z)
  }

  set(x: number, y: number, z: number): Point3D {
    this._x = x
    this._y = y
    this._z = z
    return this
  }
}

export default Point3D
