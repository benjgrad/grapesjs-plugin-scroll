import grapesjs from "grapesjs";
import { addComponents } from "./addComponents";
import { addTraits } from "./addTraits";
import addBlocks from "./blocks";
import {
  content as defaultContent,
  styles as defaultStyles,
  innerStyles as defaultInnerStyles,
  script
} from './config';

export default grapesjs.plugins.add('gjs-scroll', (editor, opts = {}) => {
  const gjsScrollComponentType = 'gjs-scroll';

  const gjsScrollPrefix = opts.gjsScrollPrefix ?? "gjs-scroll";

  const innerComponentType = `${gjsScrollComponentType}-content`;

  let config = {
    ...opts,
    gjsScrollPrefix,
    gjsScrollScript: script,
    gjsScrollStyles: opts.gjsScrollStyles ?? defaultStyles(gjsScrollPrefix),
    gjsScrollInnerStyles: opts.gjsScrollPrefix ?? defaultInnerStyles(gjsScrollPrefix),
    gjsScrollComponentType,
    gjsScrollInnerComponentType: innerComponentType,
    gjsScrollBlockName: opts.gjsScrollBlockName ?? "Scroll",
    gjsScrollContent: `<div data-gjs-type="${gjsScrollComponentType}" class="${gjsScrollPrefix}-container ${gjsScrollPrefix}-inactive">
        ${opts.gjsScrollContent ?? defaultContent(gjsScrollPrefix, innerComponentType)}
    </div>`,
  };
  addTraits(editor, config);
  addComponents(editor, config);
  addBlocks(editor, config);
});


