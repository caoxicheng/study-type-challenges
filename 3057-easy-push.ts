type Push<U extends unknown[], T extends unknown[] | unknown> = U extends unknown[] ? [...U, ...(T extends unknown[] ? T : [T])] : never


type Result = Push<[1, 2], '3'> // [1, 2, '3']
