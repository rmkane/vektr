import type { Object2D } from '../../../../../../types'
import { zeroObject } from '../../../../../util/object'
import { projectOntoObject2d } from './project'

const VECTOR_A: Object2D = { x: 1, y: 2 }
const VECTOR_B: Object2D = { x: 3, y: 4 }

test('project vector', () => {
  const a: Object2D = { ...VECTOR_A }
  const b: Object2D = { ...VECTOR_B }

  // Result of vector projection
  expect(projectOntoObject2d(a, b, zeroObject())).toStrictEqual({ x: 1.32, y: 1.76 })

  // No mutations
  expect(a).toStrictEqual({ x: 1, y: 2 })
  expect(b).toStrictEqual({ x: 3, y: 4 })
})
