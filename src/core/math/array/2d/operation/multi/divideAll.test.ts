import type { Array2D } from '../../../../../../types'
import { zeroArray } from '../../../../../util/array'
import { divideAllArray2d } from './divideAll'

const VECTOR_A: Array2D = [12, 15]
const VECTOR_B: Array2D = [3, 5]
const VECTOR_C: Array2D = [2, 3]

test('divideAll vector', () => {
  const a: Array2D = [...VECTOR_A]
  const b: Array2D = [...VECTOR_B]
  const c: Array2D = [...VECTOR_C]

  // Result of vector divideition
  expect(divideAllArray2d(zeroArray(), a, b, c)).toStrictEqual([2, 1])

  // No mutations
  expect(a).toStrictEqual(VECTOR_A)
  expect(b).toStrictEqual(VECTOR_B)
  expect(c).toStrictEqual(VECTOR_C)
})
