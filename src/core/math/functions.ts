export function clamp(value: number, min: number, max: number) {
  return Math.max(Math.min(value, max), min)
}

export function fraction(value: number) {
  return value - Math.floor(value)
}

export function lerp(start: number, end: number, amount: number): number {
  return start + (end - start) * amount
}

export function polarX(magnitude: number, direction: number) {
  return Math.cos(direction) * magnitude
}

export function polarY(magnitude: number, direction: number) {
  return Math.sin(direction) * magnitude
}
