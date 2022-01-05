type myExclude<T, U> = T extends U ? never : T


type demo = string | number | object | Array<any>

type result = myExclude<demo , string>
