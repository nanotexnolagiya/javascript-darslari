const {
    flatArrayToTree,
    treeArrayToFlat
} = require("./Mehriddin-vazifa")

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

const peopleTree = [{
        name: 'Grand parent',
        id: 1,
        parent: 0,
        children: [{
                name: 'Parent',
                id: 2,
                parent: 1,
                children: [{
                    name: 'Child',
                    id: 4,
                    parent: 2,
                    children: [

                        {
                            name: 'Parent 3',
                            id: 3,
                            parent: 4,
                        },
                    ]
                }]
            },
            {
                name: 'Parent 2',
                id: 5,
                parent: 1,
            },
        ]
    },
    {
        name: 'Grand parent 2',
        id: 6,
        parent: 0,
    },
]




test('test ds', () => {
    expect(flatArrayToTree(people)).toStrictEqual([
        {
            name: "Grand parent",
            id: 1,
            parent: 0,
            children: [
                {
                    name: "Parent",
                    id: 2,
                    parent: 1,
                    children: [
                        {
                            name: "Child",
                            id: 4,
                            parent: 2,
                            children: []
                        }
                    ]
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
    expect(treeArrayToFlat(peopleTree)).toStrictEqual([
        {
            name: "Grand parent",
            id: 1,
            parent: 0
        },
        {
            name: "Parent",
            id: 2,
            parent: 1
        },
        {
            name: "Parent 3",
            id: 3,
            parent: 4
        },
        {
            name: "Child",
            id: 4,
            parent: 2
        },
        {
            name: "Parent 2",
            id: 5,
            parent: 1
        },
        {
            name: "Grand parent 2",
            id: 6,
            parent: 0
        }
    ])
})

