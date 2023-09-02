import React from 'react'
import { Source } from '@storybook/blocks';

export function Intro({ description, name }) {
  const importExample = `import { ${name} } from '@naco/svelte'`
  return (
    <div className='intro'>
      <h1>{ name }</h1>
      <p className='text-large'>
        {description}
      </p>
      <Source code={importExample} />
    </div>
  )
}
