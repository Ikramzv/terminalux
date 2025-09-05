# Terminalux

A lightweight TypeScript library for terminal text styling using ANSI escape codes. Similar to Tlux but with a fluent API design.

## Installation

```bash
npm install terminalux
```

## Usage

### Basic Usage

```typescript
import { tlux } from "terminalux";

// Simple colored text
tlux.red().log("This is red text");
tlux.green().log("This is green text");
tlux.blue().log("This is blue text");
```

### Chaining Styles

```typescript
import { tlux } from "terminalux";

// Chain multiple styles
tlux.red().bold().underline().log("Red, bold, and underlined text");
tlux.green().reverse().log("Green text with reversed background");
```

### Using the Tlux Class

```typescript
import { Tlux } from "terminalux";

// Create your own instance
const myTlux = new Tlux();
myTlux.yellow().bold().log("Custom tlux instance");
```

### Available Colors

- `red()`
- `green()`
- `yellow()`
- `blue()`
- `magenta()`
- `cyan()`
- `white()`
- `rgb(r, g, b)` - red, green, blue values

### Available Styles

- `bold()`
- `italic()`
- `underline()`
- `reverse()` - Reverses foreground and background colors
- `reset()` - Resets all styling

### API

#### `log(message: string, shouldReset?: boolean)`

Outputs the styled message to the console.

- `message`: The text to display
- `shouldReset`: Whether to reset styles after logging (default: `true`)

#### Method Chaining

All color and style methods return the Tlux instance, allowing for method chaining:

```typescript
tlux.red().bold().underline().log("Styled text");
```

## Examples

```typescript
import { tlux, Tlux } from "terminalux";

// Basic colors
tlux.red().log("Error message");
tlux.green().log("Success message");
tlux.yellow().log("Warning message");

// Styled text
tlux.blue().bold().log("Important information");
tlux.magenta().underline().log("Underlined text");

// Complex styling
tlux.cyan().bold().reverse().log("Highlighted text");
tlux.rgb(255, 255, 0).italic().log("Italic text, rgb colors")

// Create multiple instances
const errorTlux = new Tlux();
const successTlux = new Tlux();

errorTlux.red().bold().log("Error occurred!");
successTlux.green().log("Operation completed successfully!");
```

## TypeScript Support

This library is written in TypeScript and includes type definitions out of the box.

## License

ISC

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
