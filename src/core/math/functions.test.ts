import { test, expect } from 'vitest'
import { clamp, fraction, lerp } from './functions'

test('clamp a value', () => {
  expect(clamp(50, 0, 100)).toBe(50)
  expect(clamp(0, 50, 100)).toBe(50)
  expect(clamp(200, 50, 100)).toBe(100)
})

test('fraction of a value', () => {
  expect(fraction(3.14)).toBeCloseTo(0.14)
})

test('lerp a value', () => {
  expect(lerp(0, 10, 0.5)).toBeCloseTo(5)
})
