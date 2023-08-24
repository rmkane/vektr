function hashNumber(value: number) {
  return parseInt(value.toString().replace(/\W/g, ''))
}

export { hashNumber }
