

//debug drag
var dragEnable = true;
globalThis.color = 'purple';

window.addEventListener('load', function () {

	var game = new Phaser.Game({
		width: 1520,
		height: 960,
		type: Phaser.AUTO,
        backgroundColor: "#242424",
		scale: {
			mode: Phaser.Scale.FIT,
			autoCenter: Phaser.Scale.CENTER_BOTH
		},
		physics: {
			default: "matter",
			matter: {
				debug: {showVelocity: true, enabled: true},
				gravity: {x: 0, y: 3},
				runner: {isFixed: true, deltaMax: 1000/60},
				enableSleeping: false,
				//velocityIterations: 1,
				"timing.timeScale": 1,
				

				
				 
			},
			arcade: {
				debug: true,
			},
			fps: {
				target: 10,
				max: 10,
			}
		},
		plugins: {
			global: [
				{

				}
			],
    		scene: [
      			{
       			 plugin: PhaserMatterCollisionPlugin.default, // The plugin class
       			 key: "matterCollision", // Where to store in Scene.Systems, e.g. scene.sys.matterCollision
       			 mapping: "matterCollision" // Where to store in the Scene, e.g. scene.matterCollision

      			  // Note! If you are including the library via the CDN script tag, the plugin 
      			  // line should be:
       			 // plugin: PhaserMatterCollisionPlugin.default
      			},
				
    		]
  		},
	});
	
	game.scene.add("Boot", Boot, true);

});

class Boot extends Phaser.Scene {

	preload() {
		this.load.json("collision1", "assets/collision/W1collision.json")
		this.load.json("collision9", "assets/collision/original.json")
		//this.load.json("collision2", "assets/collision/W2collision.json")
		//this.load.json("collision3", "assets/collision/W3collision.json")
		this.load.pack("pack", "assets/asset-pack.json");
		this.load.json("phasereditor2dconfig", "phasereditor2d.config.json")
		// this.load.scenePlugin("Box2D", "lib/box2d-plugin-full.js", "BOX2D", 'box2dclass')
		//this.sound.decodeAudio("gameplayLoop")
	}

	create() {
		
		var intro = this.sound.add('intro');
		var gameplayLoop = this.sound.add('gameplayLoop', {loop: true});
		intro.on('complete', () => {gameplayLoop.play()});
		intro.play();
		//this.matter.world.update60Hz();
		//this.matter.set60Hz();

		this.scene.start("LevelSelect");
	}

}