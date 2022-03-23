/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview The interface for an object that is selectable.
 */

'use strict';

/**
 * The interface for an object that is selectable.

 */
goog.module('Blockly.ISelectable');

// eslint-disable-next-line no-unused-vars
const {IDeletable} = goog.require('Blockly.IDeletable');
// eslint-disable-next-line no-unused-vars
const {IMovable} = goog.require('Blockly.IMovable');


/**
 * The interface for an object that is selectable.
 * @extends {Blockly.IDeletable}
 * @extends {Blockly.IMovable}
 * @interface
 * @alias Blockly.ISelectable
 */
const ISelectable = function() {};

/**
 * @type {string}
 */
ISelectable.prototype.id;

/**
 * Select this.  Highlight it visually.
 * @return {void}
 */
ISelectable.prototype.select;

/**
 * Unselect this.  Unhighlight it visually.
 * @return {void}
 */
ISelectable.prototype.unselect;

exports.ISelectable = ISelectable;
