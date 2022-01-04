type arr1 = ['a', 'b', 'c']
type arr2 = [3, 2, 1]

type First<T extends any[]> = T[0] extends T[number] ? T[0] : never

type head1 = First<arr1>
type head2 = First<arr2>
type head3 = First<[]>
