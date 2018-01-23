function test(input) {
  const correctType = typeof input === 'object';
  const notNull = input !== null;
  const correctPrototype = Object.getPrototypeOf(input) === Object.prototype;

  console.log('correctType', correctType);
  console.log('notNull', notNull);
  console.log('correctPrototype', correctPrototype);

  return (
    typeof input === 'object' &&
    input !== null &&
    Object.getPrototypeOf(input) === Object.prototype
  );
}

module.exports.default = test;
