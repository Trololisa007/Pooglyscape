
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

class closeDevInfo {

	constructor(gameObject) {

		/** @type {Phaser.GameObjects.Image} */
		this.gameObject;

		this.gameObject = gameObject;
		gameObject["__closeDevInfo"] = this;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {closeDevInfo} */
	static getComponent(gameObject) {
		return gameObject["__closeDevInfo"];
	}


	/* START-USER-CODE */

	start() {		

		this.gameObject.on("pointerup", () => {
			this.gameObject.destroy()
			rectangle1.visible = false
			textdev.visible = false
			textdev1.visible = false
		});
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
