export const dominantColor = (pixels) => {
    const colors = {};
    var max = 0;
    var res = null;

    for (let i = 0; i < pixels.length; i += 160) {
        const rgba = {
            r: pixels[i],
            g: pixels[i + 1],
            b: pixels[i + 2],
            a: pixels[i + 3],
        };

        if (rgba.a < 150) {
            continue;
        }

        var values = Object.values(colors);

        var j = 0;
        for (j; j < values.length; ++j) {
            if (colorDifference(rgba, values[j]) < 50) {
                values[j].count += 1;
                if (max <= values[j].count) {
                    max = values[j].count;
                    res = `rgb(${values[j].r}, ${values[j].g}, ${values[j].b})`;
                }

                break;
            }
        }

        if (j == values.length) {
            colors[`${rgba.r}, ${rgba.g}, ${rgba.b}`] = {
                ...rgba, count: 0,
            }
        }
    }

    return res;
}


const colorDifference = (rgb1, rgb2) => {
    return Math.sqrt(
        Math.pow(rgb1.r - rgb2.r, 2) +
        Math.pow(rgb1.g - rgb2.g, 2) +
        Math.pow(rgb1.b - rgb2.b, 2)
    );
}