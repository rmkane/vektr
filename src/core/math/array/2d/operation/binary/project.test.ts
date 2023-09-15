import type { Array2D } from '../../../../../../types'
import { zeroArray } from '../../../../../util/array'
import { projectOntoArray2d } from './project'

const VECTOR_A: Array2D = [1, 2]
const VECTOR_B: Array2D = [3, 4]

test('project vector', () => {
  const a: Array2D = [...VECTOR_A]
  const b: Array2D = [...VECTOR_B]

  // Result of vector projection
  expect(projectOntoArray2d(a, b, zeroArray())).toStrictEqual([1.32, 1.76])

  // No mutations
  expect(a).toStrictEqual([1, 2])
  expect(b).toStrictEqual([3, 4])
})
