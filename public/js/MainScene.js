import Snake from './Snake.js';

export default class MainScene extends Phaser.Scene {
  constructor() {
    super('MainScene');
  }

  create() {
    this.snake = new Snake(this);
  }

  update(time) {
    this.snake.update(time);
  }

  restart() {
    let gameOverText = this.add.text(100, 100, 'GAME OVER', {
      fontSize: '32px',
      fill: '#ff0000',
      fontFamily: 'Roboto',
    });
    let gameResult = this.add.text(
      100,
      200,
      `YOUR SCORE: ${this.snake.body.length}`,
      {
        fontSize: '32px',
        fill: '#ff0000',
        fontFamily: 'Roboto',
      }
    );
    gameOverText.setDepth(1);
    gameResult.setDepth(1);
    setTimeout(() => this.scene.start('StartScene'), 2000);
  }
}
