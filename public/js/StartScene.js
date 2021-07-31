export default class StartScene extends Phaser.Scene {
  constructor() {
    super('StartScene');
  }

  create() {
    const title = this.add.text(100, 100, 'Hello!', {
      fill: '#0f0',
      fontSize: '24px',
    });
    const text = this.add.text(100, 200, "Let's play sssssssssnake!", {
      fill: '#0f0',
      fontSize: '24px',
    });

    const startButton = this.add.text(100, 300, 'START A NEW GAME!', {
      fill: '#0f0',
      fontSize: '24px',
    });
    startButton.setInteractive();
    startButton.on('pointerdown', () => {
      this.scene.start('MainScene');
    });
  }
}
