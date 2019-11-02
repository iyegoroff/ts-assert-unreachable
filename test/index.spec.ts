import { readFile } from 'fs'
import { promisify } from 'util'
import { expecter } from 'ts-snippet'

const read = promisify(readFile)
const expectSnippet = expecter(undefined, undefined, `${__dirname}/fixtures`)

jest.setTimeout(10000)

test('`unreachable` compiles', async () => {
  const snippet = await read(`${__dirname}/fixtures/just-unreachable.ts`)

  expectSnippet(snippet.toString()).toSucceed()
})

test('`unreachableCase` compiles if switch block is exhaustive', async () => {
  const snippet = await read(`${__dirname}/fixtures/exhaustive-switch-block.ts`)

  expectSnippet(snippet.toString()).toSucceed()
})

test('`unreachableCase` fails to compile if switch block is not exhaustive', async () => {
  const snippet = await read(`${__dirname}/fixtures/non-exhaustive-switch-block.ts`)

  expectSnippet(snippet.toString()).toFail(
    /Argument of type '\"fox\"' is not assignable to parameter of type 'never'/
  )
})
