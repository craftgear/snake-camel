# snake-camel
convert property names from/to camelCase and snake_case recursively.

## Usage
```
import { toCamel, toSnake } from 'snake-camel';

toCamel({
  foo_bar: 'foo',
  bar_baz: [1, 2, 3],
  qux_foo: {
    baz_qux: 'baz',
  },
  baz_qux: [{ baz_foo: 1 }, { qux_bar: { foo_foo: 2 } }, true, 1, 'fooBar', 'barBaz'],
})
// yields
// {
//    fooBar: 'foo',
//    barBaz: [1, 2, 3],
//    quxFoo: {
//      bazQux: 'baz',
//    },
//    bazQux: [{ bazFoo: 1 }, { quxBar: { fooFoo: 2 } }, true, 1, 'fooBar', 'barBaz'],
// }

toSnake({
  fooBar: 'foo',
  barBaz: [1, 2, 3],
  quxFoo: {
    bazQux: 'baz',
  },
  bazQux: [{ bazFoo: 1 }, { quxBar: { fooFoo: 2 } }, true, 1, 'fooBar', 'barBaz'],
})
// yields
// {
//    foo_bar: 'foo',
//    bar_baz: [1, 2, 3],
//    qux_foo: {
//      baz_qux: 'baz',
//    },
//    baz_qux: [{ baz_foo: 1 }, { qux_bar: { foo_foo: 2 } }, true, 1, 'fooBar', 'barBaz'],
// }
```
