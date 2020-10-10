import { camel, snake, toCamel, toSnake } from './index';

describe('camel-snake converter functions', () => {
  it('from camelCase to snake_case', () => {
    expect(snake('camelCase')).toEqual('camel_case');
    expect(snake('camelCASE')).toEqual('camel_case');
    expect(snake('PascalCase')).toEqual('pascal_case');
    expect(snake('snake_case')).toEqual('snake_case');
  });

  it('from snake_case to camelCase', () => {
    expect(camel('snake_case')).toEqual('snakeCase');
    expect(camel('camelCase')).toEqual('camelCase');
    expect(camel('PascalCase')).toEqual('PascalCase');
  });
});

describe('convert object properties', () => {
  const camelCased = {
    fooBar: 'foo',
    barBaz: [1, 2, 3],
    quxFoo: {
      bazQux: 'baz',
    },
    bazQux: [{ bazFoo: 1 }, { quxBar: { fooFoo: 2 } }, true, 1, 'fooBar', 'barBaz'],
  };
  const snakeCased = {
    foo_bar: 'foo',
    bar_baz: [1, 2, 3],
    qux_foo: {
      baz_qux: 'baz',
    },
    baz_qux: [{ baz_foo: 1 }, { qux_bar: { foo_foo: 2 } }, true, 1, 'fooBar', 'barBaz'],
  };
  it('from camelCase to snake_case', () => {
    expect(toCamel(snakeCased)).toEqual(camelCased);
  });

  it('from snake_case to camelCase', () => {
    expect(toSnake(camelCased)).toEqual(snakeCased);
  });
});
