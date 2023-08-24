export type FloatArray = number[] | Float32Array

export type Serialized = {
  type: string
}

export type Vector2DObject = {
  x: number
  y: number
}

export type Array2D = [number, number]

export type Vector2DArray = Array2D

export type Vector2DSerialized = Serialized & Vector2DObject

export type Vector3DObject = Vector2DObject & {
  z: number
}

export type Polar2DObject = {
  magnitude: number
  direction: number
}

export type Polar2DArray = Array2D
