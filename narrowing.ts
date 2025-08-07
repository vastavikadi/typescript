// Narrowing is the process TypeScript uses to refine a broader type (like string | number) to a more specific one based on checks you write in your code — like typeof, in, instanceof, etc.
// This lets TypeScript understand exactly what type you're working with at runtime, so it can offer better type safety and autocompletion.



function detectTypes(val: number | string) {
  if (typeof val === "string") {
    //this is called typeof (type guard)
    return val.toLowerCase();
  }
  return val.toPrecision;
}

//always typeof null, array always comes out to be object in js and this is the behaviour of js and the type for empty string is string only
