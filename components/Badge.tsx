import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import theme from '../styles/theme';
import { SvgProps } from 'react-native-svg';

interface BadgeProps {
    text: string;
    backgroundColor?: string;
    textColor?: string;
    IconComponent?: React.FC<SvgProps>;
    iconColor?: string;
    borderColor?: string;
}

const Badge: React.FC<BadgeProps> = ({
    text,
    backgroundColor = theme.Colors.primary[200],
    textColor = theme.Colors.base.black,
    IconComponent,
    iconColor = theme.Colors.base.black,
    borderColor = 'transparent'
}) => {
    return (
        <View style={[styles.labelContainer, { backgroundColor, borderColor }]}>
            {IconComponent && (
                <IconComponent width={14} height={14} fill={iconColor} style={styles.icon} />
            )}
            <Text style={[styles.labelText, { color: textColor }]}>{text}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    labelContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 2,
        paddingHorizontal: 3,
        borderRadius: 6,
        alignSelf: 'flex-start',
        borderWidth: 1,
        marginRight: 8
    },
    icon: {
        padding: 1
    },
    labelText: {
        fontFamily: "SF Pro Display",
        fontWeight: 500,
        fontSize: 12,
        lineHeight: 18,
        letterSpacing: 0.5,
        paddingHorizontal: 3
    },
});

export default Badge;
