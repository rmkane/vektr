import type { Object2D } from '../../../../../../types'
import { zeroObject } from '../../../../../util/object'
import { multiplyAllObject2d } from './multiplyAll'

const VECTOR_A: Object2D = { x: 1, y: 2 }
const VECTOR_B: Object2D = { x: 3, y: 4 }
const VECTOR_C: Object2D = { x: 5, y: 6 }

test('multiplyAll vector', () => {
  const a: Object2D = { ...VECTOR_A }
  const b: Object2D = { ...VECTOR_B }
  const c: Object2D = { ...VECTOR_C }

  // Result of vector multiplyition
  expect(multiplyAllObject2d(zeroObject(), a, b, c)).toStrictEqual({ x: 15, y: 48 })

  // No mutations
  expect(a).toStrictEqual(VECTOR_A)
  expect(b).toStrictEqual(VECTOR_B)
  expect(c).toStrictEqual(VECTOR_C)
})
