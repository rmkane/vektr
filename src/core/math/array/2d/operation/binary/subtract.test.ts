import type { Array2D } from '../../../../../../types'
import { zeroArray } from '../../../../../util/array'
import {
  subtractArray2d,
  subtractArrayScalar2d,
  subtractArrayScalar2dX,
  subtractArrayScalar2dY,
  subtractArray2dX,
  subtractArray2dY,
} from './subtract'

const VECTOR_A: Array2D = [9, 5]
const VECTOR_B: Array2D = [4, 1]
const SCALAR: number = 3

test('subtract vector', () => {
  const a: Array2D = [...VECTOR_A]
  const b: Array2D = [...VECTOR_B]

  // Result of vector subtraction
  expect(subtractArray2d(a, b, zeroArray())).toStrictEqual([5, 4])

  // No mutations
  expect(a).toStrictEqual(VECTOR_A)
  expect(b).toStrictEqual(VECTOR_B)
})

test('subtract vector x', () => {
  const a: Array2D = [...VECTOR_A]
  const b: Array2D = [...VECTOR_B]

  // Result of vector subtraction
  expect(subtractArray2dX(a, b, zeroArray())).toStrictEqual([5, 0])

  // No mutations
  expect(a).toStrictEqual(VECTOR_A)
  expect(b).toStrictEqual(VECTOR_B)
})

test('subtract vector y', () => {
  const a: Array2D = [...VECTOR_A]
  const b: Array2D = [...VECTOR_B]

  // Result of vector subtraction
  expect(subtractArray2dY(a, b, zeroArray())).toStrictEqual([0, 4])

  // No mutations
  expect(a).toStrictEqual(VECTOR_A)
  expect(b).toStrictEqual(VECTOR_B)
})

test('subtract scalar', () => {
  const a: Array2D = [...VECTOR_A]

  // Result of scalar subtraction
  expect(subtractArrayScalar2d(a, SCALAR, zeroArray())).toStrictEqual([6, 2])

  // No mutations
  expect(a).toStrictEqual(VECTOR_A)
})

test('subtract scalar x', () => {
  const a: Array2D = [...VECTOR_A]

  // Result of scalar subtraction
  expect(subtractArrayScalar2dX(a, SCALAR, zeroArray())).toStrictEqual([6, 0])

  // No mutations
  expect(a).toStrictEqual(VECTOR_A)
})

test('subtract scalar y', () => {
  const a: Array2D = [...VECTOR_A]

  // Result of scalar subtraction
  expect(subtractArrayScalar2dY(a, SCALAR, zeroArray())).toStrictEqual([0, 2])

  // No mutations
  expect(a).toStrictEqual(VECTOR_A)
})
