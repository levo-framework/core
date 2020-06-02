type Update<T> = (value: T) => T;

export type Updatable<T> =
  & {
    [Key in keyof T]: T[Key] extends Function ? T[Key]
      : 
        & { $update: (_: Update<T[Key]>) => Updatable<T> }
        & (T[Key] extends Array<infer E> ? Array<Updatable<E>>
          : T[Key] extends {} ? (Updatable<T[Key]>)
          : T[Key]);
  }
  & { $update: (_: Update<T>) => Updatable<T> };
