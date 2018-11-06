### Import component

Use the following import to include the component in your file:

```jsx static
import Button from 'ume-components/Button';
```

### Examples

Standard use:

```js
<ButtonGroup>
  <Button raised>Raised</Button>
  <Button unelevated>Unelevated</Button>
  <Button outlined>Outlined</Button>
  <Button>Text</Button>
  <Button dense>Dense</Button>
  <Button disabled>Disabled</Button>
</ButtonGroup>
```

Create hyperlink and use anchor tag instead of a button

```js
<Button href="/">Link</Button>
```

Apply class to the button

```js
<Button unelevated className="button--terminate">Terminate</Button>
```