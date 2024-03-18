import { useEffect, useState } from "react";

export const useTraverseTree = () => {
  function insertNode(tree, folderId, item, isFolder) {
    if (tree.id === folderId && tree.isFolder) {
      tree.items.unshift({
        id: new Date().getTime(),
        name: item,
        isFolder: isFolder,
        items: [],
      });
      return tree;
    }

    let latestNode = [];

    latestNode = tree.items.map((object) => {
      return insertNode(object, folderId, item, isFolder);
    });
    console.log("latest", latestNode);

    return { ...tree, items: latestNode };
  }

  return { insertNode };
};

export const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(
    function () {
      const timer = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);
      return () => {
        clearTimeout(timer);
      };
    },
    [value, delay]
  );
  return debouncedValue;
};

export function insertNode(tree, folderId, item, isFolder) {
  if (tree.id === folderId && tree.isFolder) {
    tree.items.unshift({
      id: new Date().getTime(),
      name: item,
      isFolder: isFolder,
      items: [],
    });
    return tree;
  }

  let latestNode = [];

  latestNode = tree.items.map((object) => {
    return insertNode(object, folderId, item, isFolder);
  });
  console.log("latest", latestNode);

  return { ...tree, items: latestNode };
}
