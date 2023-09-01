import type { Array2D } from '../../../../../../types'
import { zeroArray } from '../../../../../util/array'
import { multiplyAllArray2d } from './multiplyAll'

const VECTOR_A: Array2D = [1, 2]
const VECTOR_B: Array2D = [3, 4]
const VECTOR_C: Array2D = [5, 6]

test('multiplyAll vector', () => {
  const a: Array2D = [...VECTOR_A]
  const b: Array2D = [...VECTOR_B]
  const c: Array2D = [...VECTOR_C]

  // Result of vector multiplyition
  expect(multiplyAllArray2d(zeroArray(), a, b, c)).toStrictEqual([15, 48])

  // No mutations
  expect(a).toStrictEqual(VECTOR_A)
  expect(b).toStrictEqual(VECTOR_B)
  expect(c).toStrictEqual(VECTOR_C)
})
