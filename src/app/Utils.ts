export function toUpperCase(arg: string) {
  return arg.toUpperCase();
}

export type stringInfo = {
  lowerCase: string;
  uppperCase: string;
  characters: string[];
  length: number;
  extraInfo: Object | undefined;
};

export function getStringInfo(arg: string): stringInfo {
  return {
    lowerCase: arg.toLowerCase(),
    uppperCase: arg.toUpperCase(),
    characters: Array.from(arg),
    length: arg.length,
    extraInfo: {},
  };
}
