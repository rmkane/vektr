import type { Array2D } from '../../../../../../types'
import { zeroArray } from '../../../../../util/array'
import { lerpArray2d, lerpArray2dX, lerpArray2dY } from './lerp'

const VECTOR_START: Array2D = [50, 50]
const VECTOR_END: Array2D = [100, 100]
const AMOUNT = 0.5

test('lerp vector', () => {
  const start: Array2D = [...VECTOR_START]
  const end: Array2D = [...VECTOR_END]

  // Result of vector interpolation
  expect(lerpArray2d(start, end, AMOUNT, zeroArray())).toStrictEqual([75, 75])

  // No mutations
  expect(start).toStrictEqual(VECTOR_START)
  expect(end).toStrictEqual(VECTOR_END)
})

test('lerp vector x', () => {
  const start: Array2D = [...VECTOR_START]
  const end: Array2D = [...VECTOR_END]

  // Result of vector interpolation
  expect(lerpArray2dX(start, end, AMOUNT, zeroArray())).toStrictEqual([75, 0])

  // No mutations
  expect(start).toStrictEqual(VECTOR_START)
  expect(end).toStrictEqual(VECTOR_END)
})

test('lerp vector y', () => {
  const start: Array2D = [...VECTOR_START]
  const end: Array2D = [...VECTOR_END]

  // Result of vector interpolation
  expect(lerpArray2dY(start, end, AMOUNT, zeroArray())).toStrictEqual([0, 75])

  // No mutations
  expect(start).toStrictEqual(VECTOR_START)
  expect(end).toStrictEqual(VECTOR_END)
})
