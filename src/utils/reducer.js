export const SWITCH_COLOR = 'SWITCH_COLOR';

export const palettes = ['palette-1', 'palette-2', 'palette-3', 'palette-4'];

export const reducer = (state, action) => {
    switch (action.type) {
        case SWITCH_COLOR:
            const currentPaletteIndex = palettes.indexOf(state.theme);
            return {
                ...state,
                theme: palettes[(currentPaletteIndex + 1) % palettes.length]
            };
        default:
            return state;
    }
};
