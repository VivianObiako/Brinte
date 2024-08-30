type ClassValue = string | number | boolean | undefined | null;
type ClassArray = ClassValue[];
type ClassObject = { [key: string]: any };
type ClassInput = ClassValue | ClassArray | ClassObject;

function toClassName(value: ClassValue): string {
  return typeof value === 'string' || typeof value === 'number'
    ? value.toString()
    : '';
}

export function classNames(...inputs: ClassInput[]): string {
  const result: string[] = [];

  for (const input of inputs) {
    if (!input) continue;

    if (typeof input === 'string' || typeof input === 'number') {
      result.push(toClassName(input));
    } else if (Array.isArray(input)) {
      const innerResult = classNames(...input);
      if (innerResult) {
        result.push(innerResult);
      }
    } else if (typeof input === 'object') {
      for (const key in input) {
        if (input.hasOwnProperty(key) && input[key]) {
          result.push(toClassName(key));
        }
      }
    }
  }

  return result.join(' ');
}

export default classNames;