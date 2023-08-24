export function clamp(value: number, min: number, max: number) {
  return Math.max(Math.min(value, max), min)
}

export function fraction(value: number) {
  return value - Math.floor(value)
}

export function lerp(start: number, end: number, amount: number): number {
  return start + (end - start) * amount
}
