type Includes<U extends readonly unknown[], T> = T extends U[number] ? true : false


type isPillarMen = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'> // expected to be `false`
