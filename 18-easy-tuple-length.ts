type tesla = ['tesla', 'model 3', 'model X', 'model Y']
type spaceX = ['FALCON 9', 'FALCON HEAVY', 'DRAGON', 'STARSHIP', 'HUMAN SPACEFLIGHT']

type Length<T extends readonly any[]> = T extends readonly any[] ? T['length'] : never

type teslaLength = Length<tesla>
type spaceXLength = Length<spaceX>
