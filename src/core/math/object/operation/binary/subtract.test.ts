import type { Object2D } from '../../../../../types'
import { zeroObject } from '../../../../util/object'
import {
  subtractObject,
  subtractObjectScalar,
  subtractObjectScalarX,
  subtractObjectScalarY,
  subtractObjectX,
  subtractObjectY,
} from './subtract'

const VECTOR_A: Object2D = { x: 9, y: 5 }
const VECTOR_B: Object2D = { x: 4, y: 1 }
const SCALAR: number = 3

test('subtract vector', () => {
  const a: Object2D = { ...VECTOR_A }
  const b: Object2D = { ...VECTOR_B }

  // Result of vector subtraction
  expect(subtractObject(a, b, zeroObject())).toStrictEqual({ x: 5, y: 4 })

  // No mutations
  expect(a).toStrictEqual(VECTOR_A)
  expect(b).toStrictEqual(VECTOR_B)
})

test('subtract vector x', () => {
  const a: Object2D = { ...VECTOR_A }
  const b: Object2D = { ...VECTOR_B }

  // Result of vector subtraction
  expect(subtractObjectX(a, b, zeroObject())).toStrictEqual({ x: 5, y: 0 })

  // No mutations
  expect(a).toStrictEqual(VECTOR_A)
  expect(b).toStrictEqual(VECTOR_B)
})

test('subtract vector y', () => {
  const a: Object2D = { ...VECTOR_A }
  const b: Object2D = { ...VECTOR_B }

  // Result of vector subtraction
  expect(subtractObjectY(a, b, zeroObject())).toStrictEqual({ x: 0, y: 4 })

  // No mutations
  expect(a).toStrictEqual(VECTOR_A)
  expect(b).toStrictEqual(VECTOR_B)
})

test('subtract scalar', () => {
  const a: Object2D = { ...VECTOR_A }

  // Result of scalar subtraction
  expect(subtractObjectScalar(a, SCALAR, zeroObject())).toStrictEqual({ x: 6, y: 2 })

  // No mutations
  expect(a).toStrictEqual(VECTOR_A)
})

test('subtract scalar x', () => {
  const a: Object2D = { ...VECTOR_A }

  // Result of scalar subtraction
  expect(subtractObjectScalarX(a, SCALAR, zeroObject())).toStrictEqual({ x: 6, y: 0 })

  // No mutations
  expect(a).toStrictEqual(VECTOR_A)
})

test('subtract scalar y', () => {
  const a: Object2D = { ...VECTOR_A }

  // Result of scalar subtraction
  expect(subtractObjectScalarY(a, SCALAR, zeroObject())).toStrictEqual({ x: 0, y: 2 })

  // No mutations
  expect(a).toStrictEqual(VECTOR_A)
})
