/* eslint-disable */

const TIME_DELTA = 500;

export function withLogger<T extends { new (...args: any[]): {} }>(constructor: T): T {
  const name = constructor.name;
  for (const prop of Object.getOwnPropertyNames(constructor.prototype)) {
    if (prop !== "constructor") {
      const target = constructor.prototype[prop];
      if (typeof target === "function") {
        constructor.prototype[prop] = function (...args: unknown[]) {
          console.log(`[LOG] ${name}.${prop} REQUEST: `, args);

          const out = target(...args);
          if (out instanceof Promise) {
            return out
              .then((result) => {
                return new Promise((resolve) => {
                  setTimeout(() => resolve(result), TIME_DELTA);
                });
              })
              .then((result) => {
                console.log(`[LOG] ${name}.${prop} RESPONSE: `, result);
                return result;
              })
              .catch((e) => {
                console.log(`[LOG] ${name}.${prop} ERROR:`, e);
                throw e;
              });
          } else {
            return out;
          }
        };
      }
    }
  }
  return constructor;
}
