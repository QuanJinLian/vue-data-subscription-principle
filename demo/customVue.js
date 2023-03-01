function observe(obj) {
  if (!obj || typeof obj !== "object") {
    return;
  }
  const funcCollection = {};

  for (const k in obj) {
    let value = obj[k];
    funcCollection[k] = new Set();
    Object.defineProperty(obj, k, {
      get: function () {
        typeof window._vm?.function === "function" &&
          funcCollection[k].add(window._vm.function);
        return value;
      },
      set: function (val) {
        value = val;
        for (let func of funcCollection[k]) {
          func?.();
        }
        return val;
      },
    });
  }
}

function autoRun(fn) {
  if (typeof fn !== "function") return;

  !window._vm && (window._vm = {});

  window._vm.function = fn;
  fn?.();
  window._vm.function = null;
}
