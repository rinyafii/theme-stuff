function waitForElm(selector) {
    return new Promise(resolve => {
        if (document.querySelector(selector)) {
            return resolve(document.querySelector(selector));
        }

        const observer = new MutationObserver(mutations => {
            if (document.querySelector(selector)) {
                observer.disconnect();
                resolve(document.querySelector(selector));
            }
        });

        // If you get "parameter 1 is not of type 'Node'" error, see https://stackoverflow.com/a/77855838/492336
        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    });
}

const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))

function ColorLuminance(hex, lum) {

	// validate hex string
	hex = String(hex).replace(/[^0-9a-f]/gi, '');
	if (hex.length < 6) {
		hex = hex[0]+hex[0]+hex[1]+hex[1]+hex[2]+hex[2];
	}
	lum = lum || 0;

	// convert to decimal and change luminosity
	var rgb = "#", c, i;
	for (i = 0; i < 3; i++) {
		c = parseInt(hex.substr(i*2,2), 16);
		c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16);
		rgb += ("00"+c).substr(c.length);
	}
	return rgb;
}

async function GetColor() {
	
	// get track data & color
	const currentTrack = await Spicetify.Player.data.item;
	const { fetchExtractedColors } = Spicetify.GraphQL.Definitions;
	const fetchedData = await Spicetify.GraphQL.Request(
	  fetchExtractedColors, { uris: currentTrack.album.images[0].url },
	);
	console.log(fetchedData);
	const hex = fetchedData.data.extractedColors[0].colorDark.hex
	
	// get main element
	const mainContainer = await document.querySelector('.Root__top-container')
	
	// apply to css variables
	mainContainer?.style.setProperty('--current-album-color', hex);
	mainContainer?.style.setProperty('--current-album-color-d5', ColorLuminance(hex, -0.5));
	mainContainer?.style.setProperty('--current-album-color-d6', ColorLuminance(hex, -0.6));
	mainContainer?.style.setProperty('--current-album-color-d7', ColorLuminance(hex, -0.7));
	
}

async function InitalLoad() {
	await sleep(200);
	GetColor();
}

Spicetify.Player.addEventListener("songchange", GetColor);

waitForElm('.main-buddyFeed-container')
	.then(InitalLoad);
	