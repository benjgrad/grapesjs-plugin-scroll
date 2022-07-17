



export function addTraits(editor, opts) {
    editor.TraitManager.addType('gjs-scroll-threshold', {
        noLabel: true,
        events: {
            'change': 'onChange',
        },
        createInput() {

            // Create a new element container add some content
            const el = document.createElement('div');
            el.className = "gjs-trt-trait gjs-trt-trait--number";
            el.innerHTML = `
            <div class="gjs-label-wrp" data-label=""><div class="gjs-label" title="Threshold">Threshold</div></div>
            <div class="gjs-field-wrp gjs-field-wrp--number" data-input="">
                <div class="gjs-field gjs-field-number" data-input=""><div class="gjs-field-int">
            <span class="gjs-input-holder"><input class="gjs-scroll-thresh" type="number" placeholder=""></span>
            </div>
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