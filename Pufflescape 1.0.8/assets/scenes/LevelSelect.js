
// You can write more code here

/* START OF COMPILED CODE */

class LevelSelect extends Phaser.Scene {

	constructor() {
		super("LevelSelect");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// dino
		this.add.image(-323, 152, "dino");

		// menubkgr
		const menubkgr = this.add.image(2, 0, "menubkgr");
		menubkgr.setOrigin(0.0284935921284077, 0.006974264039100287);

		// w3
		this.add.image(1181, 725, "w3");

		// w2
		this.add.image(761, 609, "w2");

		// w1
		this.add.image(798, 608, "w1");

		// buttonW1Top1_png
		const buttonW1Top1_png = this.add.image(311.5, 506, "buttons", "buttonW1Top1.png");

		// buttonLock1_png_1
		this.add.image(917.5, 546, "buttons", "buttonLock1.png");

		// buttonLock1_png_2
		this.add.image(1220.5, 546, "buttons", "buttonLock1.png");

		// buttonLock1_png_3
		this.add.image(311.5, 737, "buttons", "buttonLock1.png");

		// buttonLock1_png_4
		this.add.image(614.5, 737, "buttons", "buttonLock1.png");

		// buttonLock1_png_5
		this.add.image(917.5, 737, "buttons", "buttonLock1.png");

		// buttonLock1_png_6
		this.add.image(1220.5, 737, "buttons", "buttonLock1.png");

		// buttonW1Bottom4_png
		this.add.image(311, 586, "buttons", "buttonW1Bottom4.png");

		// text
		const text = this.add.text(201, 475, "", {});
		text.text = "Level1";
		text.setStyle({ "color": "#0c57a9ff", "fontSize": "36px", "stroke": "#0c57a9ff", "strokeThickness":4});

		// pufflescape_Logo
		const pufflescape_Logo = this.add.image(760, 152, "Pufflescape_Logo");
		pufflescape_Logo.scaleX = 0.8751793368259682;
		pufflescape_Logo.scaleY = 0.8751793368259682;

		// close1_png
		const close1_png = this.add.image(1480, 39, "buttons", "close1.png");

		// buttonW1Bottom4_png_1
		this.add.image(614, 585, "buttons", "buttonW1Bottom4.png");

		// buttonW1Top1_png_1
		const buttonW1Top1_png_1 = this.add.image(614, 505, "buttons", "buttonW1Top1.png");

		// text_2
		const text_2 = this.add.text(509, 475, "", {});
		text_2.text = "Level2";
		text_2.setStyle({ "color": "#0c57a9ff", "fontSize": "36px", "stroke": "#0c57a9ff", "strokeThickness":4});

		// text_3
		const text_3 = this.add.text(-528, 276, "", {});
		text_3.text = "emotional support dino";
		text_3.setStyle({ "fontSize": "30px" });

		// rectangle_1
		const rectangle_1 = this.add.rectangle(1080, 628, 128, 128);
		rectangle_1.scaleX = 4.184693235246191;
		rectangle_1.scaleY = 3.1809334222994043;
		rectangle_1.isFilled = true;

		// textdev1
		const textdev1 = this.add.text(843, 712, "", {});
		textdev1.scaleX = 0.979546298733702;
		textdev1.text = "P.S.   For some reason the refresh rate of your monitor is tied to how fast the physics engine runs, so expect extra speed when playing on a screen with more than a 60hz refresh rate";
		textdev1.setStyle({ "color": "#000000ff", "fontSize": "20px", "stroke": "#000000ff" });
		textdev1.setWordWrapWidth(500, true);

		// textdev
		const textdev = this.add.text(845, 464, "", {});
		textdev.scaleX = 0.979546298733702;
		textdev.text = "THIS IS AN UNFINISHED BUILD\n\nThe native physics engine (MatterJS) is unable to accurately create circles, resulting in the circles having small vertices around the surface.  when rotating, the vertices make the circle bounce.\n\nI don't think there is a way around this issue, so I would most likely need to find a new physics engine in order to continue working on the project.";
		textdev.setStyle({ "color": "#000000ff", "fontSize": "20px", "stroke": "#000000ff" });
		textdev.setWordWrapWidth(500, true);

		// buttonW1Top1_png (components)
		new InteractiveObject(buttonW1Top1_png);
		const buttonW1Top1_pngPointerHandler = new PointerHandler(buttonW1Top1_png);
		buttonW1Top1_pngPointerHandler.texOver = "buttonW1Top2.png";
		buttonW1Top1_pngPointerHandler.texOut = "buttonW1Top1.png";
		buttonW1Top1_pngPointerHandler.texOn = "buttonW1Top3.png";
		const buttonW1Top1_pnggoToLevel = new goToLevel(buttonW1Top1_png);
		buttonW1Top1_pnggoToLevel.sceneKey = "Level1";

		// close1_png (components)
		new InteractiveObject(close1_png);
		const close1_pngPointerHandler = new PointerHandler(close1_png);
		close1_pngPointerHandler.texOver = "close2.png";
		close1_pngPointerHandler.texOut = "close1.png";
		close1_pngPointerHandler.texOn = "close3.png";

		// buttonW1Top1_png_1 (components)
		new InteractiveObject(buttonW1Top1_png_1);
		const buttonW1Top1_png_1PointerHandler = new PointerHandler(buttonW1Top1_png_1);
		buttonW1Top1_png_1PointerHandler.texOver = "buttonW1Top2.png";
		buttonW1Top1_png_1PointerHandler.texOut = "buttonW1Top1.png";
		buttonW1Top1_png_1PointerHandler.texOn = "buttonW1Top3.png";
		const buttonW1Top1_png_1goToLevel = new goToLevel(buttonW1Top1_png_1);
		buttonW1Top1_png_1goToLevel.sceneKey = "Flash";

		this.rectangle_1 = rectangle_1;
		this.textdev1 = textdev1;
		this.textdev = textdev;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle_1;
	/** @type {Phaser.GameObjects.Text} */
	textdev1;
	/** @type {Phaser.GameObjects.Text} */
	textdev;

	/* START-USER-CODE */

	// Write your code here

	create() {
		this.scene.scene.sound.setVolume(1);
		this.editorCreate();
		this.rectangle_1.on("pointerup", () => {
			print("works")
			this.rectangle_1.setVisible(false)
			this.textdev.setVisible(false)
			this.textdev1.setVisible(false)
			this.close1_png_1.setVisible(false)
		});
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
