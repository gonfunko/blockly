/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview Defines the Svg class. Its constants enumerate
 * all SVG tag names used by Blockly.
 */
'use strict';

/**
 * Defines the Svg class. Its constants enumerate
 * all SVG tag names used by Blockly.
 * @class
 */
goog.module('Blockly.utils.Svg');


/**
 * A name with the type of the SVG element stored in the generic.
 * @template T
 * @alias Blockly.utils.Svg
 */
class Svg {
  /**
   * @param {string} tagName The SVG element tag name.
   * @package
   */
  constructor(tagName) {
    /**
     * @type {string}
     * @private
     */
    this.tagName_ = tagName;
  }

  /**
   * Returns the SVG element tag name.
   * @return {string} The name.
   */
  toString() {
    return this.tagName_;
  }
}

/**
 * @type {!Blockly.utils.Svg<!SVGAnimateElement>}
 * @package
 */
Svg.ANIMATE = new Svg('animate');

/**
 * @type {!Blockly.utils.Svg<!SVGCircleElement>}
 * @package
 */
Svg.CIRCLE = new Svg('circle');

/**
 * @type {!Blockly.utils.Svg<!SVGClipPathElement>}
 * @package
 */
Svg.CLIPPATH = new Svg('clipPath');

/**
 * @type {!Blockly.utils.Svg<!SVGDefsElement>}
 * @package
 */
Svg.DEFS = new Svg('defs');

/**
 * @type {!Blockly.utils.Svg<!SVGFECompositeElement>}
 * @package
 */
Svg.FECOMPOSITE = new Svg('feComposite');

/**
 * @type {!Blockly.utils.Svg<!SVGFEComponentTransferElement>}
 * @package
 */
Svg.FECOMPONENTTRANSFER = new Svg('feComponentTransfer');

/**
 * @type {!Blockly.utils.Svg<!SVGFEFloodElement>}
 * @package
 */
Svg.FEFLOOD = new Svg('feFlood');

/**
 * @type {!Blockly.utils.Svg<!SVGFEFuncAElement>}
 * @package
 */
Svg.FEFUNCA = new Svg('feFuncA');

/**
 * @type {!Blockly.utils.Svg<!SVGFEGaussianBlurElement>}
 * @package
 */
Svg.FEGAUSSIANBLUR = new Svg('feGaussianBlur');

/**
 * @type {!Blockly.utils.Svg<!SVGFEPointLightElement>}
 * @package
 */
Svg.FEPOINTLIGHT = new Svg('fePointLight');

/**
 * @type {!Blockly.utils.Svg<!SVGFESpecularLightingElement>}
 * @package
 */
Svg.FESPECULARLIGHTING = new Svg('feSpecularLighting');

/**
 * @type {!Blockly.utils.Svg<!SVGFilterElement>}
 * @package
 */
Svg.FILTER = new Svg('filter');

/**
 * @type {!Blockly.utils.Svg<!SVGForeignObjectElement>}
 * @package
 */
Svg.FOREIGNOBJECT = new Svg('foreignObject');

/**
 * @type {!Blockly.utils.Svg<!SVGGElement>}
 * @package
 */
Svg.G = new Svg('g');

/**
 * @type {!Blockly.utils.Svg<!SVGImageElement>}
 * @package
 */
Svg.IMAGE = new Svg('image');

/**
 * @type {!Blockly.utils.Svg<!SVGLineElement>}
 * @package
 */
Svg.LINE = new Svg('line');

/**
 * @type {!Blockly.utils.Svg<!SVGPathElement>}
 * @package
 */
Svg.PATH = new Svg('path');

/**
 * @type {!Blockly.utils.Svg<!SVGPatternElement>}
 * @package
 */
Svg.PATTERN = new Svg('pattern');

/**
 * @type {!Blockly.utils.Svg<!SVGPolygonElement>}
 * @package
 */
Svg.POLYGON = new Svg('polygon');

/**
 * @type {!Blockly.utils.Svg<!SVGRectElement>}
 * @package
 */
Svg.RECT = new Svg('rect');

/**
 * @type {!Blockly.utils.Svg<!SVGSVGElement>}
 * @package
 */
Svg.SVG = new Svg('svg');

/**
 * @type {!Blockly.utils.Svg<!SVGTextElement>}
 * @package
 */
Svg.TEXT = new Svg('text');

/**
 * @type {!Blockly.utils.Svg<!SVGTSpanElement>}
 * @package
 */
Svg.TSPAN = new Svg('tspan');

exports.Svg = Svg;
