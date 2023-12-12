declare module "alpinejs" {

  type AlpineInstance = {
    readonly $el: HTMLElement;
  };

  type WithAlpineInstance<T> = {
    [key in keyof T]: T[key] extends (...args: infer Args) => infer Return ? (this: T & AlpineInstance, ...args: Args) => Return : T[key]
  }

  const Alpine: {
    start(): void;
    data<T>(componentName: string, callBack: (params: any) => WithAlpineInstance<T>): void;
  };

  export default Alpine;
}
