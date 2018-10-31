### Import component

Use the following import to include the component in your file:

```jsx static
import Component from '@ume/Component';
```

### Examples

Standard use:

```html
- provide examples of the standard use
<Component />
```

When to use (optional):

```html
- if needed, provide information on when to use this component
```

Example when propX is provided:

```html
- write explanatory intro (what does providing the property do)
- provide examples for propX
- if prop is a oneOf, show all options

<Component propX="square" />
<Component propX="circle" />
```

Example when propY is provided:

```html
- write explanatory intro (what does providing the property do)
- provide examples for propY
- if prop is a oneOf, show all options
- add props from explained properties (one or two as example)

<Component propY="green" />
<Component propY="red" />
<Component propY="green" propX="square" />
<Component propY="red" propX="circle" />
```

```html
- repeat for other props
```
