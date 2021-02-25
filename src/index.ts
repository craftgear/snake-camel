type AnyObject = {
  [key: string]: any;
};
type Data = AnyObject | AnyObject[];
type Converter = (str: string) => string;
type Recursive = (obj: AnyObject) => AnyObject;
type NameConverter = (converter: Converter) => <D extends Data>(data: D) => D;

export const camel: Converter = (str) => str.replace(/_+(.?)/g, (_, p1) => p1.toUpperCase());
export const snake: Converter = (str) =>
  str
    .replace(/(^[A-Z])/, (_, p1) => p1.toLowerCase())
    .replace(/([A-Z]+)/g, (_, p1) => `_${p1.toLowerCase()}`);

const detectObject = (obj: any) => {
  if (Object.prototype.toString.call(obj) === '[object Object]') {
    return true;
  }
  return false;
};

const propertyNameConverter: NameConverter = (converterFn) => (data) => {
  const recursive: Recursive = (obj) => {
    const keys = data ? Object.keys(obj) : [];
    return keys.reduce((accum, curr) => {
      const propName = curr;
      const propValue = obj[propName];
      return {
        ...accum,
        [converterFn(propName)]: Array.isArray(propValue)
          ? propValue.map((x) => (detectObject(x) ? recursive(x) : x))
          : detectObject(propValue)
          ? recursive(propValue)
          : propValue,
      };
    }, {});
  };
  return recursive({ key: data }).key;
};

export const toSnake = propertyNameConverter(snake);
export const toCamel = propertyNameConverter(camel);
