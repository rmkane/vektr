import type { Object2D } from '../../../../../types'
import { zeroObject } from '../../../../util/object'
import { addObject, addObjectScalar, addObjectScalarX, addObjectScalarY, addObjectX, addObjectY } from './add'

const VECTOR_A: Object2D = { x: 1, y: 2 }
const VECTOR_B: Object2D = { x: 3, y: 4 }
const SCALAR: number = 10

test('add vector', () => {
  const a: Object2D = { ...VECTOR_A }
  const b: Object2D = { ...VECTOR_B }

  // Result of vector addition
  expect(addObject(a, b, zeroObject())).toStrictEqual({ x: 4, y: 6 })

  // No mutations
  expect(a).toStrictEqual(VECTOR_A)
  expect(b).toStrictEqual(VECTOR_B)
})

test('add vector x', () => {
  const a: Object2D = { ...VECTOR_A }
  const b: Object2D = { ...VECTOR_B }

  // Result of vector addition
  expect(addObjectX(a, b, zeroObject())).toStrictEqual({ x: 4, y: 0 })

  // No mutations
  expect(a).toStrictEqual(VECTOR_A)
  expect(b).toStrictEqual(VECTOR_B)
})

test('add vector y', () => {
  const a: Object2D = { ...VECTOR_A }
  const b: Object2D = { ...VECTOR_B }

  // Result of vector addition
  expect(addObjectY(a, b, zeroObject())).toStrictEqual({ x: 0, y: 6 })

  // No mutations
  expect(a).toStrictEqual(VECTOR_A)
  expect(b).toStrictEqual(VECTOR_B)
})

test('add scalar', () => {
  const a: Object2D = { ...VECTOR_A }

  // Result of scalar addition
  expect(addObjectScalar(a, SCALAR, zeroObject())).toStrictEqual({ x: 11, y: 12 })

  // No mutations
  expect(a).toStrictEqual(VECTOR_A)
})

test('add scalar x', () => {
  const a: Object2D = { ...VECTOR_A }

  // Result of scalar addition
  expect(addObjectScalarX(a, SCALAR, zeroObject())).toStrictEqual({ x: 11, y: 0 })

  // No mutations
  expect(a).toStrictEqual(VECTOR_A)
})

test('add scalar y', () => {
  const a: Object2D = { ...VECTOR_A }

  // Result of scalar addition
  expect(addObjectScalarY(a, SCALAR, zeroObject())).toStrictEqual({ x: 0, y: 12 })

  // No mutations
  expect(a).toStrictEqual(VECTOR_A)
})
