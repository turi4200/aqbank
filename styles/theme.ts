
import { TextStyle } from 'react-native';

const Colors = {
    primary: {
        50: '#f9ffe5',
        100: '#eeffc8',
        200: '#d4ff79',
        300: '#c4fb5b',
        400: '#abf229',
        500: '#8cd80a',
        600: '#6cad03',
        700: '#518308',
        800: '#42670d',
        900: '#385710',
        950: '#1b3102',
    },
    neutro: {
        50: '#fafaf9',
        100: '#f5f5f4',
        200: '#e7e5e4',
        300: '#d6d3d1',
        400: '#a8a29e',
        500: '#78716c',
        600: '#57534e',
        700: '#44403c',
        800: '#292524',
        900: '#1c1917',
        950: '#0c0a09',
    },
    alert: {
        success: {
            200: '#9AF4C3',
            800: '#03623F',
        },
        info: {
            200: '#CAD9FB',
            800: '#373C9C',
        },
        warning: {
            200: '#FADFA8',
            800: '#944818',
        },
        error: {
            200: '#F7C3C0',
            800: '#8D2D27',
        }
    },
    base: {
        black: '#363636',
        white: '#FFFFFF',
        offWhite: '#F9F9F9'
    }
};

interface TypographyStyles {
    headings: {
        h1: TextStyle;
        h2: TextStyle;
        h3: TextStyle;
        h4: TextStyle;
        h5: TextStyle;
        h6: TextStyle;
    };
    body: {
        largeBold: TextStyle;
        largeSemiBold: TextStyle;
        largeMedium: TextStyle;
        largeRegular: TextStyle;
        mediumBold: TextStyle;
        mediumSemiBold: TextStyle;
        mediumMedium: TextStyle;
        mediumRegular: TextStyle;
        smallBold: TextStyle;
        smallSemiBold: TextStyle;
        smallMedium: TextStyle;
        smallRegular: TextStyle;
    };
    button: {
        large: TextStyle;
        medium: TextStyle;
        small: TextStyle;
    };
    link: {
        large: TextStyle;
        medium: TextStyle;
    };
}

const Typography: TypographyStyles = {
    headings: {
        h1: {
            fontSize: 64,
            lineHeight: 76,
            letterSpacing: -0.02 * 64,
            fontWeight: '700',
            fontFamily: 'Inter',
        },
        h2: {
            fontSize: 40,
            lineHeight: 48,
            letterSpacing: -0.02 * 40,
            fontWeight: '700',
            fontFamily: 'Inter',
        },
        h3: {
            fontSize: 32,
            lineHeight: 38,
            letterSpacing: -0.02 * 32,
            fontWeight: '700',
            fontFamily: 'Inter',
        },
        h4: {
            fontSize: 24,
            lineHeight: 28,
            letterSpacing: -0.02 * 24,
            fontWeight: '700',
            fontFamily: 'Inter',
        },
        h5: {
            fontSize: 20,
            lineHeight: 28,
            letterSpacing: -0.02 * 20,
            fontWeight: '700',
            fontFamily: 'Inter',
        },
        h6: {
            fontSize: 18,
            lineHeight: 28,
            letterSpacing: -0.02 * 18,
            fontWeight: '700',
            fontFamily: 'Inter',
        },
    },
    body: {
        largeBold: {
            fontSize: 16,
            lineHeight: 24,
            letterSpacing: -0.005 * 16, // -0.5%
            fontWeight: '700',
            fontFamily: 'Inter',
        },
        largeSemiBold: {
            fontSize: 16,
            lineHeight: 24,
            letterSpacing: -0.005 * 16,
            fontWeight: '600',
            fontFamily: 'Inter',
        },
        largeMedium: {
            fontSize: 16,
            lineHeight: 24,
            letterSpacing: -0.005 * 16,
            fontWeight: '500',
            fontFamily: 'Inter',
        },
        largeRegular: {
            fontSize: 16,
            lineHeight: 24,
            letterSpacing: -0.005 * 16,
            fontWeight: '400',
            fontFamily: 'Inter',
        },
        mediumBold: {
            fontSize: 14,
            lineHeight: 20,
            letterSpacing: -0.005 * 14,
            fontWeight: '700',
            fontFamily: 'Inter',
        },
        mediumSemiBold: {
            fontSize: 14,
            lineHeight: 20,
            letterSpacing: -0.005 * 14,
            fontWeight: '600',
            fontFamily: 'Inter',
        },
        mediumMedium: {
            fontSize: 14,
            lineHeight: 20,
            letterSpacing: -0.005 * 14,
            fontWeight: '500',
            fontFamily: 'Inter',
        },
        mediumRegular: {
            fontSize: 14,
            lineHeight: 20,
            letterSpacing: -0.005 * 14,
            fontWeight: '400',
            fontFamily: 'Inter',
        },
        smallBold: {
            fontSize: 12,
            lineHeight: 16,
            letterSpacing: -0.005 * 12,
            fontWeight: '700',
            fontFamily: 'Inter',
        },
        smallSemiBold: {
            fontSize: 12,
            lineHeight: 16,
            letterSpacing: -0.005 * 12,
            fontWeight: '600',
            fontFamily: 'Inter',
        },
        smallMedium: {
            fontSize: 12,
            lineHeight: 16,
            letterSpacing: -0.005 * 12,
            fontWeight: '500',
            fontFamily: 'Inter',
        },
        smallRegular: {
            fontSize: 12,
            lineHeight: 16,
            letterSpacing: -0.005 * 12,
            fontWeight: '400',
            fontFamily: 'Inter',
        },
    },
    button: {
        large: {
            fontSize: 16,
            lineHeight: 20,
            letterSpacing: -0.005 * 16,
            fontWeight: '600',
            fontFamily: 'Inter',
        },
        medium: {
            fontSize: 14,
            lineHeight: 20,
            letterSpacing: -0.005 * 14,
            fontWeight: '600',
            fontFamily: 'Inter',
        },
        small: {
            fontSize: 12,
            lineHeight: 16,
            letterSpacing: -0.005 * 12,
            fontWeight: '600',
            fontFamily: 'Inter',
        },
    },
    link: {
        large: {
            fontSize: 16,
            lineHeight: 20,
            letterSpacing: -0.005 * 16,
            fontWeight: '500',
            fontFamily: 'Inter',
        },
        medium: {
            fontSize: 14,
            lineHeight: 20,
            letterSpacing: -0.005 * 14,
            fontWeight: '500',
            fontFamily: 'Inter',
        },
    },
};

export default {
    Colors,
    Typography
};