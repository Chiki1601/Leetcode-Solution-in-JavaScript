/**
 * @param {any} object
 * @return {string}
 */
var jsonStringify = function(obj) {
    if (obj === null) {
      return "null";
    }

    if(typeof obj ==="string"){
        return `"${obj}"`
    }
    if(typeof obj === "boolean" || typeof obj ==="number"){
        return obj.toString()
    }
    if(Array.isArray(obj)){
        const arrayStrings = obj.map(item => jsonStringify(item)).filter(item => item !== undefined);
        return `[${arrayStrings.join(",")}]`;
    }

    if (typeof obj==="object") {
        const objectStrings = Object.entries(obj).map(([key, value]) => {
            const valueString = jsonStringify(value);
            return valueString !== undefined ? `"${key}":${valueString}` : undefined;
          }).filter(item => item !== undefined);
          return `{${objectStrings.join(",")}}`;
    }
    return undefined
};
