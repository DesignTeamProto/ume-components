### Import component

Use the following import to include the component in your file:

```jsx static
import Button from 'ume-components/Drawer';
```

### Examples

Standard use:

```js
    <Drawer>
        <DrawerHeader>
        <DrawerTitle tag='h2'>
            jane.smith@gmail.com
        </DrawerTitle>
        </DrawerHeader>

        <DrawerContent>

        </DrawerContent>
    </Drawer>

    <DrawerAppContent className='drawer-app-content'>

    </DrawerAppContent>
```

```jsx static
      <div className='drawer-container'>
        <Drawer>
          <DrawerHeader>
            <DrawerTitle tag='h2'>
              jane.smith@gmail.com
            </DrawerTitle>
          </DrawerHeader>

          <DrawerContent>

          </DrawerContent>
        </Drawer>

        <DrawerAppContent className='drawer-app-content'>

        </DrawerAppContent>
      </div>
```
