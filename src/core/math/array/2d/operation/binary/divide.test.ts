import type { Array2D } from '../../../../../../types'
import { zeroArray } from '../../../../../util/array'
import {
  divideArray2d,
  divideArrayScalar2d,
  divideArrayScalar2dX,
  divideArrayScalar2dY,
  divideArray2dX,
  divideArray2dY,
} from './divide'

const VECTOR_A: Array2D = [12, 6]
const VECTOR_B: Array2D = [4, 3]
const SCALAR: number = 2

test('divide vector', () => {
  const a: Array2D = [...VECTOR_A]
  const b: Array2D = [...VECTOR_B]

  // Result of vector division
  expect(divideArray2d(a, b, zeroArray())).toStrictEqual([3, 2])

  // No mutations
  expect(a).toStrictEqual(VECTOR_A)
  expect(b).toStrictEqual(VECTOR_B)
})

test('divide vector x', () => {
  const a: Array2D = [...VECTOR_A]
  const b: Array2D = [...VECTOR_B]

  // Result of vector division
  expect(divideArray2dX(a, b, zeroArray())).toStrictEqual([3, 0])

  // No mutations
  expect(a).toStrictEqual(VECTOR_A)
  expect(b).toStrictEqual(VECTOR_B)
})

test('divide vector y', () => {
  const a: Array2D = [...VECTOR_A]
  const b: Array2D = [...VECTOR_B]

  // Result of vector division
  expect(divideArray2dY(a, b, zeroArray())).toStrictEqual([0, 2])

  // No mutations
  expect(a).toStrictEqual(VECTOR_A)
  expect(b).toStrictEqual(VECTOR_B)
})

test('divide scalar', () => {
  const a: Array2D = [...VECTOR_A]

  // Result of scalar division
  expect(divideArrayScalar2d(a, SCALAR, zeroArray())).toStrictEqual([6, 3])

  // No mutations
  expect(a).toStrictEqual(VECTOR_A)
})

test('divide scalar x', () => {
  const a: Array2D = [...VECTOR_A]

  // Result of scalar division
  expect(divideArrayScalar2dX(a, SCALAR, zeroArray())).toStrictEqual([6, 0])

  // No mutations
  expect(a).toStrictEqual(VECTOR_A)
})

test('divide scalar y', () => {
  const a: Array2D = [...VECTOR_A]

  // Result of scalar division
  expect(divideArrayScalar2dY(a, SCALAR, zeroArray())).toStrictEqual([0, 3])

  // No mutations
  expect(a).toStrictEqual(VECTOR_A)
})
