export type FloatArray = number[] | Float32Array

export type Serialized = {
  type: string
}

export type Vector2DObject = {
  x: number
  y: number
}

export type Vector2DSerialized = Serialized & Vector2DObject

export type Vector3DObject = Vector2DObject & {
  z: number
}
