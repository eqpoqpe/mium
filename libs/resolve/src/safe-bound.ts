// union type with `undefined` just make sure request/response data safe

type SafeBound<T> = {
  [P in keyof T]?: T[P];
};

export {
  type SafeBound
};