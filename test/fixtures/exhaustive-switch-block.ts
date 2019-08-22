/*
 * This fixture will be compiled without errors
 */

import { unreachableCase } from '../../src'

type Animal = 'godzilla' | 'dog' | 'cat' | 'fox'

const animalFace = (animal: Animal): string | undefined => {
  switch (animal) {
    case 'godzilla':
      return undefined

    case 'dog':
      return '🐶'

    case 'cat':
      return '🐱'

    case 'fox':
      return '🦊'

    default:
      return unreachableCase(animal)
  }
}

animalFace('cat')
