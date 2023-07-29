
// You can write more code here

/* START OF COMPILED CODE */

class devInfo extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 2, y ?? -25);

		// rectangle_1
		const rectangle_1 = scene.add.rectangle(0, 24, 128, 128);
		rectangle_1.scaleX = 4.184693235246191;
		rectangle_1.scaleY = 3.1809334222994043;
		rectangle_1.isFilled = true;
		this.add(rectangle_1);

		// text_1
		const text_1 = scene.add.text(-235, -140, "", {});
		text_1.scaleX = 0.979546298733702;
		text_1.text = "THIS IS AN UNFINISHED BUILD\n\nThe native physics engine (MatterJS) is unable to accurately create circles, resulting in the circles having small vertices around the surface.  when rotating, the vertices make the circle bounce.\n\nI don't think there is a way around this issue, so I would most likely need to find a new physics engine in order to continue working on the project.";
		text_1.setStyle({ "color": "#000000ff", "fontSize": "20px", "stroke": "#000000ff" });
		text_1.setWordWrapWidth(500, true);
		this.add(text_1);

		// text
		const text = scene.add.text(-237, 108, "", {});
		text.scaleX = 0.979546298733702;
		text.text = "P.S.   For some reason the refresh rate of your monitor is tied to how fast the physics engine runs, so expect extra speed when playing on a screen with more than a 60hz refresh rate";
		text.setStyle({ "color": "#000000ff", "fontSize": "20px", "stroke": "#000000ff" });
		text.setWordWrapWidth(500, true);
		this.add(text);

		// close1_png
		const close1_png = scene.add.image(229, -145, "buttons", "close1.png");
		this.add(close1_png);

		// close1_png (components)
		const close1_pngPointerHandler = new PointerHandler(close1_png);
		close1_pngPointerHandler.texOver = "close2.png";
		close1_pngPointerHandler.texOut = "close1.png";
		close1_pngPointerHandler.texOn = "close3.png";
		new InteractiveObject(close1_png);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
