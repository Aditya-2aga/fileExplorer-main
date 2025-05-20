export const generateId = () => {
    return Date.now().toString(36) + Math.random().toString(36).substr(2, 9);
  };
  
  export const cloneTree = (tree) => {
    
    if (!Array.isArray(tree)) {
      console.error("cloneTree expects an array.");
      return []; 
    }
    try {
      return JSON.parse(JSON.stringify(tree));
    } catch (e) {
      console.error("Error cloning tree:", e);
      return []; 
    }
  };
  

  export const findNodeById = (tree, id) => {
    if (!id || !Array.isArray(tree)) return null; 
    for (const node of tree) {
      if (node.id === id) return { node, parent: null };
      if (node.type === 'folder' && Array.isArray(node.children)) {
        const result = findNodeInChildrenRecursive(node.children, id, node);
        if (result) return result;
      }
    }
    return null;
  };
  
  const findNodeInChildrenRecursive = (children, id, parent) => {
    for (const node of children) {
      if (node.id === id) return { node, parent };
      if (node.type === 'folder' && Array.isArray(node.children)) {
        const result = findNodeInChildrenRecursive(node.children, id, node);
        if (result) return result;
      }
    }
    return null;
  };
  
  export const findNodeAndIndexById = (tree, id) => {
    if (!id || !Array.isArray(tree)) return { node: null, parent: null, index: -1 };
    for (let i = 0; i < tree.length; i++) {
      const node = tree[i];
      if (node.id === id) return { node, parent: null, index: i };
      if (node.type === 'folder' && Array.isArray(node.children)) {
        const result = findNodeAndIndexInChildrenRecursive(node.children, id, node);
        if (result && result.node) return result; 
      }
    }
    return { node: null, parent: null, index: -1 };
  };
  
  const findNodeAndIndexInChildrenRecursive = (children, id, parent) => {
    for (let i = 0; i < children.length; i++) {
      const node = children[i];
      if (node.id === id) return { node, parent, index: i };
      if (node.type === 'folder' && Array.isArray(node.children)) {
        const result = findNodeAndIndexInChildrenRecursive(node.children, id, node);
        if (result && result.node) return result;
      }
    }
    return { node: null, parent: null, index: -1 }; 
  };
  
  
  export const getPathToNode = (tree, id) => {
    if (!id || !Array.isArray(tree)) return []; 
    const findPathRecursive = (nodes, targetId, currentPath) => {
      for (const node of nodes) {
        const newPath = [...currentPath, node.id];
        if (node.id === targetId) return newPath;
        if (node.type === 'folder' && Array.isArray(node.children)) {
          const result = findPathRecursive(node.children, targetId, newPath);
          if (result) return result;
        }
      }
      return null;
    };
    return findPathRecursive(tree, id, []) || [];
  };
  

  
  export const removeNodeFromTree = (tree, id) => {
    if (!id || !Array.isArray(tree)) return tree; 
    const newTree = cloneTree(tree);
    const removeRecursive = (nodes) => {
      for (let i = 0; i < nodes.length; i++) {
        if (nodes[i].id === id) {
          nodes.splice(i, 1);
          return true;
        }
        if (nodes[i].type === 'folder' && Array.isArray(nodes[i].children)) {
          if (removeRecursive(nodes[i].children)) return true;
        }
      }
      return false;
    };
    removeRecursive(newTree);
    return newTree;
  };
  
  export const addNode = (tree, parentId, nodeToAdd) => {
    if (!nodeToAdd || !nodeToAdd.id || !Array.isArray(tree)) return tree; 
    const newTree = cloneTree(tree);
  
    if (!parentId) { 
      newTree.push(nodeToAdd);
      return newTree;
    }
  
    const result = findNodeById(newTree, parentId);
    if (!result || !result.node || result.node.type !== 'folder') {
      console.warn(`Parent node with ID ${parentId} not found or not a folder. Adding to root instead.`);
      newTree.push(nodeToAdd);
      return newTree;
    }
    
    result.node.children = result.node.children || [];
    result.node.children.push(nodeToAdd);
    if (result.node.type === 'folder' && !result.node.isOpen) { 
      result.node.isOpen = true;
    }
    return newTree;
  };
  
  export const renameNode = (tree, id, newName) => {
    if (!id || typeof newName !== 'string' || !Array.isArray(tree)) return tree;
    const newTree = cloneTree(tree);
    const result = findNodeById(newTree, id);
    if (result && result.node) {
      result.node.name = newName;
    }
    return newTree;
  };
 
  export const toggleFolderOpen = (tree, id) => {
    if (!id || !Array.isArray(tree)) return tree;
    const newTree = cloneTree(tree);
    const result = findNodeById(newTree, id);
    if (result && result.node && result.node.type === 'folder') {
      result.node.isOpen = !result.node.isOpen;
    }
    return newTree;
  };
  

  export const ensureNodeIsVisible = (tree, nodeId) => {
    if (!nodeId || !Array.isArray(tree)) return tree;
    let newTree = cloneTree(tree); 
    const pathIds = getPathToNode(newTree, nodeId); 
  
    if (pathIds && pathIds.length > 0) {
      for (let i = 0; i < pathIds.length - 1; i++) {
        const ancestorId = pathIds[i];
       
        const ancestorSearchResult = findNodeById(newTree, ancestorId); 
        if (ancestorSearchResult && ancestorSearchResult.node && ancestorSearchResult.node.type === 'folder' && !ancestorSearchResult.node.isOpen) {
           ancestorSearchResult.node.isOpen = true; 
        }
      }
    }
    return newTree;
  };
  

  export const moveNode = (tree, nodeId, newParentId, index = -1) => {
    if (!nodeId || !Array.isArray(tree)) return tree;
  
    const { node: nodeToMoveOriginal } = findNodeById(tree, nodeId); 
    if (!nodeToMoveOriginal) return tree;
  
    const nodeToMove = JSON.parse(JSON.stringify(nodeToMoveOriginal));
  
    const newTreeWithoutNode = removeNodeFromTree(tree, nodeId); 
    
    if (newParentId === null) { 
      const targetRootArray = newTreeWithoutNode; 
      if (index >= 0 && index <= targetRootArray.length) {
        targetRootArray.splice(index, 0, nodeToMove);
      } else {
        targetRootArray.push(nodeToMove); 
      }
      return targetRootArray;
    }
  
    const parentSearchResult = findNodeById(newTreeWithoutNode, newParentId);
    if (!parentSearchResult || !parentSearchResult.node || parentSearchResult.node.type !== 'folder') {
      console.warn(`Drag&Drop: Target parent ${newParentId} not found or not a folder after removing ${nodeId}. Move cancelled.`);
      newTreeWithoutNode.push(nodeToMove);
      return newTreeWithoutNode;
    }
  
    const targetParentNode = parentSearchResult.node;
    targetParentNode.children = targetParentNode.children || [];
    if (index >= 0 && index <= targetParentNode.children.length) {
      targetParentNode.children.splice(index, 0, nodeToMove);
    } else {
      targetParentNode.children.push(nodeToMove); 
    }
    if (!targetParentNode.isOpen) {
        targetParentNode.isOpen = true;
    }
  
    return newTreeWithoutNode; 
  };
  
  
  export const canDrop = (tree, draggedNodeId, targetFolderId) => {
    if (!draggedNodeId || !Array.isArray(tree)) return false;
  
    const { node: draggedNode } = findNodeById(tree, draggedNodeId);
    if (!draggedNode) return false; 
  
  
    if (targetFolderId === null) {
      return true;
    }
  
    const { node: targetFolderNode } = findNodeById(tree, targetFolderId);
  
    if (!targetFolderNode || targetFolderNode.type !== 'folder') {
      return false; 
    }
  
    if (draggedNodeId === targetFolderId) {
      return false;
    }
  
    if (draggedNode.type === 'folder') {
      const pathFromDraggedToTarget = getPathToNode(draggedNode.children || [], targetFolderId);
      if(pathFromDraggedToTarget && pathFromDraggedToTarget.includes(targetFolderId)){
          let currentAncestorId = targetFolderId;
          while(currentAncestorId) {
              const { parent } = findNodeById(tree, currentAncestorId);
              if (!parent) break; 
              if (parent.id === draggedNodeId) return false; 
              currentAncestorId = parent.id;
          }
      }
    
       const pathFromRootToTarget = getPathToNode(tree, targetFolderId);
       if (pathFromRootToTarget.includes(draggedNodeId)) {
           return false;
       }
    }
    return true;
  };
  
  
  export const getFileExtension = (filename) => {
    if (typeof filename !== 'string') return '';
    const parts = filename.split('.');
    return parts.length > 1 ? parts.pop().toLowerCase() : '';
  };
  