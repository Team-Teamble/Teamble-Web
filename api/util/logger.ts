/* eslint-disable */

export function withLogger<T extends { new (...args: any[]): {} }>(constructor: T): T {
  for (const prop of Object.getOwnPropertyNames(constructor.prototype)) {
    if (prop !== "constructor") {
      const target = constructor.prototype[prop];
      if (typeof target === "function") {
        constructor.prototype[prop] = function (...args: unknown[]) {
          console.log(`[LOG] ${prop} REQUEST: `, args);

          const out = target(...args);
          if (out instanceof Promise) {
            return out.then((result) => {
              console.log("RESULT: ", result);
              console.log(`[LOG] ${prop} RESPONSE: `, result);
              return result;
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
