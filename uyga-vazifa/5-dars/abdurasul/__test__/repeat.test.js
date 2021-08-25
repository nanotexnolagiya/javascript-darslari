let repeat = require('../repeat.js')

test('repeat test', ()=>{
    expect(repeat('salom', 3)).toBe('salom salom salom')
    expect(repeat('hi', 5, ', ')).toEqual('hi, hi, hi, hi, hi')
    expect(repeat('hi', 5, ',')).not.toEqual('hi, hi, hi, hi, hi')
    expect(()=>repeat('hi', -5, ',')).toThrow()
    expect(()=>repeat('hi', -5, ',')).toThrow('Invalid count')
    expect(repeat()).not.toBeUndefined();
})