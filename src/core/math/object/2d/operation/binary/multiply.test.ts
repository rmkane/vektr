import type { Object2D } from '../../../../../../types'
import { zeroObject } from '../../../../../util/object'
import {
  multiplyObject2d,
  multiplyObjectScalar2d,
  multiplyObjectScalar2dX,
  multiplyObjectScalar2dY,
  multiplyObject2dX,
  multiplyObject2dY,
} from './multiply'

const VECTOR_A: Object2D = { x: 1, y: 2 }
const VECTOR_B: Object2D = { x: 3, y: 4 }
const SCALAR: number = 10

test('multiply vector', () => {
  const a: Object2D = { ...VECTOR_A }
  const b: Object2D = { ...VECTOR_B }

  // Result of vector multiplication
  expect(multiplyObject2d(a, b, zeroObject())).toStrictEqual({ x: 3, y: 8 })

  // No mutations
  expect(a).toStrictEqual(VECTOR_A)
  expect(b).toStrictEqual(VECTOR_B)
})

test('multiply vector x', () => {
  const a: Object2D = { ...VECTOR_A }
  const b: Object2D = { ...VECTOR_B }

  // Result of vector multiplication
  expect(multiplyObject2dX(a, b, zeroObject())).toStrictEqual({ x: 3, y: 0 })

  // No mutations
  expect(a).toStrictEqual(VECTOR_A)
  expect(b).toStrictEqual(VECTOR_B)
})

test('multiply vector y', () => {
  const a: Object2D = { ...VECTOR_A }
  const b: Object2D = { ...VECTOR_B }

  // Result of vector multiplication
  expect(multiplyObject2dY(a, b, zeroObject())).toStrictEqual({ x: 0, y: 8 })

  // No mutations
  expect(a).toStrictEqual(VECTOR_A)
  expect(b).toStrictEqual(VECTOR_B)
})

test('multiply scalar', () => {
  const a: Object2D = { ...VECTOR_A }

  // Result of scalar multiplication
  expect(multiplyObjectScalar2d(a, SCALAR, zeroObject())).toStrictEqual({ x: 10, y: 20 })

  // No mutations
  expect(a).toStrictEqual(VECTOR_A)
})

test('multiply scalar x', () => {
  const a: Object2D = { ...VECTOR_A }

  // Result of scalar multiplication
  expect(multiplyObjectScalar2dX(a, SCALAR, zeroObject())).toStrictEqual({ x: 10, y: 0 })

  // No mutations
  expect(a).toStrictEqual(VECTOR_A)
})

test('multiply scalar y', () => {
  const a: Object2D = { ...VECTOR_A }

  // Result of scalar multiplication
  expect(multiplyObjectScalar2dY(a, SCALAR, zeroObject())).toStrictEqual({ x: 0, y: 20 })

  // No mutations
  expect(a).toStrictEqual(VECTOR_A)
})
