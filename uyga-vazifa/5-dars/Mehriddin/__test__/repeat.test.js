const { repeatStr } = require("../app");

test('repeatStr test', () => {
    expect(repeatStr('nico', 3)).toBe('nico nico nico')
    expect(repeatStr('nico', 5, '! ')).toEqual('nico! nico! nico! nico! nico')
    expect(repeatStr('nico', 5, ',')).not.toEqual('nico,nico,nico,nico,nico,')
    expect(repeatStr()).not.toBeUndefined();
})