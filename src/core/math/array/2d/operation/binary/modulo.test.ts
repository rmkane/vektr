import type { Array2D } from '../../../../../../types'
import { zeroArray } from '../../../../../util/array'
import {
  moduloArray2d,
  moduloArrayScalar2d,
  moduloArrayScalar2dX,
  moduloArrayScalar2dY,
  moduloArray2dX,
  moduloArray2dY,
} from './modulo'

const VECTOR_A: Array2D = [5, 8]
const VECTOR_B: Array2D = [2, 5]
const SCALAR: number = 6

test('modulo vector', () => {
  const a: Array2D = [...VECTOR_A]
  const b: Array2D = [...VECTOR_B]

  // Result of vector modulo
  expect(moduloArray2d(a, b, zeroArray())).toStrictEqual([1, 3])

  // No mutations
  expect(a).toStrictEqual(VECTOR_A)
  expect(b).toStrictEqual(VECTOR_B)
})

test('modulo vector x', () => {
  const a: Array2D = [...VECTOR_A]
  const b: Array2D = [...VECTOR_B]

  // Result of vector modulo
  expect(moduloArray2dX(a, b, zeroArray())).toStrictEqual([1, 0])

  // No mutations
  expect(a).toStrictEqual(VECTOR_A)
  expect(b).toStrictEqual(VECTOR_B)
})

test('modulo vector y', () => {
  const a: Array2D = [...VECTOR_A]
  const b: Array2D = [...VECTOR_B]

  // Result of vector modulo
  expect(moduloArray2dY(a, b, zeroArray())).toStrictEqual([0, 3])

  // No mutations
  expect(a).toStrictEqual(VECTOR_A)
  expect(b).toStrictEqual(VECTOR_B)
})

test('modulo scalar', () => {
  const a: Array2D = [...VECTOR_A]

  // Result of scalar modulo
  expect(moduloArrayScalar2d(a, SCALAR, zeroArray())).toStrictEqual([5, 2])

  // No mutations
  expect(a).toStrictEqual(VECTOR_A)
})

test('modulo scalar x', () => {
  const a: Array2D = [...VECTOR_A]

  // Result of scalar modulo
  expect(moduloArrayScalar2dX(a, SCALAR, zeroArray())).toStrictEqual([5, 0])

  // No mutations
  expect(a).toStrictEqual(VECTOR_A)
})

test('modulo scalar y', () => {
  const a: Array2D = [...VECTOR_A]

  // Result of scalar modulo
  expect(moduloArrayScalar2dY(a, SCALAR, zeroArray())).toStrictEqual([0, 2])

  // No mutations
  expect(a).toStrictEqual(VECTOR_A)
})
