// eslint-disable-next-line @typescript-eslint/no-var-requires
const Vektr = require('../lib/index.js')

const { Vector2D } = Vektr

const v1 = new Vector2D(3, 4)
const v2 = new Vector2D(6, 8)
const v3 = v1.add(v2)

// eslint-disable-next-line no-console
console.log(v3.toJSON())
