/**
 * @license Copyright 2020 The Coding with Chrome Authors.
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

import Blockly, { Blocks } from 'blockly';
import { javascriptGenerator } from 'blockly/javascript';

import { BlocksHelper } from './BlocksHelper';
import { BlocksTemplate } from '../../BlockEditor/blocks/BlocksTemplate';
import { GameBlocksColor } from './BlocksColor';

import i18next from 'i18next';

/**
 * Phaser Game block.
 */
Blocks['phaser_game'] = {
  hat: 'cap',
  init: function () {
    this.appendDummyInput()
      .appendField(BlocksTemplate.runningMan())
      .appendField(i18next.t('BLOCKS_PHASER_CREATE_GAME_WITH_NAME'))
      .appendField(
        new Blockly.FieldTextInput(
          i18next.t('UNNAMED_GAME'),
          BlocksHelper.validateText,
        ),
        'name',
      );
    this.appendDummyInput()
      .appendField(BlocksTemplate.adjust())
      .appendField(i18next.t('BLOCKS_PHASER_WITH_THE_SIZE'))
      .appendField(new Blockly.FieldNumber(400, 0, 5760), 'width')
      .appendField('x')
      .appendField(new Blockly.FieldNumber(600, 0, 2160), 'height')
      .appendField('Enable Debug')
      .appendField(new Blockly.FieldCheckbox(false), 'debug');
    this.setNextStatement(true, 'Game_State');
    this.setColour(GameBlocksColor);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

/**
 * Phaser Game block.
 * @param {Blockly.Block} block
 * @return {string}
 */
javascriptGenerator.forBlock['phaser_game'] = function (block) {
  return `
    const PhaserGameName = "${block.getFieldValue('name') || ''}";
    const PhaserGameConfig = {
      autoFocus: true,
      pixelArt: false,
      preserveDrawingBuffer: false,
      powerPreference: 'default',
      title: PhaserGameName,
      type: Phaser.AUTO,
      width: ${Number(block.getFieldValue('width')) || 'window.innerWidth'},
      height: ${Number(block.getFieldValue('height')) || 'window.innerHeight'},
      scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
      },
      physics: {
        default: 'arcade',
        arcade: {
            debug: ${block.getFieldValue('debug') == 'TRUE'}
        }
      }
    }
    const game = new Phaser.Game(PhaserGameConfig);
    window.game = game;
  `;
};

/**
 * Phaser Game state.
 */
Blocks['phaser_game_state'] = {
  init: function () {
    this.appendValueInput('variable')
      .appendField(BlocksTemplate.storage())
      .appendField(i18next.t('BLOCKS_PHASER_GAME_STATE'));
    this.appendDummyInput().appendField(
      new Blockly.FieldDropdown([
        [i18next.t('BLOCKS_PHASER_NO_AUTOSTART'), 'false'],
        [i18next.t('BLOCKS_PHASER_AUTOSTART'), 'true'],
      ]),
      'autostart',
    );
    this.appendStatementInput('state').setCheck(['Preload_']);
    this.setPreviousStatement(true, 'Game_State');
    this.setNextStatement(true, 'Game_State');
    this.setColour(GameBlocksColor);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

/**
 * Phaser Game state.
 * @param {Blockly.Block} block
 * @return {string}
 */
javascriptGenerator.forBlock['phaser_game_state'] = function (block) {
  const variable = javascriptGenerator.valueToCode(
    block,
    'variable',
    javascriptGenerator.ORDER_ATOMIC,
  );
  return `
  class ${variable} extends Phaser.Scene {
    constructor (config) {
      super(config);
    }
    ${javascriptGenerator.statementToCode(block, 'state')}
  }
  game.scene.add('${variable}', ${variable}, ${
    block.getFieldValue('autostart') == 'true'
  });`;
};

/**
 * Phaser Game state start.
 */
Blocks['phaser_game_start'] = {
  init: function () {
    this.appendValueInput('variable')
      .appendField(BlocksTemplate.point())
      .appendField(i18next.t('BLOCKS_PHASER_GAME_START'));
    this.setPreviousStatement(true, ['Create', 'Update', 'Input']);
    this.setNextStatement(true, ['Create', 'Update', 'Input']);
    this.setColour(GameBlocksColor);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

/**
 * Phaser Game state start.
 * @param {Blockly.Block} block
 * @return {string}
 */
javascriptGenerator.forBlock['phaser_game_start'] = function (block) {
  const variable = javascriptGenerator.valueToCode(
    block,
    'variable',
    javascriptGenerator.ORDER_ATOMIC,
  );
  return `
    if (this.helper_.checkReloadProtection('phaser_game_start')) {
      this.scene.start('${variable}');
    }
  `;
};

/**
 * Restart Phaser Game.
 */
Blocks['phaser_game_restart'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(BlocksTemplate.point())
      .appendField(i18next.t('BLOCKS_PHASER_GAME_RESTART'));
    this.setPreviousStatement(true, ['Create', 'Update', 'Input']);
    this.setNextStatement(true, ['Create', 'Update', 'Input']);
    this.setColour(GameBlocksColor);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

/**
 * Restart Phaser Game.
 * @return {string}
 */
javascriptGenerator.forBlock['phaser_game_restart'] = function () {
  return `
    if (this.helper_.checkReloadProtection('phaser_game_restart')) {
      this.events.off();
      this.registry.destroy();
      this.scene.restart();
    }
  `;
};
