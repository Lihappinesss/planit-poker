export type TInput = {
  type: string,
  placeholder: string,
  debounce?: (this: any, ...args: any[]) => void,
  name: string,
  onInput?: (value: string, e: Event) => void,
  onValidate?: (element: HTMLInputElement | null) => boolean,
  value?: string
};
