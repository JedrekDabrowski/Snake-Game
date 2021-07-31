import MainScene from './MainScene.js';
import StartScene from './StartScene.js';

const config = {
  width: 640,
  height: 640,
  type: Phaser.AUTO,
  parent: 'phaser-game',
  scene: [StartScene, MainScene],
};

new Phaser.Game(config);
