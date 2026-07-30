/**
 * Greet someone by name.
 * @param {string} name - The name to greet (must be a non-empty string)
 * @returns {string} A greeting message
 * @throws {TypeError} If name is not a non-empty string
 */
export function greet(name) {
  if (typeof name !== 'string' || name.trim() === '') {
    throw new TypeError('name must be a non-empty string');
  }
  return `Hello, ${name}!`
}
