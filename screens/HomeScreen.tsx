import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import carImage from '../assets/images/car.png';
import trackImage from '../assets/images/track.png';
import logoImage from '../assets/images/logo.png';
import { SafeAreaView } from 'react-native-safe-area-context';
import theme from '../styles/theme';
import Icon from 'react-native-vector-icons/FontAwesome';
import Badge from '../components/Badge';
import LeadIcon from '../assets/icons/lead.svg';
import DateIcon from '../assets/icons/date.svg';
import ChampIcon from '../assets/icons/champ.svg';

type RootStackParamList = {
    Home: undefined;
    Drivers: undefined;
};

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
    navigation: HomeScreenNavigationProp;
};

const HomeScreen: React.FC<Props> = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.topBackground} />
            <View style={styles.bottomBackground} />
            <View style={styles.container}>
                <ScrollView
                    bounces={false}
                    overScrollMode="never"
                >
                    <View style={styles.header}>
                        <Image source={logoImage} style={styles.logoImage} />
                        <Text style={styles.greetings}>Olá, Ana Paula</Text>
                    </View>
                    <View style={styles.raceCard}>
                        <View style={styles.raceDetails}>
                            <Text style={styles.nextRaceTitle}>Próxima corrida</Text>
                            <Image source={trackImage} style={styles.trackImage} />
                            <View style={styles.infoContainer}>
                                <Text style={styles.nextRaceName}>GP do Bahrein</Text>
                                <Text style={styles.nextRaceDate}>Data Sáb., 2 de Mar., 12:00</Text>
                                <Badge
                                    text="Circuito Internacional do Bahrein"
                                    backgroundColor={theme.Colors.primary[200]}
                                    textColor={theme.Colors.base.black}
                                    IconComponent={LeadIcon}
                                    iconColor={theme.Colors.base.black}
                                />
                            </View>
                        </View>
                        <View style={styles.actionButtons}>
                            <Badge
                                text="Próximos dias"
                                backgroundColor={theme.Colors.neutro[950]}
                                textColor={theme.Colors.base.white}
                                IconComponent={DateIcon}
                                iconColor={theme.Colors.base.white}
                            />
                            <Badge
                                text="Dia 9, 14:00"
                                backgroundColor={'transparent'}
                                textColor={theme.Colors.base.white}
                                iconColor={theme.Colors.base.white}
                                borderColor={theme.Colors.base.white}
                            />
                            <Badge
                                text="Dia 24, 14:00"
                                backgroundColor={'transparent'}
                                textColor={theme.Colors.base.white}
                                iconColor={theme.Colors.base.white}
                                borderColor={theme.Colors.base.white}
                            />
                        </View>
                    </View>


                    <View style={styles.lastRace}>
                        <Text style={styles.sectionTitle}>Última corrida</Text>
                        <View style={styles.lastRaceCard}>
                            <Text style={styles.raceName}>GP de Abu Dhabi</Text>
                            <Image source={carImage} style={styles.carImage} />
                            <Text style={styles.raceDate}><Text style={styles.raceDateTitle}>Data</Text> Sáb., 2 de Jan., De 2023 12:00</Text>
                            <Badge
                                text="Circuito Yas Marina Circuit"
                                backgroundColor={'#EDEDED'}
                                textColor={'#676767'}
                                IconComponent={LeadIcon}
                                iconColor={theme.Colors.base.black}
                            />
                            <View style={styles.podium}>
                                <View style={styles.positionOne}>
                                    <ChampIcon fill='#EF9120' />
                                    <Text style={styles.position}>1º</Text>
                                    <Text style={styles.pilot}>Max Verstappen</Text>
                                    <Text style={styles.team}>Red Bull</Text>
                                </View>
                                <View style={styles.positionTwo}>
                                    <ChampIcon fill='#A8A29E' />
                                    <Text style={styles.position}>2º</Text>
                                    <Text style={styles.pilot}>Charles Leclerc</Text>
                                    <Text style={styles.team}>Ferrari</Text>
                                </View>
                                <View style={styles.positionThree}>
                                    <ChampIcon fill='#773C17' />
                                    <Text style={styles.position}>3º</Text>
                                    <Text style={styles.pilot}>Lewis Hamilton</Text>
                                    <Text style={styles.team}>Mercedes</Text>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={styles.historySection}>
                        <Text style={styles.sectionTitle}>História</Text>
                        <Text style={styles.historyText}>Conheça os pilotos de formula 1 que fizeram história em 1960</Text>
                        <TouchableOpacity style={styles.viewPilotsButton} onPress={() => navigation.navigate('Drivers')}>
                            <Text style={styles.viewPilotsButtonText}>Ver pilotos</Text>
                            <Icon name="chevron-right" size={14} color={theme.Colors.primary[200]} />
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View >
        </SafeAreaView >
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        fontFamily: 'Inter',
        fontStyle: 'normal',
        position: 'relative',
    },
    topBackground: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '50%',
        backgroundColor: theme.Colors.primary[950],
    },
    bottomBackground: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '50%',
        backgroundColor: theme.Colors.primary[50],
    },
    container: {
        backgroundColor: '#FFFFFF'
    },
    header: {
        padding: 20,
        backgroundColor: theme.Colors.primary[950],
    },
    greetings: {
        ...theme.Typography.headings.h5,
        color: theme.Colors.primary[50]
    },
    nextRaceTitle: {
        ...theme.Typography.body.smallSemiBold,
        color: '#FFFFFF80',
        marginBottom: 4
    },
    nextRaceName: {
        ...theme.Typography.headings.h6,
        color: theme.Colors.base.white,
        marginBottom: 16
    },
    nextRaceDate: {
        ...theme.Typography.body.mediumSemiBold,
        color: '#FFFFFFCC',
        marginBottom: 8
    },
    infoContainer: {
        paddingVertical: 8
    },
    lastRaceTitle: {
        fontSize: 12,
        fontWeight: "600",
        lineHeight: 16,
        letterSpacing: -0.5,
        opacity: 0.8,
        color: "#000000"
    },
    raceCard: {
        backgroundColor: theme.Colors.primary[950],
        paddingHorizontal: 20,
    },
    raceDetails: {
        position: 'relative',
    },
    raceDateTitle: {
        color: theme.Colors.base.black,
    },
    raceDate: {
        ...theme.Typography.body.mediumSemiBold,
        color: '#00000099',
        marginBottom: 8
    },
    logoImage: {
        width: 37,
        height: 28,
        marginBottom: 10,
    },
    trackImage: {
        position: "absolute",
        right: 0,
        top: 2.6,
    },
    actionButtons: {
        paddingVertical: 20,
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    lastRaceCard: {
        paddingVertical: 8,
        position: 'relative',
    },
    button: {
        backgroundColor: '#4CAF50',
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 5,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 12,
    },
    lastRace: {
        backgroundColor: theme.Colors.base.white,
        padding: 20,
    },
    carImage: {
        resizeMode: 'contain',
        position: 'absolute',
        right: 0
    },
    raceName: {
        ...theme.Typography.headings.h6,
        color: theme.Colors.base.black,
        marginBottom: 16
    },
    podium: {
        marginTop: 16,
        paddingTop: 12,
        paddingHorizontal: 12,
        paddingBottom: 12,
        borderWidth: 1,
        borderColor: theme.Colors.neutro[300],
        borderRadius: 12,
        marginBottom: 8
    },
    positionOne: {
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    positionTwo: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginVertical: 8,
    },
    positionThree: {
        flexDirection: 'row',
        alignItems: 'flex-start'
    },
    position: {
        ...theme.Typography.body.mediumSemiBold,
        color: theme.Colors.neutro[950],
        marginHorizontal: 8
    },
    pilot: {
        ...theme.Typography.body.mediumSemiBold,
        color: theme.Colors.base.black,
        marginRight: 4
    },
    team: {
        ...theme.Typography.body.mediumSemiBold,
        color: theme.Colors.neutro[400]
    },
    historySection: {
        padding: 20,
        backgroundColor: theme.Colors.primary[50],
    },
    sectionTitle: {
        ...theme.Typography.body.smallSemiBold,
        color: '#00000080',
        marginBottom: 4
    },
    historyText: {
        ...theme.Typography.body.mediumBold,
        color: theme.Colors.primary[950],
        marginVertical: 8,
    },
    viewPilotsButton: {
        backgroundColor: theme.Colors.neutro[900],
        padding: 16,
        borderRadius: 12,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 12,
        marginBottom: 22,
    },
    viewPilotsButtonText: {
        ...theme.Typography.body.mediumBold,
        color: theme.Colors.primary[200],
        flex: 1
    },
});

export default HomeScreen;
