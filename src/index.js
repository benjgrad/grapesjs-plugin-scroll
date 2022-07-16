import grapesjs from "grapesjs";
import { addComponents } from "./addComponents";
import addBlocks from "./blocks";
import {
  content as defaultContent,
  styles as defaultStyles,
  innerStyles as defaultInnerStyles,
  script
} from './config';

export default grapesjs.plugins.add('gjs-scroll', (editor, opts = {}) => {
  const componentType = 'scroll';

  const prefix = opts.prefix ?? "gjs-scroll";

  const innerComponentType = `${componentType}-content`;

  let config = {
    ...opts,
    prefix,
    script,
    styles: opts.styles ?? defaultStyles(prefix),
    innerStyles: opts.styles ?? defaultInnerStyles(prefix),
    componentType,
    blockName: opts.blockName ?? "Scroll",
    content: `<div data-gjs-type="${componentType}" class="${prefix}-container ${prefix}-reveal">
        ${opts.content ?? defaultContent(prefix, innerComponentType)}
    </div>`,
  };

  addComponents(editor, config);
  addBlocks(editor, config);
});


