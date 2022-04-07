export declare class FColorSwath {
    constructor(data: any);
    lighten5: FColor;
    lighten4: FColor;
    lighten3: FColor;
    lighten2: FColor;
    lighten1: FColor;
    base: FColor;
    darken1: FColor;
    darken2: FColor;
    darken3: FColor;
    darken4: FColor;
    accent1: FColor;
    accent2: FColor;
    accent3: FColor;
    accent4: FColor;
}
export declare class FColor {
    private aa;
    private bb;
    private gg;
    private rr;
    total: number;
    constructor(r: number, g: number, b: number, a: number, total?: number);
    static fromHex(colorHex: string): FColor;
    lastHex: string;
    setHex(colorHex: string): void;
    get r(): number;
    get g(): number;
    get b(): number;
    get a(): number;
    get hasChanged(): boolean;
    private genStr;
    private oldStr;
    private oldVals;
    toHexString(): string;
    copy(): FColor;
    setAlpha(a: number): this;
    setOpacity(decimalPercent: number): this;
}
export declare class FColorDirectory {
    static materialColors: {
        red: {
            "50": string;
            "100": string;
            "200": string;
            "300": string;
            "400": string;
            "500": string;
            "600": string;
            "700": string;
            "800": string;
            "900": string;
            a100: string;
            a200: string;
            a400: string;
            a700: string;
        };
        pink: {
            "50": string;
            "100": string;
            "200": string;
            "300": string;
            "400": string;
            "500": string;
            "600": string;
            "700": string;
            "800": string;
            "900": string;
            a100: string;
            a200: string;
            a400: string;
            a700: string;
        };
        purple: {
            "50": string;
            "100": string;
            "200": string;
            "300": string;
            "400": string;
            "500": string;
            "600": string;
            "700": string;
            "800": string;
            "900": string;
            a100: string;
            a200: string;
            a400: string;
            a700: string;
        };
        deepPurple: {
            "50": string;
            "100": string;
            "200": string;
            "300": string;
            "400": string;
            "500": string;
            "600": string;
            "700": string;
            "800": string;
            "900": string;
            a100: string;
            a200: string;
            a400: string;
            a700: string;
        };
        indigo: {
            "50": string;
            "100": string;
            "200": string;
            "300": string;
            "400": string;
            "500": string;
            "600": string;
            "700": string;
            "800": string;
            "900": string;
            a100: string;
            a200: string;
            a400: string;
            a700: string;
        };
        blue: {
            "50": string;
            "100": string;
            "200": string;
            "300": string;
            "400": string;
            "500": string;
            "600": string;
            "700": string;
            "800": string;
            "900": string;
            a100: string;
            a200: string;
            a400: string;
            a700: string;
        };
        lightBlue: {
            "50": string;
            "100": string;
            "200": string;
            "300": string;
            "400": string;
            "500": string;
            "600": string;
            "700": string;
            "800": string;
            "900": string;
            a100: string;
            a200: string;
            a400: string;
            a700: string;
        };
        cyan: {
            "50": string;
            "100": string;
            "200": string;
            "300": string;
            "400": string;
            "500": string;
            "600": string;
            "700": string;
            "800": string;
            "900": string;
            a100: string;
            a200: string;
            a400: string;
            a700: string;
        };
        teal: {
            "50": string;
            "100": string;
            "200": string;
            "300": string;
            "400": string;
            "500": string;
            "600": string;
            "700": string;
            "800": string;
            "900": string;
            a100: string;
            a200: string;
            a400: string;
            a700: string;
        };
        green: {
            "50": string;
            "100": string;
            "200": string;
            "300": string;
            "400": string;
            "500": string;
            "600": string;
            "700": string;
            "800": string;
            "900": string;
            a100: string;
            a200: string;
            a400: string;
            a700: string;
        };
        lightGreen: {
            "50": string;
            "100": string;
            "200": string;
            "300": string;
            "400": string;
            "500": string;
            "600": string;
            "700": string;
            "800": string;
            "900": string;
            a100: string;
            a200: string;
            a400: string;
            a700: string;
        };
        lime: {
            "50": string;
            "100": string;
            "200": string;
            "300": string;
            "400": string;
            "500": string;
            "600": string;
            "700": string;
            "800": string;
            "900": string;
            a100: string;
            a200: string;
            a400: string;
            a700: string;
        };
        yellow: {
            "50": string;
            "100": string;
            "200": string;
            "300": string;
            "400": string;
            "500": string;
            "600": string;
            "700": string;
            "800": string;
            "900": string;
            a100: string;
            a200: string;
            a400: string;
            a700: string;
        };
        amber: {
            "50": string;
            "100": string;
            "200": string;
            "300": string;
            "400": string;
            "500": string;
            "600": string;
            "700": string;
            "800": string;
            "900": string;
            a100: string;
            a200: string;
            a400: string;
            a700: string;
        };
        orange: {
            "50": string;
            "100": string;
            "200": string;
            "300": string;
            "400": string;
            "500": string;
            "600": string;
            "700": string;
            "800": string;
            "900": string;
            a100: string;
            a200: string;
            a400: string;
            a700: string;
        };
        deepOrange: {
            "50": string;
            "100": string;
            "200": string;
            "300": string;
            "400": string;
            "500": string;
            "600": string;
            "700": string;
            "800": string;
            "900": string;
            a100: string;
            a200: string;
            a400: string;
            a700: string;
        };
        brown: {
            "50": string;
            "100": string;
            "200": string;
            "300": string;
            "400": string;
            "500": string;
            "600": string;
            "700": string;
            "800": string;
            "900": string;
        };
        grey: {
            "50": string;
            "100": string;
            "200": string;
            "300": string;
            "400": string;
            "500": string;
            "600": string;
            "700": string;
            "800": string;
            "900": string;
        };
        blueGrey: {
            "50": string;
            "100": string;
            "200": string;
            "300": string;
            "400": string;
            "500": string;
            "600": string;
            "700": string;
            "800": string;
            "900": string;
        };
        black: string;
        white: string;
        iowaGold: string;
    };
    red: FColorSwath;
    pink: FColorSwath;
    purple: FColorSwath;
    deepPurple: FColorSwath;
    indigo: FColorSwath;
    blue: FColorSwath;
    lightBlue: FColorSwath;
    cyan: FColorSwath;
    teal: FColorSwath;
    green: FColorSwath;
    lightGreen: FColorSwath;
    lime: FColorSwath;
    yellow: FColorSwath;
    amber: FColorSwath;
    orange: FColorSwath;
    deepOrange: FColorSwath;
    brown: FColorSwath;
    grey: FColorSwath;
    blueGrey: FColorSwath;
    black: FColor;
    white: FColor;
    iowaGold: FColor;
    darkMode: [FColor, FColor, FColor, FColor, FColor, FColor, FColor, FColor, FColor, FColor, FColor, FColor];
    lightText: [FColor, FColor];
    darkText: [FColor, FColor];
    cssElement: HTMLStyleElement;
    static fColor: FColorDirectory;
    proceduralCss: string[];
    addCss(css: string, update?: boolean): void;
    updateProceduralCss(): void;
    constructor();
    createCssHoverClass(className: string, hoverBackground: FColor): void;
}
