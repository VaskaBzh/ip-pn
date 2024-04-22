export function getEnumValue<T extends object, K extends keyof T>(enumObj: T, key: K | string, defaultValue: T[K]): T[K] {
    return key in enumObj ? enumObj[key as K] : defaultValue;
}