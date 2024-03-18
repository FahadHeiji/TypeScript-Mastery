## Interface vs Type Aliases

In TypeScript, both interfaces and type aliases allow you to define custom types. However, there are some differences between them:

- **Interfaces** are more powerful for defining complex object types. They can be reopened to add new properties and can be extended to inherit properties from other interfaces.
- **Type aliases** are more flexible because they can represent any valid type, not just object types. However, they cannot be reopened or extended like interfaces.

Here's an example of a type alias:

```typescript
type Settings = {
  readonly theme: boolean;
  font: string;
  sidebar: boolean;
  external: boolean;
}

let userSettings: Settings = {
  theme: true,
  font: "Open Sans",
  sidebar: false,
  external: true
}
```

In this example, `Settings` is a type alias that defines an object type with `theme`, `font`, `sidebar`, and `external` properties.

## HTMLElement Interface

The `HTMLElement` interface represents any HTML element. It provides properties and methods that you can use to manipulate the appearance and content of the element.

Here's an example of using the `HTMLElement` interface:

```typescript
let el = document.getElementById("id") as HTMLElement;
```

In this example, `el` is a variable that holds a reference to an HTML element with the id of `"id"`. The `as HTMLElement` part is a type assertion that tells TypeScript that `el` should be treated as an `HTMLElement`.