import { camel, snake, toCamel, toSnake } from './index';

describe('camel-snake converter functions', () => {
  it('from camelCase to snake_case', () => {
    expect(snake('camelCase')).toEqual('camel_case');
    expect(snake('camelCASE')).toEqual('camel_case');
    expect(snake('PascalCase')).toEqual('pascal_case');
  });

  it('from snake_case to camelCase', () => {
    expect(camel('camel_case')).toEqual('camelCase');
  });
});

describe('convert object properties', () => {
  const camelCased = {
    fooBar: 'foo',
    barBaz: [1, 2, 3],
    quxFoo: {
      bazQux: 'baz',
    },
  };
  const snakeCased = {
    foo_bar: 'foo',
    bar_baz: [1, 2, 3],
    qux_foo: {
      baz_qux: 'baz',
    },
  };
  it('from camelCase to snake_case', () => {
    expect(toCamel(snakeCased)).toEqual(camelCased);
  });

  it('from snake_case to camelCase', () => {
    expect(toSnake(camelCased)).toEqual(snakeCased);
  });
});
