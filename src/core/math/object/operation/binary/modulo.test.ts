import type { Object2D } from '../../../../../types'
import { zeroObject } from '../../../../util/object'
import {
  moduloObject,
  moduloObjectScalar,
  moduloObjectScalarX,
  moduloObjectScalarY,
  moduloObjectX,
  moduloObjectY,
} from './modulo'

const VECTOR_A: Object2D = { x: 5, y: 8 }
const VECTOR_B: Object2D = { x: 2, y: 5 }
const SCALAR: number = 6

test('modulo vector', () => {
  const a: Object2D = { ...VECTOR_A }
  const b: Object2D = { ...VECTOR_B }

  // Result of vector modulo
  expect(moduloObject(a, b, zeroObject())).toStrictEqual({ x: 1, y: 3 })

  // No mutations
  expect(a).toStrictEqual(VECTOR_A)
  expect(b).toStrictEqual(VECTOR_B)
})

test('modulo vector x', () => {
  const a: Object2D = { ...VECTOR_A }
  const b: Object2D = { ...VECTOR_B }

  // Result of vector modulo
  expect(moduloObjectX(a, b, zeroObject())).toStrictEqual({ x: 1, y: 0 })

  // No mutations
  expect(a).toStrictEqual(VECTOR_A)
  expect(b).toStrictEqual(VECTOR_B)
})

test('modulo vector y', () => {
  const a: Object2D = { ...VECTOR_A }
  const b: Object2D = { ...VECTOR_B }

  // Result of vector modulo
  expect(moduloObjectY(a, b, zeroObject())).toStrictEqual({ x: 0, y: 3 })

  // No mutations
  expect(a).toStrictEqual(VECTOR_A)
  expect(b).toStrictEqual(VECTOR_B)
})

test('modulo scalar', () => {
  const a: Object2D = { ...VECTOR_A }

  // Result of scalar modulo
  expect(moduloObjectScalar(a, SCALAR, zeroObject())).toStrictEqual({ x: 5, y: 2 })

  // No mutations
  expect(a).toStrictEqual(VECTOR_A)
})

test('modulo scalar x', () => {
  const a: Object2D = { ...VECTOR_A }

  // Result of scalar modulo
  expect(moduloObjectScalarX(a, SCALAR, zeroObject())).toStrictEqual({ x: 5, y: 0 })

  // No mutations
  expect(a).toStrictEqual(VECTOR_A)
})

test('modulo scalar y', () => {
  const a: Object2D = { ...VECTOR_A }

  // Result of scalar modulo
  expect(moduloObjectScalarY(a, SCALAR, zeroObject())).toStrictEqual({ x: 0, y: 2 })

  // No mutations
  expect(a).toStrictEqual(VECTOR_A)
})
