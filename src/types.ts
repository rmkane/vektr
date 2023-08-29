export type Serialized = {
  type: string
}

export type NumberPair = [number, number]

export type NumberTrio = [number, number, number]

export type Point2DObject = {
  x: number
  y: number
}

export type Point3DObject = Point2DObject & {
  z: number
}

export type Point2DSerialized = Serialized & Point2DObject

export type Point3DSerialized = Serialized & Point3DObject

export type Vector2DObject = Point2DObject

export type Vector3DObject = Point3DObject

export type Vector2DArray = NumberPair

export type Vector3DArray = NumberTrio

export type Vector2DSerialized = Serialized & Vector2DObject

export type Vector3DSerialized = Serialized & Vector3DObject

export type Polar2DObject = {
  radius: number
  angle: number
}

export type Polar2DArray = Array2D

export type Object2D = Vector2DObject | Point2DObject
export type Array2D = Vector2DArray | NumberPair

export type Object3D = Vector3DObject | Point3DObject
export type Array3D = Vector3DArray | NumberTrio

export type ObjectMulti = Object2D | Object3D
export type ArrayMulti = Array2D | Array3D
