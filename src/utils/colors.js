

export const dominantColor = (pixels) => {
    const colors = {};
    var max = 0;
    var res = null;

    for (let i = 0; i < pixels.length; i += 80) {
        const r = pixels[i];
        const g = pixels[i + 1];
        const b = pixels[i + 2];
        const a = pixels[i + 3];

        if (a >= 150) {
            const color = `rgb(${r} ${g} ${b})`;
            colors[color] = (colors[color] || 0) + 1;

            if (colors[color] > max) {
                max = colors[color];
                res = color;
            }
        }
    }
    return res;
}