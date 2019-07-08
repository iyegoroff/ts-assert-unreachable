import { exec } from 'child_process'

test('compiles if switch block is exhaustive', async () => {
  const error = new Promise((resolve) => {
    exec('npm run test:exhaustive-switch-block', (error) => {
      resolve(error)
    })
  })

  expect(await error).toBeNull()
})

test('fails to compile if switch block is not exhaustive', async () => {
  const output = new Promise((resolve) => {
    exec('npm run test:non-exhaustive-switch-block', (_, stdout) => {
      resolve(stdout)
    })
  })

  expect(await output).toMatch(
    /error TS2345: Argument of type '\"fox\"' is not assignable to parameter of type 'never'/
  )
})
