/*
 * This fixture will be compiled without errors
 */

import { unreachable } from '../../src'

type Animal = 'cat'

const animalFace = (animal: Animal): string => {
  return animal === 'cat' ? '🐱' : unreachable('unknown animal')
}

animalFace('cat')
