/**
 * @license Copyright 2023 The Coding with Chrome Authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import Blockly from 'blockly';
import { Blocks } from 'blockly';
import { javascriptGenerator } from 'blockly/javascript';

import { BlocksHelper } from './BlocksHelper';
import { BlocksTemplate } from './BlocksTemplate';

/**
 * Phaser Game block.
 */
Blocks['phaser_game'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(BlocksTemplate.runningMan())
      .appendField('Create Game with name')
      .appendField(
        new Blockly.FieldTextInput('Unnamed Game', BlocksHelper.validateText),
        'name'
      )
      .appendField('and size')
      .appendField(new Blockly.FieldNumber(400, 0, 5760), 'width')
      .appendField('x')
      .appendField(new Blockly.FieldNumber(600, 0, 2160), 'height');
    this.setNextStatement(true, 'Game_State');
    this.setColour(75);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

/**
 * Phaser Game block.
 * @param {Blockly.Block} block
 * @return {string}
 */
javascriptGenerator['phaser_game'] = function (block) {
  const text_name = block.getFieldValue('name');
  const number_width =
    Number(block.getFieldValue('width')) || 'window.innerWidth';
  const number_height =
    Number(block.getFieldValue('height')) || 'window.innerHeight';
  return (
    'let game = new Phaser.Game(' +
    number_width +
    ', ' +
    number_height +
    ", Phaser.AUTO, '" +
    text_name +
    "');\n"
  );
};

/**
 * Phaser Game state.
 */
Blocks['phaser_game_state'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(BlocksTemplate.storage())
      .appendField('game state')
      .appendField(
        new Blockly.FieldTextInput('main', BlocksHelper.validateText),
        'name'
      )
      .appendField(
        new Blockly.FieldDropdown([
          ['BLOCKS_PHASER_NO_AUTOSTART', 'false'],
          ['BLOCKS_PHASER_AUTOSTART', 'true'],
        ]),
        'autostart'
      );
    this.appendStatementInput('state').setCheck(['Preload_']);
    this.setPreviousStatement(true, 'Game_State');
    this.setNextStatement(true, 'Game_State');
    this.setColour(75);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

/**
 * Phaser Game state.
 * @param {Blockly.Block} block
 * @return {string}
 */
javascriptGenerator['phaser_game_state'] = function (block) {
  const text_name = block.getFieldValue('name');
  const dropdown_autostart = block.getFieldValue('autostart');
  const statements_state = javascriptGenerator.statementToCode(block, 'state');
  return (
    "game.state.add('" +
    text_name +
    "', {\n" +
    statements_state +
    '}, ' +
    (dropdown_autostart == 'true' ? true : false) +
    ');\n'
  );
};

/**
 * Phaser Game state start.
 */
Blocks['phaser_game_start'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(BlocksTemplate.point())
      .appendField('BLOCKS_PHASER_GAME_START')
      .appendField(
        new Blockly.FieldTextInput('main', BlocksHelper.validateText),
        'name'
      );
    this.setPreviousStatement(true, ['Create', 'Update', 'Input']);
    this.setNextStatement(true, ['Create', 'Update', 'Input']);
    this.setColour(75);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

/**
 * Phaser Game state start.
 * @param {Blockly.Block} block
 * @return {string}
 */
javascriptGenerator['phaser_game_start'] = function (block) {
  const text_name = block.getFieldValue('name');
  return "game.state.start('" + text_name + "');\n";
};

/**
 * Restart Phaser Game.
 */
Blocks['phaser_game_restart'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(BlocksTemplate.point())
      .appendField('BLOCKS_PHASER_GAME_RESTART');
    this.setPreviousStatement(true, ['Create', 'Update', 'Input']);
    this.setNextStatement(true, ['Create', 'Update', 'Input']);
    this.setColour(75);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

/**
 * Restart Phaser Game.
 * @return {string}
 */
javascriptGenerator['phaser_game_restart'] = function () {
  return 'game.state.start(game.state.current);\n';
};
