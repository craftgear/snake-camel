# camel-snake
convert property names from/to camelCase and snake_case

## Usage
```
import { toCamel, toSnake } from 'camel-snake';

toCamel({
  foo_bar: 'foo',
  bar_baz: [1, 2, 3],
  qux_foo: {
    baz_qux: 'baz',
  },
})
// yields
// {
//    fooBar: 'foo',
//    barBaz: [1, 2, 3],
//    quxFoo: {
//      bazQux: 'baz',
//    },
// }

toSnake({
  fooBar: 'foo',
  barBaz: [1, 2, 3],
  quxFoo: {
    bazQux: 'baz',
  },
})
// yields
// {
//    foo_bar: 'foo',
//    bar_baz: [1, 2, 3],
//    qux_foo: {
//      baz_qux: 'baz',
//    },
// }
