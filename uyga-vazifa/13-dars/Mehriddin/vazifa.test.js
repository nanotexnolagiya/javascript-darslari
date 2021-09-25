const {
    mapArr,
    findArr
} = require("./vazifa")

function flatArrayToTree(arr, pitem = {
    id: 0
}) {
    let narr = arr.filter(item => item.parent == pitem.id)
    mapArr(narr, (item => {
        item.children = flatArrayToTree(arr, item)
    }))
    return narr
}

const people = [{
        name: 'Grand parent',
        id: 1,
        parent: 0,
    },
    {
        name: 'Grand parent 2',
        id: 6,
        parent: 0,
    },
    {
        name: 'Parent',
        id: 2,
        parent: 1,
    },
    {
        name: 'Parent 2',
        id: 3,
        parent: 1,
    },
    {
        name: 'Child',
        id: 4,
        parent: 2
    }
]


test('test ds with mapArr', () => {
    expect(flatArrayToTree(people)).toStrictEqual([{
            name: "Grand parent",
            id: 1,
            parent: 0,
            children: [{
                    name: "Parent",
                    id: 2,
                    parent: 1,
                    children: [{
                        name: "Child",
                        id: 4,
                        parent: 2,
                        children: []
                    }]
                },
                {
                    name: "Parent 2",
                    id: 3,
                    parent: 1,
                    children: []
                }
            ]
        },
        {
            name: "Grand parent 2",
            id: 6,
            parent: 0,
            children: []
        }
    ])
})

test("test findArr", () => {
    let arr = [1, 3, 4, 2]
    expect(findArr(arr, (a => a>2))).toBe(3)
    expect(findArr(arr, (a => a < 2))).toBe(1)
    expect(findArr(arr, ((a, i) => i == 3))).toBe(2)
})

test("test mapArr", () => {
    let arr = [4, 3, 4, 2]
    expect(mapArr(arr, ((a, i, array) => a > 2 ? a * 2 : array[i]  * 10))).toStrictEqual([8, 6, 8, 20])
})
