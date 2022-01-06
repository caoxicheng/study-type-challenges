type If<C extends boolean, T, F> = C extends true ? T : F

type result = If<false, string, number>
