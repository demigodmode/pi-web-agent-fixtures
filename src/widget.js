// Minimal widget used as a known search target.
export const WIDGET_VERSION = '1.4.2';

export function createWidget({ retries = 3, timeoutMs = 5000 } = {}) {
  return { retries, timeoutMs };
}
