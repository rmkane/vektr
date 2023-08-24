export type Serialized = {
  type: string
}

export type NumberPair = [number, number]

export type Point2DObject = {
  x: number
  y: number
}

export type Point3DObject = Point2DObject & {
  z: number
}

export type Point2DSerialized = Serialized & Point2DObject

export type Vector2DObject = Point2DObject

export type Vector3DObject = Point3DObject

export type Vector2DArray = NumberPair

export type Vector2DSerialized = Serialized & Vector2DObject

export type Polar2DObject = {
  magnitude: number
  direction: number
}

export type Polar2DArray = Array2D

export type Object2D = Vector2DObject | Point2DObject
export type Array2D = Vector2DArray | NumberPair
