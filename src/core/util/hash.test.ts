import { hashNumber } from './hash'

test('hash a number into an int', () => {
  expect(hashNumber(0)).toBe(0)
  expect(hashNumber(1)).toBe(1)
  expect(hashNumber(-1)).toBe(1)
  expect(hashNumber(3.14)).toBe(314)
  expect(hashNumber(-6e4)).toBe(60000)
})
