const Jimp = require("jimp");

async function main() {
	const font = await Jimp.loadFont(Jimp.FONT_SANS_128_WHITE);
	const image = await Jimp.read(500, 500, 0x0000ffff);
	
	image.print(
		font,
		0, //Manual alignment
		0, //Manual alignment
		{
			text: 'B',
			alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER,
			alignmentY: Jimp.VERTICAL_ALIGN_MIDDLE
		},
		500, //maxWidth
		500 //maxHeight
	);

	let file = 'image.' + image.getExtension();
	image.write(file);
	//console.log(image.bitmap.data);
}

main();
