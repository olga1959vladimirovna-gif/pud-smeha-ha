// Chatium exported compiler-optimized render functions. After adding interactive
// nodes, their original dynamic-node lists are no longer complete. Use Vue's
// documented BAIL patch flag on the two edited interactive trees so every new
// label, preview and accessibility attribute participates in normal rendering.
export function withFullRendering(component) {
  const setup = component.setup;
  return {
    ...component,
    setup(props, context) {
      const render = setup(props, context);
      function visit(node) {
        if (!node || typeof node !== 'object' || !node.__v_isVNode) return;
        node.dynamicChildren = null;
        node.patchFlag = -2;
        if (Array.isArray(node.children)) node.children.forEach(visit);
      }
      return (...args) => {
        const vnode = render(...args);
        visit(vnode);
        return vnode;
      };
    },
  };
}
