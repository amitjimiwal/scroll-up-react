# scroll-up-react

[![npm](https://img.shields.io/npm/v/scroll-up-react)](https://www.npmjs.com/package/scroll-up-react)
[![npm](https://img.shields.io/npm/dt/scroll-up-react)](https://www.npmjs.com/package/scroll-up-react)
[![npm](https://img.shields.io/npm/l/scroll-up-react)](https://www.npmjs.com/package/scroll-up-react)
[![npm](https://img.shields.io/bundlephobia/min/scroll-up-react)](https://www.npmjs.com/package/scroll-up-react)
[![npm](https://img.shields.io/npm/types/scroll-up-react)](https://www.npmjs.com/package/scroll-up-react)
[![GitHub issues](https://img.shields.io/github/issues/amitjimiwal/scroll-up-react)]
<br>

<hr>
An easy to use react component for implementing page scrollbar functionality in your react project.

## Features

- Easy to use
- Fully Customizable. See [usage](#Usage)

## Installation

To install scroll-up-react

```bash
  # with npm:
  npm install scroll-up-react --save

  # with yarn:
  yarn add scroll-up-react

  # with pnpm:
  pnpm add scroll-up-react

  # with bun:
  bun add scroll-up-react
```

## Usage

`scroll-up-react` exports `<Progress>` component. When you use the `<Progress>` component, it will add a progress bar on the top of the page. You can customize the progress bar by passing props like `color1` `color2` and `size`.

#### Basic Usage

Inside your `App.tsx/jsx` file, import the `Progress` component and use it.

```jsx
import React from "react";
import { Progress } from "scroll-up-react";

function App() {
  return (
    <>
      <Progress color1="#3c3c3c" color2="#28935c" size="10px" />
      <div style={{ height: "100vh" }}></div>
      <div style={{ height: "100vh" }}></div>
      <div style={{ height: "100vh" }}></div>
      <div style={{ height: "100vh" }}></div>
    </>
  );
}

export default App;
```

#### Without Customization

You can use the default progress bar without any customization.

```jsx
import React from "react";
import { Progress } from "scroll-up-react";

function App() {
  return (
    <>
      <Progress />
    </>
  );
}

export default App;
```

## Progress Component API Reference

Here is the full API for the `<Progress>` component, these properties can be set on an instance of Progress:
| Parameter | Type | Required | Default | Description | Constraints |
| - | - | - | - | - | - |
| `color1` | `string` | No | `#3c3c3c` | First color for the gradient | It must be a valid hexcode |
| `color2` | `string` | No | `#28935c` | Second color for the gradient | It must be a valid hexcode |
| `size` | `string` | No | `8px` | Size of the page scrollbar | It must be a valid CSS height property |

## Contributing

To contribute to the `scroll-up-react` npm package, you can follow these steps:

1. Fork the repository on GitHub.
2. Clone the forked repository to your local machine.
3. Make the necessary changes or additions to the `src/components/Progress.tsx`.
4. Test your changes to ensure they work as expected.
5. Commit your changes with descriptive commit messages.
6. Push your changes to your forked repository.
7. Create a pull request on the original repository to submit your changes for review.

## Author

[Amit Jimiwal](https://www.github.com/amitjimiwal)
