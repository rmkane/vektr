import type { Object2D } from '../../../../../../types'
import { zeroObject } from '../../../../../util/object'
import { minObject2d, minObject2dX, minObject2dY } from './min'

const VECTOR_A: Object2D = { x: 5, y: 2 }
const VECTOR_B: Object2D = { x: 1, y: 8 }

test('min vector', () => {
  const a: Object2D = { ...VECTOR_A }
  const b: Object2D = { ...VECTOR_B }

  // Result of vector minimum
  expect(minObject2d(a, b, zeroObject())).toStrictEqual({ x: 1, y: 2 })

  // No mutations
  expect(a).toStrictEqual(VECTOR_A)
  expect(b).toStrictEqual(VECTOR_B)
})

test('min vector x', () => {
  const a: Object2D = { ...VECTOR_A }
  const b: Object2D = { ...VECTOR_B }

  // Result of vector minimum
  expect(minObject2dX(a, b, zeroObject())).toStrictEqual({ x: 1, y: 0 })

  // No mutations
  expect(a).toStrictEqual(VECTOR_A)
  expect(b).toStrictEqual(VECTOR_B)
})

test('min vector y', () => {
  const a: Object2D = { ...VECTOR_A }
  const b: Object2D = { ...VECTOR_B }

  // Result of vector minimum
  expect(minObject2dY(a, b, zeroObject())).toStrictEqual({ x: 0, y: 2 })

  // No mutations
  expect(a).toStrictEqual(VECTOR_A)
  expect(b).toStrictEqual(VECTOR_B)
})
