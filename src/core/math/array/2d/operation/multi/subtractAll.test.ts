import type { Array2D } from '../../../../../../types'
import { zeroArray } from '../../../../../util/array'
import { subtractAllArray2d } from './subtractAll'

const VECTOR_A: Array2D = [5, 6]
const VECTOR_B: Array2D = [3, 4]
const VECTOR_C: Array2D = [1, 2]

test('subtractAll vector', () => {
  const a: Array2D = [...VECTOR_A]
  const b: Array2D = [...VECTOR_B]
  const c: Array2D = [...VECTOR_C]

  // Result of vector subtractition
  expect(subtractAllArray2d(zeroArray(), a, b, c)).toStrictEqual([1, 0])

  // No mutations
  expect(a).toStrictEqual(VECTOR_A)
  expect(b).toStrictEqual(VECTOR_B)
  expect(c).toStrictEqual(VECTOR_C)
})
