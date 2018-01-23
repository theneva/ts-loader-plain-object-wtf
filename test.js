function test(input) {
  const correctType = typeof input === 'object';
  const notNull = input !== null;
  const correctPrototype = Object.getPrototypeOf(input) === Object.prototype;

  console.log('correctType', correctType);
  console.log('notNull', notNull);
  console.log('correctPrototype', correctPrototype);
}

module.exports.default = test;
