/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview Namespace for block rendering functionality.
 */
'use strict';

/**
 * Namespace for block rendering functionality.
 * @namespace Blockly.blockRendering
 */
goog.declareModuleId('Blockly.blockRendering');

const debug = goog.require('Blockly.blockRendering.debug');
const deprecation = goog.require('Blockly.utils.deprecation');
const registry = goog.require('Blockly.registry');
const {BottomRow} = goog.require('Blockly.blockRendering.BottomRow');
const {Connection} = goog.require('Blockly.blockRendering.Connection');
const {ConstantProvider} = goog.require('Blockly.blockRendering.ConstantProvider');
const {Debug} = goog.require('Blockly.blockRendering.Debug');
const {Drawer} = goog.require('Blockly.blockRendering.Drawer');
const {ExternalValueInput} = goog.require('Blockly.blockRendering.ExternalValueInput');
const {Field} = goog.require('Blockly.blockRendering.Field');
const {Hat} = goog.require('Blockly.blockRendering.Hat');
const {IPathObject} = goog.require('Blockly.blockRendering.IPathObject');
const {Icon} = goog.require('Blockly.blockRendering.Icon');
const {InRowSpacer} = goog.require('Blockly.blockRendering.InRowSpacer');
const {InlineInput} = goog.require('Blockly.blockRendering.InlineInput');
const {InputConnection} = goog.require('Blockly.blockRendering.InputConnection');
const {InputRow} = goog.require('Blockly.blockRendering.InputRow');
const {JaggedEdge} = goog.require('Blockly.blockRendering.JaggedEdge');
const {MarkerSvg} = goog.require('Blockly.blockRendering.MarkerSvg');
const {Measurable} = goog.require('Blockly.blockRendering.Measurable');
const {NextConnection} = goog.require('Blockly.blockRendering.NextConnection');
const {OutputConnection} = goog.require('Blockly.blockRendering.OutputConnection');
const {PathObject} = goog.require('Blockly.blockRendering.PathObject');
const {PreviousConnection} = goog.require('Blockly.blockRendering.PreviousConnection');
const {RenderInfo} = goog.require('Blockly.blockRendering.RenderInfo');
const {Renderer} = goog.require('Blockly.blockRendering.Renderer');
const {RoundCorner} = goog.require('Blockly.blockRendering.RoundCorner');
const {Row} = goog.require('Blockly.blockRendering.Row');
const {SpacerRow} = goog.require('Blockly.blockRendering.SpacerRow');
const {SquareCorner} = goog.require('Blockly.blockRendering.SquareCorner');
const {StatementInput} = goog.require('Blockly.blockRendering.StatementInput');
/* eslint-disable-next-line no-unused-vars */
const {Theme} = goog.requireType('Blockly.Theme');
const {TopRow} = goog.require('Blockly.blockRendering.TopRow');
const {Types} = goog.require('Blockly.blockRendering.Types');

/**
 * Returns whether the debugger is turned on.
 * @return {boolean} Whether the debugger is turned on.
 * @alias Blockly.blockRendering.isDebuggerEnabled
 * @package
 * @deprecated
 */
const isDebuggerEnabled = function() {
  deprecation.warn(
      'Blockly.blockRendering.isDebuggerEnabled()', 'September 2021',
      'September 2022',
      'the debug renderer in @blockly/dev-tools (See https://www.npmjs.com/package/@blockly/dev-tools.)');
  return debug.isDebuggerEnabled();
};
export {isDebuggerEnabled};

/**
 * Registers a new renderer.
 * @param {string} name The name of the renderer.
 * @param {!Function} rendererClass The new renderer class
 *     to register.
 * @throws {Error} if a renderer with the same name has already been registered.
 */
const register = function(name, rendererClass) {
  registry.register(registry.Type.RENDERER, name, rendererClass);
};
export {register};

/**
 * Unregisters the renderer registered with the given name.
 * @param {string} name The name of the renderer.
 * @alias Blockly.blockRendering.unregister
 */
const unregister = function(name) {
  registry.unregister(registry.Type.RENDERER, name);
};
export {unregister};

/**
 * Turn on the blocks debugger.
 * @package
 * @alias Blockly.blockRendering.startDebugger
 * @deprecated
 */
const startDebugger = function() {
  deprecation.warn(
      'Blockly.blockRendering.startDebugger()', 'September 2021',
      'September 2022',
      'the debug renderer in @blockly/dev-tools (See https://www.npmjs.com/package/@blockly/dev-tools.)');
  debug.startDebugger();
};
export {startDebugger};

/**
 * Turn off the blocks debugger.
 * @package
 * @alias Blockly.blockRendering.stopDebugger
 * @deprecated
 */
const stopDebugger = function() {
  deprecation.warn(
      'Blockly.blockRendering.stopDebugger()', 'September 2021',
      'September 2022',
      'the debug renderer in @blockly/dev-tools (See https://www.npmjs.com/package/@blockly/dev-tools.)');
  debug.stopDebugger();
};
export {stopDebugger};

/**
 * Initialize anything needed for rendering (constants, etc).
 * @param {!string} name Name of the renderer to initialize.
 * @param {!Theme} theme The workspace theme object.
 * @param {Object=} opt_rendererOverrides Rendering constant overrides.
 * @return {!Renderer} The new instance of a renderer.
 *     Already initialized.
 * @package
 * @alias Blockly.blockRendering.init
 */
const init = function(name, theme, opt_rendererOverrides) {
  const rendererClass = registry.getClass(registry.Type.RENDERER, name);
  const renderer = new rendererClass(name);
  renderer.init(theme, opt_rendererOverrides);
  return renderer;
};
export {init};
export {BottomRow};
export {Connection};
export {ConstantProvider};
export {Debug};
export {Drawer};
export {ExternalValueInput};
export {Field};
export {Hat};
export {Icon};
export {InRowSpacer};
export {InlineInput};
export {InputConnection};
export {InputRow};
export {IPathObject};
export {JaggedEdge};
export {MarkerSvg};
export {Measurable};
export {NextConnection};
export {OutputConnection};
export {PathObject};
export {PreviousConnection};
export {Renderer};
export {RenderInfo};
export {RoundCorner};
export {Row};
export {SpacerRow};
export {SquareCorner};
export {StatementInput};
export {TopRow};
export {Types};
export {debug};
