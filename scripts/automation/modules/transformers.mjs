function transformNames(text) {
  return text
    .replace(/Object/g, 'Array') // Function names
    .replace(/object/g, 'array') // Imports paths
}

function transformCoordinates(text) {
  return text
    .replace(/\.x\b/g, '[0]') // x-coordinate to [0]
    .replace(/\.y\b/g, '[1]') // y-coordinate to [1]
    .replace(/\.z\b/g, '[2]') // z-coordinate to [2]
    .replace(/\.radius\b/g, '[0]') // radius to [0]
    .replace(/\.polarAngle\b/g, '[1]') // polarAngle to [1]
}

function transformSpread(text) {
  return text.replace(/{ ...([A-Z_]+) }/g, '[...$1]') // Unit test constant spread
}

function transformObjects(text) {
  //return text.replace(/\{[^}]+\}/gm, __jsonObjectToArray)
  return text
    .replace(/\{ x: (.+), y: (.+) \}/g, '[$1, $2]') // Inline object
    .replace(/\{ x: (.+), y: (.+), z: (.+) \}/g, '[$1, $2, $3]') // Inline object
    .replace(/\{\s*\w+:\s(.+),\s*\s+\w+:\s(.+),\s*\}/gm, '[$1, $2]') // Polar
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function __jsonObjectToArray(jsonObject) {
  // eslint-disable-next-line no-console
  const nums = __extractNumbers(jsonObject)?.map((n) => +n)
  return nums ? JSON.stringify(nums).replace(/,/g, ', ') : jsonObject
}

function __extractNumbers(str) {
  return str.match(/\b[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)\b/g)
}

export { transformCoordinates, transformNames, transformObjects, transformSpread }
