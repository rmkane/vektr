import type { Array2D } from '../../../../../../types'
import { zeroArray } from '../../../../../util/array'
import { minArray2d, minArray2dX, minArray2dY } from './min'

const VECTOR_A: Array2D = [5, 2]
const VECTOR_B: Array2D = [1, 8]

test('min vector', () => {
  const a: Array2D = [...VECTOR_A]
  const b: Array2D = [...VECTOR_B]

  // Result of vector minimum
  expect(minArray2d(a, b, zeroArray())).toStrictEqual([1, 2])

  // No mutations
  expect(a).toStrictEqual(VECTOR_A)
  expect(b).toStrictEqual(VECTOR_B)
})

test('min vector x', () => {
  const a: Array2D = [...VECTOR_A]
  const b: Array2D = [...VECTOR_B]

  // Result of vector minimum
  expect(minArray2dX(a, b, zeroArray())).toStrictEqual([1, 0])

  // No mutations
  expect(a).toStrictEqual(VECTOR_A)
  expect(b).toStrictEqual(VECTOR_B)
})

test('min vector y', () => {
  const a: Array2D = [...VECTOR_A]
  const b: Array2D = [...VECTOR_B]

  // Result of vector minimum
  expect(minArray2dY(a, b, zeroArray())).toStrictEqual([0, 2])

  // No mutations
  expect(a).toStrictEqual(VECTOR_A)
  expect(b).toStrictEqual(VECTOR_B)
})
