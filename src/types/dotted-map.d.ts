declare module 'dotted-map' {
  interface DottedMapOptions {
    height?: number;
    grid?: string;
  }

  interface GetSVGOptions {
    radius?: number;
    color?: string;
    shape?: string;
    backgroundColor?: string;
  }

  class DottedMap {
    constructor(options?: DottedMapOptions);
    getSVG(options?: GetSVGOptions): string;
  }

  export default DottedMap;
}
