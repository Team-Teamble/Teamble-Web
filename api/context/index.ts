export interface APIContextData {
  accessToken: string | null;
}

export type APIContext = Listenable<APIContextData>;

export function createAPIContext(): APIContext {
  return createListenable<APIContextData>({
    accessToken: null,
  });
}

export type Listenable<T> = T & { addListener(fn: (obj: T) => void): void };

export function createListenable<T>(init: T): Listenable<T> {
  function addListener(fn: (obj: T) => void) {
    listeners.push(fn);
  }

  function notify(obj: T) {
    listeners.forEach((fn) => fn(obj));
  }

  const listeners: Array<(obj: T) => void> = [];

  return new Proxy<Listenable<T>>(
    { ...init, addListener },
    {
      set(target, prop, value) {
        if (prop === "addListener") {
          return false;
        }

        if (prop in target) {
          target[prop as keyof T] = value;

          notify({ ...target });
          return true;
        }

        return false;
      },
    },
  );
}

export const apiContext: APIContext = createAPIContext();
