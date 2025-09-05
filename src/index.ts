class Tlux {
  private static readonly RED = "\x1b[31m";
  private static readonly GREEN = "\x1b[32m";
  private static readonly YELLOW = "\x1b[33m";
  private static readonly BLUE = "\x1b[34m";
  private static readonly MAGENTA = "\x1b[35m";
  private static readonly CYAN = "\x1b[36m";
  private static readonly WHITE = "\x1b[37m";

  private static readonly BOLD = "\x1b[1m";
  private static readonly ITALIC = "\x1b[3m";
  private static readonly UNDERLINE = "\x1b[4m";
  private static readonly REVERSE = "\x1b[7m";
  private static readonly RESET = "\x1b[0m";

  constructor(private style: string = "") {
    this.style = style;
  }

  log(message: string, shouldReset = true) {
    console.log(`${this.style}${message}${Tlux.RESET}`);
    if (shouldReset) this.reset();
  }

  red() {
    this.style += Tlux.RED;
    return this;
  }

  green() {
    this.style += Tlux.GREEN;
    return this;
  }

  yellow() {
    this.style += Tlux.YELLOW;
    return this;
  }

  blue() {
    this.style += Tlux.BLUE;
    return this;
  }

  magenta() {
    this.style += Tlux.MAGENTA;
    return this;
  }

  cyan() {
    this.style += Tlux.CYAN;
    return this;
  }

  white() {
    this.style += Tlux.WHITE;
    return this;
  }

  indigo() {
    this.rgb(75, 0, 130);
    return this;
  }

  rgb(r: number, g: number, b: number) {
    this.style += `\x1b[38;2;${r};${g}:${b}m`;
    return this;
  }

  /**
   * rgb colors for background
   */
  rgbb(r: number, g: number, b: number) {
    this.style += `\x1b[48;2;${r};${g}:${b}m`;
    return this;
  }

  bold() {
    this.style += Tlux.BOLD;
    return this;
  }

  italic() {
    this.style += Tlux.ITALIC;
    return this;
  }

  underline() {
    this.style += Tlux.UNDERLINE;
    return this;
  }

  reverse() {
    this.style += Tlux.REVERSE;
    return this;
  }

  reset() {
    this.style += Tlux.RESET;
    return this;
  }
}

export { Tlux };

export const tlux = new Tlux();

export default tlux;
