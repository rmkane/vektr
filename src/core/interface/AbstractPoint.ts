import { ArrayMulti, ObjectMulti, Serialized } from '../../types'

/** A class representing a point in 2D. */
abstract class AbstractPoint<
  T extends AbstractPoint<T, O, A, S>,
  O extends ObjectMulti,
  A extends ArrayMulti,
  S extends Serialized,
> {
  /**
   * Gets the class name.
   *
   * @returns {string} The name of the class
   */
  getClassName(): string {
    return 'AbstractPoint'
  }

  toSerializable(): S {
    throw new Error('Method not implemented')
  }

  toString(): string {
    return JSON.stringify(this.toSerializable())
  }

  toArray(): A {
    throw new Error('Method not implemented')
  }

  toObject(): O {
    throw new Error('Method not implemented')
  }

  toJSON(): string {
    return JSON.stringify(this.toObject())
  }

  /**
   * Compare with another object to test for equality.
   *
   * @param {t} other
   * @returns {boolean} Wether the objects are equal
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  equals(other: T): boolean {
    throw new Error('Method not implemented')
  }

  /**
   * Compues a hash code.
   *
   * @returns {number} The computed hash code
   */
  hashCode(): number {
    throw new Error('Method not implemented')
  }

  /**
   * Clones a point.
   *
   * @returns {T} A coloned point
   */
  clone(): T {
    throw new Error('Method not implemented')
  }
}

export default AbstractPoint
