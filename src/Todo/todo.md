# Todo

1. [ ] Register form 
2. [ ] Logging form
3. [ ] Make register and login work
4. [ ] Add content to slider
5. [ ] Check what else need to be done


# Remember


## Exports
Don't use defaults exports if they are not needed

```Components/Component```
```javascript
export function Component() {
  // ...
} 
```

Then import your component
```javascript
import { Component } from 'components';
```

There are 4 aliases for know ```components, screens, services, hooks```

If you want to add more aliases you need to add it to ```jsconfig.json``` and ```package.json``` files.
```jsconfig.json```
```javascript
{
  "compilerOptions": {
    "baseUrl": "./",
    "paths": {
      "components": ["src/components"],
      "fonts": ["src/fonts"],
      "hooks": ["src/hooks"],
      "screens": ["src/screens"],
      "services": ["src/services"],
      // add here with specific path
      "~/*": ["src/*"]
    }
  },
  "exclude": ["node_modules"]
}
```

```package.json```
```javascript
// ...rest of package.json

"root": [
  "./"
],
"alias": {
  "components": "./src/components",
  "screens": "./src/screens",
  "services": "./src/services",
  "hooks": "./src/hooks"
  // add here with specific path
}
```

## Props

Instead of doing it like this
```javascript
export function Button(props){
    const {
      onClick,
      className = 'regularButton',
      children
    } = props;
    return (
      <button onClick={onClick} className={className} type='button'>
        {children}
      </button>
    )
}

export function BackButton(props) {
    const { setElementToShow, setUserPoints, setCurrentPage } = props;
    return (
        <Button onClick={() => {
            setElementToShow('TestIntro')
            setUserPoints(new Array(10).fill(0))
            setCurrentPage(1)
        }} children='Wróć do instrukcji'></Button>
    )

}
```

Destructure the props in parameters
```javascript
export function Button({
    onClick,
    className = 'regularButton',
    children
  }){
  return (
    <button onClick={onClick} className={className} type='button'>
      {children}
    </button>
  )
}

export function BackButton({ setElementToShow, setUserPoints, setCurrentPage }) {
    return (
        <Button onClick={() => {
            setElementToShow('TestIntro')
            setUserPoints(new Array(10).fill(0))
            setCurrentPage(1)
        }} children='Wróć do instrukcji'></Button>
    )

}
```

## Pull request

- Format code in every files you edit or create
- Remove logs to console
- Remove unused imports 
- Remove unused functions and variables
- Remove unnecessary comments
