import React, { useEffect, useState } from 'react';
import { View, ScrollView, Text, FlatList, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import CountryFlag from 'react-native-country-flag';
import axios from 'axios';
import nationalities from 'i18n-nationality';
import { SafeAreaView } from 'react-native-safe-area-context';
import theme from '../styles/theme';
import Icon from 'react-native-vector-icons/FontAwesome';

nationalities.registerLocale(require('i18n-nationality/langs/en.json'));

const convertNationalityToCountryCode = (nationality: string): string => {
    const isoCode = nationalities.getAlpha2Code(nationality, 'en');
    return isoCode || "UN";
};

interface Driver {
    driverId: string;
    givenName: string;
    familyName: string;
    dateOfBirth: string;
    nationality: string;
}

const DriversScreen: React.FC = ({ navigation }) => {
    const [drivers, setDrivers] = useState<Driver[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchDrivers = async () => {
            try {
                const response = await axios.get('https://ergast.com/api/f1/drivers.json');
                const fetchedDrivers = response.data.MRData.DriverTable.Drivers;

                const filteredDrivers = fetchedDrivers.filter((driver: Driver) =>
                    new Date(driver.dateOfBirth) >= new Date('1960-01-01')
                );

                setDrivers(filteredDrivers);
            } catch (err) {
                console.error('Error fetching drivers:', err);
                setError("Failed to load drivers");
            } finally {
                setLoading(false);
            }
        };

        fetchDrivers();
    }, []);

    if (loading) {
        return <ActivityIndicator size="large" color={theme.Colors.primary[950]} style={styles.loading} />;
    }

    if (error) {
        return (
            <View style={styles.errorContainer}>
                <Text style={styles.errorText}>{error}</Text>
            </View>
        );
    }

    const renderDriver = ({ item }: { item: Driver }) => {
        const isoCode = convertNationalityToCountryCode(item.nationality);

        return (
            <View style={styles.driverCard}>
                <CountryFlag isoCode={isoCode} size={28} style={styles.flag} />
                <View style={styles.driverInfo}>
                    <Text style={styles.driverName}>{item.givenName}</Text>
                    <Text style={styles.driverDetails}>Nascido em {new Date(item.dateOfBirth).toLocaleDateString('pt-BR', {
                        day: '2-digit',
                        month: 'long',
                        year: 'numeric'
                    })}</Text>
                </View>
            </View>
        );
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.content}>
                <TouchableOpacity onPress={() => { navigation.goBack() }} style={styles.backButton}>
                    <Icon name="chevron-left" size={14} color={theme.Colors.primary[950]} />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>História</Text>
            </View>
            <ScrollView style={styles.container}>
                <View style={styles.intro}>
                    <Text style={styles.title}>História da F1</Text>
                    <Text style={styles.subtitle}>Conheça os nomes que fizeram história, desde os pioneiros até os campeões inesquecíveis.</Text>
                </View>
                <Text style={styles.sectionTitle}>Pilotos</Text>
                <View style={styles.driversCard}>
                    <FlatList
                        data={drivers}
                        keyExtractor={(item) => item.driverId}
                        renderItem={renderDriver}
                        scrollEnabled={false}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: theme.Colors.base.white,
    },
    container: {
        flex: 1,
        paddingHorizontal: 20,
    },
    intro: {
        paddingVertical: 20,
    },
    driversCard: {
        paddingBottom: 32,
    },
    flag: {
        marginRight: 16,
        borderRadius: 14,
        width: 28,
        height: 28,
        resizeMode: 'stretch'
    },
    loading: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    errorContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    errorText: {
        color: 'red',
        fontSize: 16,
    },
    title: {
        ...theme.Typography.headings.h5,
        marginBottom: 8,
        color: theme.Colors.neutro[950]
    },
    subtitle: {
        ...theme.Typography.body.largeSemiBold,
        color: theme.Colors.neutro[500]
    },
    sectionTitle: {
        ...theme.Typography.body.smallSemiBold,
        color: '#00000080',
        marginTop: 32,
    },
    driverCard: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        marginTop: 10,
        marginBottom: 0,
        padding: 12,
        borderRadius: 12,
        marginVertical: 8,
        borderWidth: 1,
        borderColor: theme.Colors.neutro[200],
    },
    driverInfo: {
        flex: 1,
    },
    driverName: {
        ...theme.Typography.body.largeBold,
        color: theme.Colors.neutro[950]
    },
    driverDetails: {
        ...theme.Typography.body.mediumMedium,
        color: theme.Colors.neutro[500],
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 20,
        height: 80,
        position: 'relative',
    },
    backButton: {
        position: 'absolute',
        left: 20,
        padding: 8,
        borderRadius: 7,
        backgroundColor: theme.Colors.primary[50],
        borderWidth: 1,
        borderColor: theme.Colors.primary[100],
        width: 40,
        height: 40,
        alignItems: "center",
        justifyContent: 'center'
    },
    headerTitle: {
        ...theme.Typography.body.mediumSemiBold,
        color: theme.Colors.neutro[900],
    },
});

export default DriversScreen;
