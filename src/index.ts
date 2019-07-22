import invariant from 'ts-tiny-invariant'

export default function assertUnreachable(_: never, message = 'unreachable') {
  return invariant(false, message)
}
