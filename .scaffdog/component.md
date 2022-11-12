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

/**
 * {{ Component }}
 * 
 * @returns {JSX.Element} Component
 */ 
export const {{ Component }} = (): JSX.Element => {

  return (
    <div className={''}>

    </div>
  );
};

```
