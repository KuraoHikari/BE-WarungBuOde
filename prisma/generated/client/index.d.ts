
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Warung
 * 
 */
export type Warung = $Result.DefaultSelection<Prisma.$WarungPayload>
/**
 * Model WarungEmploye
 * 
 */
export type WarungEmploye = $Result.DefaultSelection<Prisma.$WarungEmployePayload>
/**
 * Model Menu
 * 
 */
export type Menu = $Result.DefaultSelection<Prisma.$MenuPayload>
/**
 * Model Order
 * 
 */
export type Order = $Result.DefaultSelection<Prisma.$OrderPayload>
/**
 * Model Bill
 * 
 */
export type Bill = $Result.DefaultSelection<Prisma.$BillPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  EMPLOYE: 'EMPLOYE',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.warung`: Exposes CRUD operations for the **Warung** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Warungs
    * const warungs = await prisma.warung.findMany()
    * ```
    */
  get warung(): Prisma.WarungDelegate<ExtArgs>;

  /**
   * `prisma.warungEmploye`: Exposes CRUD operations for the **WarungEmploye** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WarungEmployes
    * const warungEmployes = await prisma.warungEmploye.findMany()
    * ```
    */
  get warungEmploye(): Prisma.WarungEmployeDelegate<ExtArgs>;

  /**
   * `prisma.menu`: Exposes CRUD operations for the **Menu** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Menus
    * const menus = await prisma.menu.findMany()
    * ```
    */
  get menu(): Prisma.MenuDelegate<ExtArgs>;

  /**
   * `prisma.order`: Exposes CRUD operations for the **Order** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.order.findMany()
    * ```
    */
  get order(): Prisma.OrderDelegate<ExtArgs>;

  /**
   * `prisma.bill`: Exposes CRUD operations for the **Bill** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bills
    * const bills = await prisma.bill.findMany()
    * ```
    */
  get bill(): Prisma.BillDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.16.1
   * Query Engine version: 34ace0eb2704183d2c05b60b52fba5c43c13f303
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Warung: 'Warung',
    WarungEmploye: 'WarungEmploye',
    Menu: 'Menu',
    Order: 'Order',
    Bill: 'Bill'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "user" | "warung" | "warungEmploye" | "menu" | "order" | "bill"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Warung: {
        payload: Prisma.$WarungPayload<ExtArgs>
        fields: Prisma.WarungFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WarungFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarungPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WarungFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarungPayload>
          }
          findFirst: {
            args: Prisma.WarungFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarungPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WarungFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarungPayload>
          }
          findMany: {
            args: Prisma.WarungFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarungPayload>[]
          }
          create: {
            args: Prisma.WarungCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarungPayload>
          }
          createMany: {
            args: Prisma.WarungCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WarungCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarungPayload>[]
          }
          delete: {
            args: Prisma.WarungDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarungPayload>
          }
          update: {
            args: Prisma.WarungUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarungPayload>
          }
          deleteMany: {
            args: Prisma.WarungDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WarungUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.WarungUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarungPayload>
          }
          aggregate: {
            args: Prisma.WarungAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWarung>
          }
          groupBy: {
            args: Prisma.WarungGroupByArgs<ExtArgs>
            result: $Utils.Optional<WarungGroupByOutputType>[]
          }
          count: {
            args: Prisma.WarungCountArgs<ExtArgs>
            result: $Utils.Optional<WarungCountAggregateOutputType> | number
          }
        }
      }
      WarungEmploye: {
        payload: Prisma.$WarungEmployePayload<ExtArgs>
        fields: Prisma.WarungEmployeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WarungEmployeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarungEmployePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WarungEmployeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarungEmployePayload>
          }
          findFirst: {
            args: Prisma.WarungEmployeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarungEmployePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WarungEmployeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarungEmployePayload>
          }
          findMany: {
            args: Prisma.WarungEmployeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarungEmployePayload>[]
          }
          create: {
            args: Prisma.WarungEmployeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarungEmployePayload>
          }
          createMany: {
            args: Prisma.WarungEmployeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WarungEmployeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarungEmployePayload>[]
          }
          delete: {
            args: Prisma.WarungEmployeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarungEmployePayload>
          }
          update: {
            args: Prisma.WarungEmployeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarungEmployePayload>
          }
          deleteMany: {
            args: Prisma.WarungEmployeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WarungEmployeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.WarungEmployeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarungEmployePayload>
          }
          aggregate: {
            args: Prisma.WarungEmployeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWarungEmploye>
          }
          groupBy: {
            args: Prisma.WarungEmployeGroupByArgs<ExtArgs>
            result: $Utils.Optional<WarungEmployeGroupByOutputType>[]
          }
          count: {
            args: Prisma.WarungEmployeCountArgs<ExtArgs>
            result: $Utils.Optional<WarungEmployeCountAggregateOutputType> | number
          }
        }
      }
      Menu: {
        payload: Prisma.$MenuPayload<ExtArgs>
        fields: Prisma.MenuFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MenuFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MenuFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuPayload>
          }
          findFirst: {
            args: Prisma.MenuFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MenuFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuPayload>
          }
          findMany: {
            args: Prisma.MenuFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuPayload>[]
          }
          create: {
            args: Prisma.MenuCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuPayload>
          }
          createMany: {
            args: Prisma.MenuCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MenuCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuPayload>[]
          }
          delete: {
            args: Prisma.MenuDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuPayload>
          }
          update: {
            args: Prisma.MenuUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuPayload>
          }
          deleteMany: {
            args: Prisma.MenuDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MenuUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MenuUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuPayload>
          }
          aggregate: {
            args: Prisma.MenuAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMenu>
          }
          groupBy: {
            args: Prisma.MenuGroupByArgs<ExtArgs>
            result: $Utils.Optional<MenuGroupByOutputType>[]
          }
          count: {
            args: Prisma.MenuCountArgs<ExtArgs>
            result: $Utils.Optional<MenuCountAggregateOutputType> | number
          }
        }
      }
      Order: {
        payload: Prisma.$OrderPayload<ExtArgs>
        fields: Prisma.OrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findFirst: {
            args: Prisma.OrderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findMany: {
            args: Prisma.OrderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          create: {
            args: Prisma.OrderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          createMany: {
            args: Prisma.OrderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          delete: {
            args: Prisma.OrderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          update: {
            args: Prisma.OrderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          deleteMany: {
            args: Prisma.OrderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OrderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          aggregate: {
            args: Prisma.OrderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrder>
          }
          groupBy: {
            args: Prisma.OrderGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderCountArgs<ExtArgs>
            result: $Utils.Optional<OrderCountAggregateOutputType> | number
          }
        }
      }
      Bill: {
        payload: Prisma.$BillPayload<ExtArgs>
        fields: Prisma.BillFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BillFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BillFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillPayload>
          }
          findFirst: {
            args: Prisma.BillFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BillFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillPayload>
          }
          findMany: {
            args: Prisma.BillFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillPayload>[]
          }
          create: {
            args: Prisma.BillCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillPayload>
          }
          createMany: {
            args: Prisma.BillCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BillCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillPayload>[]
          }
          delete: {
            args: Prisma.BillDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillPayload>
          }
          update: {
            args: Prisma.BillUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillPayload>
          }
          deleteMany: {
            args: Prisma.BillDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BillUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BillUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillPayload>
          }
          aggregate: {
            args: Prisma.BillAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBill>
          }
          groupBy: {
            args: Prisma.BillGroupByArgs<ExtArgs>
            result: $Utils.Optional<BillGroupByOutputType>[]
          }
          count: {
            args: Prisma.BillCountArgs<ExtArgs>
            result: $Utils.Optional<BillCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    warungs: number
    warungEmployes: number
    menu: number
    bills: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    warungs?: boolean | UserCountOutputTypeCountWarungsArgs
    warungEmployes?: boolean | UserCountOutputTypeCountWarungEmployesArgs
    menu?: boolean | UserCountOutputTypeCountMenuArgs
    bills?: boolean | UserCountOutputTypeCountBillsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountWarungsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WarungWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountWarungEmployesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WarungEmployeWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMenuArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MenuWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BillWhereInput
  }


  /**
   * Count Type WarungCountOutputType
   */

  export type WarungCountOutputType = {
    warungEmployes: number
    menu: number
    bills: number
  }

  export type WarungCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    warungEmployes?: boolean | WarungCountOutputTypeCountWarungEmployesArgs
    menu?: boolean | WarungCountOutputTypeCountMenuArgs
    bills?: boolean | WarungCountOutputTypeCountBillsArgs
  }

  // Custom InputTypes
  /**
   * WarungCountOutputType without action
   */
  export type WarungCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WarungCountOutputType
     */
    select?: WarungCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WarungCountOutputType without action
   */
  export type WarungCountOutputTypeCountWarungEmployesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WarungEmployeWhereInput
  }

  /**
   * WarungCountOutputType without action
   */
  export type WarungCountOutputTypeCountMenuArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MenuWhereInput
  }

  /**
   * WarungCountOutputType without action
   */
  export type WarungCountOutputTypeCountBillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BillWhereInput
  }


  /**
   * Count Type MenuCountOutputType
   */

  export type MenuCountOutputType = {
    orders: number
  }

  export type MenuCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | MenuCountOutputTypeCountOrdersArgs
  }

  // Custom InputTypes
  /**
   * MenuCountOutputType without action
   */
  export type MenuCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuCountOutputType
     */
    select?: MenuCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MenuCountOutputType without action
   */
  export type MenuCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }


  /**
   * Count Type BillCountOutputType
   */

  export type BillCountOutputType = {
    orders: number
  }

  export type BillCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | BillCountOutputTypeCountOrdersArgs
  }

  // Custom InputTypes
  /**
   * BillCountOutputType without action
   */
  export type BillCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillCountOutputType
     */
    select?: BillCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BillCountOutputType without action
   */
  export type BillCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    username: string | null
    password: string | null
    role: $Enums.Role | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    username: string | null
    password: string | null
    role: $Enums.Role | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    username: number
    password: number
    role: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    username?: true
    password?: true
    role?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    username?: true
    password?: true
    role?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    username?: true
    password?: true
    role?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    email: string
    username: string
    password: string
    role: $Enums.Role
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    username?: boolean
    password?: boolean
    role?: boolean
    warungs?: boolean | User$warungsArgs<ExtArgs>
    warungEmployes?: boolean | User$warungEmployesArgs<ExtArgs>
    menu?: boolean | User$menuArgs<ExtArgs>
    bills?: boolean | User$billsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    username?: boolean
    password?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    username?: boolean
    password?: boolean
    role?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    warungs?: boolean | User$warungsArgs<ExtArgs>
    warungEmployes?: boolean | User$warungEmployesArgs<ExtArgs>
    menu?: boolean | User$menuArgs<ExtArgs>
    bills?: boolean | User$billsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      warungs: Prisma.$WarungPayload<ExtArgs>[]
      warungEmployes: Prisma.$WarungEmployePayload<ExtArgs>[]
      menu: Prisma.$MenuPayload<ExtArgs>[]
      bills: Prisma.$BillPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      username: string
      password: string
      role: $Enums.Role
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    warungs<T extends User$warungsArgs<ExtArgs> = {}>(args?: Subset<T, User$warungsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WarungPayload<ExtArgs>, T, "findMany"> | Null>
    warungEmployes<T extends User$warungEmployesArgs<ExtArgs> = {}>(args?: Subset<T, User$warungEmployesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WarungEmployePayload<ExtArgs>, T, "findMany"> | Null>
    menu<T extends User$menuArgs<ExtArgs> = {}>(args?: Subset<T, User$menuArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, "findMany"> | Null>
    bills<T extends User$billsArgs<ExtArgs> = {}>(args?: Subset<T, User$billsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BillPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User.warungs
   */
  export type User$warungsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warung
     */
    select?: WarungSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarungInclude<ExtArgs> | null
    where?: WarungWhereInput
    orderBy?: WarungOrderByWithRelationInput | WarungOrderByWithRelationInput[]
    cursor?: WarungWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WarungScalarFieldEnum | WarungScalarFieldEnum[]
  }

  /**
   * User.warungEmployes
   */
  export type User$warungEmployesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WarungEmploye
     */
    select?: WarungEmployeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarungEmployeInclude<ExtArgs> | null
    where?: WarungEmployeWhereInput
    orderBy?: WarungEmployeOrderByWithRelationInput | WarungEmployeOrderByWithRelationInput[]
    cursor?: WarungEmployeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WarungEmployeScalarFieldEnum | WarungEmployeScalarFieldEnum[]
  }

  /**
   * User.menu
   */
  export type User$menuArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuInclude<ExtArgs> | null
    where?: MenuWhereInput
    orderBy?: MenuOrderByWithRelationInput | MenuOrderByWithRelationInput[]
    cursor?: MenuWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MenuScalarFieldEnum | MenuScalarFieldEnum[]
  }

  /**
   * User.bills
   */
  export type User$billsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bill
     */
    select?: BillSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillInclude<ExtArgs> | null
    where?: BillWhereInput
    orderBy?: BillOrderByWithRelationInput | BillOrderByWithRelationInput[]
    cursor?: BillWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BillScalarFieldEnum | BillScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Warung
   */

  export type AggregateWarung = {
    _count: WarungCountAggregateOutputType | null
    _avg: WarungAvgAggregateOutputType | null
    _sum: WarungSumAggregateOutputType | null
    _min: WarungMinAggregateOutputType | null
    _max: WarungMaxAggregateOutputType | null
  }

  export type WarungAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type WarungSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type WarungMinAggregateOutputType = {
    id: number | null
    name: string | null
    location: string | null
    userId: number | null
  }

  export type WarungMaxAggregateOutputType = {
    id: number | null
    name: string | null
    location: string | null
    userId: number | null
  }

  export type WarungCountAggregateOutputType = {
    id: number
    name: number
    location: number
    userId: number
    _all: number
  }


  export type WarungAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type WarungSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type WarungMinAggregateInputType = {
    id?: true
    name?: true
    location?: true
    userId?: true
  }

  export type WarungMaxAggregateInputType = {
    id?: true
    name?: true
    location?: true
    userId?: true
  }

  export type WarungCountAggregateInputType = {
    id?: true
    name?: true
    location?: true
    userId?: true
    _all?: true
  }

  export type WarungAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Warung to aggregate.
     */
    where?: WarungWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Warungs to fetch.
     */
    orderBy?: WarungOrderByWithRelationInput | WarungOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WarungWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Warungs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Warungs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Warungs
    **/
    _count?: true | WarungCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WarungAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WarungSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WarungMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WarungMaxAggregateInputType
  }

  export type GetWarungAggregateType<T extends WarungAggregateArgs> = {
        [P in keyof T & keyof AggregateWarung]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWarung[P]>
      : GetScalarType<T[P], AggregateWarung[P]>
  }




  export type WarungGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WarungWhereInput
    orderBy?: WarungOrderByWithAggregationInput | WarungOrderByWithAggregationInput[]
    by: WarungScalarFieldEnum[] | WarungScalarFieldEnum
    having?: WarungScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WarungCountAggregateInputType | true
    _avg?: WarungAvgAggregateInputType
    _sum?: WarungSumAggregateInputType
    _min?: WarungMinAggregateInputType
    _max?: WarungMaxAggregateInputType
  }

  export type WarungGroupByOutputType = {
    id: number
    name: string
    location: string
    userId: number
    _count: WarungCountAggregateOutputType | null
    _avg: WarungAvgAggregateOutputType | null
    _sum: WarungSumAggregateOutputType | null
    _min: WarungMinAggregateOutputType | null
    _max: WarungMaxAggregateOutputType | null
  }

  type GetWarungGroupByPayload<T extends WarungGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WarungGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WarungGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WarungGroupByOutputType[P]>
            : GetScalarType<T[P], WarungGroupByOutputType[P]>
        }
      >
    >


  export type WarungSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    location?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    warungEmployes?: boolean | Warung$warungEmployesArgs<ExtArgs>
    menu?: boolean | Warung$menuArgs<ExtArgs>
    bills?: boolean | Warung$billsArgs<ExtArgs>
    _count?: boolean | WarungCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["warung"]>

  export type WarungSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    location?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["warung"]>

  export type WarungSelectScalar = {
    id?: boolean
    name?: boolean
    location?: boolean
    userId?: boolean
  }

  export type WarungInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    warungEmployes?: boolean | Warung$warungEmployesArgs<ExtArgs>
    menu?: boolean | Warung$menuArgs<ExtArgs>
    bills?: boolean | Warung$billsArgs<ExtArgs>
    _count?: boolean | WarungCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type WarungIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $WarungPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Warung"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      warungEmployes: Prisma.$WarungEmployePayload<ExtArgs>[]
      menu: Prisma.$MenuPayload<ExtArgs>[]
      bills: Prisma.$BillPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      location: string
      userId: number
    }, ExtArgs["result"]["warung"]>
    composites: {}
  }

  type WarungGetPayload<S extends boolean | null | undefined | WarungDefaultArgs> = $Result.GetResult<Prisma.$WarungPayload, S>

  type WarungCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<WarungFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: WarungCountAggregateInputType | true
    }

  export interface WarungDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Warung'], meta: { name: 'Warung' } }
    /**
     * Find zero or one Warung that matches the filter.
     * @param {WarungFindUniqueArgs} args - Arguments to find a Warung
     * @example
     * // Get one Warung
     * const warung = await prisma.warung.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WarungFindUniqueArgs>(args: SelectSubset<T, WarungFindUniqueArgs<ExtArgs>>): Prisma__WarungClient<$Result.GetResult<Prisma.$WarungPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Warung that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {WarungFindUniqueOrThrowArgs} args - Arguments to find a Warung
     * @example
     * // Get one Warung
     * const warung = await prisma.warung.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WarungFindUniqueOrThrowArgs>(args: SelectSubset<T, WarungFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WarungClient<$Result.GetResult<Prisma.$WarungPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Warung that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarungFindFirstArgs} args - Arguments to find a Warung
     * @example
     * // Get one Warung
     * const warung = await prisma.warung.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WarungFindFirstArgs>(args?: SelectSubset<T, WarungFindFirstArgs<ExtArgs>>): Prisma__WarungClient<$Result.GetResult<Prisma.$WarungPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Warung that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarungFindFirstOrThrowArgs} args - Arguments to find a Warung
     * @example
     * // Get one Warung
     * const warung = await prisma.warung.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WarungFindFirstOrThrowArgs>(args?: SelectSubset<T, WarungFindFirstOrThrowArgs<ExtArgs>>): Prisma__WarungClient<$Result.GetResult<Prisma.$WarungPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Warungs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarungFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Warungs
     * const warungs = await prisma.warung.findMany()
     * 
     * // Get first 10 Warungs
     * const warungs = await prisma.warung.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const warungWithIdOnly = await prisma.warung.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WarungFindManyArgs>(args?: SelectSubset<T, WarungFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WarungPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Warung.
     * @param {WarungCreateArgs} args - Arguments to create a Warung.
     * @example
     * // Create one Warung
     * const Warung = await prisma.warung.create({
     *   data: {
     *     // ... data to create a Warung
     *   }
     * })
     * 
     */
    create<T extends WarungCreateArgs>(args: SelectSubset<T, WarungCreateArgs<ExtArgs>>): Prisma__WarungClient<$Result.GetResult<Prisma.$WarungPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Warungs.
     * @param {WarungCreateManyArgs} args - Arguments to create many Warungs.
     * @example
     * // Create many Warungs
     * const warung = await prisma.warung.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WarungCreateManyArgs>(args?: SelectSubset<T, WarungCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Warungs and returns the data saved in the database.
     * @param {WarungCreateManyAndReturnArgs} args - Arguments to create many Warungs.
     * @example
     * // Create many Warungs
     * const warung = await prisma.warung.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Warungs and only return the `id`
     * const warungWithIdOnly = await prisma.warung.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WarungCreateManyAndReturnArgs>(args?: SelectSubset<T, WarungCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WarungPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Warung.
     * @param {WarungDeleteArgs} args - Arguments to delete one Warung.
     * @example
     * // Delete one Warung
     * const Warung = await prisma.warung.delete({
     *   where: {
     *     // ... filter to delete one Warung
     *   }
     * })
     * 
     */
    delete<T extends WarungDeleteArgs>(args: SelectSubset<T, WarungDeleteArgs<ExtArgs>>): Prisma__WarungClient<$Result.GetResult<Prisma.$WarungPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Warung.
     * @param {WarungUpdateArgs} args - Arguments to update one Warung.
     * @example
     * // Update one Warung
     * const warung = await prisma.warung.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WarungUpdateArgs>(args: SelectSubset<T, WarungUpdateArgs<ExtArgs>>): Prisma__WarungClient<$Result.GetResult<Prisma.$WarungPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Warungs.
     * @param {WarungDeleteManyArgs} args - Arguments to filter Warungs to delete.
     * @example
     * // Delete a few Warungs
     * const { count } = await prisma.warung.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WarungDeleteManyArgs>(args?: SelectSubset<T, WarungDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Warungs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarungUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Warungs
     * const warung = await prisma.warung.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WarungUpdateManyArgs>(args: SelectSubset<T, WarungUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Warung.
     * @param {WarungUpsertArgs} args - Arguments to update or create a Warung.
     * @example
     * // Update or create a Warung
     * const warung = await prisma.warung.upsert({
     *   create: {
     *     // ... data to create a Warung
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Warung we want to update
     *   }
     * })
     */
    upsert<T extends WarungUpsertArgs>(args: SelectSubset<T, WarungUpsertArgs<ExtArgs>>): Prisma__WarungClient<$Result.GetResult<Prisma.$WarungPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Warungs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarungCountArgs} args - Arguments to filter Warungs to count.
     * @example
     * // Count the number of Warungs
     * const count = await prisma.warung.count({
     *   where: {
     *     // ... the filter for the Warungs we want to count
     *   }
     * })
    **/
    count<T extends WarungCountArgs>(
      args?: Subset<T, WarungCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WarungCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Warung.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarungAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WarungAggregateArgs>(args: Subset<T, WarungAggregateArgs>): Prisma.PrismaPromise<GetWarungAggregateType<T>>

    /**
     * Group by Warung.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarungGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WarungGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WarungGroupByArgs['orderBy'] }
        : { orderBy?: WarungGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WarungGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWarungGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Warung model
   */
  readonly fields: WarungFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Warung.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WarungClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    warungEmployes<T extends Warung$warungEmployesArgs<ExtArgs> = {}>(args?: Subset<T, Warung$warungEmployesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WarungEmployePayload<ExtArgs>, T, "findMany"> | Null>
    menu<T extends Warung$menuArgs<ExtArgs> = {}>(args?: Subset<T, Warung$menuArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, "findMany"> | Null>
    bills<T extends Warung$billsArgs<ExtArgs> = {}>(args?: Subset<T, Warung$billsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BillPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Warung model
   */ 
  interface WarungFieldRefs {
    readonly id: FieldRef<"Warung", 'Int'>
    readonly name: FieldRef<"Warung", 'String'>
    readonly location: FieldRef<"Warung", 'String'>
    readonly userId: FieldRef<"Warung", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Warung findUnique
   */
  export type WarungFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warung
     */
    select?: WarungSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarungInclude<ExtArgs> | null
    /**
     * Filter, which Warung to fetch.
     */
    where: WarungWhereUniqueInput
  }

  /**
   * Warung findUniqueOrThrow
   */
  export type WarungFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warung
     */
    select?: WarungSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarungInclude<ExtArgs> | null
    /**
     * Filter, which Warung to fetch.
     */
    where: WarungWhereUniqueInput
  }

  /**
   * Warung findFirst
   */
  export type WarungFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warung
     */
    select?: WarungSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarungInclude<ExtArgs> | null
    /**
     * Filter, which Warung to fetch.
     */
    where?: WarungWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Warungs to fetch.
     */
    orderBy?: WarungOrderByWithRelationInput | WarungOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Warungs.
     */
    cursor?: WarungWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Warungs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Warungs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Warungs.
     */
    distinct?: WarungScalarFieldEnum | WarungScalarFieldEnum[]
  }

  /**
   * Warung findFirstOrThrow
   */
  export type WarungFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warung
     */
    select?: WarungSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarungInclude<ExtArgs> | null
    /**
     * Filter, which Warung to fetch.
     */
    where?: WarungWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Warungs to fetch.
     */
    orderBy?: WarungOrderByWithRelationInput | WarungOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Warungs.
     */
    cursor?: WarungWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Warungs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Warungs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Warungs.
     */
    distinct?: WarungScalarFieldEnum | WarungScalarFieldEnum[]
  }

  /**
   * Warung findMany
   */
  export type WarungFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warung
     */
    select?: WarungSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarungInclude<ExtArgs> | null
    /**
     * Filter, which Warungs to fetch.
     */
    where?: WarungWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Warungs to fetch.
     */
    orderBy?: WarungOrderByWithRelationInput | WarungOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Warungs.
     */
    cursor?: WarungWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Warungs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Warungs.
     */
    skip?: number
    distinct?: WarungScalarFieldEnum | WarungScalarFieldEnum[]
  }

  /**
   * Warung create
   */
  export type WarungCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warung
     */
    select?: WarungSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarungInclude<ExtArgs> | null
    /**
     * The data needed to create a Warung.
     */
    data: XOR<WarungCreateInput, WarungUncheckedCreateInput>
  }

  /**
   * Warung createMany
   */
  export type WarungCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Warungs.
     */
    data: WarungCreateManyInput | WarungCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Warung createManyAndReturn
   */
  export type WarungCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warung
     */
    select?: WarungSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Warungs.
     */
    data: WarungCreateManyInput | WarungCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarungIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Warung update
   */
  export type WarungUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warung
     */
    select?: WarungSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarungInclude<ExtArgs> | null
    /**
     * The data needed to update a Warung.
     */
    data: XOR<WarungUpdateInput, WarungUncheckedUpdateInput>
    /**
     * Choose, which Warung to update.
     */
    where: WarungWhereUniqueInput
  }

  /**
   * Warung updateMany
   */
  export type WarungUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Warungs.
     */
    data: XOR<WarungUpdateManyMutationInput, WarungUncheckedUpdateManyInput>
    /**
     * Filter which Warungs to update
     */
    where?: WarungWhereInput
  }

  /**
   * Warung upsert
   */
  export type WarungUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warung
     */
    select?: WarungSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarungInclude<ExtArgs> | null
    /**
     * The filter to search for the Warung to update in case it exists.
     */
    where: WarungWhereUniqueInput
    /**
     * In case the Warung found by the `where` argument doesn't exist, create a new Warung with this data.
     */
    create: XOR<WarungCreateInput, WarungUncheckedCreateInput>
    /**
     * In case the Warung was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WarungUpdateInput, WarungUncheckedUpdateInput>
  }

  /**
   * Warung delete
   */
  export type WarungDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warung
     */
    select?: WarungSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarungInclude<ExtArgs> | null
    /**
     * Filter which Warung to delete.
     */
    where: WarungWhereUniqueInput
  }

  /**
   * Warung deleteMany
   */
  export type WarungDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Warungs to delete
     */
    where?: WarungWhereInput
  }

  /**
   * Warung.warungEmployes
   */
  export type Warung$warungEmployesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WarungEmploye
     */
    select?: WarungEmployeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarungEmployeInclude<ExtArgs> | null
    where?: WarungEmployeWhereInput
    orderBy?: WarungEmployeOrderByWithRelationInput | WarungEmployeOrderByWithRelationInput[]
    cursor?: WarungEmployeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WarungEmployeScalarFieldEnum | WarungEmployeScalarFieldEnum[]
  }

  /**
   * Warung.menu
   */
  export type Warung$menuArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuInclude<ExtArgs> | null
    where?: MenuWhereInput
    orderBy?: MenuOrderByWithRelationInput | MenuOrderByWithRelationInput[]
    cursor?: MenuWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MenuScalarFieldEnum | MenuScalarFieldEnum[]
  }

  /**
   * Warung.bills
   */
  export type Warung$billsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bill
     */
    select?: BillSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillInclude<ExtArgs> | null
    where?: BillWhereInput
    orderBy?: BillOrderByWithRelationInput | BillOrderByWithRelationInput[]
    cursor?: BillWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BillScalarFieldEnum | BillScalarFieldEnum[]
  }

  /**
   * Warung without action
   */
  export type WarungDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warung
     */
    select?: WarungSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarungInclude<ExtArgs> | null
  }


  /**
   * Model WarungEmploye
   */

  export type AggregateWarungEmploye = {
    _count: WarungEmployeCountAggregateOutputType | null
    _avg: WarungEmployeAvgAggregateOutputType | null
    _sum: WarungEmployeSumAggregateOutputType | null
    _min: WarungEmployeMinAggregateOutputType | null
    _max: WarungEmployeMaxAggregateOutputType | null
  }

  export type WarungEmployeAvgAggregateOutputType = {
    id: number | null
    warungId: number | null
    userId: number | null
  }

  export type WarungEmployeSumAggregateOutputType = {
    id: number | null
    warungId: number | null
    userId: number | null
  }

  export type WarungEmployeMinAggregateOutputType = {
    id: number | null
    warungId: number | null
    userId: number | null
  }

  export type WarungEmployeMaxAggregateOutputType = {
    id: number | null
    warungId: number | null
    userId: number | null
  }

  export type WarungEmployeCountAggregateOutputType = {
    id: number
    warungId: number
    userId: number
    _all: number
  }


  export type WarungEmployeAvgAggregateInputType = {
    id?: true
    warungId?: true
    userId?: true
  }

  export type WarungEmployeSumAggregateInputType = {
    id?: true
    warungId?: true
    userId?: true
  }

  export type WarungEmployeMinAggregateInputType = {
    id?: true
    warungId?: true
    userId?: true
  }

  export type WarungEmployeMaxAggregateInputType = {
    id?: true
    warungId?: true
    userId?: true
  }

  export type WarungEmployeCountAggregateInputType = {
    id?: true
    warungId?: true
    userId?: true
    _all?: true
  }

  export type WarungEmployeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WarungEmploye to aggregate.
     */
    where?: WarungEmployeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WarungEmployes to fetch.
     */
    orderBy?: WarungEmployeOrderByWithRelationInput | WarungEmployeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WarungEmployeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WarungEmployes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WarungEmployes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WarungEmployes
    **/
    _count?: true | WarungEmployeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WarungEmployeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WarungEmployeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WarungEmployeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WarungEmployeMaxAggregateInputType
  }

  export type GetWarungEmployeAggregateType<T extends WarungEmployeAggregateArgs> = {
        [P in keyof T & keyof AggregateWarungEmploye]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWarungEmploye[P]>
      : GetScalarType<T[P], AggregateWarungEmploye[P]>
  }




  export type WarungEmployeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WarungEmployeWhereInput
    orderBy?: WarungEmployeOrderByWithAggregationInput | WarungEmployeOrderByWithAggregationInput[]
    by: WarungEmployeScalarFieldEnum[] | WarungEmployeScalarFieldEnum
    having?: WarungEmployeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WarungEmployeCountAggregateInputType | true
    _avg?: WarungEmployeAvgAggregateInputType
    _sum?: WarungEmployeSumAggregateInputType
    _min?: WarungEmployeMinAggregateInputType
    _max?: WarungEmployeMaxAggregateInputType
  }

  export type WarungEmployeGroupByOutputType = {
    id: number
    warungId: number
    userId: number
    _count: WarungEmployeCountAggregateOutputType | null
    _avg: WarungEmployeAvgAggregateOutputType | null
    _sum: WarungEmployeSumAggregateOutputType | null
    _min: WarungEmployeMinAggregateOutputType | null
    _max: WarungEmployeMaxAggregateOutputType | null
  }

  type GetWarungEmployeGroupByPayload<T extends WarungEmployeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WarungEmployeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WarungEmployeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WarungEmployeGroupByOutputType[P]>
            : GetScalarType<T[P], WarungEmployeGroupByOutputType[P]>
        }
      >
    >


  export type WarungEmployeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    warungId?: boolean
    userId?: boolean
    warung?: boolean | WarungDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["warungEmploye"]>

  export type WarungEmployeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    warungId?: boolean
    userId?: boolean
    warung?: boolean | WarungDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["warungEmploye"]>

  export type WarungEmployeSelectScalar = {
    id?: boolean
    warungId?: boolean
    userId?: boolean
  }

  export type WarungEmployeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    warung?: boolean | WarungDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type WarungEmployeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    warung?: boolean | WarungDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $WarungEmployePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WarungEmploye"
    objects: {
      warung: Prisma.$WarungPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      warungId: number
      userId: number
    }, ExtArgs["result"]["warungEmploye"]>
    composites: {}
  }

  type WarungEmployeGetPayload<S extends boolean | null | undefined | WarungEmployeDefaultArgs> = $Result.GetResult<Prisma.$WarungEmployePayload, S>

  type WarungEmployeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<WarungEmployeFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: WarungEmployeCountAggregateInputType | true
    }

  export interface WarungEmployeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WarungEmploye'], meta: { name: 'WarungEmploye' } }
    /**
     * Find zero or one WarungEmploye that matches the filter.
     * @param {WarungEmployeFindUniqueArgs} args - Arguments to find a WarungEmploye
     * @example
     * // Get one WarungEmploye
     * const warungEmploye = await prisma.warungEmploye.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WarungEmployeFindUniqueArgs>(args: SelectSubset<T, WarungEmployeFindUniqueArgs<ExtArgs>>): Prisma__WarungEmployeClient<$Result.GetResult<Prisma.$WarungEmployePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one WarungEmploye that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {WarungEmployeFindUniqueOrThrowArgs} args - Arguments to find a WarungEmploye
     * @example
     * // Get one WarungEmploye
     * const warungEmploye = await prisma.warungEmploye.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WarungEmployeFindUniqueOrThrowArgs>(args: SelectSubset<T, WarungEmployeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WarungEmployeClient<$Result.GetResult<Prisma.$WarungEmployePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first WarungEmploye that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarungEmployeFindFirstArgs} args - Arguments to find a WarungEmploye
     * @example
     * // Get one WarungEmploye
     * const warungEmploye = await prisma.warungEmploye.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WarungEmployeFindFirstArgs>(args?: SelectSubset<T, WarungEmployeFindFirstArgs<ExtArgs>>): Prisma__WarungEmployeClient<$Result.GetResult<Prisma.$WarungEmployePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first WarungEmploye that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarungEmployeFindFirstOrThrowArgs} args - Arguments to find a WarungEmploye
     * @example
     * // Get one WarungEmploye
     * const warungEmploye = await prisma.warungEmploye.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WarungEmployeFindFirstOrThrowArgs>(args?: SelectSubset<T, WarungEmployeFindFirstOrThrowArgs<ExtArgs>>): Prisma__WarungEmployeClient<$Result.GetResult<Prisma.$WarungEmployePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more WarungEmployes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarungEmployeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WarungEmployes
     * const warungEmployes = await prisma.warungEmploye.findMany()
     * 
     * // Get first 10 WarungEmployes
     * const warungEmployes = await prisma.warungEmploye.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const warungEmployeWithIdOnly = await prisma.warungEmploye.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WarungEmployeFindManyArgs>(args?: SelectSubset<T, WarungEmployeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WarungEmployePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a WarungEmploye.
     * @param {WarungEmployeCreateArgs} args - Arguments to create a WarungEmploye.
     * @example
     * // Create one WarungEmploye
     * const WarungEmploye = await prisma.warungEmploye.create({
     *   data: {
     *     // ... data to create a WarungEmploye
     *   }
     * })
     * 
     */
    create<T extends WarungEmployeCreateArgs>(args: SelectSubset<T, WarungEmployeCreateArgs<ExtArgs>>): Prisma__WarungEmployeClient<$Result.GetResult<Prisma.$WarungEmployePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many WarungEmployes.
     * @param {WarungEmployeCreateManyArgs} args - Arguments to create many WarungEmployes.
     * @example
     * // Create many WarungEmployes
     * const warungEmploye = await prisma.warungEmploye.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WarungEmployeCreateManyArgs>(args?: SelectSubset<T, WarungEmployeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WarungEmployes and returns the data saved in the database.
     * @param {WarungEmployeCreateManyAndReturnArgs} args - Arguments to create many WarungEmployes.
     * @example
     * // Create many WarungEmployes
     * const warungEmploye = await prisma.warungEmploye.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WarungEmployes and only return the `id`
     * const warungEmployeWithIdOnly = await prisma.warungEmploye.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WarungEmployeCreateManyAndReturnArgs>(args?: SelectSubset<T, WarungEmployeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WarungEmployePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a WarungEmploye.
     * @param {WarungEmployeDeleteArgs} args - Arguments to delete one WarungEmploye.
     * @example
     * // Delete one WarungEmploye
     * const WarungEmploye = await prisma.warungEmploye.delete({
     *   where: {
     *     // ... filter to delete one WarungEmploye
     *   }
     * })
     * 
     */
    delete<T extends WarungEmployeDeleteArgs>(args: SelectSubset<T, WarungEmployeDeleteArgs<ExtArgs>>): Prisma__WarungEmployeClient<$Result.GetResult<Prisma.$WarungEmployePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one WarungEmploye.
     * @param {WarungEmployeUpdateArgs} args - Arguments to update one WarungEmploye.
     * @example
     * // Update one WarungEmploye
     * const warungEmploye = await prisma.warungEmploye.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WarungEmployeUpdateArgs>(args: SelectSubset<T, WarungEmployeUpdateArgs<ExtArgs>>): Prisma__WarungEmployeClient<$Result.GetResult<Prisma.$WarungEmployePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more WarungEmployes.
     * @param {WarungEmployeDeleteManyArgs} args - Arguments to filter WarungEmployes to delete.
     * @example
     * // Delete a few WarungEmployes
     * const { count } = await prisma.warungEmploye.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WarungEmployeDeleteManyArgs>(args?: SelectSubset<T, WarungEmployeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WarungEmployes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarungEmployeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WarungEmployes
     * const warungEmploye = await prisma.warungEmploye.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WarungEmployeUpdateManyArgs>(args: SelectSubset<T, WarungEmployeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one WarungEmploye.
     * @param {WarungEmployeUpsertArgs} args - Arguments to update or create a WarungEmploye.
     * @example
     * // Update or create a WarungEmploye
     * const warungEmploye = await prisma.warungEmploye.upsert({
     *   create: {
     *     // ... data to create a WarungEmploye
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WarungEmploye we want to update
     *   }
     * })
     */
    upsert<T extends WarungEmployeUpsertArgs>(args: SelectSubset<T, WarungEmployeUpsertArgs<ExtArgs>>): Prisma__WarungEmployeClient<$Result.GetResult<Prisma.$WarungEmployePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of WarungEmployes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarungEmployeCountArgs} args - Arguments to filter WarungEmployes to count.
     * @example
     * // Count the number of WarungEmployes
     * const count = await prisma.warungEmploye.count({
     *   where: {
     *     // ... the filter for the WarungEmployes we want to count
     *   }
     * })
    **/
    count<T extends WarungEmployeCountArgs>(
      args?: Subset<T, WarungEmployeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WarungEmployeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WarungEmploye.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarungEmployeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WarungEmployeAggregateArgs>(args: Subset<T, WarungEmployeAggregateArgs>): Prisma.PrismaPromise<GetWarungEmployeAggregateType<T>>

    /**
     * Group by WarungEmploye.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarungEmployeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WarungEmployeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WarungEmployeGroupByArgs['orderBy'] }
        : { orderBy?: WarungEmployeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WarungEmployeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWarungEmployeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WarungEmploye model
   */
  readonly fields: WarungEmployeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WarungEmploye.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WarungEmployeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    warung<T extends WarungDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WarungDefaultArgs<ExtArgs>>): Prisma__WarungClient<$Result.GetResult<Prisma.$WarungPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WarungEmploye model
   */ 
  interface WarungEmployeFieldRefs {
    readonly id: FieldRef<"WarungEmploye", 'Int'>
    readonly warungId: FieldRef<"WarungEmploye", 'Int'>
    readonly userId: FieldRef<"WarungEmploye", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * WarungEmploye findUnique
   */
  export type WarungEmployeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WarungEmploye
     */
    select?: WarungEmployeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarungEmployeInclude<ExtArgs> | null
    /**
     * Filter, which WarungEmploye to fetch.
     */
    where: WarungEmployeWhereUniqueInput
  }

  /**
   * WarungEmploye findUniqueOrThrow
   */
  export type WarungEmployeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WarungEmploye
     */
    select?: WarungEmployeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarungEmployeInclude<ExtArgs> | null
    /**
     * Filter, which WarungEmploye to fetch.
     */
    where: WarungEmployeWhereUniqueInput
  }

  /**
   * WarungEmploye findFirst
   */
  export type WarungEmployeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WarungEmploye
     */
    select?: WarungEmployeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarungEmployeInclude<ExtArgs> | null
    /**
     * Filter, which WarungEmploye to fetch.
     */
    where?: WarungEmployeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WarungEmployes to fetch.
     */
    orderBy?: WarungEmployeOrderByWithRelationInput | WarungEmployeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WarungEmployes.
     */
    cursor?: WarungEmployeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WarungEmployes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WarungEmployes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WarungEmployes.
     */
    distinct?: WarungEmployeScalarFieldEnum | WarungEmployeScalarFieldEnum[]
  }

  /**
   * WarungEmploye findFirstOrThrow
   */
  export type WarungEmployeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WarungEmploye
     */
    select?: WarungEmployeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarungEmployeInclude<ExtArgs> | null
    /**
     * Filter, which WarungEmploye to fetch.
     */
    where?: WarungEmployeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WarungEmployes to fetch.
     */
    orderBy?: WarungEmployeOrderByWithRelationInput | WarungEmployeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WarungEmployes.
     */
    cursor?: WarungEmployeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WarungEmployes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WarungEmployes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WarungEmployes.
     */
    distinct?: WarungEmployeScalarFieldEnum | WarungEmployeScalarFieldEnum[]
  }

  /**
   * WarungEmploye findMany
   */
  export type WarungEmployeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WarungEmploye
     */
    select?: WarungEmployeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarungEmployeInclude<ExtArgs> | null
    /**
     * Filter, which WarungEmployes to fetch.
     */
    where?: WarungEmployeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WarungEmployes to fetch.
     */
    orderBy?: WarungEmployeOrderByWithRelationInput | WarungEmployeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WarungEmployes.
     */
    cursor?: WarungEmployeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WarungEmployes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WarungEmployes.
     */
    skip?: number
    distinct?: WarungEmployeScalarFieldEnum | WarungEmployeScalarFieldEnum[]
  }

  /**
   * WarungEmploye create
   */
  export type WarungEmployeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WarungEmploye
     */
    select?: WarungEmployeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarungEmployeInclude<ExtArgs> | null
    /**
     * The data needed to create a WarungEmploye.
     */
    data: XOR<WarungEmployeCreateInput, WarungEmployeUncheckedCreateInput>
  }

  /**
   * WarungEmploye createMany
   */
  export type WarungEmployeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WarungEmployes.
     */
    data: WarungEmployeCreateManyInput | WarungEmployeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WarungEmploye createManyAndReturn
   */
  export type WarungEmployeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WarungEmploye
     */
    select?: WarungEmployeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many WarungEmployes.
     */
    data: WarungEmployeCreateManyInput | WarungEmployeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarungEmployeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WarungEmploye update
   */
  export type WarungEmployeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WarungEmploye
     */
    select?: WarungEmployeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarungEmployeInclude<ExtArgs> | null
    /**
     * The data needed to update a WarungEmploye.
     */
    data: XOR<WarungEmployeUpdateInput, WarungEmployeUncheckedUpdateInput>
    /**
     * Choose, which WarungEmploye to update.
     */
    where: WarungEmployeWhereUniqueInput
  }

  /**
   * WarungEmploye updateMany
   */
  export type WarungEmployeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WarungEmployes.
     */
    data: XOR<WarungEmployeUpdateManyMutationInput, WarungEmployeUncheckedUpdateManyInput>
    /**
     * Filter which WarungEmployes to update
     */
    where?: WarungEmployeWhereInput
  }

  /**
   * WarungEmploye upsert
   */
  export type WarungEmployeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WarungEmploye
     */
    select?: WarungEmployeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarungEmployeInclude<ExtArgs> | null
    /**
     * The filter to search for the WarungEmploye to update in case it exists.
     */
    where: WarungEmployeWhereUniqueInput
    /**
     * In case the WarungEmploye found by the `where` argument doesn't exist, create a new WarungEmploye with this data.
     */
    create: XOR<WarungEmployeCreateInput, WarungEmployeUncheckedCreateInput>
    /**
     * In case the WarungEmploye was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WarungEmployeUpdateInput, WarungEmployeUncheckedUpdateInput>
  }

  /**
   * WarungEmploye delete
   */
  export type WarungEmployeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WarungEmploye
     */
    select?: WarungEmployeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarungEmployeInclude<ExtArgs> | null
    /**
     * Filter which WarungEmploye to delete.
     */
    where: WarungEmployeWhereUniqueInput
  }

  /**
   * WarungEmploye deleteMany
   */
  export type WarungEmployeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WarungEmployes to delete
     */
    where?: WarungEmployeWhereInput
  }

  /**
   * WarungEmploye without action
   */
  export type WarungEmployeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WarungEmploye
     */
    select?: WarungEmployeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarungEmployeInclude<ExtArgs> | null
  }


  /**
   * Model Menu
   */

  export type AggregateMenu = {
    _count: MenuCountAggregateOutputType | null
    _avg: MenuAvgAggregateOutputType | null
    _sum: MenuSumAggregateOutputType | null
    _min: MenuMinAggregateOutputType | null
    _max: MenuMaxAggregateOutputType | null
  }

  export type MenuAvgAggregateOutputType = {
    id: number | null
    price: number | null
    warungId: number | null
    userId: number | null
  }

  export type MenuSumAggregateOutputType = {
    id: number | null
    price: number | null
    warungId: number | null
    userId: number | null
  }

  export type MenuMinAggregateOutputType = {
    id: number | null
    title: string | null
    price: number | null
    desc: string | null
    image: string | null
    available: boolean | null
    category: string | null
    warungId: number | null
    userId: number | null
  }

  export type MenuMaxAggregateOutputType = {
    id: number | null
    title: string | null
    price: number | null
    desc: string | null
    image: string | null
    available: boolean | null
    category: string | null
    warungId: number | null
    userId: number | null
  }

  export type MenuCountAggregateOutputType = {
    id: number
    title: number
    price: number
    desc: number
    image: number
    available: number
    category: number
    warungId: number
    userId: number
    _all: number
  }


  export type MenuAvgAggregateInputType = {
    id?: true
    price?: true
    warungId?: true
    userId?: true
  }

  export type MenuSumAggregateInputType = {
    id?: true
    price?: true
    warungId?: true
    userId?: true
  }

  export type MenuMinAggregateInputType = {
    id?: true
    title?: true
    price?: true
    desc?: true
    image?: true
    available?: true
    category?: true
    warungId?: true
    userId?: true
  }

  export type MenuMaxAggregateInputType = {
    id?: true
    title?: true
    price?: true
    desc?: true
    image?: true
    available?: true
    category?: true
    warungId?: true
    userId?: true
  }

  export type MenuCountAggregateInputType = {
    id?: true
    title?: true
    price?: true
    desc?: true
    image?: true
    available?: true
    category?: true
    warungId?: true
    userId?: true
    _all?: true
  }

  export type MenuAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Menu to aggregate.
     */
    where?: MenuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Menus to fetch.
     */
    orderBy?: MenuOrderByWithRelationInput | MenuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MenuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Menus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Menus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Menus
    **/
    _count?: true | MenuCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MenuAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MenuSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MenuMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MenuMaxAggregateInputType
  }

  export type GetMenuAggregateType<T extends MenuAggregateArgs> = {
        [P in keyof T & keyof AggregateMenu]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMenu[P]>
      : GetScalarType<T[P], AggregateMenu[P]>
  }




  export type MenuGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MenuWhereInput
    orderBy?: MenuOrderByWithAggregationInput | MenuOrderByWithAggregationInput[]
    by: MenuScalarFieldEnum[] | MenuScalarFieldEnum
    having?: MenuScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MenuCountAggregateInputType | true
    _avg?: MenuAvgAggregateInputType
    _sum?: MenuSumAggregateInputType
    _min?: MenuMinAggregateInputType
    _max?: MenuMaxAggregateInputType
  }

  export type MenuGroupByOutputType = {
    id: number
    title: string
    price: number
    desc: string
    image: string
    available: boolean
    category: string
    warungId: number
    userId: number
    _count: MenuCountAggregateOutputType | null
    _avg: MenuAvgAggregateOutputType | null
    _sum: MenuSumAggregateOutputType | null
    _min: MenuMinAggregateOutputType | null
    _max: MenuMaxAggregateOutputType | null
  }

  type GetMenuGroupByPayload<T extends MenuGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MenuGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MenuGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MenuGroupByOutputType[P]>
            : GetScalarType<T[P], MenuGroupByOutputType[P]>
        }
      >
    >


  export type MenuSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    price?: boolean
    desc?: boolean
    image?: boolean
    available?: boolean
    category?: boolean
    warungId?: boolean
    userId?: boolean
    warung?: boolean | WarungDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    orders?: boolean | Menu$ordersArgs<ExtArgs>
    _count?: boolean | MenuCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["menu"]>

  export type MenuSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    price?: boolean
    desc?: boolean
    image?: boolean
    available?: boolean
    category?: boolean
    warungId?: boolean
    userId?: boolean
    warung?: boolean | WarungDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["menu"]>

  export type MenuSelectScalar = {
    id?: boolean
    title?: boolean
    price?: boolean
    desc?: boolean
    image?: boolean
    available?: boolean
    category?: boolean
    warungId?: boolean
    userId?: boolean
  }

  export type MenuInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    warung?: boolean | WarungDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    orders?: boolean | Menu$ordersArgs<ExtArgs>
    _count?: boolean | MenuCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MenuIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    warung?: boolean | WarungDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $MenuPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Menu"
    objects: {
      warung: Prisma.$WarungPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
      orders: Prisma.$OrderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      price: number
      desc: string
      image: string
      available: boolean
      category: string
      warungId: number
      userId: number
    }, ExtArgs["result"]["menu"]>
    composites: {}
  }

  type MenuGetPayload<S extends boolean | null | undefined | MenuDefaultArgs> = $Result.GetResult<Prisma.$MenuPayload, S>

  type MenuCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MenuFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MenuCountAggregateInputType | true
    }

  export interface MenuDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Menu'], meta: { name: 'Menu' } }
    /**
     * Find zero or one Menu that matches the filter.
     * @param {MenuFindUniqueArgs} args - Arguments to find a Menu
     * @example
     * // Get one Menu
     * const menu = await prisma.menu.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MenuFindUniqueArgs>(args: SelectSubset<T, MenuFindUniqueArgs<ExtArgs>>): Prisma__MenuClient<$Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Menu that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {MenuFindUniqueOrThrowArgs} args - Arguments to find a Menu
     * @example
     * // Get one Menu
     * const menu = await prisma.menu.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MenuFindUniqueOrThrowArgs>(args: SelectSubset<T, MenuFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MenuClient<$Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Menu that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuFindFirstArgs} args - Arguments to find a Menu
     * @example
     * // Get one Menu
     * const menu = await prisma.menu.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MenuFindFirstArgs>(args?: SelectSubset<T, MenuFindFirstArgs<ExtArgs>>): Prisma__MenuClient<$Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Menu that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuFindFirstOrThrowArgs} args - Arguments to find a Menu
     * @example
     * // Get one Menu
     * const menu = await prisma.menu.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MenuFindFirstOrThrowArgs>(args?: SelectSubset<T, MenuFindFirstOrThrowArgs<ExtArgs>>): Prisma__MenuClient<$Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Menus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Menus
     * const menus = await prisma.menu.findMany()
     * 
     * // Get first 10 Menus
     * const menus = await prisma.menu.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const menuWithIdOnly = await prisma.menu.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MenuFindManyArgs>(args?: SelectSubset<T, MenuFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Menu.
     * @param {MenuCreateArgs} args - Arguments to create a Menu.
     * @example
     * // Create one Menu
     * const Menu = await prisma.menu.create({
     *   data: {
     *     // ... data to create a Menu
     *   }
     * })
     * 
     */
    create<T extends MenuCreateArgs>(args: SelectSubset<T, MenuCreateArgs<ExtArgs>>): Prisma__MenuClient<$Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Menus.
     * @param {MenuCreateManyArgs} args - Arguments to create many Menus.
     * @example
     * // Create many Menus
     * const menu = await prisma.menu.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MenuCreateManyArgs>(args?: SelectSubset<T, MenuCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Menus and returns the data saved in the database.
     * @param {MenuCreateManyAndReturnArgs} args - Arguments to create many Menus.
     * @example
     * // Create many Menus
     * const menu = await prisma.menu.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Menus and only return the `id`
     * const menuWithIdOnly = await prisma.menu.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MenuCreateManyAndReturnArgs>(args?: SelectSubset<T, MenuCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Menu.
     * @param {MenuDeleteArgs} args - Arguments to delete one Menu.
     * @example
     * // Delete one Menu
     * const Menu = await prisma.menu.delete({
     *   where: {
     *     // ... filter to delete one Menu
     *   }
     * })
     * 
     */
    delete<T extends MenuDeleteArgs>(args: SelectSubset<T, MenuDeleteArgs<ExtArgs>>): Prisma__MenuClient<$Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Menu.
     * @param {MenuUpdateArgs} args - Arguments to update one Menu.
     * @example
     * // Update one Menu
     * const menu = await prisma.menu.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MenuUpdateArgs>(args: SelectSubset<T, MenuUpdateArgs<ExtArgs>>): Prisma__MenuClient<$Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Menus.
     * @param {MenuDeleteManyArgs} args - Arguments to filter Menus to delete.
     * @example
     * // Delete a few Menus
     * const { count } = await prisma.menu.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MenuDeleteManyArgs>(args?: SelectSubset<T, MenuDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Menus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Menus
     * const menu = await prisma.menu.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MenuUpdateManyArgs>(args: SelectSubset<T, MenuUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Menu.
     * @param {MenuUpsertArgs} args - Arguments to update or create a Menu.
     * @example
     * // Update or create a Menu
     * const menu = await prisma.menu.upsert({
     *   create: {
     *     // ... data to create a Menu
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Menu we want to update
     *   }
     * })
     */
    upsert<T extends MenuUpsertArgs>(args: SelectSubset<T, MenuUpsertArgs<ExtArgs>>): Prisma__MenuClient<$Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Menus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuCountArgs} args - Arguments to filter Menus to count.
     * @example
     * // Count the number of Menus
     * const count = await prisma.menu.count({
     *   where: {
     *     // ... the filter for the Menus we want to count
     *   }
     * })
    **/
    count<T extends MenuCountArgs>(
      args?: Subset<T, MenuCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MenuCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Menu.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MenuAggregateArgs>(args: Subset<T, MenuAggregateArgs>): Prisma.PrismaPromise<GetMenuAggregateType<T>>

    /**
     * Group by Menu.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MenuGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MenuGroupByArgs['orderBy'] }
        : { orderBy?: MenuGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MenuGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMenuGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Menu model
   */
  readonly fields: MenuFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Menu.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MenuClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    warung<T extends WarungDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WarungDefaultArgs<ExtArgs>>): Prisma__WarungClient<$Result.GetResult<Prisma.$WarungPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    orders<T extends Menu$ordersArgs<ExtArgs> = {}>(args?: Subset<T, Menu$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Menu model
   */ 
  interface MenuFieldRefs {
    readonly id: FieldRef<"Menu", 'Int'>
    readonly title: FieldRef<"Menu", 'String'>
    readonly price: FieldRef<"Menu", 'Int'>
    readonly desc: FieldRef<"Menu", 'String'>
    readonly image: FieldRef<"Menu", 'String'>
    readonly available: FieldRef<"Menu", 'Boolean'>
    readonly category: FieldRef<"Menu", 'String'>
    readonly warungId: FieldRef<"Menu", 'Int'>
    readonly userId: FieldRef<"Menu", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Menu findUnique
   */
  export type MenuFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuInclude<ExtArgs> | null
    /**
     * Filter, which Menu to fetch.
     */
    where: MenuWhereUniqueInput
  }

  /**
   * Menu findUniqueOrThrow
   */
  export type MenuFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuInclude<ExtArgs> | null
    /**
     * Filter, which Menu to fetch.
     */
    where: MenuWhereUniqueInput
  }

  /**
   * Menu findFirst
   */
  export type MenuFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuInclude<ExtArgs> | null
    /**
     * Filter, which Menu to fetch.
     */
    where?: MenuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Menus to fetch.
     */
    orderBy?: MenuOrderByWithRelationInput | MenuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Menus.
     */
    cursor?: MenuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Menus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Menus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Menus.
     */
    distinct?: MenuScalarFieldEnum | MenuScalarFieldEnum[]
  }

  /**
   * Menu findFirstOrThrow
   */
  export type MenuFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuInclude<ExtArgs> | null
    /**
     * Filter, which Menu to fetch.
     */
    where?: MenuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Menus to fetch.
     */
    orderBy?: MenuOrderByWithRelationInput | MenuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Menus.
     */
    cursor?: MenuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Menus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Menus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Menus.
     */
    distinct?: MenuScalarFieldEnum | MenuScalarFieldEnum[]
  }

  /**
   * Menu findMany
   */
  export type MenuFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuInclude<ExtArgs> | null
    /**
     * Filter, which Menus to fetch.
     */
    where?: MenuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Menus to fetch.
     */
    orderBy?: MenuOrderByWithRelationInput | MenuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Menus.
     */
    cursor?: MenuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Menus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Menus.
     */
    skip?: number
    distinct?: MenuScalarFieldEnum | MenuScalarFieldEnum[]
  }

  /**
   * Menu create
   */
  export type MenuCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuInclude<ExtArgs> | null
    /**
     * The data needed to create a Menu.
     */
    data: XOR<MenuCreateInput, MenuUncheckedCreateInput>
  }

  /**
   * Menu createMany
   */
  export type MenuCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Menus.
     */
    data: MenuCreateManyInput | MenuCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Menu createManyAndReturn
   */
  export type MenuCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Menus.
     */
    data: MenuCreateManyInput | MenuCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Menu update
   */
  export type MenuUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuInclude<ExtArgs> | null
    /**
     * The data needed to update a Menu.
     */
    data: XOR<MenuUpdateInput, MenuUncheckedUpdateInput>
    /**
     * Choose, which Menu to update.
     */
    where: MenuWhereUniqueInput
  }

  /**
   * Menu updateMany
   */
  export type MenuUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Menus.
     */
    data: XOR<MenuUpdateManyMutationInput, MenuUncheckedUpdateManyInput>
    /**
     * Filter which Menus to update
     */
    where?: MenuWhereInput
  }

  /**
   * Menu upsert
   */
  export type MenuUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuInclude<ExtArgs> | null
    /**
     * The filter to search for the Menu to update in case it exists.
     */
    where: MenuWhereUniqueInput
    /**
     * In case the Menu found by the `where` argument doesn't exist, create a new Menu with this data.
     */
    create: XOR<MenuCreateInput, MenuUncheckedCreateInput>
    /**
     * In case the Menu was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MenuUpdateInput, MenuUncheckedUpdateInput>
  }

  /**
   * Menu delete
   */
  export type MenuDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuInclude<ExtArgs> | null
    /**
     * Filter which Menu to delete.
     */
    where: MenuWhereUniqueInput
  }

  /**
   * Menu deleteMany
   */
  export type MenuDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Menus to delete
     */
    where?: MenuWhereInput
  }

  /**
   * Menu.orders
   */
  export type Menu$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Menu without action
   */
  export type MenuDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuInclude<ExtArgs> | null
  }


  /**
   * Model Order
   */

  export type AggregateOrder = {
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  export type OrderAvgAggregateOutputType = {
    id: number | null
    menuId: number | null
    billId: number | null
    quantity: number | null
    total: number | null
  }

  export type OrderSumAggregateOutputType = {
    id: number | null
    menuId: number | null
    billId: number | null
    quantity: number | null
    total: number | null
  }

  export type OrderMinAggregateOutputType = {
    id: number | null
    menuId: number | null
    billId: number | null
    quantity: number | null
    total: number | null
    createdAt: Date | null
  }

  export type OrderMaxAggregateOutputType = {
    id: number | null
    menuId: number | null
    billId: number | null
    quantity: number | null
    total: number | null
    createdAt: Date | null
  }

  export type OrderCountAggregateOutputType = {
    id: number
    menuId: number
    billId: number
    quantity: number
    total: number
    createdAt: number
    _all: number
  }


  export type OrderAvgAggregateInputType = {
    id?: true
    menuId?: true
    billId?: true
    quantity?: true
    total?: true
  }

  export type OrderSumAggregateInputType = {
    id?: true
    menuId?: true
    billId?: true
    quantity?: true
    total?: true
  }

  export type OrderMinAggregateInputType = {
    id?: true
    menuId?: true
    billId?: true
    quantity?: true
    total?: true
    createdAt?: true
  }

  export type OrderMaxAggregateInputType = {
    id?: true
    menuId?: true
    billId?: true
    quantity?: true
    total?: true
    createdAt?: true
  }

  export type OrderCountAggregateInputType = {
    id?: true
    menuId?: true
    billId?: true
    quantity?: true
    total?: true
    createdAt?: true
    _all?: true
  }

  export type OrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Order to aggregate.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Orders
    **/
    _count?: true | OrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderMaxAggregateInputType
  }

  export type GetOrderAggregateType<T extends OrderAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder[P]>
      : GetScalarType<T[P], AggregateOrder[P]>
  }




  export type OrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithAggregationInput | OrderOrderByWithAggregationInput[]
    by: OrderScalarFieldEnum[] | OrderScalarFieldEnum
    having?: OrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderCountAggregateInputType | true
    _avg?: OrderAvgAggregateInputType
    _sum?: OrderSumAggregateInputType
    _min?: OrderMinAggregateInputType
    _max?: OrderMaxAggregateInputType
  }

  export type OrderGroupByOutputType = {
    id: number
    menuId: number
    billId: number
    quantity: number
    total: number
    createdAt: Date
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  type GetOrderGroupByPayload<T extends OrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderGroupByOutputType[P]>
            : GetScalarType<T[P], OrderGroupByOutputType[P]>
        }
      >
    >


  export type OrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    menuId?: boolean
    billId?: boolean
    quantity?: boolean
    total?: boolean
    createdAt?: boolean
    menu?: boolean | MenuDefaultArgs<ExtArgs>
    bill?: boolean | BillDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    menuId?: boolean
    billId?: boolean
    quantity?: boolean
    total?: boolean
    createdAt?: boolean
    menu?: boolean | MenuDefaultArgs<ExtArgs>
    bill?: boolean | BillDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectScalar = {
    id?: boolean
    menuId?: boolean
    billId?: boolean
    quantity?: boolean
    total?: boolean
    createdAt?: boolean
  }

  export type OrderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    menu?: boolean | MenuDefaultArgs<ExtArgs>
    bill?: boolean | BillDefaultArgs<ExtArgs>
  }
  export type OrderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    menu?: boolean | MenuDefaultArgs<ExtArgs>
    bill?: boolean | BillDefaultArgs<ExtArgs>
  }

  export type $OrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Order"
    objects: {
      menu: Prisma.$MenuPayload<ExtArgs>
      bill: Prisma.$BillPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      menuId: number
      billId: number
      quantity: number
      total: number
      createdAt: Date
    }, ExtArgs["result"]["order"]>
    composites: {}
  }

  type OrderGetPayload<S extends boolean | null | undefined | OrderDefaultArgs> = $Result.GetResult<Prisma.$OrderPayload, S>

  type OrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<OrderFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: OrderCountAggregateInputType | true
    }

  export interface OrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Order'], meta: { name: 'Order' } }
    /**
     * Find zero or one Order that matches the filter.
     * @param {OrderFindUniqueArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderFindUniqueArgs>(args: SelectSubset<T, OrderFindUniqueArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Order that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {OrderFindUniqueOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Order that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderFindFirstArgs>(args?: SelectSubset<T, OrderFindFirstArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Order that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.order.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.order.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderWithIdOnly = await prisma.order.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderFindManyArgs>(args?: SelectSubset<T, OrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Order.
     * @param {OrderCreateArgs} args - Arguments to create a Order.
     * @example
     * // Create one Order
     * const Order = await prisma.order.create({
     *   data: {
     *     // ... data to create a Order
     *   }
     * })
     * 
     */
    create<T extends OrderCreateArgs>(args: SelectSubset<T, OrderCreateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Orders.
     * @param {OrderCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderCreateManyArgs>(args?: SelectSubset<T, OrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Orders and returns the data saved in the database.
     * @param {OrderCreateManyAndReturnArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Orders and only return the `id`
     * const orderWithIdOnly = await prisma.order.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrderCreateManyAndReturnArgs>(args?: SelectSubset<T, OrderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Order.
     * @param {OrderDeleteArgs} args - Arguments to delete one Order.
     * @example
     * // Delete one Order
     * const Order = await prisma.order.delete({
     *   where: {
     *     // ... filter to delete one Order
     *   }
     * })
     * 
     */
    delete<T extends OrderDeleteArgs>(args: SelectSubset<T, OrderDeleteArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Order.
     * @param {OrderUpdateArgs} args - Arguments to update one Order.
     * @example
     * // Update one Order
     * const order = await prisma.order.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderUpdateArgs>(args: SelectSubset<T, OrderUpdateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Orders.
     * @param {OrderDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.order.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderDeleteManyArgs>(args?: SelectSubset<T, OrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderUpdateManyArgs>(args: SelectSubset<T, OrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Order.
     * @param {OrderUpsertArgs} args - Arguments to update or create a Order.
     * @example
     * // Update or create a Order
     * const order = await prisma.order.upsert({
     *   create: {
     *     // ... data to create a Order
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order we want to update
     *   }
     * })
     */
    upsert<T extends OrderUpsertArgs>(args: SelectSubset<T, OrderUpsertArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.order.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends OrderCountArgs>(
      args?: Subset<T, OrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrderAggregateArgs>(args: Subset<T, OrderAggregateArgs>): Prisma.PrismaPromise<GetOrderAggregateType<T>>

    /**
     * Group by Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderGroupByArgs['orderBy'] }
        : { orderBy?: OrderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Order model
   */
  readonly fields: OrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Order.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    menu<T extends MenuDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MenuDefaultArgs<ExtArgs>>): Prisma__MenuClient<$Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    bill<T extends BillDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BillDefaultArgs<ExtArgs>>): Prisma__BillClient<$Result.GetResult<Prisma.$BillPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Order model
   */ 
  interface OrderFieldRefs {
    readonly id: FieldRef<"Order", 'Int'>
    readonly menuId: FieldRef<"Order", 'Int'>
    readonly billId: FieldRef<"Order", 'Int'>
    readonly quantity: FieldRef<"Order", 'Int'>
    readonly total: FieldRef<"Order", 'Int'>
    readonly createdAt: FieldRef<"Order", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Order findUnique
   */
  export type OrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findUniqueOrThrow
   */
  export type OrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findFirst
   */
  export type OrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findFirstOrThrow
   */
  export type OrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findMany
   */
  export type OrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order create
   */
  export type OrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to create a Order.
     */
    data: XOR<OrderCreateInput, OrderUncheckedCreateInput>
  }

  /**
   * Order createMany
   */
  export type OrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Order createManyAndReturn
   */
  export type OrderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Order update
   */
  export type OrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to update a Order.
     */
    data: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
    /**
     * Choose, which Order to update.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order updateMany
   */
  export type OrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
  }

  /**
   * Order upsert
   */
  export type OrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The filter to search for the Order to update in case it exists.
     */
    where: OrderWhereUniqueInput
    /**
     * In case the Order found by the `where` argument doesn't exist, create a new Order with this data.
     */
    create: XOR<OrderCreateInput, OrderUncheckedCreateInput>
    /**
     * In case the Order was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
  }

  /**
   * Order delete
   */
  export type OrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter which Order to delete.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order deleteMany
   */
  export type OrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to delete
     */
    where?: OrderWhereInput
  }

  /**
   * Order without action
   */
  export type OrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
  }


  /**
   * Model Bill
   */

  export type AggregateBill = {
    _count: BillCountAggregateOutputType | null
    _avg: BillAvgAggregateOutputType | null
    _sum: BillSumAggregateOutputType | null
    _min: BillMinAggregateOutputType | null
    _max: BillMaxAggregateOutputType | null
  }

  export type BillAvgAggregateOutputType = {
    id: number | null
    total: number | null
    userId: number | null
    warungId: number | null
  }

  export type BillSumAggregateOutputType = {
    id: number | null
    total: number | null
    userId: number | null
    warungId: number | null
  }

  export type BillMinAggregateOutputType = {
    id: number | null
    total: number | null
    status: string | null
    approved: boolean | null
    customerName: string | null
    createdAt: Date | null
    userId: number | null
    warungId: number | null
  }

  export type BillMaxAggregateOutputType = {
    id: number | null
    total: number | null
    status: string | null
    approved: boolean | null
    customerName: string | null
    createdAt: Date | null
    userId: number | null
    warungId: number | null
  }

  export type BillCountAggregateOutputType = {
    id: number
    total: number
    status: number
    approved: number
    customerName: number
    createdAt: number
    userId: number
    warungId: number
    _all: number
  }


  export type BillAvgAggregateInputType = {
    id?: true
    total?: true
    userId?: true
    warungId?: true
  }

  export type BillSumAggregateInputType = {
    id?: true
    total?: true
    userId?: true
    warungId?: true
  }

  export type BillMinAggregateInputType = {
    id?: true
    total?: true
    status?: true
    approved?: true
    customerName?: true
    createdAt?: true
    userId?: true
    warungId?: true
  }

  export type BillMaxAggregateInputType = {
    id?: true
    total?: true
    status?: true
    approved?: true
    customerName?: true
    createdAt?: true
    userId?: true
    warungId?: true
  }

  export type BillCountAggregateInputType = {
    id?: true
    total?: true
    status?: true
    approved?: true
    customerName?: true
    createdAt?: true
    userId?: true
    warungId?: true
    _all?: true
  }

  export type BillAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bill to aggregate.
     */
    where?: BillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bills to fetch.
     */
    orderBy?: BillOrderByWithRelationInput | BillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Bills
    **/
    _count?: true | BillCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BillAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BillSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BillMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BillMaxAggregateInputType
  }

  export type GetBillAggregateType<T extends BillAggregateArgs> = {
        [P in keyof T & keyof AggregateBill]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBill[P]>
      : GetScalarType<T[P], AggregateBill[P]>
  }




  export type BillGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BillWhereInput
    orderBy?: BillOrderByWithAggregationInput | BillOrderByWithAggregationInput[]
    by: BillScalarFieldEnum[] | BillScalarFieldEnum
    having?: BillScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BillCountAggregateInputType | true
    _avg?: BillAvgAggregateInputType
    _sum?: BillSumAggregateInputType
    _min?: BillMinAggregateInputType
    _max?: BillMaxAggregateInputType
  }

  export type BillGroupByOutputType = {
    id: number
    total: number
    status: string
    approved: boolean
    customerName: string
    createdAt: Date
    userId: number
    warungId: number
    _count: BillCountAggregateOutputType | null
    _avg: BillAvgAggregateOutputType | null
    _sum: BillSumAggregateOutputType | null
    _min: BillMinAggregateOutputType | null
    _max: BillMaxAggregateOutputType | null
  }

  type GetBillGroupByPayload<T extends BillGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BillGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BillGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BillGroupByOutputType[P]>
            : GetScalarType<T[P], BillGroupByOutputType[P]>
        }
      >
    >


  export type BillSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    total?: boolean
    status?: boolean
    approved?: boolean
    customerName?: boolean
    createdAt?: boolean
    userId?: boolean
    warungId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    warung?: boolean | WarungDefaultArgs<ExtArgs>
    orders?: boolean | Bill$ordersArgs<ExtArgs>
    _count?: boolean | BillCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bill"]>

  export type BillSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    total?: boolean
    status?: boolean
    approved?: boolean
    customerName?: boolean
    createdAt?: boolean
    userId?: boolean
    warungId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    warung?: boolean | WarungDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bill"]>

  export type BillSelectScalar = {
    id?: boolean
    total?: boolean
    status?: boolean
    approved?: boolean
    customerName?: boolean
    createdAt?: boolean
    userId?: boolean
    warungId?: boolean
  }

  export type BillInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    warung?: boolean | WarungDefaultArgs<ExtArgs>
    orders?: boolean | Bill$ordersArgs<ExtArgs>
    _count?: boolean | BillCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BillIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    warung?: boolean | WarungDefaultArgs<ExtArgs>
  }

  export type $BillPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Bill"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      warung: Prisma.$WarungPayload<ExtArgs>
      orders: Prisma.$OrderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      total: number
      status: string
      approved: boolean
      customerName: string
      createdAt: Date
      userId: number
      warungId: number
    }, ExtArgs["result"]["bill"]>
    composites: {}
  }

  type BillGetPayload<S extends boolean | null | undefined | BillDefaultArgs> = $Result.GetResult<Prisma.$BillPayload, S>

  type BillCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<BillFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: BillCountAggregateInputType | true
    }

  export interface BillDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Bill'], meta: { name: 'Bill' } }
    /**
     * Find zero or one Bill that matches the filter.
     * @param {BillFindUniqueArgs} args - Arguments to find a Bill
     * @example
     * // Get one Bill
     * const bill = await prisma.bill.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BillFindUniqueArgs>(args: SelectSubset<T, BillFindUniqueArgs<ExtArgs>>): Prisma__BillClient<$Result.GetResult<Prisma.$BillPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Bill that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {BillFindUniqueOrThrowArgs} args - Arguments to find a Bill
     * @example
     * // Get one Bill
     * const bill = await prisma.bill.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BillFindUniqueOrThrowArgs>(args: SelectSubset<T, BillFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BillClient<$Result.GetResult<Prisma.$BillPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Bill that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillFindFirstArgs} args - Arguments to find a Bill
     * @example
     * // Get one Bill
     * const bill = await prisma.bill.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BillFindFirstArgs>(args?: SelectSubset<T, BillFindFirstArgs<ExtArgs>>): Prisma__BillClient<$Result.GetResult<Prisma.$BillPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Bill that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillFindFirstOrThrowArgs} args - Arguments to find a Bill
     * @example
     * // Get one Bill
     * const bill = await prisma.bill.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BillFindFirstOrThrowArgs>(args?: SelectSubset<T, BillFindFirstOrThrowArgs<ExtArgs>>): Prisma__BillClient<$Result.GetResult<Prisma.$BillPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Bills that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bills
     * const bills = await prisma.bill.findMany()
     * 
     * // Get first 10 Bills
     * const bills = await prisma.bill.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const billWithIdOnly = await prisma.bill.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BillFindManyArgs>(args?: SelectSubset<T, BillFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BillPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Bill.
     * @param {BillCreateArgs} args - Arguments to create a Bill.
     * @example
     * // Create one Bill
     * const Bill = await prisma.bill.create({
     *   data: {
     *     // ... data to create a Bill
     *   }
     * })
     * 
     */
    create<T extends BillCreateArgs>(args: SelectSubset<T, BillCreateArgs<ExtArgs>>): Prisma__BillClient<$Result.GetResult<Prisma.$BillPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Bills.
     * @param {BillCreateManyArgs} args - Arguments to create many Bills.
     * @example
     * // Create many Bills
     * const bill = await prisma.bill.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BillCreateManyArgs>(args?: SelectSubset<T, BillCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Bills and returns the data saved in the database.
     * @param {BillCreateManyAndReturnArgs} args - Arguments to create many Bills.
     * @example
     * // Create many Bills
     * const bill = await prisma.bill.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Bills and only return the `id`
     * const billWithIdOnly = await prisma.bill.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BillCreateManyAndReturnArgs>(args?: SelectSubset<T, BillCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BillPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Bill.
     * @param {BillDeleteArgs} args - Arguments to delete one Bill.
     * @example
     * // Delete one Bill
     * const Bill = await prisma.bill.delete({
     *   where: {
     *     // ... filter to delete one Bill
     *   }
     * })
     * 
     */
    delete<T extends BillDeleteArgs>(args: SelectSubset<T, BillDeleteArgs<ExtArgs>>): Prisma__BillClient<$Result.GetResult<Prisma.$BillPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Bill.
     * @param {BillUpdateArgs} args - Arguments to update one Bill.
     * @example
     * // Update one Bill
     * const bill = await prisma.bill.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BillUpdateArgs>(args: SelectSubset<T, BillUpdateArgs<ExtArgs>>): Prisma__BillClient<$Result.GetResult<Prisma.$BillPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Bills.
     * @param {BillDeleteManyArgs} args - Arguments to filter Bills to delete.
     * @example
     * // Delete a few Bills
     * const { count } = await prisma.bill.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BillDeleteManyArgs>(args?: SelectSubset<T, BillDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bills
     * const bill = await prisma.bill.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BillUpdateManyArgs>(args: SelectSubset<T, BillUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Bill.
     * @param {BillUpsertArgs} args - Arguments to update or create a Bill.
     * @example
     * // Update or create a Bill
     * const bill = await prisma.bill.upsert({
     *   create: {
     *     // ... data to create a Bill
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Bill we want to update
     *   }
     * })
     */
    upsert<T extends BillUpsertArgs>(args: SelectSubset<T, BillUpsertArgs<ExtArgs>>): Prisma__BillClient<$Result.GetResult<Prisma.$BillPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Bills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillCountArgs} args - Arguments to filter Bills to count.
     * @example
     * // Count the number of Bills
     * const count = await prisma.bill.count({
     *   where: {
     *     // ... the filter for the Bills we want to count
     *   }
     * })
    **/
    count<T extends BillCountArgs>(
      args?: Subset<T, BillCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BillCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Bill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BillAggregateArgs>(args: Subset<T, BillAggregateArgs>): Prisma.PrismaPromise<GetBillAggregateType<T>>

    /**
     * Group by Bill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BillGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BillGroupByArgs['orderBy'] }
        : { orderBy?: BillGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BillGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBillGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Bill model
   */
  readonly fields: BillFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Bill.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BillClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    warung<T extends WarungDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WarungDefaultArgs<ExtArgs>>): Prisma__WarungClient<$Result.GetResult<Prisma.$WarungPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    orders<T extends Bill$ordersArgs<ExtArgs> = {}>(args?: Subset<T, Bill$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Bill model
   */ 
  interface BillFieldRefs {
    readonly id: FieldRef<"Bill", 'Int'>
    readonly total: FieldRef<"Bill", 'Int'>
    readonly status: FieldRef<"Bill", 'String'>
    readonly approved: FieldRef<"Bill", 'Boolean'>
    readonly customerName: FieldRef<"Bill", 'String'>
    readonly createdAt: FieldRef<"Bill", 'DateTime'>
    readonly userId: FieldRef<"Bill", 'Int'>
    readonly warungId: FieldRef<"Bill", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Bill findUnique
   */
  export type BillFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bill
     */
    select?: BillSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillInclude<ExtArgs> | null
    /**
     * Filter, which Bill to fetch.
     */
    where: BillWhereUniqueInput
  }

  /**
   * Bill findUniqueOrThrow
   */
  export type BillFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bill
     */
    select?: BillSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillInclude<ExtArgs> | null
    /**
     * Filter, which Bill to fetch.
     */
    where: BillWhereUniqueInput
  }

  /**
   * Bill findFirst
   */
  export type BillFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bill
     */
    select?: BillSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillInclude<ExtArgs> | null
    /**
     * Filter, which Bill to fetch.
     */
    where?: BillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bills to fetch.
     */
    orderBy?: BillOrderByWithRelationInput | BillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bills.
     */
    cursor?: BillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bills.
     */
    distinct?: BillScalarFieldEnum | BillScalarFieldEnum[]
  }

  /**
   * Bill findFirstOrThrow
   */
  export type BillFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bill
     */
    select?: BillSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillInclude<ExtArgs> | null
    /**
     * Filter, which Bill to fetch.
     */
    where?: BillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bills to fetch.
     */
    orderBy?: BillOrderByWithRelationInput | BillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bills.
     */
    cursor?: BillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bills.
     */
    distinct?: BillScalarFieldEnum | BillScalarFieldEnum[]
  }

  /**
   * Bill findMany
   */
  export type BillFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bill
     */
    select?: BillSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillInclude<ExtArgs> | null
    /**
     * Filter, which Bills to fetch.
     */
    where?: BillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bills to fetch.
     */
    orderBy?: BillOrderByWithRelationInput | BillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bills.
     */
    cursor?: BillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bills.
     */
    skip?: number
    distinct?: BillScalarFieldEnum | BillScalarFieldEnum[]
  }

  /**
   * Bill create
   */
  export type BillCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bill
     */
    select?: BillSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillInclude<ExtArgs> | null
    /**
     * The data needed to create a Bill.
     */
    data: XOR<BillCreateInput, BillUncheckedCreateInput>
  }

  /**
   * Bill createMany
   */
  export type BillCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Bills.
     */
    data: BillCreateManyInput | BillCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Bill createManyAndReturn
   */
  export type BillCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bill
     */
    select?: BillSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Bills.
     */
    data: BillCreateManyInput | BillCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Bill update
   */
  export type BillUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bill
     */
    select?: BillSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillInclude<ExtArgs> | null
    /**
     * The data needed to update a Bill.
     */
    data: XOR<BillUpdateInput, BillUncheckedUpdateInput>
    /**
     * Choose, which Bill to update.
     */
    where: BillWhereUniqueInput
  }

  /**
   * Bill updateMany
   */
  export type BillUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Bills.
     */
    data: XOR<BillUpdateManyMutationInput, BillUncheckedUpdateManyInput>
    /**
     * Filter which Bills to update
     */
    where?: BillWhereInput
  }

  /**
   * Bill upsert
   */
  export type BillUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bill
     */
    select?: BillSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillInclude<ExtArgs> | null
    /**
     * The filter to search for the Bill to update in case it exists.
     */
    where: BillWhereUniqueInput
    /**
     * In case the Bill found by the `where` argument doesn't exist, create a new Bill with this data.
     */
    create: XOR<BillCreateInput, BillUncheckedCreateInput>
    /**
     * In case the Bill was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BillUpdateInput, BillUncheckedUpdateInput>
  }

  /**
   * Bill delete
   */
  export type BillDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bill
     */
    select?: BillSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillInclude<ExtArgs> | null
    /**
     * Filter which Bill to delete.
     */
    where: BillWhereUniqueInput
  }

  /**
   * Bill deleteMany
   */
  export type BillDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bills to delete
     */
    where?: BillWhereInput
  }

  /**
   * Bill.orders
   */
  export type Bill$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Bill without action
   */
  export type BillDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bill
     */
    select?: BillSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    username: 'username',
    password: 'password',
    role: 'role'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const WarungScalarFieldEnum: {
    id: 'id',
    name: 'name',
    location: 'location',
    userId: 'userId'
  };

  export type WarungScalarFieldEnum = (typeof WarungScalarFieldEnum)[keyof typeof WarungScalarFieldEnum]


  export const WarungEmployeScalarFieldEnum: {
    id: 'id',
    warungId: 'warungId',
    userId: 'userId'
  };

  export type WarungEmployeScalarFieldEnum = (typeof WarungEmployeScalarFieldEnum)[keyof typeof WarungEmployeScalarFieldEnum]


  export const MenuScalarFieldEnum: {
    id: 'id',
    title: 'title',
    price: 'price',
    desc: 'desc',
    image: 'image',
    available: 'available',
    category: 'category',
    warungId: 'warungId',
    userId: 'userId'
  };

  export type MenuScalarFieldEnum = (typeof MenuScalarFieldEnum)[keyof typeof MenuScalarFieldEnum]


  export const OrderScalarFieldEnum: {
    id: 'id',
    menuId: 'menuId',
    billId: 'billId',
    quantity: 'quantity',
    total: 'total',
    createdAt: 'createdAt'
  };

  export type OrderScalarFieldEnum = (typeof OrderScalarFieldEnum)[keyof typeof OrderScalarFieldEnum]


  export const BillScalarFieldEnum: {
    id: 'id',
    total: 'total',
    status: 'status',
    approved: 'approved',
    customerName: 'customerName',
    createdAt: 'createdAt',
    userId: 'userId',
    warungId: 'warungId'
  };

  export type BillScalarFieldEnum = (typeof BillScalarFieldEnum)[keyof typeof BillScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    warungs?: WarungListRelationFilter
    warungEmployes?: WarungEmployeListRelationFilter
    menu?: MenuListRelationFilter
    bills?: BillListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    warungs?: WarungOrderByRelationAggregateInput
    warungEmployes?: WarungEmployeOrderByRelationAggregateInput
    menu?: MenuOrderByRelationAggregateInput
    bills?: BillOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    warungs?: WarungListRelationFilter
    warungEmployes?: WarungEmployeListRelationFilter
    menu?: MenuListRelationFilter
    bills?: BillListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
  }

  export type WarungWhereInput = {
    AND?: WarungWhereInput | WarungWhereInput[]
    OR?: WarungWhereInput[]
    NOT?: WarungWhereInput | WarungWhereInput[]
    id?: IntFilter<"Warung"> | number
    name?: StringFilter<"Warung"> | string
    location?: StringFilter<"Warung"> | string
    userId?: IntFilter<"Warung"> | number
    user?: XOR<UserRelationFilter, UserWhereInput>
    warungEmployes?: WarungEmployeListRelationFilter
    menu?: MenuListRelationFilter
    bills?: BillListRelationFilter
  }

  export type WarungOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    warungEmployes?: WarungEmployeOrderByRelationAggregateInput
    menu?: MenuOrderByRelationAggregateInput
    bills?: BillOrderByRelationAggregateInput
  }

  export type WarungWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: WarungWhereInput | WarungWhereInput[]
    OR?: WarungWhereInput[]
    NOT?: WarungWhereInput | WarungWhereInput[]
    location?: StringFilter<"Warung"> | string
    userId?: IntFilter<"Warung"> | number
    user?: XOR<UserRelationFilter, UserWhereInput>
    warungEmployes?: WarungEmployeListRelationFilter
    menu?: MenuListRelationFilter
    bills?: BillListRelationFilter
  }, "id" | "name">

  export type WarungOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrder
    userId?: SortOrder
    _count?: WarungCountOrderByAggregateInput
    _avg?: WarungAvgOrderByAggregateInput
    _max?: WarungMaxOrderByAggregateInput
    _min?: WarungMinOrderByAggregateInput
    _sum?: WarungSumOrderByAggregateInput
  }

  export type WarungScalarWhereWithAggregatesInput = {
    AND?: WarungScalarWhereWithAggregatesInput | WarungScalarWhereWithAggregatesInput[]
    OR?: WarungScalarWhereWithAggregatesInput[]
    NOT?: WarungScalarWhereWithAggregatesInput | WarungScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Warung"> | number
    name?: StringWithAggregatesFilter<"Warung"> | string
    location?: StringWithAggregatesFilter<"Warung"> | string
    userId?: IntWithAggregatesFilter<"Warung"> | number
  }

  export type WarungEmployeWhereInput = {
    AND?: WarungEmployeWhereInput | WarungEmployeWhereInput[]
    OR?: WarungEmployeWhereInput[]
    NOT?: WarungEmployeWhereInput | WarungEmployeWhereInput[]
    id?: IntFilter<"WarungEmploye"> | number
    warungId?: IntFilter<"WarungEmploye"> | number
    userId?: IntFilter<"WarungEmploye"> | number
    warung?: XOR<WarungRelationFilter, WarungWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type WarungEmployeOrderByWithRelationInput = {
    id?: SortOrder
    warungId?: SortOrder
    userId?: SortOrder
    warung?: WarungOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type WarungEmployeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: WarungEmployeWhereInput | WarungEmployeWhereInput[]
    OR?: WarungEmployeWhereInput[]
    NOT?: WarungEmployeWhereInput | WarungEmployeWhereInput[]
    warungId?: IntFilter<"WarungEmploye"> | number
    userId?: IntFilter<"WarungEmploye"> | number
    warung?: XOR<WarungRelationFilter, WarungWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type WarungEmployeOrderByWithAggregationInput = {
    id?: SortOrder
    warungId?: SortOrder
    userId?: SortOrder
    _count?: WarungEmployeCountOrderByAggregateInput
    _avg?: WarungEmployeAvgOrderByAggregateInput
    _max?: WarungEmployeMaxOrderByAggregateInput
    _min?: WarungEmployeMinOrderByAggregateInput
    _sum?: WarungEmployeSumOrderByAggregateInput
  }

  export type WarungEmployeScalarWhereWithAggregatesInput = {
    AND?: WarungEmployeScalarWhereWithAggregatesInput | WarungEmployeScalarWhereWithAggregatesInput[]
    OR?: WarungEmployeScalarWhereWithAggregatesInput[]
    NOT?: WarungEmployeScalarWhereWithAggregatesInput | WarungEmployeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"WarungEmploye"> | number
    warungId?: IntWithAggregatesFilter<"WarungEmploye"> | number
    userId?: IntWithAggregatesFilter<"WarungEmploye"> | number
  }

  export type MenuWhereInput = {
    AND?: MenuWhereInput | MenuWhereInput[]
    OR?: MenuWhereInput[]
    NOT?: MenuWhereInput | MenuWhereInput[]
    id?: IntFilter<"Menu"> | number
    title?: StringFilter<"Menu"> | string
    price?: IntFilter<"Menu"> | number
    desc?: StringFilter<"Menu"> | string
    image?: StringFilter<"Menu"> | string
    available?: BoolFilter<"Menu"> | boolean
    category?: StringFilter<"Menu"> | string
    warungId?: IntFilter<"Menu"> | number
    userId?: IntFilter<"Menu"> | number
    warung?: XOR<WarungRelationFilter, WarungWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
    orders?: OrderListRelationFilter
  }

  export type MenuOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    price?: SortOrder
    desc?: SortOrder
    image?: SortOrder
    available?: SortOrder
    category?: SortOrder
    warungId?: SortOrder
    userId?: SortOrder
    warung?: WarungOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    orders?: OrderOrderByRelationAggregateInput
  }

  export type MenuWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MenuWhereInput | MenuWhereInput[]
    OR?: MenuWhereInput[]
    NOT?: MenuWhereInput | MenuWhereInput[]
    title?: StringFilter<"Menu"> | string
    price?: IntFilter<"Menu"> | number
    desc?: StringFilter<"Menu"> | string
    image?: StringFilter<"Menu"> | string
    available?: BoolFilter<"Menu"> | boolean
    category?: StringFilter<"Menu"> | string
    warungId?: IntFilter<"Menu"> | number
    userId?: IntFilter<"Menu"> | number
    warung?: XOR<WarungRelationFilter, WarungWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
    orders?: OrderListRelationFilter
  }, "id">

  export type MenuOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    price?: SortOrder
    desc?: SortOrder
    image?: SortOrder
    available?: SortOrder
    category?: SortOrder
    warungId?: SortOrder
    userId?: SortOrder
    _count?: MenuCountOrderByAggregateInput
    _avg?: MenuAvgOrderByAggregateInput
    _max?: MenuMaxOrderByAggregateInput
    _min?: MenuMinOrderByAggregateInput
    _sum?: MenuSumOrderByAggregateInput
  }

  export type MenuScalarWhereWithAggregatesInput = {
    AND?: MenuScalarWhereWithAggregatesInput | MenuScalarWhereWithAggregatesInput[]
    OR?: MenuScalarWhereWithAggregatesInput[]
    NOT?: MenuScalarWhereWithAggregatesInput | MenuScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Menu"> | number
    title?: StringWithAggregatesFilter<"Menu"> | string
    price?: IntWithAggregatesFilter<"Menu"> | number
    desc?: StringWithAggregatesFilter<"Menu"> | string
    image?: StringWithAggregatesFilter<"Menu"> | string
    available?: BoolWithAggregatesFilter<"Menu"> | boolean
    category?: StringWithAggregatesFilter<"Menu"> | string
    warungId?: IntWithAggregatesFilter<"Menu"> | number
    userId?: IntWithAggregatesFilter<"Menu"> | number
  }

  export type OrderWhereInput = {
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    id?: IntFilter<"Order"> | number
    menuId?: IntFilter<"Order"> | number
    billId?: IntFilter<"Order"> | number
    quantity?: IntFilter<"Order"> | number
    total?: IntFilter<"Order"> | number
    createdAt?: DateTimeFilter<"Order"> | Date | string
    menu?: XOR<MenuRelationFilter, MenuWhereInput>
    bill?: XOR<BillRelationFilter, BillWhereInput>
  }

  export type OrderOrderByWithRelationInput = {
    id?: SortOrder
    menuId?: SortOrder
    billId?: SortOrder
    quantity?: SortOrder
    total?: SortOrder
    createdAt?: SortOrder
    menu?: MenuOrderByWithRelationInput
    bill?: BillOrderByWithRelationInput
  }

  export type OrderWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    menuId?: IntFilter<"Order"> | number
    billId?: IntFilter<"Order"> | number
    quantity?: IntFilter<"Order"> | number
    total?: IntFilter<"Order"> | number
    createdAt?: DateTimeFilter<"Order"> | Date | string
    menu?: XOR<MenuRelationFilter, MenuWhereInput>
    bill?: XOR<BillRelationFilter, BillWhereInput>
  }, "id">

  export type OrderOrderByWithAggregationInput = {
    id?: SortOrder
    menuId?: SortOrder
    billId?: SortOrder
    quantity?: SortOrder
    total?: SortOrder
    createdAt?: SortOrder
    _count?: OrderCountOrderByAggregateInput
    _avg?: OrderAvgOrderByAggregateInput
    _max?: OrderMaxOrderByAggregateInput
    _min?: OrderMinOrderByAggregateInput
    _sum?: OrderSumOrderByAggregateInput
  }

  export type OrderScalarWhereWithAggregatesInput = {
    AND?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    OR?: OrderScalarWhereWithAggregatesInput[]
    NOT?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Order"> | number
    menuId?: IntWithAggregatesFilter<"Order"> | number
    billId?: IntWithAggregatesFilter<"Order"> | number
    quantity?: IntWithAggregatesFilter<"Order"> | number
    total?: IntWithAggregatesFilter<"Order"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Order"> | Date | string
  }

  export type BillWhereInput = {
    AND?: BillWhereInput | BillWhereInput[]
    OR?: BillWhereInput[]
    NOT?: BillWhereInput | BillWhereInput[]
    id?: IntFilter<"Bill"> | number
    total?: IntFilter<"Bill"> | number
    status?: StringFilter<"Bill"> | string
    approved?: BoolFilter<"Bill"> | boolean
    customerName?: StringFilter<"Bill"> | string
    createdAt?: DateTimeFilter<"Bill"> | Date | string
    userId?: IntFilter<"Bill"> | number
    warungId?: IntFilter<"Bill"> | number
    user?: XOR<UserRelationFilter, UserWhereInput>
    warung?: XOR<WarungRelationFilter, WarungWhereInput>
    orders?: OrderListRelationFilter
  }

  export type BillOrderByWithRelationInput = {
    id?: SortOrder
    total?: SortOrder
    status?: SortOrder
    approved?: SortOrder
    customerName?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    warungId?: SortOrder
    user?: UserOrderByWithRelationInput
    warung?: WarungOrderByWithRelationInput
    orders?: OrderOrderByRelationAggregateInput
  }

  export type BillWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BillWhereInput | BillWhereInput[]
    OR?: BillWhereInput[]
    NOT?: BillWhereInput | BillWhereInput[]
    total?: IntFilter<"Bill"> | number
    status?: StringFilter<"Bill"> | string
    approved?: BoolFilter<"Bill"> | boolean
    customerName?: StringFilter<"Bill"> | string
    createdAt?: DateTimeFilter<"Bill"> | Date | string
    userId?: IntFilter<"Bill"> | number
    warungId?: IntFilter<"Bill"> | number
    user?: XOR<UserRelationFilter, UserWhereInput>
    warung?: XOR<WarungRelationFilter, WarungWhereInput>
    orders?: OrderListRelationFilter
  }, "id">

  export type BillOrderByWithAggregationInput = {
    id?: SortOrder
    total?: SortOrder
    status?: SortOrder
    approved?: SortOrder
    customerName?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    warungId?: SortOrder
    _count?: BillCountOrderByAggregateInput
    _avg?: BillAvgOrderByAggregateInput
    _max?: BillMaxOrderByAggregateInput
    _min?: BillMinOrderByAggregateInput
    _sum?: BillSumOrderByAggregateInput
  }

  export type BillScalarWhereWithAggregatesInput = {
    AND?: BillScalarWhereWithAggregatesInput | BillScalarWhereWithAggregatesInput[]
    OR?: BillScalarWhereWithAggregatesInput[]
    NOT?: BillScalarWhereWithAggregatesInput | BillScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Bill"> | number
    total?: IntWithAggregatesFilter<"Bill"> | number
    status?: StringWithAggregatesFilter<"Bill"> | string
    approved?: BoolWithAggregatesFilter<"Bill"> | boolean
    customerName?: StringWithAggregatesFilter<"Bill"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Bill"> | Date | string
    userId?: IntWithAggregatesFilter<"Bill"> | number
    warungId?: IntWithAggregatesFilter<"Bill"> | number
  }

  export type UserCreateInput = {
    email: string
    username: string
    password: string
    role?: $Enums.Role
    warungs?: WarungCreateNestedManyWithoutUserInput
    warungEmployes?: WarungEmployeCreateNestedManyWithoutUserInput
    menu?: MenuCreateNestedManyWithoutUserInput
    bills?: BillCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    username: string
    password: string
    role?: $Enums.Role
    warungs?: WarungUncheckedCreateNestedManyWithoutUserInput
    warungEmployes?: WarungEmployeUncheckedCreateNestedManyWithoutUserInput
    menu?: MenuUncheckedCreateNestedManyWithoutUserInput
    bills?: BillUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    warungs?: WarungUpdateManyWithoutUserNestedInput
    warungEmployes?: WarungEmployeUpdateManyWithoutUserNestedInput
    menu?: MenuUpdateManyWithoutUserNestedInput
    bills?: BillUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    warungs?: WarungUncheckedUpdateManyWithoutUserNestedInput
    warungEmployes?: WarungEmployeUncheckedUpdateManyWithoutUserNestedInput
    menu?: MenuUncheckedUpdateManyWithoutUserNestedInput
    bills?: BillUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    username: string
    password: string
    role?: $Enums.Role
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type WarungCreateInput = {
    name: string
    location: string
    user: UserCreateNestedOneWithoutWarungsInput
    warungEmployes?: WarungEmployeCreateNestedManyWithoutWarungInput
    menu?: MenuCreateNestedManyWithoutWarungInput
    bills?: BillCreateNestedManyWithoutWarungInput
  }

  export type WarungUncheckedCreateInput = {
    id?: number
    name: string
    location: string
    userId: number
    warungEmployes?: WarungEmployeUncheckedCreateNestedManyWithoutWarungInput
    menu?: MenuUncheckedCreateNestedManyWithoutWarungInput
    bills?: BillUncheckedCreateNestedManyWithoutWarungInput
  }

  export type WarungUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutWarungsNestedInput
    warungEmployes?: WarungEmployeUpdateManyWithoutWarungNestedInput
    menu?: MenuUpdateManyWithoutWarungNestedInput
    bills?: BillUpdateManyWithoutWarungNestedInput
  }

  export type WarungUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    warungEmployes?: WarungEmployeUncheckedUpdateManyWithoutWarungNestedInput
    menu?: MenuUncheckedUpdateManyWithoutWarungNestedInput
    bills?: BillUncheckedUpdateManyWithoutWarungNestedInput
  }

  export type WarungCreateManyInput = {
    id?: number
    name: string
    location: string
    userId: number
  }

  export type WarungUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
  }

  export type WarungUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type WarungEmployeCreateInput = {
    warung: WarungCreateNestedOneWithoutWarungEmployesInput
    user: UserCreateNestedOneWithoutWarungEmployesInput
  }

  export type WarungEmployeUncheckedCreateInput = {
    id?: number
    warungId: number
    userId: number
  }

  export type WarungEmployeUpdateInput = {
    warung?: WarungUpdateOneRequiredWithoutWarungEmployesNestedInput
    user?: UserUpdateOneRequiredWithoutWarungEmployesNestedInput
  }

  export type WarungEmployeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    warungId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type WarungEmployeCreateManyInput = {
    id?: number
    warungId: number
    userId: number
  }

  export type WarungEmployeUpdateManyMutationInput = {

  }

  export type WarungEmployeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    warungId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type MenuCreateInput = {
    title: string
    price: number
    desc: string
    image: string
    available: boolean
    category: string
    warung: WarungCreateNestedOneWithoutMenuInput
    user: UserCreateNestedOneWithoutMenuInput
    orders?: OrderCreateNestedManyWithoutMenuInput
  }

  export type MenuUncheckedCreateInput = {
    id?: number
    title: string
    price: number
    desc: string
    image: string
    available: boolean
    category: string
    warungId: number
    userId: number
    orders?: OrderUncheckedCreateNestedManyWithoutMenuInput
  }

  export type MenuUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    desc?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    available?: BoolFieldUpdateOperationsInput | boolean
    category?: StringFieldUpdateOperationsInput | string
    warung?: WarungUpdateOneRequiredWithoutMenuNestedInput
    user?: UserUpdateOneRequiredWithoutMenuNestedInput
    orders?: OrderUpdateManyWithoutMenuNestedInput
  }

  export type MenuUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    desc?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    available?: BoolFieldUpdateOperationsInput | boolean
    category?: StringFieldUpdateOperationsInput | string
    warungId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    orders?: OrderUncheckedUpdateManyWithoutMenuNestedInput
  }

  export type MenuCreateManyInput = {
    id?: number
    title: string
    price: number
    desc: string
    image: string
    available: boolean
    category: string
    warungId: number
    userId: number
  }

  export type MenuUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    desc?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    available?: BoolFieldUpdateOperationsInput | boolean
    category?: StringFieldUpdateOperationsInput | string
  }

  export type MenuUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    desc?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    available?: BoolFieldUpdateOperationsInput | boolean
    category?: StringFieldUpdateOperationsInput | string
    warungId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type OrderCreateInput = {
    quantity: number
    total: number
    createdAt?: Date | string
    menu: MenuCreateNestedOneWithoutOrdersInput
    bill: BillCreateNestedOneWithoutOrdersInput
  }

  export type OrderUncheckedCreateInput = {
    id?: number
    menuId: number
    billId: number
    quantity: number
    total: number
    createdAt?: Date | string
  }

  export type OrderUpdateInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    menu?: MenuUpdateOneRequiredWithoutOrdersNestedInput
    bill?: BillUpdateOneRequiredWithoutOrdersNestedInput
  }

  export type OrderUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    menuId?: IntFieldUpdateOperationsInput | number
    billId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderCreateManyInput = {
    id?: number
    menuId: number
    billId: number
    quantity: number
    total: number
    createdAt?: Date | string
  }

  export type OrderUpdateManyMutationInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    menuId?: IntFieldUpdateOperationsInput | number
    billId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BillCreateInput = {
    total: number
    status: string
    approved: boolean
    customerName: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutBillsInput
    warung: WarungCreateNestedOneWithoutBillsInput
    orders?: OrderCreateNestedManyWithoutBillInput
  }

  export type BillUncheckedCreateInput = {
    id?: number
    total: number
    status: string
    approved: boolean
    customerName: string
    createdAt?: Date | string
    userId: number
    warungId: number
    orders?: OrderUncheckedCreateNestedManyWithoutBillInput
  }

  export type BillUpdateInput = {
    total?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    approved?: BoolFieldUpdateOperationsInput | boolean
    customerName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBillsNestedInput
    warung?: WarungUpdateOneRequiredWithoutBillsNestedInput
    orders?: OrderUpdateManyWithoutBillNestedInput
  }

  export type BillUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    approved?: BoolFieldUpdateOperationsInput | boolean
    customerName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    warungId?: IntFieldUpdateOperationsInput | number
    orders?: OrderUncheckedUpdateManyWithoutBillNestedInput
  }

  export type BillCreateManyInput = {
    id?: number
    total: number
    status: string
    approved: boolean
    customerName: string
    createdAt?: Date | string
    userId: number
    warungId: number
  }

  export type BillUpdateManyMutationInput = {
    total?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    approved?: BoolFieldUpdateOperationsInput | boolean
    customerName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BillUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    approved?: BoolFieldUpdateOperationsInput | boolean
    customerName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    warungId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type WarungListRelationFilter = {
    every?: WarungWhereInput
    some?: WarungWhereInput
    none?: WarungWhereInput
  }

  export type WarungEmployeListRelationFilter = {
    every?: WarungEmployeWhereInput
    some?: WarungEmployeWhereInput
    none?: WarungEmployeWhereInput
  }

  export type MenuListRelationFilter = {
    every?: MenuWhereInput
    some?: MenuWhereInput
    none?: MenuWhereInput
  }

  export type BillListRelationFilter = {
    every?: BillWhereInput
    some?: BillWhereInput
    none?: BillWhereInput
  }

  export type WarungOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WarungEmployeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MenuOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BillOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type WarungCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrder
    userId?: SortOrder
  }

  export type WarungAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type WarungMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrder
    userId?: SortOrder
  }

  export type WarungMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrder
    userId?: SortOrder
  }

  export type WarungSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type WarungRelationFilter = {
    is?: WarungWhereInput
    isNot?: WarungWhereInput
  }

  export type WarungEmployeCountOrderByAggregateInput = {
    id?: SortOrder
    warungId?: SortOrder
    userId?: SortOrder
  }

  export type WarungEmployeAvgOrderByAggregateInput = {
    id?: SortOrder
    warungId?: SortOrder
    userId?: SortOrder
  }

  export type WarungEmployeMaxOrderByAggregateInput = {
    id?: SortOrder
    warungId?: SortOrder
    userId?: SortOrder
  }

  export type WarungEmployeMinOrderByAggregateInput = {
    id?: SortOrder
    warungId?: SortOrder
    userId?: SortOrder
  }

  export type WarungEmployeSumOrderByAggregateInput = {
    id?: SortOrder
    warungId?: SortOrder
    userId?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type OrderListRelationFilter = {
    every?: OrderWhereInput
    some?: OrderWhereInput
    none?: OrderWhereInput
  }

  export type OrderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MenuCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    price?: SortOrder
    desc?: SortOrder
    image?: SortOrder
    available?: SortOrder
    category?: SortOrder
    warungId?: SortOrder
    userId?: SortOrder
  }

  export type MenuAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    warungId?: SortOrder
    userId?: SortOrder
  }

  export type MenuMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    price?: SortOrder
    desc?: SortOrder
    image?: SortOrder
    available?: SortOrder
    category?: SortOrder
    warungId?: SortOrder
    userId?: SortOrder
  }

  export type MenuMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    price?: SortOrder
    desc?: SortOrder
    image?: SortOrder
    available?: SortOrder
    category?: SortOrder
    warungId?: SortOrder
    userId?: SortOrder
  }

  export type MenuSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    warungId?: SortOrder
    userId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type MenuRelationFilter = {
    is?: MenuWhereInput
    isNot?: MenuWhereInput
  }

  export type BillRelationFilter = {
    is?: BillWhereInput
    isNot?: BillWhereInput
  }

  export type OrderCountOrderByAggregateInput = {
    id?: SortOrder
    menuId?: SortOrder
    billId?: SortOrder
    quantity?: SortOrder
    total?: SortOrder
    createdAt?: SortOrder
  }

  export type OrderAvgOrderByAggregateInput = {
    id?: SortOrder
    menuId?: SortOrder
    billId?: SortOrder
    quantity?: SortOrder
    total?: SortOrder
  }

  export type OrderMaxOrderByAggregateInput = {
    id?: SortOrder
    menuId?: SortOrder
    billId?: SortOrder
    quantity?: SortOrder
    total?: SortOrder
    createdAt?: SortOrder
  }

  export type OrderMinOrderByAggregateInput = {
    id?: SortOrder
    menuId?: SortOrder
    billId?: SortOrder
    quantity?: SortOrder
    total?: SortOrder
    createdAt?: SortOrder
  }

  export type OrderSumOrderByAggregateInput = {
    id?: SortOrder
    menuId?: SortOrder
    billId?: SortOrder
    quantity?: SortOrder
    total?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BillCountOrderByAggregateInput = {
    id?: SortOrder
    total?: SortOrder
    status?: SortOrder
    approved?: SortOrder
    customerName?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    warungId?: SortOrder
  }

  export type BillAvgOrderByAggregateInput = {
    id?: SortOrder
    total?: SortOrder
    userId?: SortOrder
    warungId?: SortOrder
  }

  export type BillMaxOrderByAggregateInput = {
    id?: SortOrder
    total?: SortOrder
    status?: SortOrder
    approved?: SortOrder
    customerName?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    warungId?: SortOrder
  }

  export type BillMinOrderByAggregateInput = {
    id?: SortOrder
    total?: SortOrder
    status?: SortOrder
    approved?: SortOrder
    customerName?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    warungId?: SortOrder
  }

  export type BillSumOrderByAggregateInput = {
    id?: SortOrder
    total?: SortOrder
    userId?: SortOrder
    warungId?: SortOrder
  }

  export type WarungCreateNestedManyWithoutUserInput = {
    create?: XOR<WarungCreateWithoutUserInput, WarungUncheckedCreateWithoutUserInput> | WarungCreateWithoutUserInput[] | WarungUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WarungCreateOrConnectWithoutUserInput | WarungCreateOrConnectWithoutUserInput[]
    createMany?: WarungCreateManyUserInputEnvelope
    connect?: WarungWhereUniqueInput | WarungWhereUniqueInput[]
  }

  export type WarungEmployeCreateNestedManyWithoutUserInput = {
    create?: XOR<WarungEmployeCreateWithoutUserInput, WarungEmployeUncheckedCreateWithoutUserInput> | WarungEmployeCreateWithoutUserInput[] | WarungEmployeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WarungEmployeCreateOrConnectWithoutUserInput | WarungEmployeCreateOrConnectWithoutUserInput[]
    createMany?: WarungEmployeCreateManyUserInputEnvelope
    connect?: WarungEmployeWhereUniqueInput | WarungEmployeWhereUniqueInput[]
  }

  export type MenuCreateNestedManyWithoutUserInput = {
    create?: XOR<MenuCreateWithoutUserInput, MenuUncheckedCreateWithoutUserInput> | MenuCreateWithoutUserInput[] | MenuUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MenuCreateOrConnectWithoutUserInput | MenuCreateOrConnectWithoutUserInput[]
    createMany?: MenuCreateManyUserInputEnvelope
    connect?: MenuWhereUniqueInput | MenuWhereUniqueInput[]
  }

  export type BillCreateNestedManyWithoutUserInput = {
    create?: XOR<BillCreateWithoutUserInput, BillUncheckedCreateWithoutUserInput> | BillCreateWithoutUserInput[] | BillUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BillCreateOrConnectWithoutUserInput | BillCreateOrConnectWithoutUserInput[]
    createMany?: BillCreateManyUserInputEnvelope
    connect?: BillWhereUniqueInput | BillWhereUniqueInput[]
  }

  export type WarungUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<WarungCreateWithoutUserInput, WarungUncheckedCreateWithoutUserInput> | WarungCreateWithoutUserInput[] | WarungUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WarungCreateOrConnectWithoutUserInput | WarungCreateOrConnectWithoutUserInput[]
    createMany?: WarungCreateManyUserInputEnvelope
    connect?: WarungWhereUniqueInput | WarungWhereUniqueInput[]
  }

  export type WarungEmployeUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<WarungEmployeCreateWithoutUserInput, WarungEmployeUncheckedCreateWithoutUserInput> | WarungEmployeCreateWithoutUserInput[] | WarungEmployeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WarungEmployeCreateOrConnectWithoutUserInput | WarungEmployeCreateOrConnectWithoutUserInput[]
    createMany?: WarungEmployeCreateManyUserInputEnvelope
    connect?: WarungEmployeWhereUniqueInput | WarungEmployeWhereUniqueInput[]
  }

  export type MenuUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<MenuCreateWithoutUserInput, MenuUncheckedCreateWithoutUserInput> | MenuCreateWithoutUserInput[] | MenuUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MenuCreateOrConnectWithoutUserInput | MenuCreateOrConnectWithoutUserInput[]
    createMany?: MenuCreateManyUserInputEnvelope
    connect?: MenuWhereUniqueInput | MenuWhereUniqueInput[]
  }

  export type BillUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<BillCreateWithoutUserInput, BillUncheckedCreateWithoutUserInput> | BillCreateWithoutUserInput[] | BillUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BillCreateOrConnectWithoutUserInput | BillCreateOrConnectWithoutUserInput[]
    createMany?: BillCreateManyUserInputEnvelope
    connect?: BillWhereUniqueInput | BillWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type WarungUpdateManyWithoutUserNestedInput = {
    create?: XOR<WarungCreateWithoutUserInput, WarungUncheckedCreateWithoutUserInput> | WarungCreateWithoutUserInput[] | WarungUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WarungCreateOrConnectWithoutUserInput | WarungCreateOrConnectWithoutUserInput[]
    upsert?: WarungUpsertWithWhereUniqueWithoutUserInput | WarungUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WarungCreateManyUserInputEnvelope
    set?: WarungWhereUniqueInput | WarungWhereUniqueInput[]
    disconnect?: WarungWhereUniqueInput | WarungWhereUniqueInput[]
    delete?: WarungWhereUniqueInput | WarungWhereUniqueInput[]
    connect?: WarungWhereUniqueInput | WarungWhereUniqueInput[]
    update?: WarungUpdateWithWhereUniqueWithoutUserInput | WarungUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WarungUpdateManyWithWhereWithoutUserInput | WarungUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WarungScalarWhereInput | WarungScalarWhereInput[]
  }

  export type WarungEmployeUpdateManyWithoutUserNestedInput = {
    create?: XOR<WarungEmployeCreateWithoutUserInput, WarungEmployeUncheckedCreateWithoutUserInput> | WarungEmployeCreateWithoutUserInput[] | WarungEmployeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WarungEmployeCreateOrConnectWithoutUserInput | WarungEmployeCreateOrConnectWithoutUserInput[]
    upsert?: WarungEmployeUpsertWithWhereUniqueWithoutUserInput | WarungEmployeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WarungEmployeCreateManyUserInputEnvelope
    set?: WarungEmployeWhereUniqueInput | WarungEmployeWhereUniqueInput[]
    disconnect?: WarungEmployeWhereUniqueInput | WarungEmployeWhereUniqueInput[]
    delete?: WarungEmployeWhereUniqueInput | WarungEmployeWhereUniqueInput[]
    connect?: WarungEmployeWhereUniqueInput | WarungEmployeWhereUniqueInput[]
    update?: WarungEmployeUpdateWithWhereUniqueWithoutUserInput | WarungEmployeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WarungEmployeUpdateManyWithWhereWithoutUserInput | WarungEmployeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WarungEmployeScalarWhereInput | WarungEmployeScalarWhereInput[]
  }

  export type MenuUpdateManyWithoutUserNestedInput = {
    create?: XOR<MenuCreateWithoutUserInput, MenuUncheckedCreateWithoutUserInput> | MenuCreateWithoutUserInput[] | MenuUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MenuCreateOrConnectWithoutUserInput | MenuCreateOrConnectWithoutUserInput[]
    upsert?: MenuUpsertWithWhereUniqueWithoutUserInput | MenuUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MenuCreateManyUserInputEnvelope
    set?: MenuWhereUniqueInput | MenuWhereUniqueInput[]
    disconnect?: MenuWhereUniqueInput | MenuWhereUniqueInput[]
    delete?: MenuWhereUniqueInput | MenuWhereUniqueInput[]
    connect?: MenuWhereUniqueInput | MenuWhereUniqueInput[]
    update?: MenuUpdateWithWhereUniqueWithoutUserInput | MenuUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MenuUpdateManyWithWhereWithoutUserInput | MenuUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MenuScalarWhereInput | MenuScalarWhereInput[]
  }

  export type BillUpdateManyWithoutUserNestedInput = {
    create?: XOR<BillCreateWithoutUserInput, BillUncheckedCreateWithoutUserInput> | BillCreateWithoutUserInput[] | BillUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BillCreateOrConnectWithoutUserInput | BillCreateOrConnectWithoutUserInput[]
    upsert?: BillUpsertWithWhereUniqueWithoutUserInput | BillUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BillCreateManyUserInputEnvelope
    set?: BillWhereUniqueInput | BillWhereUniqueInput[]
    disconnect?: BillWhereUniqueInput | BillWhereUniqueInput[]
    delete?: BillWhereUniqueInput | BillWhereUniqueInput[]
    connect?: BillWhereUniqueInput | BillWhereUniqueInput[]
    update?: BillUpdateWithWhereUniqueWithoutUserInput | BillUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BillUpdateManyWithWhereWithoutUserInput | BillUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BillScalarWhereInput | BillScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type WarungUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<WarungCreateWithoutUserInput, WarungUncheckedCreateWithoutUserInput> | WarungCreateWithoutUserInput[] | WarungUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WarungCreateOrConnectWithoutUserInput | WarungCreateOrConnectWithoutUserInput[]
    upsert?: WarungUpsertWithWhereUniqueWithoutUserInput | WarungUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WarungCreateManyUserInputEnvelope
    set?: WarungWhereUniqueInput | WarungWhereUniqueInput[]
    disconnect?: WarungWhereUniqueInput | WarungWhereUniqueInput[]
    delete?: WarungWhereUniqueInput | WarungWhereUniqueInput[]
    connect?: WarungWhereUniqueInput | WarungWhereUniqueInput[]
    update?: WarungUpdateWithWhereUniqueWithoutUserInput | WarungUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WarungUpdateManyWithWhereWithoutUserInput | WarungUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WarungScalarWhereInput | WarungScalarWhereInput[]
  }

  export type WarungEmployeUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<WarungEmployeCreateWithoutUserInput, WarungEmployeUncheckedCreateWithoutUserInput> | WarungEmployeCreateWithoutUserInput[] | WarungEmployeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WarungEmployeCreateOrConnectWithoutUserInput | WarungEmployeCreateOrConnectWithoutUserInput[]
    upsert?: WarungEmployeUpsertWithWhereUniqueWithoutUserInput | WarungEmployeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WarungEmployeCreateManyUserInputEnvelope
    set?: WarungEmployeWhereUniqueInput | WarungEmployeWhereUniqueInput[]
    disconnect?: WarungEmployeWhereUniqueInput | WarungEmployeWhereUniqueInput[]
    delete?: WarungEmployeWhereUniqueInput | WarungEmployeWhereUniqueInput[]
    connect?: WarungEmployeWhereUniqueInput | WarungEmployeWhereUniqueInput[]
    update?: WarungEmployeUpdateWithWhereUniqueWithoutUserInput | WarungEmployeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WarungEmployeUpdateManyWithWhereWithoutUserInput | WarungEmployeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WarungEmployeScalarWhereInput | WarungEmployeScalarWhereInput[]
  }

  export type MenuUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<MenuCreateWithoutUserInput, MenuUncheckedCreateWithoutUserInput> | MenuCreateWithoutUserInput[] | MenuUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MenuCreateOrConnectWithoutUserInput | MenuCreateOrConnectWithoutUserInput[]
    upsert?: MenuUpsertWithWhereUniqueWithoutUserInput | MenuUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MenuCreateManyUserInputEnvelope
    set?: MenuWhereUniqueInput | MenuWhereUniqueInput[]
    disconnect?: MenuWhereUniqueInput | MenuWhereUniqueInput[]
    delete?: MenuWhereUniqueInput | MenuWhereUniqueInput[]
    connect?: MenuWhereUniqueInput | MenuWhereUniqueInput[]
    update?: MenuUpdateWithWhereUniqueWithoutUserInput | MenuUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MenuUpdateManyWithWhereWithoutUserInput | MenuUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MenuScalarWhereInput | MenuScalarWhereInput[]
  }

  export type BillUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<BillCreateWithoutUserInput, BillUncheckedCreateWithoutUserInput> | BillCreateWithoutUserInput[] | BillUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BillCreateOrConnectWithoutUserInput | BillCreateOrConnectWithoutUserInput[]
    upsert?: BillUpsertWithWhereUniqueWithoutUserInput | BillUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BillCreateManyUserInputEnvelope
    set?: BillWhereUniqueInput | BillWhereUniqueInput[]
    disconnect?: BillWhereUniqueInput | BillWhereUniqueInput[]
    delete?: BillWhereUniqueInput | BillWhereUniqueInput[]
    connect?: BillWhereUniqueInput | BillWhereUniqueInput[]
    update?: BillUpdateWithWhereUniqueWithoutUserInput | BillUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BillUpdateManyWithWhereWithoutUserInput | BillUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BillScalarWhereInput | BillScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutWarungsInput = {
    create?: XOR<UserCreateWithoutWarungsInput, UserUncheckedCreateWithoutWarungsInput>
    connectOrCreate?: UserCreateOrConnectWithoutWarungsInput
    connect?: UserWhereUniqueInput
  }

  export type WarungEmployeCreateNestedManyWithoutWarungInput = {
    create?: XOR<WarungEmployeCreateWithoutWarungInput, WarungEmployeUncheckedCreateWithoutWarungInput> | WarungEmployeCreateWithoutWarungInput[] | WarungEmployeUncheckedCreateWithoutWarungInput[]
    connectOrCreate?: WarungEmployeCreateOrConnectWithoutWarungInput | WarungEmployeCreateOrConnectWithoutWarungInput[]
    createMany?: WarungEmployeCreateManyWarungInputEnvelope
    connect?: WarungEmployeWhereUniqueInput | WarungEmployeWhereUniqueInput[]
  }

  export type MenuCreateNestedManyWithoutWarungInput = {
    create?: XOR<MenuCreateWithoutWarungInput, MenuUncheckedCreateWithoutWarungInput> | MenuCreateWithoutWarungInput[] | MenuUncheckedCreateWithoutWarungInput[]
    connectOrCreate?: MenuCreateOrConnectWithoutWarungInput | MenuCreateOrConnectWithoutWarungInput[]
    createMany?: MenuCreateManyWarungInputEnvelope
    connect?: MenuWhereUniqueInput | MenuWhereUniqueInput[]
  }

  export type BillCreateNestedManyWithoutWarungInput = {
    create?: XOR<BillCreateWithoutWarungInput, BillUncheckedCreateWithoutWarungInput> | BillCreateWithoutWarungInput[] | BillUncheckedCreateWithoutWarungInput[]
    connectOrCreate?: BillCreateOrConnectWithoutWarungInput | BillCreateOrConnectWithoutWarungInput[]
    createMany?: BillCreateManyWarungInputEnvelope
    connect?: BillWhereUniqueInput | BillWhereUniqueInput[]
  }

  export type WarungEmployeUncheckedCreateNestedManyWithoutWarungInput = {
    create?: XOR<WarungEmployeCreateWithoutWarungInput, WarungEmployeUncheckedCreateWithoutWarungInput> | WarungEmployeCreateWithoutWarungInput[] | WarungEmployeUncheckedCreateWithoutWarungInput[]
    connectOrCreate?: WarungEmployeCreateOrConnectWithoutWarungInput | WarungEmployeCreateOrConnectWithoutWarungInput[]
    createMany?: WarungEmployeCreateManyWarungInputEnvelope
    connect?: WarungEmployeWhereUniqueInput | WarungEmployeWhereUniqueInput[]
  }

  export type MenuUncheckedCreateNestedManyWithoutWarungInput = {
    create?: XOR<MenuCreateWithoutWarungInput, MenuUncheckedCreateWithoutWarungInput> | MenuCreateWithoutWarungInput[] | MenuUncheckedCreateWithoutWarungInput[]
    connectOrCreate?: MenuCreateOrConnectWithoutWarungInput | MenuCreateOrConnectWithoutWarungInput[]
    createMany?: MenuCreateManyWarungInputEnvelope
    connect?: MenuWhereUniqueInput | MenuWhereUniqueInput[]
  }

  export type BillUncheckedCreateNestedManyWithoutWarungInput = {
    create?: XOR<BillCreateWithoutWarungInput, BillUncheckedCreateWithoutWarungInput> | BillCreateWithoutWarungInput[] | BillUncheckedCreateWithoutWarungInput[]
    connectOrCreate?: BillCreateOrConnectWithoutWarungInput | BillCreateOrConnectWithoutWarungInput[]
    createMany?: BillCreateManyWarungInputEnvelope
    connect?: BillWhereUniqueInput | BillWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutWarungsNestedInput = {
    create?: XOR<UserCreateWithoutWarungsInput, UserUncheckedCreateWithoutWarungsInput>
    connectOrCreate?: UserCreateOrConnectWithoutWarungsInput
    upsert?: UserUpsertWithoutWarungsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutWarungsInput, UserUpdateWithoutWarungsInput>, UserUncheckedUpdateWithoutWarungsInput>
  }

  export type WarungEmployeUpdateManyWithoutWarungNestedInput = {
    create?: XOR<WarungEmployeCreateWithoutWarungInput, WarungEmployeUncheckedCreateWithoutWarungInput> | WarungEmployeCreateWithoutWarungInput[] | WarungEmployeUncheckedCreateWithoutWarungInput[]
    connectOrCreate?: WarungEmployeCreateOrConnectWithoutWarungInput | WarungEmployeCreateOrConnectWithoutWarungInput[]
    upsert?: WarungEmployeUpsertWithWhereUniqueWithoutWarungInput | WarungEmployeUpsertWithWhereUniqueWithoutWarungInput[]
    createMany?: WarungEmployeCreateManyWarungInputEnvelope
    set?: WarungEmployeWhereUniqueInput | WarungEmployeWhereUniqueInput[]
    disconnect?: WarungEmployeWhereUniqueInput | WarungEmployeWhereUniqueInput[]
    delete?: WarungEmployeWhereUniqueInput | WarungEmployeWhereUniqueInput[]
    connect?: WarungEmployeWhereUniqueInput | WarungEmployeWhereUniqueInput[]
    update?: WarungEmployeUpdateWithWhereUniqueWithoutWarungInput | WarungEmployeUpdateWithWhereUniqueWithoutWarungInput[]
    updateMany?: WarungEmployeUpdateManyWithWhereWithoutWarungInput | WarungEmployeUpdateManyWithWhereWithoutWarungInput[]
    deleteMany?: WarungEmployeScalarWhereInput | WarungEmployeScalarWhereInput[]
  }

  export type MenuUpdateManyWithoutWarungNestedInput = {
    create?: XOR<MenuCreateWithoutWarungInput, MenuUncheckedCreateWithoutWarungInput> | MenuCreateWithoutWarungInput[] | MenuUncheckedCreateWithoutWarungInput[]
    connectOrCreate?: MenuCreateOrConnectWithoutWarungInput | MenuCreateOrConnectWithoutWarungInput[]
    upsert?: MenuUpsertWithWhereUniqueWithoutWarungInput | MenuUpsertWithWhereUniqueWithoutWarungInput[]
    createMany?: MenuCreateManyWarungInputEnvelope
    set?: MenuWhereUniqueInput | MenuWhereUniqueInput[]
    disconnect?: MenuWhereUniqueInput | MenuWhereUniqueInput[]
    delete?: MenuWhereUniqueInput | MenuWhereUniqueInput[]
    connect?: MenuWhereUniqueInput | MenuWhereUniqueInput[]
    update?: MenuUpdateWithWhereUniqueWithoutWarungInput | MenuUpdateWithWhereUniqueWithoutWarungInput[]
    updateMany?: MenuUpdateManyWithWhereWithoutWarungInput | MenuUpdateManyWithWhereWithoutWarungInput[]
    deleteMany?: MenuScalarWhereInput | MenuScalarWhereInput[]
  }

  export type BillUpdateManyWithoutWarungNestedInput = {
    create?: XOR<BillCreateWithoutWarungInput, BillUncheckedCreateWithoutWarungInput> | BillCreateWithoutWarungInput[] | BillUncheckedCreateWithoutWarungInput[]
    connectOrCreate?: BillCreateOrConnectWithoutWarungInput | BillCreateOrConnectWithoutWarungInput[]
    upsert?: BillUpsertWithWhereUniqueWithoutWarungInput | BillUpsertWithWhereUniqueWithoutWarungInput[]
    createMany?: BillCreateManyWarungInputEnvelope
    set?: BillWhereUniqueInput | BillWhereUniqueInput[]
    disconnect?: BillWhereUniqueInput | BillWhereUniqueInput[]
    delete?: BillWhereUniqueInput | BillWhereUniqueInput[]
    connect?: BillWhereUniqueInput | BillWhereUniqueInput[]
    update?: BillUpdateWithWhereUniqueWithoutWarungInput | BillUpdateWithWhereUniqueWithoutWarungInput[]
    updateMany?: BillUpdateManyWithWhereWithoutWarungInput | BillUpdateManyWithWhereWithoutWarungInput[]
    deleteMany?: BillScalarWhereInput | BillScalarWhereInput[]
  }

  export type WarungEmployeUncheckedUpdateManyWithoutWarungNestedInput = {
    create?: XOR<WarungEmployeCreateWithoutWarungInput, WarungEmployeUncheckedCreateWithoutWarungInput> | WarungEmployeCreateWithoutWarungInput[] | WarungEmployeUncheckedCreateWithoutWarungInput[]
    connectOrCreate?: WarungEmployeCreateOrConnectWithoutWarungInput | WarungEmployeCreateOrConnectWithoutWarungInput[]
    upsert?: WarungEmployeUpsertWithWhereUniqueWithoutWarungInput | WarungEmployeUpsertWithWhereUniqueWithoutWarungInput[]
    createMany?: WarungEmployeCreateManyWarungInputEnvelope
    set?: WarungEmployeWhereUniqueInput | WarungEmployeWhereUniqueInput[]
    disconnect?: WarungEmployeWhereUniqueInput | WarungEmployeWhereUniqueInput[]
    delete?: WarungEmployeWhereUniqueInput | WarungEmployeWhereUniqueInput[]
    connect?: WarungEmployeWhereUniqueInput | WarungEmployeWhereUniqueInput[]
    update?: WarungEmployeUpdateWithWhereUniqueWithoutWarungInput | WarungEmployeUpdateWithWhereUniqueWithoutWarungInput[]
    updateMany?: WarungEmployeUpdateManyWithWhereWithoutWarungInput | WarungEmployeUpdateManyWithWhereWithoutWarungInput[]
    deleteMany?: WarungEmployeScalarWhereInput | WarungEmployeScalarWhereInput[]
  }

  export type MenuUncheckedUpdateManyWithoutWarungNestedInput = {
    create?: XOR<MenuCreateWithoutWarungInput, MenuUncheckedCreateWithoutWarungInput> | MenuCreateWithoutWarungInput[] | MenuUncheckedCreateWithoutWarungInput[]
    connectOrCreate?: MenuCreateOrConnectWithoutWarungInput | MenuCreateOrConnectWithoutWarungInput[]
    upsert?: MenuUpsertWithWhereUniqueWithoutWarungInput | MenuUpsertWithWhereUniqueWithoutWarungInput[]
    createMany?: MenuCreateManyWarungInputEnvelope
    set?: MenuWhereUniqueInput | MenuWhereUniqueInput[]
    disconnect?: MenuWhereUniqueInput | MenuWhereUniqueInput[]
    delete?: MenuWhereUniqueInput | MenuWhereUniqueInput[]
    connect?: MenuWhereUniqueInput | MenuWhereUniqueInput[]
    update?: MenuUpdateWithWhereUniqueWithoutWarungInput | MenuUpdateWithWhereUniqueWithoutWarungInput[]
    updateMany?: MenuUpdateManyWithWhereWithoutWarungInput | MenuUpdateManyWithWhereWithoutWarungInput[]
    deleteMany?: MenuScalarWhereInput | MenuScalarWhereInput[]
  }

  export type BillUncheckedUpdateManyWithoutWarungNestedInput = {
    create?: XOR<BillCreateWithoutWarungInput, BillUncheckedCreateWithoutWarungInput> | BillCreateWithoutWarungInput[] | BillUncheckedCreateWithoutWarungInput[]
    connectOrCreate?: BillCreateOrConnectWithoutWarungInput | BillCreateOrConnectWithoutWarungInput[]
    upsert?: BillUpsertWithWhereUniqueWithoutWarungInput | BillUpsertWithWhereUniqueWithoutWarungInput[]
    createMany?: BillCreateManyWarungInputEnvelope
    set?: BillWhereUniqueInput | BillWhereUniqueInput[]
    disconnect?: BillWhereUniqueInput | BillWhereUniqueInput[]
    delete?: BillWhereUniqueInput | BillWhereUniqueInput[]
    connect?: BillWhereUniqueInput | BillWhereUniqueInput[]
    update?: BillUpdateWithWhereUniqueWithoutWarungInput | BillUpdateWithWhereUniqueWithoutWarungInput[]
    updateMany?: BillUpdateManyWithWhereWithoutWarungInput | BillUpdateManyWithWhereWithoutWarungInput[]
    deleteMany?: BillScalarWhereInput | BillScalarWhereInput[]
  }

  export type WarungCreateNestedOneWithoutWarungEmployesInput = {
    create?: XOR<WarungCreateWithoutWarungEmployesInput, WarungUncheckedCreateWithoutWarungEmployesInput>
    connectOrCreate?: WarungCreateOrConnectWithoutWarungEmployesInput
    connect?: WarungWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutWarungEmployesInput = {
    create?: XOR<UserCreateWithoutWarungEmployesInput, UserUncheckedCreateWithoutWarungEmployesInput>
    connectOrCreate?: UserCreateOrConnectWithoutWarungEmployesInput
    connect?: UserWhereUniqueInput
  }

  export type WarungUpdateOneRequiredWithoutWarungEmployesNestedInput = {
    create?: XOR<WarungCreateWithoutWarungEmployesInput, WarungUncheckedCreateWithoutWarungEmployesInput>
    connectOrCreate?: WarungCreateOrConnectWithoutWarungEmployesInput
    upsert?: WarungUpsertWithoutWarungEmployesInput
    connect?: WarungWhereUniqueInput
    update?: XOR<XOR<WarungUpdateToOneWithWhereWithoutWarungEmployesInput, WarungUpdateWithoutWarungEmployesInput>, WarungUncheckedUpdateWithoutWarungEmployesInput>
  }

  export type UserUpdateOneRequiredWithoutWarungEmployesNestedInput = {
    create?: XOR<UserCreateWithoutWarungEmployesInput, UserUncheckedCreateWithoutWarungEmployesInput>
    connectOrCreate?: UserCreateOrConnectWithoutWarungEmployesInput
    upsert?: UserUpsertWithoutWarungEmployesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutWarungEmployesInput, UserUpdateWithoutWarungEmployesInput>, UserUncheckedUpdateWithoutWarungEmployesInput>
  }

  export type WarungCreateNestedOneWithoutMenuInput = {
    create?: XOR<WarungCreateWithoutMenuInput, WarungUncheckedCreateWithoutMenuInput>
    connectOrCreate?: WarungCreateOrConnectWithoutMenuInput
    connect?: WarungWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutMenuInput = {
    create?: XOR<UserCreateWithoutMenuInput, UserUncheckedCreateWithoutMenuInput>
    connectOrCreate?: UserCreateOrConnectWithoutMenuInput
    connect?: UserWhereUniqueInput
  }

  export type OrderCreateNestedManyWithoutMenuInput = {
    create?: XOR<OrderCreateWithoutMenuInput, OrderUncheckedCreateWithoutMenuInput> | OrderCreateWithoutMenuInput[] | OrderUncheckedCreateWithoutMenuInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutMenuInput | OrderCreateOrConnectWithoutMenuInput[]
    createMany?: OrderCreateManyMenuInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutMenuInput = {
    create?: XOR<OrderCreateWithoutMenuInput, OrderUncheckedCreateWithoutMenuInput> | OrderCreateWithoutMenuInput[] | OrderUncheckedCreateWithoutMenuInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutMenuInput | OrderCreateOrConnectWithoutMenuInput[]
    createMany?: OrderCreateManyMenuInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type WarungUpdateOneRequiredWithoutMenuNestedInput = {
    create?: XOR<WarungCreateWithoutMenuInput, WarungUncheckedCreateWithoutMenuInput>
    connectOrCreate?: WarungCreateOrConnectWithoutMenuInput
    upsert?: WarungUpsertWithoutMenuInput
    connect?: WarungWhereUniqueInput
    update?: XOR<XOR<WarungUpdateToOneWithWhereWithoutMenuInput, WarungUpdateWithoutMenuInput>, WarungUncheckedUpdateWithoutMenuInput>
  }

  export type UserUpdateOneRequiredWithoutMenuNestedInput = {
    create?: XOR<UserCreateWithoutMenuInput, UserUncheckedCreateWithoutMenuInput>
    connectOrCreate?: UserCreateOrConnectWithoutMenuInput
    upsert?: UserUpsertWithoutMenuInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMenuInput, UserUpdateWithoutMenuInput>, UserUncheckedUpdateWithoutMenuInput>
  }

  export type OrderUpdateManyWithoutMenuNestedInput = {
    create?: XOR<OrderCreateWithoutMenuInput, OrderUncheckedCreateWithoutMenuInput> | OrderCreateWithoutMenuInput[] | OrderUncheckedCreateWithoutMenuInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutMenuInput | OrderCreateOrConnectWithoutMenuInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutMenuInput | OrderUpsertWithWhereUniqueWithoutMenuInput[]
    createMany?: OrderCreateManyMenuInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutMenuInput | OrderUpdateWithWhereUniqueWithoutMenuInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutMenuInput | OrderUpdateManyWithWhereWithoutMenuInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type OrderUncheckedUpdateManyWithoutMenuNestedInput = {
    create?: XOR<OrderCreateWithoutMenuInput, OrderUncheckedCreateWithoutMenuInput> | OrderCreateWithoutMenuInput[] | OrderUncheckedCreateWithoutMenuInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutMenuInput | OrderCreateOrConnectWithoutMenuInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutMenuInput | OrderUpsertWithWhereUniqueWithoutMenuInput[]
    createMany?: OrderCreateManyMenuInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutMenuInput | OrderUpdateWithWhereUniqueWithoutMenuInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutMenuInput | OrderUpdateManyWithWhereWithoutMenuInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type MenuCreateNestedOneWithoutOrdersInput = {
    create?: XOR<MenuCreateWithoutOrdersInput, MenuUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: MenuCreateOrConnectWithoutOrdersInput
    connect?: MenuWhereUniqueInput
  }

  export type BillCreateNestedOneWithoutOrdersInput = {
    create?: XOR<BillCreateWithoutOrdersInput, BillUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: BillCreateOrConnectWithoutOrdersInput
    connect?: BillWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type MenuUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<MenuCreateWithoutOrdersInput, MenuUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: MenuCreateOrConnectWithoutOrdersInput
    upsert?: MenuUpsertWithoutOrdersInput
    connect?: MenuWhereUniqueInput
    update?: XOR<XOR<MenuUpdateToOneWithWhereWithoutOrdersInput, MenuUpdateWithoutOrdersInput>, MenuUncheckedUpdateWithoutOrdersInput>
  }

  export type BillUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<BillCreateWithoutOrdersInput, BillUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: BillCreateOrConnectWithoutOrdersInput
    upsert?: BillUpsertWithoutOrdersInput
    connect?: BillWhereUniqueInput
    update?: XOR<XOR<BillUpdateToOneWithWhereWithoutOrdersInput, BillUpdateWithoutOrdersInput>, BillUncheckedUpdateWithoutOrdersInput>
  }

  export type UserCreateNestedOneWithoutBillsInput = {
    create?: XOR<UserCreateWithoutBillsInput, UserUncheckedCreateWithoutBillsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBillsInput
    connect?: UserWhereUniqueInput
  }

  export type WarungCreateNestedOneWithoutBillsInput = {
    create?: XOR<WarungCreateWithoutBillsInput, WarungUncheckedCreateWithoutBillsInput>
    connectOrCreate?: WarungCreateOrConnectWithoutBillsInput
    connect?: WarungWhereUniqueInput
  }

  export type OrderCreateNestedManyWithoutBillInput = {
    create?: XOR<OrderCreateWithoutBillInput, OrderUncheckedCreateWithoutBillInput> | OrderCreateWithoutBillInput[] | OrderUncheckedCreateWithoutBillInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutBillInput | OrderCreateOrConnectWithoutBillInput[]
    createMany?: OrderCreateManyBillInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutBillInput = {
    create?: XOR<OrderCreateWithoutBillInput, OrderUncheckedCreateWithoutBillInput> | OrderCreateWithoutBillInput[] | OrderUncheckedCreateWithoutBillInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutBillInput | OrderCreateOrConnectWithoutBillInput[]
    createMany?: OrderCreateManyBillInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutBillsNestedInput = {
    create?: XOR<UserCreateWithoutBillsInput, UserUncheckedCreateWithoutBillsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBillsInput
    upsert?: UserUpsertWithoutBillsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBillsInput, UserUpdateWithoutBillsInput>, UserUncheckedUpdateWithoutBillsInput>
  }

  export type WarungUpdateOneRequiredWithoutBillsNestedInput = {
    create?: XOR<WarungCreateWithoutBillsInput, WarungUncheckedCreateWithoutBillsInput>
    connectOrCreate?: WarungCreateOrConnectWithoutBillsInput
    upsert?: WarungUpsertWithoutBillsInput
    connect?: WarungWhereUniqueInput
    update?: XOR<XOR<WarungUpdateToOneWithWhereWithoutBillsInput, WarungUpdateWithoutBillsInput>, WarungUncheckedUpdateWithoutBillsInput>
  }

  export type OrderUpdateManyWithoutBillNestedInput = {
    create?: XOR<OrderCreateWithoutBillInput, OrderUncheckedCreateWithoutBillInput> | OrderCreateWithoutBillInput[] | OrderUncheckedCreateWithoutBillInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutBillInput | OrderCreateOrConnectWithoutBillInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutBillInput | OrderUpsertWithWhereUniqueWithoutBillInput[]
    createMany?: OrderCreateManyBillInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutBillInput | OrderUpdateWithWhereUniqueWithoutBillInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutBillInput | OrderUpdateManyWithWhereWithoutBillInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type OrderUncheckedUpdateManyWithoutBillNestedInput = {
    create?: XOR<OrderCreateWithoutBillInput, OrderUncheckedCreateWithoutBillInput> | OrderCreateWithoutBillInput[] | OrderUncheckedCreateWithoutBillInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutBillInput | OrderCreateOrConnectWithoutBillInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutBillInput | OrderUpsertWithWhereUniqueWithoutBillInput[]
    createMany?: OrderCreateManyBillInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutBillInput | OrderUpdateWithWhereUniqueWithoutBillInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutBillInput | OrderUpdateManyWithWhereWithoutBillInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type WarungCreateWithoutUserInput = {
    name: string
    location: string
    warungEmployes?: WarungEmployeCreateNestedManyWithoutWarungInput
    menu?: MenuCreateNestedManyWithoutWarungInput
    bills?: BillCreateNestedManyWithoutWarungInput
  }

  export type WarungUncheckedCreateWithoutUserInput = {
    id?: number
    name: string
    location: string
    warungEmployes?: WarungEmployeUncheckedCreateNestedManyWithoutWarungInput
    menu?: MenuUncheckedCreateNestedManyWithoutWarungInput
    bills?: BillUncheckedCreateNestedManyWithoutWarungInput
  }

  export type WarungCreateOrConnectWithoutUserInput = {
    where: WarungWhereUniqueInput
    create: XOR<WarungCreateWithoutUserInput, WarungUncheckedCreateWithoutUserInput>
  }

  export type WarungCreateManyUserInputEnvelope = {
    data: WarungCreateManyUserInput | WarungCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type WarungEmployeCreateWithoutUserInput = {
    warung: WarungCreateNestedOneWithoutWarungEmployesInput
  }

  export type WarungEmployeUncheckedCreateWithoutUserInput = {
    id?: number
    warungId: number
  }

  export type WarungEmployeCreateOrConnectWithoutUserInput = {
    where: WarungEmployeWhereUniqueInput
    create: XOR<WarungEmployeCreateWithoutUserInput, WarungEmployeUncheckedCreateWithoutUserInput>
  }

  export type WarungEmployeCreateManyUserInputEnvelope = {
    data: WarungEmployeCreateManyUserInput | WarungEmployeCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type MenuCreateWithoutUserInput = {
    title: string
    price: number
    desc: string
    image: string
    available: boolean
    category: string
    warung: WarungCreateNestedOneWithoutMenuInput
    orders?: OrderCreateNestedManyWithoutMenuInput
  }

  export type MenuUncheckedCreateWithoutUserInput = {
    id?: number
    title: string
    price: number
    desc: string
    image: string
    available: boolean
    category: string
    warungId: number
    orders?: OrderUncheckedCreateNestedManyWithoutMenuInput
  }

  export type MenuCreateOrConnectWithoutUserInput = {
    where: MenuWhereUniqueInput
    create: XOR<MenuCreateWithoutUserInput, MenuUncheckedCreateWithoutUserInput>
  }

  export type MenuCreateManyUserInputEnvelope = {
    data: MenuCreateManyUserInput | MenuCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type BillCreateWithoutUserInput = {
    total: number
    status: string
    approved: boolean
    customerName: string
    createdAt?: Date | string
    warung: WarungCreateNestedOneWithoutBillsInput
    orders?: OrderCreateNestedManyWithoutBillInput
  }

  export type BillUncheckedCreateWithoutUserInput = {
    id?: number
    total: number
    status: string
    approved: boolean
    customerName: string
    createdAt?: Date | string
    warungId: number
    orders?: OrderUncheckedCreateNestedManyWithoutBillInput
  }

  export type BillCreateOrConnectWithoutUserInput = {
    where: BillWhereUniqueInput
    create: XOR<BillCreateWithoutUserInput, BillUncheckedCreateWithoutUserInput>
  }

  export type BillCreateManyUserInputEnvelope = {
    data: BillCreateManyUserInput | BillCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type WarungUpsertWithWhereUniqueWithoutUserInput = {
    where: WarungWhereUniqueInput
    update: XOR<WarungUpdateWithoutUserInput, WarungUncheckedUpdateWithoutUserInput>
    create: XOR<WarungCreateWithoutUserInput, WarungUncheckedCreateWithoutUserInput>
  }

  export type WarungUpdateWithWhereUniqueWithoutUserInput = {
    where: WarungWhereUniqueInput
    data: XOR<WarungUpdateWithoutUserInput, WarungUncheckedUpdateWithoutUserInput>
  }

  export type WarungUpdateManyWithWhereWithoutUserInput = {
    where: WarungScalarWhereInput
    data: XOR<WarungUpdateManyMutationInput, WarungUncheckedUpdateManyWithoutUserInput>
  }

  export type WarungScalarWhereInput = {
    AND?: WarungScalarWhereInput | WarungScalarWhereInput[]
    OR?: WarungScalarWhereInput[]
    NOT?: WarungScalarWhereInput | WarungScalarWhereInput[]
    id?: IntFilter<"Warung"> | number
    name?: StringFilter<"Warung"> | string
    location?: StringFilter<"Warung"> | string
    userId?: IntFilter<"Warung"> | number
  }

  export type WarungEmployeUpsertWithWhereUniqueWithoutUserInput = {
    where: WarungEmployeWhereUniqueInput
    update: XOR<WarungEmployeUpdateWithoutUserInput, WarungEmployeUncheckedUpdateWithoutUserInput>
    create: XOR<WarungEmployeCreateWithoutUserInput, WarungEmployeUncheckedCreateWithoutUserInput>
  }

  export type WarungEmployeUpdateWithWhereUniqueWithoutUserInput = {
    where: WarungEmployeWhereUniqueInput
    data: XOR<WarungEmployeUpdateWithoutUserInput, WarungEmployeUncheckedUpdateWithoutUserInput>
  }

  export type WarungEmployeUpdateManyWithWhereWithoutUserInput = {
    where: WarungEmployeScalarWhereInput
    data: XOR<WarungEmployeUpdateManyMutationInput, WarungEmployeUncheckedUpdateManyWithoutUserInput>
  }

  export type WarungEmployeScalarWhereInput = {
    AND?: WarungEmployeScalarWhereInput | WarungEmployeScalarWhereInput[]
    OR?: WarungEmployeScalarWhereInput[]
    NOT?: WarungEmployeScalarWhereInput | WarungEmployeScalarWhereInput[]
    id?: IntFilter<"WarungEmploye"> | number
    warungId?: IntFilter<"WarungEmploye"> | number
    userId?: IntFilter<"WarungEmploye"> | number
  }

  export type MenuUpsertWithWhereUniqueWithoutUserInput = {
    where: MenuWhereUniqueInput
    update: XOR<MenuUpdateWithoutUserInput, MenuUncheckedUpdateWithoutUserInput>
    create: XOR<MenuCreateWithoutUserInput, MenuUncheckedCreateWithoutUserInput>
  }

  export type MenuUpdateWithWhereUniqueWithoutUserInput = {
    where: MenuWhereUniqueInput
    data: XOR<MenuUpdateWithoutUserInput, MenuUncheckedUpdateWithoutUserInput>
  }

  export type MenuUpdateManyWithWhereWithoutUserInput = {
    where: MenuScalarWhereInput
    data: XOR<MenuUpdateManyMutationInput, MenuUncheckedUpdateManyWithoutUserInput>
  }

  export type MenuScalarWhereInput = {
    AND?: MenuScalarWhereInput | MenuScalarWhereInput[]
    OR?: MenuScalarWhereInput[]
    NOT?: MenuScalarWhereInput | MenuScalarWhereInput[]
    id?: IntFilter<"Menu"> | number
    title?: StringFilter<"Menu"> | string
    price?: IntFilter<"Menu"> | number
    desc?: StringFilter<"Menu"> | string
    image?: StringFilter<"Menu"> | string
    available?: BoolFilter<"Menu"> | boolean
    category?: StringFilter<"Menu"> | string
    warungId?: IntFilter<"Menu"> | number
    userId?: IntFilter<"Menu"> | number
  }

  export type BillUpsertWithWhereUniqueWithoutUserInput = {
    where: BillWhereUniqueInput
    update: XOR<BillUpdateWithoutUserInput, BillUncheckedUpdateWithoutUserInput>
    create: XOR<BillCreateWithoutUserInput, BillUncheckedCreateWithoutUserInput>
  }

  export type BillUpdateWithWhereUniqueWithoutUserInput = {
    where: BillWhereUniqueInput
    data: XOR<BillUpdateWithoutUserInput, BillUncheckedUpdateWithoutUserInput>
  }

  export type BillUpdateManyWithWhereWithoutUserInput = {
    where: BillScalarWhereInput
    data: XOR<BillUpdateManyMutationInput, BillUncheckedUpdateManyWithoutUserInput>
  }

  export type BillScalarWhereInput = {
    AND?: BillScalarWhereInput | BillScalarWhereInput[]
    OR?: BillScalarWhereInput[]
    NOT?: BillScalarWhereInput | BillScalarWhereInput[]
    id?: IntFilter<"Bill"> | number
    total?: IntFilter<"Bill"> | number
    status?: StringFilter<"Bill"> | string
    approved?: BoolFilter<"Bill"> | boolean
    customerName?: StringFilter<"Bill"> | string
    createdAt?: DateTimeFilter<"Bill"> | Date | string
    userId?: IntFilter<"Bill"> | number
    warungId?: IntFilter<"Bill"> | number
  }

  export type UserCreateWithoutWarungsInput = {
    email: string
    username: string
    password: string
    role?: $Enums.Role
    warungEmployes?: WarungEmployeCreateNestedManyWithoutUserInput
    menu?: MenuCreateNestedManyWithoutUserInput
    bills?: BillCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutWarungsInput = {
    id?: number
    email: string
    username: string
    password: string
    role?: $Enums.Role
    warungEmployes?: WarungEmployeUncheckedCreateNestedManyWithoutUserInput
    menu?: MenuUncheckedCreateNestedManyWithoutUserInput
    bills?: BillUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutWarungsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWarungsInput, UserUncheckedCreateWithoutWarungsInput>
  }

  export type WarungEmployeCreateWithoutWarungInput = {
    user: UserCreateNestedOneWithoutWarungEmployesInput
  }

  export type WarungEmployeUncheckedCreateWithoutWarungInput = {
    id?: number
    userId: number
  }

  export type WarungEmployeCreateOrConnectWithoutWarungInput = {
    where: WarungEmployeWhereUniqueInput
    create: XOR<WarungEmployeCreateWithoutWarungInput, WarungEmployeUncheckedCreateWithoutWarungInput>
  }

  export type WarungEmployeCreateManyWarungInputEnvelope = {
    data: WarungEmployeCreateManyWarungInput | WarungEmployeCreateManyWarungInput[]
    skipDuplicates?: boolean
  }

  export type MenuCreateWithoutWarungInput = {
    title: string
    price: number
    desc: string
    image: string
    available: boolean
    category: string
    user: UserCreateNestedOneWithoutMenuInput
    orders?: OrderCreateNestedManyWithoutMenuInput
  }

  export type MenuUncheckedCreateWithoutWarungInput = {
    id?: number
    title: string
    price: number
    desc: string
    image: string
    available: boolean
    category: string
    userId: number
    orders?: OrderUncheckedCreateNestedManyWithoutMenuInput
  }

  export type MenuCreateOrConnectWithoutWarungInput = {
    where: MenuWhereUniqueInput
    create: XOR<MenuCreateWithoutWarungInput, MenuUncheckedCreateWithoutWarungInput>
  }

  export type MenuCreateManyWarungInputEnvelope = {
    data: MenuCreateManyWarungInput | MenuCreateManyWarungInput[]
    skipDuplicates?: boolean
  }

  export type BillCreateWithoutWarungInput = {
    total: number
    status: string
    approved: boolean
    customerName: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutBillsInput
    orders?: OrderCreateNestedManyWithoutBillInput
  }

  export type BillUncheckedCreateWithoutWarungInput = {
    id?: number
    total: number
    status: string
    approved: boolean
    customerName: string
    createdAt?: Date | string
    userId: number
    orders?: OrderUncheckedCreateNestedManyWithoutBillInput
  }

  export type BillCreateOrConnectWithoutWarungInput = {
    where: BillWhereUniqueInput
    create: XOR<BillCreateWithoutWarungInput, BillUncheckedCreateWithoutWarungInput>
  }

  export type BillCreateManyWarungInputEnvelope = {
    data: BillCreateManyWarungInput | BillCreateManyWarungInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutWarungsInput = {
    update: XOR<UserUpdateWithoutWarungsInput, UserUncheckedUpdateWithoutWarungsInput>
    create: XOR<UserCreateWithoutWarungsInput, UserUncheckedCreateWithoutWarungsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutWarungsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutWarungsInput, UserUncheckedUpdateWithoutWarungsInput>
  }

  export type UserUpdateWithoutWarungsInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    warungEmployes?: WarungEmployeUpdateManyWithoutUserNestedInput
    menu?: MenuUpdateManyWithoutUserNestedInput
    bills?: BillUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutWarungsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    warungEmployes?: WarungEmployeUncheckedUpdateManyWithoutUserNestedInput
    menu?: MenuUncheckedUpdateManyWithoutUserNestedInput
    bills?: BillUncheckedUpdateManyWithoutUserNestedInput
  }

  export type WarungEmployeUpsertWithWhereUniqueWithoutWarungInput = {
    where: WarungEmployeWhereUniqueInput
    update: XOR<WarungEmployeUpdateWithoutWarungInput, WarungEmployeUncheckedUpdateWithoutWarungInput>
    create: XOR<WarungEmployeCreateWithoutWarungInput, WarungEmployeUncheckedCreateWithoutWarungInput>
  }

  export type WarungEmployeUpdateWithWhereUniqueWithoutWarungInput = {
    where: WarungEmployeWhereUniqueInput
    data: XOR<WarungEmployeUpdateWithoutWarungInput, WarungEmployeUncheckedUpdateWithoutWarungInput>
  }

  export type WarungEmployeUpdateManyWithWhereWithoutWarungInput = {
    where: WarungEmployeScalarWhereInput
    data: XOR<WarungEmployeUpdateManyMutationInput, WarungEmployeUncheckedUpdateManyWithoutWarungInput>
  }

  export type MenuUpsertWithWhereUniqueWithoutWarungInput = {
    where: MenuWhereUniqueInput
    update: XOR<MenuUpdateWithoutWarungInput, MenuUncheckedUpdateWithoutWarungInput>
    create: XOR<MenuCreateWithoutWarungInput, MenuUncheckedCreateWithoutWarungInput>
  }

  export type MenuUpdateWithWhereUniqueWithoutWarungInput = {
    where: MenuWhereUniqueInput
    data: XOR<MenuUpdateWithoutWarungInput, MenuUncheckedUpdateWithoutWarungInput>
  }

  export type MenuUpdateManyWithWhereWithoutWarungInput = {
    where: MenuScalarWhereInput
    data: XOR<MenuUpdateManyMutationInput, MenuUncheckedUpdateManyWithoutWarungInput>
  }

  export type BillUpsertWithWhereUniqueWithoutWarungInput = {
    where: BillWhereUniqueInput
    update: XOR<BillUpdateWithoutWarungInput, BillUncheckedUpdateWithoutWarungInput>
    create: XOR<BillCreateWithoutWarungInput, BillUncheckedCreateWithoutWarungInput>
  }

  export type BillUpdateWithWhereUniqueWithoutWarungInput = {
    where: BillWhereUniqueInput
    data: XOR<BillUpdateWithoutWarungInput, BillUncheckedUpdateWithoutWarungInput>
  }

  export type BillUpdateManyWithWhereWithoutWarungInput = {
    where: BillScalarWhereInput
    data: XOR<BillUpdateManyMutationInput, BillUncheckedUpdateManyWithoutWarungInput>
  }

  export type WarungCreateWithoutWarungEmployesInput = {
    name: string
    location: string
    user: UserCreateNestedOneWithoutWarungsInput
    menu?: MenuCreateNestedManyWithoutWarungInput
    bills?: BillCreateNestedManyWithoutWarungInput
  }

  export type WarungUncheckedCreateWithoutWarungEmployesInput = {
    id?: number
    name: string
    location: string
    userId: number
    menu?: MenuUncheckedCreateNestedManyWithoutWarungInput
    bills?: BillUncheckedCreateNestedManyWithoutWarungInput
  }

  export type WarungCreateOrConnectWithoutWarungEmployesInput = {
    where: WarungWhereUniqueInput
    create: XOR<WarungCreateWithoutWarungEmployesInput, WarungUncheckedCreateWithoutWarungEmployesInput>
  }

  export type UserCreateWithoutWarungEmployesInput = {
    email: string
    username: string
    password: string
    role?: $Enums.Role
    warungs?: WarungCreateNestedManyWithoutUserInput
    menu?: MenuCreateNestedManyWithoutUserInput
    bills?: BillCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutWarungEmployesInput = {
    id?: number
    email: string
    username: string
    password: string
    role?: $Enums.Role
    warungs?: WarungUncheckedCreateNestedManyWithoutUserInput
    menu?: MenuUncheckedCreateNestedManyWithoutUserInput
    bills?: BillUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutWarungEmployesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWarungEmployesInput, UserUncheckedCreateWithoutWarungEmployesInput>
  }

  export type WarungUpsertWithoutWarungEmployesInput = {
    update: XOR<WarungUpdateWithoutWarungEmployesInput, WarungUncheckedUpdateWithoutWarungEmployesInput>
    create: XOR<WarungCreateWithoutWarungEmployesInput, WarungUncheckedCreateWithoutWarungEmployesInput>
    where?: WarungWhereInput
  }

  export type WarungUpdateToOneWithWhereWithoutWarungEmployesInput = {
    where?: WarungWhereInput
    data: XOR<WarungUpdateWithoutWarungEmployesInput, WarungUncheckedUpdateWithoutWarungEmployesInput>
  }

  export type WarungUpdateWithoutWarungEmployesInput = {
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutWarungsNestedInput
    menu?: MenuUpdateManyWithoutWarungNestedInput
    bills?: BillUpdateManyWithoutWarungNestedInput
  }

  export type WarungUncheckedUpdateWithoutWarungEmployesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    menu?: MenuUncheckedUpdateManyWithoutWarungNestedInput
    bills?: BillUncheckedUpdateManyWithoutWarungNestedInput
  }

  export type UserUpsertWithoutWarungEmployesInput = {
    update: XOR<UserUpdateWithoutWarungEmployesInput, UserUncheckedUpdateWithoutWarungEmployesInput>
    create: XOR<UserCreateWithoutWarungEmployesInput, UserUncheckedCreateWithoutWarungEmployesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutWarungEmployesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutWarungEmployesInput, UserUncheckedUpdateWithoutWarungEmployesInput>
  }

  export type UserUpdateWithoutWarungEmployesInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    warungs?: WarungUpdateManyWithoutUserNestedInput
    menu?: MenuUpdateManyWithoutUserNestedInput
    bills?: BillUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutWarungEmployesInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    warungs?: WarungUncheckedUpdateManyWithoutUserNestedInput
    menu?: MenuUncheckedUpdateManyWithoutUserNestedInput
    bills?: BillUncheckedUpdateManyWithoutUserNestedInput
  }

  export type WarungCreateWithoutMenuInput = {
    name: string
    location: string
    user: UserCreateNestedOneWithoutWarungsInput
    warungEmployes?: WarungEmployeCreateNestedManyWithoutWarungInput
    bills?: BillCreateNestedManyWithoutWarungInput
  }

  export type WarungUncheckedCreateWithoutMenuInput = {
    id?: number
    name: string
    location: string
    userId: number
    warungEmployes?: WarungEmployeUncheckedCreateNestedManyWithoutWarungInput
    bills?: BillUncheckedCreateNestedManyWithoutWarungInput
  }

  export type WarungCreateOrConnectWithoutMenuInput = {
    where: WarungWhereUniqueInput
    create: XOR<WarungCreateWithoutMenuInput, WarungUncheckedCreateWithoutMenuInput>
  }

  export type UserCreateWithoutMenuInput = {
    email: string
    username: string
    password: string
    role?: $Enums.Role
    warungs?: WarungCreateNestedManyWithoutUserInput
    warungEmployes?: WarungEmployeCreateNestedManyWithoutUserInput
    bills?: BillCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMenuInput = {
    id?: number
    email: string
    username: string
    password: string
    role?: $Enums.Role
    warungs?: WarungUncheckedCreateNestedManyWithoutUserInput
    warungEmployes?: WarungEmployeUncheckedCreateNestedManyWithoutUserInput
    bills?: BillUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMenuInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMenuInput, UserUncheckedCreateWithoutMenuInput>
  }

  export type OrderCreateWithoutMenuInput = {
    quantity: number
    total: number
    createdAt?: Date | string
    bill: BillCreateNestedOneWithoutOrdersInput
  }

  export type OrderUncheckedCreateWithoutMenuInput = {
    id?: number
    billId: number
    quantity: number
    total: number
    createdAt?: Date | string
  }

  export type OrderCreateOrConnectWithoutMenuInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutMenuInput, OrderUncheckedCreateWithoutMenuInput>
  }

  export type OrderCreateManyMenuInputEnvelope = {
    data: OrderCreateManyMenuInput | OrderCreateManyMenuInput[]
    skipDuplicates?: boolean
  }

  export type WarungUpsertWithoutMenuInput = {
    update: XOR<WarungUpdateWithoutMenuInput, WarungUncheckedUpdateWithoutMenuInput>
    create: XOR<WarungCreateWithoutMenuInput, WarungUncheckedCreateWithoutMenuInput>
    where?: WarungWhereInput
  }

  export type WarungUpdateToOneWithWhereWithoutMenuInput = {
    where?: WarungWhereInput
    data: XOR<WarungUpdateWithoutMenuInput, WarungUncheckedUpdateWithoutMenuInput>
  }

  export type WarungUpdateWithoutMenuInput = {
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutWarungsNestedInput
    warungEmployes?: WarungEmployeUpdateManyWithoutWarungNestedInput
    bills?: BillUpdateManyWithoutWarungNestedInput
  }

  export type WarungUncheckedUpdateWithoutMenuInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    warungEmployes?: WarungEmployeUncheckedUpdateManyWithoutWarungNestedInput
    bills?: BillUncheckedUpdateManyWithoutWarungNestedInput
  }

  export type UserUpsertWithoutMenuInput = {
    update: XOR<UserUpdateWithoutMenuInput, UserUncheckedUpdateWithoutMenuInput>
    create: XOR<UserCreateWithoutMenuInput, UserUncheckedCreateWithoutMenuInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMenuInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMenuInput, UserUncheckedUpdateWithoutMenuInput>
  }

  export type UserUpdateWithoutMenuInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    warungs?: WarungUpdateManyWithoutUserNestedInput
    warungEmployes?: WarungEmployeUpdateManyWithoutUserNestedInput
    bills?: BillUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMenuInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    warungs?: WarungUncheckedUpdateManyWithoutUserNestedInput
    warungEmployes?: WarungEmployeUncheckedUpdateManyWithoutUserNestedInput
    bills?: BillUncheckedUpdateManyWithoutUserNestedInput
  }

  export type OrderUpsertWithWhereUniqueWithoutMenuInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutMenuInput, OrderUncheckedUpdateWithoutMenuInput>
    create: XOR<OrderCreateWithoutMenuInput, OrderUncheckedCreateWithoutMenuInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutMenuInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutMenuInput, OrderUncheckedUpdateWithoutMenuInput>
  }

  export type OrderUpdateManyWithWhereWithoutMenuInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutMenuInput>
  }

  export type OrderScalarWhereInput = {
    AND?: OrderScalarWhereInput | OrderScalarWhereInput[]
    OR?: OrderScalarWhereInput[]
    NOT?: OrderScalarWhereInput | OrderScalarWhereInput[]
    id?: IntFilter<"Order"> | number
    menuId?: IntFilter<"Order"> | number
    billId?: IntFilter<"Order"> | number
    quantity?: IntFilter<"Order"> | number
    total?: IntFilter<"Order"> | number
    createdAt?: DateTimeFilter<"Order"> | Date | string
  }

  export type MenuCreateWithoutOrdersInput = {
    title: string
    price: number
    desc: string
    image: string
    available: boolean
    category: string
    warung: WarungCreateNestedOneWithoutMenuInput
    user: UserCreateNestedOneWithoutMenuInput
  }

  export type MenuUncheckedCreateWithoutOrdersInput = {
    id?: number
    title: string
    price: number
    desc: string
    image: string
    available: boolean
    category: string
    warungId: number
    userId: number
  }

  export type MenuCreateOrConnectWithoutOrdersInput = {
    where: MenuWhereUniqueInput
    create: XOR<MenuCreateWithoutOrdersInput, MenuUncheckedCreateWithoutOrdersInput>
  }

  export type BillCreateWithoutOrdersInput = {
    total: number
    status: string
    approved: boolean
    customerName: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutBillsInput
    warung: WarungCreateNestedOneWithoutBillsInput
  }

  export type BillUncheckedCreateWithoutOrdersInput = {
    id?: number
    total: number
    status: string
    approved: boolean
    customerName: string
    createdAt?: Date | string
    userId: number
    warungId: number
  }

  export type BillCreateOrConnectWithoutOrdersInput = {
    where: BillWhereUniqueInput
    create: XOR<BillCreateWithoutOrdersInput, BillUncheckedCreateWithoutOrdersInput>
  }

  export type MenuUpsertWithoutOrdersInput = {
    update: XOR<MenuUpdateWithoutOrdersInput, MenuUncheckedUpdateWithoutOrdersInput>
    create: XOR<MenuCreateWithoutOrdersInput, MenuUncheckedCreateWithoutOrdersInput>
    where?: MenuWhereInput
  }

  export type MenuUpdateToOneWithWhereWithoutOrdersInput = {
    where?: MenuWhereInput
    data: XOR<MenuUpdateWithoutOrdersInput, MenuUncheckedUpdateWithoutOrdersInput>
  }

  export type MenuUpdateWithoutOrdersInput = {
    title?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    desc?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    available?: BoolFieldUpdateOperationsInput | boolean
    category?: StringFieldUpdateOperationsInput | string
    warung?: WarungUpdateOneRequiredWithoutMenuNestedInput
    user?: UserUpdateOneRequiredWithoutMenuNestedInput
  }

  export type MenuUncheckedUpdateWithoutOrdersInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    desc?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    available?: BoolFieldUpdateOperationsInput | boolean
    category?: StringFieldUpdateOperationsInput | string
    warungId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type BillUpsertWithoutOrdersInput = {
    update: XOR<BillUpdateWithoutOrdersInput, BillUncheckedUpdateWithoutOrdersInput>
    create: XOR<BillCreateWithoutOrdersInput, BillUncheckedCreateWithoutOrdersInput>
    where?: BillWhereInput
  }

  export type BillUpdateToOneWithWhereWithoutOrdersInput = {
    where?: BillWhereInput
    data: XOR<BillUpdateWithoutOrdersInput, BillUncheckedUpdateWithoutOrdersInput>
  }

  export type BillUpdateWithoutOrdersInput = {
    total?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    approved?: BoolFieldUpdateOperationsInput | boolean
    customerName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBillsNestedInput
    warung?: WarungUpdateOneRequiredWithoutBillsNestedInput
  }

  export type BillUncheckedUpdateWithoutOrdersInput = {
    id?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    approved?: BoolFieldUpdateOperationsInput | boolean
    customerName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    warungId?: IntFieldUpdateOperationsInput | number
  }

  export type UserCreateWithoutBillsInput = {
    email: string
    username: string
    password: string
    role?: $Enums.Role
    warungs?: WarungCreateNestedManyWithoutUserInput
    warungEmployes?: WarungEmployeCreateNestedManyWithoutUserInput
    menu?: MenuCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBillsInput = {
    id?: number
    email: string
    username: string
    password: string
    role?: $Enums.Role
    warungs?: WarungUncheckedCreateNestedManyWithoutUserInput
    warungEmployes?: WarungEmployeUncheckedCreateNestedManyWithoutUserInput
    menu?: MenuUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBillsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBillsInput, UserUncheckedCreateWithoutBillsInput>
  }

  export type WarungCreateWithoutBillsInput = {
    name: string
    location: string
    user: UserCreateNestedOneWithoutWarungsInput
    warungEmployes?: WarungEmployeCreateNestedManyWithoutWarungInput
    menu?: MenuCreateNestedManyWithoutWarungInput
  }

  export type WarungUncheckedCreateWithoutBillsInput = {
    id?: number
    name: string
    location: string
    userId: number
    warungEmployes?: WarungEmployeUncheckedCreateNestedManyWithoutWarungInput
    menu?: MenuUncheckedCreateNestedManyWithoutWarungInput
  }

  export type WarungCreateOrConnectWithoutBillsInput = {
    where: WarungWhereUniqueInput
    create: XOR<WarungCreateWithoutBillsInput, WarungUncheckedCreateWithoutBillsInput>
  }

  export type OrderCreateWithoutBillInput = {
    quantity: number
    total: number
    createdAt?: Date | string
    menu: MenuCreateNestedOneWithoutOrdersInput
  }

  export type OrderUncheckedCreateWithoutBillInput = {
    id?: number
    menuId: number
    quantity: number
    total: number
    createdAt?: Date | string
  }

  export type OrderCreateOrConnectWithoutBillInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutBillInput, OrderUncheckedCreateWithoutBillInput>
  }

  export type OrderCreateManyBillInputEnvelope = {
    data: OrderCreateManyBillInput | OrderCreateManyBillInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutBillsInput = {
    update: XOR<UserUpdateWithoutBillsInput, UserUncheckedUpdateWithoutBillsInput>
    create: XOR<UserCreateWithoutBillsInput, UserUncheckedCreateWithoutBillsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBillsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBillsInput, UserUncheckedUpdateWithoutBillsInput>
  }

  export type UserUpdateWithoutBillsInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    warungs?: WarungUpdateManyWithoutUserNestedInput
    warungEmployes?: WarungEmployeUpdateManyWithoutUserNestedInput
    menu?: MenuUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBillsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    warungs?: WarungUncheckedUpdateManyWithoutUserNestedInput
    warungEmployes?: WarungEmployeUncheckedUpdateManyWithoutUserNestedInput
    menu?: MenuUncheckedUpdateManyWithoutUserNestedInput
  }

  export type WarungUpsertWithoutBillsInput = {
    update: XOR<WarungUpdateWithoutBillsInput, WarungUncheckedUpdateWithoutBillsInput>
    create: XOR<WarungCreateWithoutBillsInput, WarungUncheckedCreateWithoutBillsInput>
    where?: WarungWhereInput
  }

  export type WarungUpdateToOneWithWhereWithoutBillsInput = {
    where?: WarungWhereInput
    data: XOR<WarungUpdateWithoutBillsInput, WarungUncheckedUpdateWithoutBillsInput>
  }

  export type WarungUpdateWithoutBillsInput = {
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutWarungsNestedInput
    warungEmployes?: WarungEmployeUpdateManyWithoutWarungNestedInput
    menu?: MenuUpdateManyWithoutWarungNestedInput
  }

  export type WarungUncheckedUpdateWithoutBillsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    warungEmployes?: WarungEmployeUncheckedUpdateManyWithoutWarungNestedInput
    menu?: MenuUncheckedUpdateManyWithoutWarungNestedInput
  }

  export type OrderUpsertWithWhereUniqueWithoutBillInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutBillInput, OrderUncheckedUpdateWithoutBillInput>
    create: XOR<OrderCreateWithoutBillInput, OrderUncheckedCreateWithoutBillInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutBillInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutBillInput, OrderUncheckedUpdateWithoutBillInput>
  }

  export type OrderUpdateManyWithWhereWithoutBillInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutBillInput>
  }

  export type WarungCreateManyUserInput = {
    id?: number
    name: string
    location: string
  }

  export type WarungEmployeCreateManyUserInput = {
    id?: number
    warungId: number
  }

  export type MenuCreateManyUserInput = {
    id?: number
    title: string
    price: number
    desc: string
    image: string
    available: boolean
    category: string
    warungId: number
  }

  export type BillCreateManyUserInput = {
    id?: number
    total: number
    status: string
    approved: boolean
    customerName: string
    createdAt?: Date | string
    warungId: number
  }

  export type WarungUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    warungEmployes?: WarungEmployeUpdateManyWithoutWarungNestedInput
    menu?: MenuUpdateManyWithoutWarungNestedInput
    bills?: BillUpdateManyWithoutWarungNestedInput
  }

  export type WarungUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    warungEmployes?: WarungEmployeUncheckedUpdateManyWithoutWarungNestedInput
    menu?: MenuUncheckedUpdateManyWithoutWarungNestedInput
    bills?: BillUncheckedUpdateManyWithoutWarungNestedInput
  }

  export type WarungUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
  }

  export type WarungEmployeUpdateWithoutUserInput = {
    warung?: WarungUpdateOneRequiredWithoutWarungEmployesNestedInput
  }

  export type WarungEmployeUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    warungId?: IntFieldUpdateOperationsInput | number
  }

  export type WarungEmployeUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    warungId?: IntFieldUpdateOperationsInput | number
  }

  export type MenuUpdateWithoutUserInput = {
    title?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    desc?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    available?: BoolFieldUpdateOperationsInput | boolean
    category?: StringFieldUpdateOperationsInput | string
    warung?: WarungUpdateOneRequiredWithoutMenuNestedInput
    orders?: OrderUpdateManyWithoutMenuNestedInput
  }

  export type MenuUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    desc?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    available?: BoolFieldUpdateOperationsInput | boolean
    category?: StringFieldUpdateOperationsInput | string
    warungId?: IntFieldUpdateOperationsInput | number
    orders?: OrderUncheckedUpdateManyWithoutMenuNestedInput
  }

  export type MenuUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    desc?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    available?: BoolFieldUpdateOperationsInput | boolean
    category?: StringFieldUpdateOperationsInput | string
    warungId?: IntFieldUpdateOperationsInput | number
  }

  export type BillUpdateWithoutUserInput = {
    total?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    approved?: BoolFieldUpdateOperationsInput | boolean
    customerName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    warung?: WarungUpdateOneRequiredWithoutBillsNestedInput
    orders?: OrderUpdateManyWithoutBillNestedInput
  }

  export type BillUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    approved?: BoolFieldUpdateOperationsInput | boolean
    customerName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    warungId?: IntFieldUpdateOperationsInput | number
    orders?: OrderUncheckedUpdateManyWithoutBillNestedInput
  }

  export type BillUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    approved?: BoolFieldUpdateOperationsInput | boolean
    customerName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    warungId?: IntFieldUpdateOperationsInput | number
  }

  export type WarungEmployeCreateManyWarungInput = {
    id?: number
    userId: number
  }

  export type MenuCreateManyWarungInput = {
    id?: number
    title: string
    price: number
    desc: string
    image: string
    available: boolean
    category: string
    userId: number
  }

  export type BillCreateManyWarungInput = {
    id?: number
    total: number
    status: string
    approved: boolean
    customerName: string
    createdAt?: Date | string
    userId: number
  }

  export type WarungEmployeUpdateWithoutWarungInput = {
    user?: UserUpdateOneRequiredWithoutWarungEmployesNestedInput
  }

  export type WarungEmployeUncheckedUpdateWithoutWarungInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type WarungEmployeUncheckedUpdateManyWithoutWarungInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type MenuUpdateWithoutWarungInput = {
    title?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    desc?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    available?: BoolFieldUpdateOperationsInput | boolean
    category?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutMenuNestedInput
    orders?: OrderUpdateManyWithoutMenuNestedInput
  }

  export type MenuUncheckedUpdateWithoutWarungInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    desc?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    available?: BoolFieldUpdateOperationsInput | boolean
    category?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    orders?: OrderUncheckedUpdateManyWithoutMenuNestedInput
  }

  export type MenuUncheckedUpdateManyWithoutWarungInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    desc?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    available?: BoolFieldUpdateOperationsInput | boolean
    category?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type BillUpdateWithoutWarungInput = {
    total?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    approved?: BoolFieldUpdateOperationsInput | boolean
    customerName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBillsNestedInput
    orders?: OrderUpdateManyWithoutBillNestedInput
  }

  export type BillUncheckedUpdateWithoutWarungInput = {
    id?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    approved?: BoolFieldUpdateOperationsInput | boolean
    customerName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    orders?: OrderUncheckedUpdateManyWithoutBillNestedInput
  }

  export type BillUncheckedUpdateManyWithoutWarungInput = {
    id?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    approved?: BoolFieldUpdateOperationsInput | boolean
    customerName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type OrderCreateManyMenuInput = {
    id?: number
    billId: number
    quantity: number
    total: number
    createdAt?: Date | string
  }

  export type OrderUpdateWithoutMenuInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bill?: BillUpdateOneRequiredWithoutOrdersNestedInput
  }

  export type OrderUncheckedUpdateWithoutMenuInput = {
    id?: IntFieldUpdateOperationsInput | number
    billId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUncheckedUpdateManyWithoutMenuInput = {
    id?: IntFieldUpdateOperationsInput | number
    billId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderCreateManyBillInput = {
    id?: number
    menuId: number
    quantity: number
    total: number
    createdAt?: Date | string
  }

  export type OrderUpdateWithoutBillInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    menu?: MenuUpdateOneRequiredWithoutOrdersNestedInput
  }

  export type OrderUncheckedUpdateWithoutBillInput = {
    id?: IntFieldUpdateOperationsInput | number
    menuId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUncheckedUpdateManyWithoutBillInput = {
    id?: IntFieldUpdateOperationsInput | number
    menuId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use WarungCountOutputTypeDefaultArgs instead
     */
    export type WarungCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = WarungCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MenuCountOutputTypeDefaultArgs instead
     */
    export type MenuCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MenuCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BillCountOutputTypeDefaultArgs instead
     */
    export type BillCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BillCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use WarungDefaultArgs instead
     */
    export type WarungArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = WarungDefaultArgs<ExtArgs>
    /**
     * @deprecated Use WarungEmployeDefaultArgs instead
     */
    export type WarungEmployeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = WarungEmployeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MenuDefaultArgs instead
     */
    export type MenuArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MenuDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OrderDefaultArgs instead
     */
    export type OrderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OrderDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BillDefaultArgs instead
     */
    export type BillArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BillDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}