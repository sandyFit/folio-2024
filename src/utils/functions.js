export const map = (value, in_min, in_max, out_min, out_max) => {
    return (value - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
};

export const lerp = (start, end, amt) => {
    return (1 - amt) * start + amt * end;
};

export const clamp = (num, min, max) => {
    return num <= min ? min : num >= max ? max : num;
};

export const getMousePos = (e) => {
    return {x: e.clientX, y: e.clientY};
};
