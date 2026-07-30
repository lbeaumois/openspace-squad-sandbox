/**
 * Generates a farewell message for the given name.
 * @param {string} name - The person's name. Must be a non-empty string.
 * @returns {string} A farewell message.
 * @throws {TypeError} If name is not a non-empty string.
 */
export function farewell(name) {
  if (typeof name !== 'string' || name.length === 0) {
    throw new TypeError('name must be a non-empty string');
  }
  return `Goodbye, ${name}!`
}
