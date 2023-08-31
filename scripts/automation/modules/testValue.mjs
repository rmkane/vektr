import GlobToRegExp from 'glob-to-regexp'

/**
 * Evaluates this predicate on the given argument.
 *
 * @callback strPredicate
 * @param {str} value - A string input value
 * @returns {boolean} - Wether the input argument matches the predicate
 */

/**
 * Tests a string against a pattern i.e. glob, regex, or predicate function.
 *
 * @param {string} value - String value to test
 * @param {string | RegExp | strPredicate} test - Either a glob, regex, or predicate function
 * @returns {boolean} Wether the test passed
 */
function testValue(value, pattern) {
  if (pattern === undefined || pattern === null || pattern === true) {
    return true
  } else if (pattern === false) {
    return false
  } else if (typeof pattern === 'string') {
    return GlobToRegExp(pattern).test(value)
  } else if (pattern instanceof RegExp) {
    return pattern.test(value)
  } else if (pattern instanceof Function) {
    return pattern(value)
  }
  throw new Error(`Unkown pattern type: ${pattern}`)
}

export default testValue
