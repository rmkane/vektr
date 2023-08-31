import type { Array2D } from '../../../../../../types'
import { zeroArray } from '../../../../../util/array'
import { addArray2d, addArrayScalar2d, addArrayScalar2dX, addArrayScalar2dY, addArray2dX, addArray2dY } from './add'

const VECTOR_A: Array2D = [1, 2]
const VECTOR_B: Array2D = [3, 4]
const SCALAR: number = 10

test('add vector', () => {
  const a: Array2D = [...VECTOR_A]
  const b: Array2D = [...VECTOR_B]

  // Result of vector addition
  expect(addArray2d(a, b, zeroArray())).toStrictEqual([4, 6])

  // No mutations
  expect(a).toStrictEqual(VECTOR_A)
  expect(b).toStrictEqual(VECTOR_B)
})

test('add vector x', () => {
  const a: Array2D = [...VECTOR_A]
  const b: Array2D = [...VECTOR_B]

  // Result of vector addition
  expect(addArray2dX(a, b, zeroArray())).toStrictEqual([4, 0])

  // No mutations
  expect(a).toStrictEqual(VECTOR_A)
  expect(b).toStrictEqual(VECTOR_B)
})

test('add vector y', () => {
  const a: Array2D = [...VECTOR_A]
  const b: Array2D = [...VECTOR_B]

  // Result of vector addition
  expect(addArray2dY(a, b, zeroArray())).toStrictEqual([0, 6])

  // No mutations
  expect(a).toStrictEqual(VECTOR_A)
  expect(b).toStrictEqual(VECTOR_B)
})

test('add scalar', () => {
  const a: Array2D = [...VECTOR_A]

  // Result of scalar addition
  expect(addArrayScalar2d(a, SCALAR, zeroArray())).toStrictEqual([11, 12])

  // No mutations
  expect(a).toStrictEqual(VECTOR_A)
})

test('add scalar x', () => {
  const a: Array2D = [...VECTOR_A]

  // Result of scalar addition
  expect(addArrayScalar2dX(a, SCALAR, zeroArray())).toStrictEqual([11, 0])

  // No mutations
  expect(a).toStrictEqual(VECTOR_A)
})

test('add scalar y', () => {
  const a: Array2D = [...VECTOR_A]

  // Result of scalar addition
  expect(addArrayScalar2dY(a, SCALAR, zeroArray())).toStrictEqual([0, 12])

  // No mutations
  expect(a).toStrictEqual(VECTOR_A)
})
