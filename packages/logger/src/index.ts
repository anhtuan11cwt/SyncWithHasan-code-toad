const ANSI_COLORS = {
  reset: '\x1b[0m',
  error: '\x1b[31m',
  success: '\x1b[32m',
  warning: '\x1b[33m',
  info: '\x1b[36m',
  debug: '\x1b[35m',
  gray: '\x1b[90m',
}

export class Logger {
  private static formatMessage(level: keyof typeof ANSI_COLORS, message: string): string {
    const timestamp = new Date().toISOString()
    const color = ANSI_COLORS[level]
    const reset = ANSI_COLORS.reset
    const gray = ANSI_COLORS.gray

    return `${gray}[${timestamp}]${reset} ${color}[${level.toUpperCase()}]${reset} ${message}`
  }

  public static error(message: string, ...optionalParams: unknown[]): void {
    console.error(this.formatMessage('error', message), ...optionalParams)
  }

  public static success(message: string, ...optionalParams: unknown[]): void {
    console.log(this.formatMessage('success', message), ...optionalParams)
  }

  public static warning(message: string, ...optionalParams: unknown[]): void {
    console.warn(this.formatMessage('warning', message), ...optionalParams)
  }

  public static info(message: string, ...optionalParams: unknown[]): void {
    console.log(this.formatMessage('info', message), ...optionalParams)
  }

  public static debug(message: string, ...optionalParams: unknown[]): void {
    console.log(this.formatMessage('debug', message), ...optionalParams)
  }

  public static log(message: string, ...optionalParams: unknown[]): void {
    const timestamp = new Date().toISOString()
    console.log(`${ANSI_COLORS.gray}[${timestamp}]${ANSI_COLORS.reset} ${message}`, ...optionalParams)
  }
}
