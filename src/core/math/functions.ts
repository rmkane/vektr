/**
 * Clamps a {@link value} between a {@link min} and {@link max}.
 *
 * @param {number} value - The value to clamp
 * @param {number} min - The minimum value
 * @param {number} max - The maximum value
 * @returns {number} The clamped value
 */
export function clamp(value: number, min: number, max: number): number {
  return Math.max(Math.min(value, max), min)
}

/**
 * Extracts the decimal portion of a floating-point number.
 *
 * @param {number} value - The floating-point value
 * @returns {number} The decimal portion of the floating-point number
 */
export function fract(value: number): number {
  return value - Math.floor(value)
}

/**
 * Interpolates an {@link amount} between a {@link start} and {@link end} value.
 *
 * @param {number} start - The starting value
 * @param {number} end - The ending value
 * @param {number} amount - A value beween [0, 1]
 * @returns {number} The interpolated value
 */
export function lerp(start: number, end: number, amount: number): number {
  return start + (end - start) * amount
}

/**
 * Converts a polar coolordinate into a x value in cartesian space.
 *
 * @param {number} magnitude - The length of the polar coordinate
 * @param {number} direction - The angle of the polar coordinate (in radians)
 * @returns {number} The x value in cartesian space
 */
export function fromPolarX(magnitude: number, direction: number): number {
  return Math.cos(direction) * magnitude
}

/**
 * Converts a polar coolordinate into a y value in cartesian space.
 *
 * @param {number} magnitude - The length of the polar coordinate
 * @param {number} direction - The angle of the polar coordinate (in radians)
 * @returns {number} The y value in cartesian space
 */
export function fromPolarY(magnitude: number, direction: number): number {
  return Math.sin(direction) * magnitude
}
