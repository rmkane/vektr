import type { Array2D } from '../../../../../../types'
import { zeroArray } from '../../../../../util/array'
import { clampArray2d, clampArray2dX, clampArray2dY } from './clamp'

const VECTOR: Array2D = [1, 100]
const VECTOR_MIN: Array2D = [10, 10]
const VECTOR_MAX: Array2D = [50, 50]

test('clamp vector', () => {
  const v: Array2D = [...VECTOR]
  const min: Array2D = [...VECTOR_MIN]
  const max: Array2D = [...VECTOR_MAX]

  // Result of vector clamping
  expect(clampArray2d(v, min, max, zeroArray())).toStrictEqual([10, 50])

  // No mutations
  expect(v).toStrictEqual(VECTOR)
  expect(min).toStrictEqual(VECTOR_MIN)
  expect(max).toStrictEqual(VECTOR_MAX)
})

test('clamp vector x', () => {
  const v: Array2D = [...VECTOR]
  const min: Array2D = [...VECTOR_MIN]
  const max: Array2D = [...VECTOR_MAX]

  // Result of vector clamping
  expect(clampArray2dX(v, min, max, zeroArray())).toStrictEqual([10, 0])

  // No mutations
  expect(v).toStrictEqual(VECTOR)
  expect(min).toStrictEqual(VECTOR_MIN)
  expect(max).toStrictEqual(VECTOR_MAX)
})

test('clamp vector y', () => {
  const v: Array2D = [...VECTOR]
  const min: Array2D = [...VECTOR_MIN]
  const max: Array2D = [...VECTOR_MAX]

  // Result of vector clamping
  expect(clampArray2dY(v, min, max, zeroArray())).toStrictEqual([0, 50])

  // No mutations
  expect(v).toStrictEqual(VECTOR)
  expect(min).toStrictEqual(VECTOR_MIN)
  expect(max).toStrictEqual(VECTOR_MAX)
})
