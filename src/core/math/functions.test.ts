import { clamp, fract, lerp } from './functions'

test('clamp a value', () => {
  expect(clamp(50, 0, 100)).toBe(50)
  expect(clamp(0, 50, 100)).toBe(50)
  expect(clamp(200, 50, 100)).toBe(100)
})

test('fract of a value', () => {
  expect(fract(3.14)).toBeCloseTo(0.14)
})

test('lerp a value', () => {
  expect(lerp(0, 10, 0.5)).toBeCloseTo(5)
})
