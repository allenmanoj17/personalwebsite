const installStorageShim = (storageName: "localStorage" | "sessionStorage") => {
  if (typeof window !== "undefined") {
    return;
  }

  const existing = globalThis[storageName];

  if (
    existing &&
    typeof existing.getItem === "function" &&
    typeof existing.setItem === "function" &&
    typeof existing.removeItem === "function" &&
    typeof existing.clear === "function"
  ) {
    return;
  }

  const store = new Map<string, string>();

  const shim = {
    get length() {
      return store.size;
    },
    clear() {
      store.clear();
    },
    getItem(key: string) {
      return store.has(key) ? store.get(key)! : null;
    },
    key(index: number) {
      return Array.from(store.keys())[index] ?? null;
    },
    removeItem(key: string) {
      store.delete(key);
    },
    setItem(key: string, value: string) {
      store.set(String(key), String(value));
    },
  };

  Object.defineProperty(globalThis, storageName, {
    configurable: true,
    enumerable: true,
    writable: true,
    value: shim,
  });
};

installStorageShim("localStorage");
installStorageShim("sessionStorage");

export {};
