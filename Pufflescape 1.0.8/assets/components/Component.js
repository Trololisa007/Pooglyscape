
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

class Component {

	constructor(gameObject) {

		/** @type {Phaser.GameObjects.Image} */
		this.gameObject;

		this.gameObject = gameObject;
		gameObject["__Component"] = this;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {Component} */
	static getComponent(gameObject) {
		return gameObject["__Component"];
	}


	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
