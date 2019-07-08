import invariant from 'tiny-invariant'

export const assertUnreachable = (_: never, message = 'unreachable'): never => (
  invariant(false, message) as never
)
