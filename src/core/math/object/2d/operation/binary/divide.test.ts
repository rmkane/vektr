import type { Object2D } from '../../../../../../types'
import { zeroObject } from '../../../../../util/object'
import {
  divideObject2d,
  divideObjectScalar2d,
  divideObjectScalar2dX,
  divideObjectScalar2dY,
  divideObject2dX,
  divideObject2dY,
} from './divide'

const VECTOR_A: Object2D = { x: 12, y: 6 }
const VECTOR_B: Object2D = { x: 4, y: 3 }
const SCALAR: number = 2

test('divide vector', () => {
  const a: Object2D = { ...VECTOR_A }
  const b: Object2D = { ...VECTOR_B }

  // Result of vector division
  expect(divideObject2d(a, b, zeroObject())).toStrictEqual({ x: 3, y: 2 })

  // No mutations
  expect(a).toStrictEqual(VECTOR_A)
  expect(b).toStrictEqual(VECTOR_B)
})

test('divide vector x', () => {
  const a: Object2D = { ...VECTOR_A }
  const b: Object2D = { ...VECTOR_B }

  // Result of vector division
  expect(divideObject2dX(a, b, zeroObject())).toStrictEqual({ x: 3, y: 0 })

  // No mutations
  expect(a).toStrictEqual(VECTOR_A)
  expect(b).toStrictEqual(VECTOR_B)
})

test('divide vector y', () => {
  const a: Object2D = { ...VECTOR_A }
  const b: Object2D = { ...VECTOR_B }

  // Result of vector division
  expect(divideObject2dY(a, b, zeroObject())).toStrictEqual({ x: 0, y: 2 })

  // No mutations
  expect(a).toStrictEqual(VECTOR_A)
  expect(b).toStrictEqual(VECTOR_B)
})

test('divide scalar', () => {
  const a: Object2D = { ...VECTOR_A }

  // Result of scalar division
  expect(divideObjectScalar2d(a, SCALAR, zeroObject())).toStrictEqual({ x: 6, y: 3 })

  // No mutations
  expect(a).toStrictEqual(VECTOR_A)
})

test('divide scalar x', () => {
  const a: Object2D = { ...VECTOR_A }

  // Result of scalar division
  expect(divideObjectScalar2dX(a, SCALAR, zeroObject())).toStrictEqual({ x: 6, y: 0 })

  // No mutations
  expect(a).toStrictEqual(VECTOR_A)
})

test('divide scalar y', () => {
  const a: Object2D = { ...VECTOR_A }

  // Result of scalar division
  expect(divideObjectScalar2dY(a, SCALAR, zeroObject())).toStrictEqual({ x: 0, y: 3 })

  // No mutations
  expect(a).toStrictEqual(VECTOR_A)
})
