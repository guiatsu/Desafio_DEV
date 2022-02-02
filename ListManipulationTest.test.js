const ListManipulation = require('./ListManipulation');
test('ordena a lista: 6,5,4,3,2,1 resultado esperado 1,2,3,4,5,6', () => {
    expect(ListManipulation([6,5,4,3,2,1])).toEqual([1,2,3,4,5,6])
}
);
test('ordena e remove duplicatas da lista: 6,5,4,3,2,1,1,2,3,4,5,6 resultado esperado 1,2,3,4,5,6', () => {
    expect(ListManipulation([6,5,4,3,2,1,1,2,3,4,5,6])).toEqual([1,2,3,4,5,6])
}
);
test('ordena e remove duplicatas da lista: 7,7,7,7,7,7,7,2,2,4,4,4,4,3,3,3,6,6,6,6,6,6,5,5,5,5,5 resultado esperado 2,3,4,5,6,7', () => {
    expect(ListManipulation([7,7,7,7,7,7,7,2,2,4,4,4,4,3,3,3,6,6,6,6,6,6,5,5,5,5,5])).toEqual([2,3,4,5,6,7])
}
);
test('ordena e remove duplicatas da lista: 8,5,10,5,2,4,4,3 resultado esperado 2,3,4,5,8,10', () => {
    expect(ListManipulation([8,5,10,5,2,4,4,3])).toEqual([2,3,4,5,8,10])
}
);
