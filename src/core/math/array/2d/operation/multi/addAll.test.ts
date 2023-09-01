import type { Array2D } from '../../../../../../types'
import { zeroArray } from '../../../../../util/array'
import { addAllArray2d } from './addAll'

const VECTOR_A: Array2D = [1, 2]
const VECTOR_B: Array2D = [3, 4]
const VECTOR_C: Array2D = [5, 6]

test('addAll vector', () => {
  const a: Array2D = [...VECTOR_A]
  const b: Array2D = [...VECTOR_B]
  const c: Array2D = [...VECTOR_C]

  // Result of vector addition
  expect(addAllArray2d(zeroArray(), a, b, c)).toStrictEqual([9, 12])

  // No mutations
  expect(a).toStrictEqual(VECTOR_A)
  expect(b).toStrictEqual(VECTOR_B)
  expect(c).toStrictEqual(VECTOR_C)
})
