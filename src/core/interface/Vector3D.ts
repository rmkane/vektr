import type { Array3D, Object3D } from '../../types'
import { ObjectVectorMath3D } from '../math/index'
import Point3D from './Point3D'

const { add } = ObjectVectorMath3D

class Vector3D extends Point3D {
  constructor(x: number = 0, y: number = 0, z: number = 0) {
    super(x, y, z)
  }

  // Convenience

  static FromArray(arr: Array3D): Vector3D {
    return new Vector3D(arr[0], arr[1], arr[2])
  }

  static FromObject(obj: Object3D): Vector3D {
    return new Vector3D(obj.x, obj.y, obj.z)
  }

  static FromVector(vector: Vector3D): Vector3D {
    return new Vector3D(vector.x, vector.y, vector.z)
  }

  static Zero(): Vector3D {
    return new Vector3D(0, 0, 0)
  }

  // Static methods

  static Add(vector: Object3D, otherVector: Object3D): Vector3D {
    return add(vector, otherVector, Vector3D.Zero()) as Vector3D
  }

  /**
   * Gets the class name.
   *
   * @returns {string} The name of the class
   * @override
   */
  getClassName(): string {
    return 'Vector3D'
  }

  /**
   * Clones a vector.
   *
   * @returns {Vector2D} A coloned vector
   * @override
   */
  clone(): Vector3D {
    return new Vector3D(this._x, this._y, this._z)
  }

  add(otherVector: Vector3D): Vector3D {
    return Vector3D.Add(this, otherVector) as Vector3D
  }

  addInPlace(otherVector: Vector3D): this {
    return add(this, otherVector, this) as this
  }

  addToRef(otherVector: Vector3D, ref: Vector3D): Vector3D {
    return add(this, otherVector, ref)
  }
}

export default Vector3D