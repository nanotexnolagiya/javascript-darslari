const { reverse } = require("../../../4-dars/Mehriddin-vazifa")

test('reverse test', () => {  
    expect(reverse("nico")).toBeNaN()
    expect(reverse(-4433)).not.toBeNaN()
    expect(reverse(-32232)).toEqual(-23223)
    expect(reverse(1)).toEqual(1)
})