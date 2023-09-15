import type { Object2D } from '../../../../../../types'
import { zeroObject } from '../../../../../util/object'
import { lerpObject2d, lerpObject2dX, lerpObject2dY } from './lerp'

const VECTOR_START: Object2D = { x: 50, y: 50 }
const VECTOR_END: Object2D = { x: 100, y: 100 }
const AMOUNT = 0.5

test('lerp vector', () => {
  const start: Object2D = { ...VECTOR_START }
  const end: Object2D = { ...VECTOR_END }

  // Result of vector interpolation
  expect(lerpObject2d(start, end, AMOUNT, zeroObject())).toStrictEqual({ x: 75, y: 75 })

  // No mutations
  expect(start).toStrictEqual(VECTOR_START)
  expect(end).toStrictEqual(VECTOR_END)
})

test('lerp vector x', () => {
  const start: Object2D = { ...VECTOR_START }
  const end: Object2D = { ...VECTOR_END }

  // Result of vector interpolation
  expect(lerpObject2dX(start, end, AMOUNT, zeroObject())).toStrictEqual({ x: 75, y: 0 })

  // No mutations
  expect(start).toStrictEqual(VECTOR_START)
  expect(end).toStrictEqual(VECTOR_END)
})

test('lerp vector y', () => {
  const start: Object2D = { ...VECTOR_START }
  const end: Object2D = { ...VECTOR_END }

  // Result of vector interpolation
  expect(lerpObject2dY(start, end, AMOUNT, zeroObject())).toStrictEqual({ x: 0, y: 75 })

  // No mutations
  expect(start).toStrictEqual(VECTOR_START)
  expect(end).toStrictEqual(VECTOR_END)
})
