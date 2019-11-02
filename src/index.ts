import invariant from 'ts-tiny-invariant'

export function unreachableCase(_: never, message = 'unreachable') {
  return invariant(false, message) as never
}

export function unreachable(message = 'unreachable') {
  return invariant(false, message) as never
}
