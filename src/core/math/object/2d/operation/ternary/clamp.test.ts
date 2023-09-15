import type { Object2D } from '../../../../../../types'
import { zeroObject } from '../../../../../util/object'
import { clampObject2d, clampObject2dX, clampObject2dY } from './clamp'

const VECTOR: Object2D = { x: 1, y: 100 }
const VECTOR_MIN: Object2D = { x: 10, y: 10 }
const VECTOR_MAX: Object2D = { x: 50, y: 50 }

test('clamp vector', () => {
  const v: Object2D = { ...VECTOR }
  const min: Object2D = { ...VECTOR_MIN }
  const max: Object2D = { ...VECTOR_MAX }

  // Result of vector clamping
  expect(clampObject2d(v, min, max, zeroObject())).toStrictEqual({ x: 10, y: 50 })

  // No mutations
  expect(v).toStrictEqual(VECTOR)
  expect(min).toStrictEqual(VECTOR_MIN)
  expect(max).toStrictEqual(VECTOR_MAX)
})

test('clamp vector x', () => {
  const v: Object2D = { ...VECTOR }
  const min: Object2D = { ...VECTOR_MIN }
  const max: Object2D = { ...VECTOR_MAX }

  // Result of vector clamping
  expect(clampObject2dX(v, min, max, zeroObject())).toStrictEqual({ x: 10, y: 0 })

  // No mutations
  expect(v).toStrictEqual(VECTOR)
  expect(min).toStrictEqual(VECTOR_MIN)
  expect(max).toStrictEqual(VECTOR_MAX)
})

test('clamp vector y', () => {
  const v: Object2D = { ...VECTOR }
  const min: Object2D = { ...VECTOR_MIN }
  const max: Object2D = { ...VECTOR_MAX }

  // Result of vector clamping
  expect(clampObject2dY(v, min, max, zeroObject())).toStrictEqual({ x: 0, y: 50 })

  // No mutations
  expect(v).toStrictEqual(VECTOR)
  expect(min).toStrictEqual(VECTOR_MIN)
  expect(max).toStrictEqual(VECTOR_MAX)
})
