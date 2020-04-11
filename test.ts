// interface A {
//   b: number;
//   c: string;
//   d: undefined;
// }
//
//
// // type NullAbleKeys<T> = { [K in keyof T] -?: K extends undefined ? never : { [K]: T[K] } };
// type IsOptional<T, K extends keyof T> = { [K1 in Exclude<keyof T, K>]: T[K1] } & { K?: T[K] } extends T ? K : never
// type OptionalKeys<T> = { [K in keyof T]: IsOptional<T, K> }[keyof T]
//
// type B = OptionalKeys<A> ;
//
//
// const b: B = 'd';
//
//
// const a: A = {
//   b: 1,
//   c: '1',
//   d: undefined
// };