export function addTraits(editor, opts) {
    editor.TraitManager.addType('gjs-scroll-threshold', {
        events: {
            'change': 'onChange',
        },
        createInput() {

            // Create a new element container add some content
            const el = document.createElement('div');
            el.className = "gjs-trt-trait gjs-trt-trait--number";
            el.innerHTML = `
                <input class="gjs-scroll-thresh" type="number" placeholder="150">
            `;

            return el;
        },

        // Update the component based element changes
        onEvent(eventProps) {
            const { elInput, component } = eventProps;
            // `elInput` is the result HTMLElement you get from `createInput`

            const scrollThresholdInput = elInput.querySelector(".gjs-scroll-thresh");
            const threshold = scrollThresholdInput.value;

            component.addAttributes({ threshold });
            component.set('threshold', threshold);
            component.view.render();

        },

        onUpdate(eventProps) {
            const { elInput, component } = eventProps;

            const scrollThresholdInput = elInput.querySelector(".gjs-scroll-thresh");

            const threshold = component.getAttributes().threshold;

            scrollThresholdInput.value = threshold;
        },
    });

};