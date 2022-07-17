

export function addComponents(editor, opts) {
  const prefix = opts.gjsScrollPrefix;
  const componentType = opts.gjsScrollComponentType;
  const innerComponentType = opts.gjsScrollInnerComponentType;

  const styles = opts.gjsScrollStyles;
  const script = opts.gjsScrollScript;

  const defaultType = editor.DomComponents.getType('default');
  const defaultModel = defaultType.model;
  let traits = [...defaultModel.prototype.defaults.traits];
  traits.push({
    type: 'number',
    name: 'threshold',
    changeProp: true,
  });

  editor.DomComponents.addType(innerComponentType, {
    isComponent: (el) => {
      if (el.getAttribute &&
        el.getAttribute('data-gjs-type') === innerComponentType) {
        return { type: innerComponentType };
      }
    },
    model: {
      defaults: {
        tagName: 'div',
        draggable: true,
        droppable: true,
        components: `
        <div data-gjs-type="${componentType}" class="${prefix}-container ${prefix}-reveal">
        </div>`,
        styles: opts.gjsScrollInnerStyles,
      }
    }
  });

  editor.DomComponents.addType(componentType, {
    // Make the editor understand when to bind `my-input-type`
    isComponent: (el) => {
      if (el.getAttribute &&
        el.getAttribute('data-gjs-type') === componentType) {
        return { type: componentType };
      }
    },
    // Model definition
    model: {
      // Default properties
      defaults: {
        script,
        tagName: 'div',
        draggable: true,
        droppable: true,
        threshold: 150,
        prefix: prefix,
        components: `
        <div data-gjs-type="${componentType}" class="${prefix}-container ${prefix}-reveal">
        </div>`,
        styles: styles,
        traits: [
          {
            type: 'gjs-scroll-threshold',
            name: 'threshold',
            changeProp: true,
          }
        ],
        'script-props': ['threshold', 'prefix', 'id'],
      }
    }
  });
}
