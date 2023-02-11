---
name: 'component'
root: './src/components'
output: '**/*'
ignore: []
questions:
  componentName: 'Component name. (e.g. Button, Header)'
---

# `{{ inputs.componentName | pascal | define "Component"}}{{ Component }}.tsx`

```typescript
import React from 'react';

export type {{ Component }}Props = {
}

export function {{ Component }}(): JSX.Element {
  return (
    <>
    </>
  );
};

```
