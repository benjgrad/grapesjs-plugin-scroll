



export function addTraits(editor, opts) {
    editor.TraitManager.addType('gjs-scroll-animation-type', {
        createInput() {
            const el = document.createElement('input');
            el.className = "gjs-scroll-animation-type";
            el.type = "text";
            el.placeholder = "Default";
            return el;
        },
        onEvent(eventProps) {
            const { elInput, component } = eventProps;
            // `elInput` is the result HTMLElement you get from `createInput`
            const scrollType = elInput.value;

            const attributes = component.getAttributes();
            const classes = attributes.class.split(' ');
            for (let i = 0; i < classes.length; i++) {
                const cssClass = classes[i];
                if (cssClass.includes(`${opts.gjsScrollPrefix}-inactive`)) {
                    classes[i] = `${scrollType}_${opts.gjsScrollPrefix}-inactive`;
                }
            };
            console.log(classes);
            component.addAttributes({ scrollType: scrollType, class: classes.join(' ') });
            component.set('gjs-scroll-type', scrollType);

            component.view.render();

        },

        onUpdate(eventProps) {
            const { elInput, component } = eventProps;

            const scrollType = component.getAttributes().scrollType;

            elInput.value = scrollType ?? "";
        },
    });
    editor.TraitManager.addType('gjs-scroll-threshold', {
        createInput() {

            // Create a new element container add some content
            const el = document.createElement('input');
            el.className = "gjs-scroll-thresh";
            el.type = "number";
            el.placeholder = "150";

            return el;
        },

        // Update the component based element changes
        onEvent(eventProps) {
            const { elInput, component } = eventProps;
            // `elInput` is the result HTMLElement you get from `createInput`

            const threshold = elInput.value;

            component.addAttributes({ threshold });
            component.set('threshold', threshold);
            component.view.render();

        },

        onUpdate(eventProps) {
            const { elInput, component } = eventProps;

            const threshold = component.getAttributes().threshold;

            elInput.value = threshold;
        },
    });

};