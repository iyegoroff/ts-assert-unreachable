/*
 * This fixture compilation will fail with error:
 * error TS2345: Argument of type '\"fox\"' is not assignable to parameter of type 'never'
 */

import { assertUnreachable } from '../../src'

type Animal = 'godzilla' | 'dog' | 'cat' | 'fox'

const animalFace = (animal: Animal): string | undefined => {
  switch (animal) {
    case 'godzilla':
      return undefined

    case 'dog':
      return '🐶'

    case 'cat':
      return '🐱'

    default:
      assertUnreachable(animal)
  }
}

animalFace('cat')
