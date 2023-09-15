import type { Array2D } from '../../../../../../types'
import { zeroArray } from '../../../../../util/array'
import { maxArray2d, maxArray2dX, maxArray2dY } from './max'

const VECTOR_A: Array2D = [5, 2]
const VECTOR_B: Array2D = [1, 8]

test('max vector', () => {
  const a: Array2D = [...VECTOR_A]
  const b: Array2D = [...VECTOR_B]

  // Result of vector maximum
  expect(maxArray2d(a, b, zeroArray())).toStrictEqual([5, 8])

  // No mutations
  expect(a).toStrictEqual(VECTOR_A)
  expect(b).toStrictEqual(VECTOR_B)
})

test('max vector x', () => {
  const a: Array2D = [...VECTOR_A]
  const b: Array2D = [...VECTOR_B]

  // Result of vector maximum
  expect(maxArray2dX(a, b, zeroArray())).toStrictEqual([5, 0])

  // No mutations
  expect(a).toStrictEqual(VECTOR_A)
  expect(b).toStrictEqual(VECTOR_B)
})

test('max vector y', () => {
  const a: Array2D = [...VECTOR_A]
  const b: Array2D = [...VECTOR_B]

  // Result of vector maximum
  expect(maxArray2dY(a, b, zeroArray())).toStrictEqual([0, 8])

  // No mutations
  expect(a).toStrictEqual(VECTOR_A)
  expect(b).toStrictEqual(VECTOR_B)
})
