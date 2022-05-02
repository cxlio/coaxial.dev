define("@cxl/ui/theme-dark.js", ["require", "exports", "@cxl/ui/theme.js", "@cxl/css"], function (require, exports, theme_js_1, css_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getStyleElement = exports.applyToTheme = exports.colors = void 0;
    exports.colors = {
        primary: (0, css_1.rgba)(0x03, 0xa9, 0xf4),
        onPrimary: (0, css_1.rgba)(0xff, 0xff, 0xff),
        primaryLight: (0, css_1.rgba)(0x03, 0xa9, 0xf4, 0.24),
        onPrimaryLight: (0, css_1.rgba)(0xe1, 0xf5, 0xfe),
        secondary: (0, css_1.rgba)(249, 130, 108),
        surface: (0, css_1.rgba)(34, 39, 46),
        background: (0, css_1.rgba)(34, 39, 46),
        onBackground: (0, css_1.rgba)(173, 186, 199),
        onSurface: (0, css_1.rgba)(173, 186, 199),
        onSecondary: (0, css_1.rgba)(0, 0, 0),
        error: (0, css_1.rgba)(0xcf, 0x66, 0x79),
        link: (0, css_1.rgba)(83, 155, 245),
        divider: (0, css_1.rgba)(0xff, 0xff, 0xff, 0.48),
        onSurface8: (0, css_1.rgba)(173, 186, 199, 0.12),
        headerText: (0, css_1.rgba)(173, 186, 199, 0.87),
    };
    function applyToTheme() {
        Object.assign(theme_js_1.theme.colors, exports.colors);
    }
    exports.applyToTheme = applyToTheme;
    function getStyleElement() {
        const style = document.createElement('style');
        style.innerHTML = (0, css_1.renderGlobal)({ colors: exports.colors });
        return style;
    }
    exports.getStyleElement = getStyleElement;
});
//# sourceMappingURL=theme-dark.js.map