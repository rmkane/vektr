import type { Array2D } from '../../../../../../types'
import { zeroArray } from '../../../../../util/array'
import {
  multiplyArray2d,
  multiplyArrayScalar2d,
  multiplyArrayScalar2dX,
  multiplyArrayScalar2dY,
  multiplyArray2dX,
  multiplyArray2dY,
} from './multiply'

const VECTOR_A: Array2D = [1, 2]
const VECTOR_B: Array2D = [3, 4]
const SCALAR: number = 10

test('multiply vector', () => {
  const a: Array2D = [...VECTOR_A]
  const b: Array2D = [...VECTOR_B]

  // Result of vector multiplication
  expect(multiplyArray2d(a, b, zeroArray())).toStrictEqual([3, 8])

  // No mutations
  expect(a).toStrictEqual(VECTOR_A)
  expect(b).toStrictEqual(VECTOR_B)
})

test('multiply vector x', () => {
  const a: Array2D = [...VECTOR_A]
  const b: Array2D = [...VECTOR_B]

  // Result of vector multiplication
  expect(multiplyArray2dX(a, b, zeroArray())).toStrictEqual([3, 0])

  // No mutations
  expect(a).toStrictEqual(VECTOR_A)
  expect(b).toStrictEqual(VECTOR_B)
})

test('multiply vector y', () => {
  const a: Array2D = [...VECTOR_A]
  const b: Array2D = [...VECTOR_B]

  // Result of vector multiplication
  expect(multiplyArray2dY(a, b, zeroArray())).toStrictEqual([0, 8])

  // No mutations
  expect(a).toStrictEqual(VECTOR_A)
  expect(b).toStrictEqual(VECTOR_B)
})

test('multiply scalar', () => {
  const a: Array2D = [...VECTOR_A]

  // Result of scalar multiplication
  expect(multiplyArrayScalar2d(a, SCALAR, zeroArray())).toStrictEqual([10, 20])

  // No mutations
  expect(a).toStrictEqual(VECTOR_A)
})

test('multiply scalar x', () => {
  const a: Array2D = [...VECTOR_A]

  // Result of scalar multiplication
  expect(multiplyArrayScalar2dX(a, SCALAR, zeroArray())).toStrictEqual([10, 0])

  // No mutations
  expect(a).toStrictEqual(VECTOR_A)
})

test('multiply scalar y', () => {
  const a: Array2D = [...VECTOR_A]

  // Result of scalar multiplication
  expect(multiplyArrayScalar2dY(a, SCALAR, zeroArray())).toStrictEqual([0, 20])

  // No mutations
  expect(a).toStrictEqual(VECTOR_A)
})
