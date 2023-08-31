export type Object2D = {
  x: number
  y: number
}

export type Object3D = {
  x: number
  y: number
  z: number
}

export type Object4D = {
  x: number
  y: number
  z: number
  w: number
}

export type Array2D = [number, number]

export type Array3D = [number, number, number]

export type Array4D = [number, number, number]

export type Polar2DObject = {
  radius: number
  polarAngle: number
}

export type Polar3DObject = {
  radius: number
  polarAngle: number
  azimuthalAngle: number
}

export type Serialized = {
  type: string
}

// Aliases

export type Point2DObject = Object2D
export type Point3DObject = Object3D

export type Vector2DObject = Point2DObject
export type Vector3DObject = Point3DObject

export type Vector2DArray = NumberPair
export type Vector3DArray = NumberTrio

export type NumberPair = Array2D
export type NumberTrio = Array3D

export type Polar2DArray = Array2D
export type Polar3DArray = Array3D

// Unions and intersections

export type Point2DSerialized = Serialized & Point2DObject
export type Point3DSerialized = Serialized & Point3DObject

export type Vector2DSerialized = Serialized & Vector2DObject
export type Vector3DSerialized = Serialized & Vector3DObject

export type ObjectMulti = Object2D | Object3D
export type ArrayMulti = Array2D | Array3D
