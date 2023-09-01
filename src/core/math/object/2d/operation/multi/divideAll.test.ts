import type { Object2D } from '../../../../../../types'
import { zeroObject } from '../../../../../util/object'
import { divideAllObject2d } from './divideAll'

const VECTOR_A: Object2D = { x: 12, y: 15 }
const VECTOR_B: Object2D = { x: 3, y: 5 }
const VECTOR_C: Object2D = { x: 2, y: 3 }

test('divideAll vector', () => {
  const a: Object2D = { ...VECTOR_A }
  const b: Object2D = { ...VECTOR_B }
  const c: Object2D = { ...VECTOR_C }

  // Result of vector divideition
  expect(divideAllObject2d(zeroObject(), a, b, c)).toStrictEqual({ x: 2, y: 1 })

  // No mutations
  expect(a).toStrictEqual(VECTOR_A)
  expect(b).toStrictEqual(VECTOR_B)
  expect(c).toStrictEqual(VECTOR_C)
})
