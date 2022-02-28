/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview An object that owns a block's rendering SVG elements.
 */

'use strict';

/**
 * An object that owns a block's rendering SVG elements.
 * @class
 */
goog.declareModuleId('Blockly.geras.PathObject');

const colour = goog.require('Blockly.utils.colour');
const dom = goog.require('Blockly.utils.dom');
/* eslint-disable-next-line no-unused-vars */
const {ConstantProvider} = goog.requireType('Blockly.geras.ConstantProvider');
const {PathObject: BasePathObject} = goog.require('Blockly.blockRendering.PathObject');
const {Svg} = goog.require('Blockly.utils.Svg');
/* eslint-disable-next-line no-unused-vars */
const {Theme} = goog.requireType('Blockly.Theme');


/**
 * An object that handles creating and setting each of the SVG elements
 * used by the renderer.
 * @alias Blockly.geras.PathObject
 */
class PathObject extends BasePathObject {
  /**
   * @param {!SVGElement} root The root SVG element.
   * @param {!Theme.BlockStyle} style The style object to use for
   *     colouring.
   * @param {!ConstantProvider} constants The renderer's constants.
   * @package
   */
  constructor(root, style, constants) {
    super(root, style, constants);
    /**
     * The renderer's constant provider.
     * @type {!ConstantProvider}
     */
    this.constants = constants;

    /**
     * The dark path of the block.
     * @type {SVGElement}
     * @package
     */
    this.svgPathDark = dom.createSvgElement(
        Svg.PATH, {'class': 'blocklyPathDark', 'transform': 'translate(1,1)'});

    // SVG draw order is based on the order of elements (top most = back most)
    // So we need to insert the dark path before the base path to make sure it
    // gets drawn first.
    this.svgRoot.insertBefore(this.svgPathDark, this.svgPath);

    /**
     * The light path of the block.
     * @type {SVGElement}
     * @package
     */
    this.svgPathLight = dom.createSvgElement(
        Svg.PATH, {'class': 'blocklyPathLight'}, this.svgRoot);

    /**
     * The colour of the dark path on the block in '#RRGGBB' format.
     * @type {string}
     * @package
     */
    this.colourDark = '#000000';
  }

  /**
   * @override
   */
  setPath(mainPath) {
    this.svgPath.setAttribute('d', mainPath);
    this.svgPathDark.setAttribute('d', mainPath);
  }

  /**
   * Set the highlight path generated by the renderer onto the SVG element.
   * @param {string} highlightPath The highlight path.
   * @package
   */
  setHighlightPath(highlightPath) {
    this.svgPathLight.setAttribute('d', highlightPath);
  }

  /**
   * @override
   */
  flipRTL() {
    // Mirror the block's path.
    this.svgPath.setAttribute('transform', 'scale(-1 1)');
    this.svgPathLight.setAttribute('transform', 'scale(-1 1)');
    this.svgPathDark.setAttribute('transform', 'translate(1,1) scale(-1 1)');
  }

  /**
   * @override
   */
  applyColour(block) {
    this.svgPathLight.style.display = '';
    this.svgPathDark.style.display = '';
    this.svgPathLight.setAttribute('stroke', this.style.colourTertiary);
    this.svgPathDark.setAttribute('fill', this.colourDark);

    super.applyColour(block);

    this.svgPath.setAttribute('stroke', 'none');
  }

  /**
   * @override
   */
  setStyle(blockStyle) {
    this.style = blockStyle;
    this.colourDark =
        colour.blend('#000', this.style.colourPrimary, 0.2) || this.colourDark;
  }

  /**
   * @override
   */
  updateHighlighted(highlighted) {
    if (highlighted) {
      this.svgPath.setAttribute(
          'filter', 'url(#' + this.constants.embossFilterId + ')');
      this.svgPathLight.style.display = 'none';
    } else {
      this.svgPath.setAttribute('filter', 'none');
      this.svgPathLight.style.display = 'inline';
    }
  }

  /**
   * @override
   */
  updateShadow_(shadow) {
    if (shadow) {
      this.svgPathLight.style.display = 'none';
      this.svgPathDark.setAttribute('fill', this.style.colourSecondary);
      this.svgPath.setAttribute('stroke', 'none');
      this.svgPath.setAttribute('fill', this.style.colourSecondary);
    }
  }

  /**
   * @override
   */
  updateDisabled_(disabled) {
    super.updateDisabled_(disabled);
    if (disabled) {
      this.svgPath.setAttribute('stroke', 'none');
    }
  }
}

export {PathObject};
