export const MOCK_DATA = {
  id: 1,
  name: "root",
  isFolder: true,
  items: [
    {
      id: 2,
      name: "javascript.js",
      isFolder: false,
      items: [],
    },
    {
      id: 3,
      name: "tests",
      isFolder: true,
      items: [
        {
          id: 4,
          name: "unit-tests.js",
          isFolder: false,
          items: [],
        },
        {
          id: 5,
          name: "mock-test.js",
          isFolder: false,
          items: [],
        },
        {
          id: 10,
          name: "components",
          isFolder: true,
          items: [
            {
              id: 11,
              name: "autocomplete.js",
              isFolder: false,
              items: [],
            },
            {
              id: 12,
              name: "infinie-scroll.js",
              isFolder: false,
              items: [],
            },
          ],
        },
      ],
    },
    {
      id: 6,
      name: "srcipts",
      isFolder: true,
      items: [
        {
          id: 7,
          name: "unit-tests.js",
          isFolder: false,
          items: [],
        },
        {
          id: 8,
          name: "mock-test.js",
          isFolder: false,
          items: [],
        },
      ],
    },
  ],
};
