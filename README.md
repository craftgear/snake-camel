# snake-camel

[![Actions Status](https://github.com/craftgear/snake-camel/workflows/ci/badge.svg)](https://github.com/craftgear/snake-camel/actions)

convert property names from/to camelCase and snake_case recursively.

## How to use
### import
```
import { toCamel, toSnake } from 'snake-camel';
```

### `toCamel` - convert snake_case to camelCase
```
toCamel({
  foo_bar: 'foo',
  bar_baz: [1, 2, 3],
  qux_foo: {
    baz_qux: 'baz',
  },
  baz_qux: [{ baz_foo: 1 }, { qux_bar: { foo_foo: 2 } }, true, 1, 'fooBar', 'barBaz'],
})
```
yields:
```
{
   fooBar: 'foo',
   barBaz: [1, 2, 3],
   quxFoo: {
     bazQux: 'baz',
   },
   bazQux: [{ bazFoo: 1 }, { quxBar: { fooFoo: 2 } }, true, 1, 'fooBar', 'barBaz'],
}
```

### `toSnake` - convert camelCase to snake_case 
```
toSnake({
  fooBar: 'foo',
  barBaz: [1, 2, 3],
  quxFoo: {
    bazQux: 'baz',
  },
  bazQux: [{ bazFoo: 1 }, { quxBar: { fooFoo: 2 } }, true, 1, 'fooBar', 'barBaz'],
})
```
yields:
```
{
  foo_bar: 'foo',
  bar_baz: [1, 2, 3],
  qux_foo: {
    baz_qux: 'baz',
  },
  baz_qux: [{ baz_foo: 1 }, { qux_bar: { foo_foo: 2 } }, true, 1, 'fooBar', 'barBaz'],
}
```

### dealing with an `Array` of `Object`s
Mapping `toCamle` / `toSnake` over an array does the trick.
```
const snakeCase = {
    foo_bar: 'foo',
    bar_baz: [1, 2, 3],
};
const arr = [snakeCase, snakeCase].map(toCamel);
```
yields:
```
[
  {
    fooBar: 'foo',
    barBaz: [1, 2, 3],
  },
  {
    fooBar: 'foo',
    barBaz: [1, 2, 3],
  },
]
```
