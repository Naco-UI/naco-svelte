import React, { useMemo } from 'react'
import { Source } from '@storybook/blocks'

function renderImports(imports) {
  return `import { ${imports.join(', ')} } from '@naco-ui/svelte'`
}

export function Intro({ description, name, imports = [] }) {
  const importExample = useMemo(() => {
    if (imports.length === 0) {
      return renderImports([name])
    }
    return renderImports(imports)
  }, [imports, name])
  return (
    <div className="intro">
      <h1>{name}</h1>
      <p className="text-large">{description}</p>
      <Source code={importExample} />
    </div>
  )
}
