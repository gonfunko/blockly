/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview The interface for an object that is copyable.
 */

'use strict';

/**
 * The interface for an object that is copyable.

 */
goog.module('Blockly.ICopyable');

/* eslint-disable-next-line no-unused-vars */
const {ISelectable} = goog.require('Blockly.ISelectable');
/* eslint-disable-next-line no-unused-vars */
const {WorkspaceSvg} = goog.requireType('Blockly.WorkspaceSvg');


/**
 * @extends {Blockly.ISelectable}
 * @interface
 * @alias Blockly.ICopyable
 */
const ICopyable = function() {};

/**
 * Encode for copying.
 * @return {?Blockly.ICopyable.CopyData} Copy metadata.
 * @package
 */
ICopyable.prototype.toCopyData;

/**
 * Copy Metadata.
 * @typedef {{
 *            saveInfo:(!Object|!Element),
 *            source:Blockly.WorkspaceSvg,
 *            typeCounts:?Object
 *          }}
 */
ICopyable.CopyData;

exports.ICopyable = ICopyable;
