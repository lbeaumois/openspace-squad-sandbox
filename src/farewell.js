/**
 * Farewell message generator.
 * @param {string} name - The name of the person to bid farewell to.
 * @returns {string} A farewell message.
 * @throws {TypeError} If name is not a non-empty string.
 */
export function farewell(name) {
  if (typeof name !== 'string' || name.length === 0) {
    throw new TypeError('name must be a non-empty string');
  }
  return `Goodbye, ${name}!`
}
