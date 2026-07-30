/**
 * Greet a person by name.
 * @param {string} name - The person's name (must be a non-empty string)
 * @returns {string} A greeting message
 * @throws {TypeError} If name is not a non-empty string
 */
export function greet(name) {
  if (typeof name !== 'string' || name.length === 0) {
    throw new TypeError('name must be a non-empty string');
  }
  return `Hello, ${name}!`
}
