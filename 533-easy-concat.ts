type Concat<T extends number[], F extends number[]> = [...T, ...F]


type Result = Concat<[1], [2]> // expected to be [1, 2]
