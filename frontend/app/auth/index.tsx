import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '@/contexts/ThemeContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { Bus, MapPin } from 'lucide-react-native';

export default function AuthIndex() {
  const { theme } = useTheme();
  const { t } = useLanguage();
  const router = useRouter();

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
      <View style={styles.content}>
        <View style={styles.header}>
          <View style={[styles.logoContainer, { backgroundColor: theme.primary }]}>
            <Bus color={theme.background} size={40} />
          </View>
          <Text style={[styles.title, { color: theme.text }]}>Ridra</Text>
          <Text style={[styles.subtitle, { color: theme.textSecondary }]}>
            {t('welcome')}
          </Text>
        </View>

        <View style={styles.features}>
          <View style={styles.feature}>
            <MapPin color={theme.primary} size={24} />
            <Text style={[styles.featureText, { color: theme.text }]}>
              Track buses in real-time
            </Text>
          </View>
          <View style={styles.feature}>
            <Bus color={theme.primary} size={24} />
            <Text style={[styles.featureText, { color: theme.text }]}>
              Find buses near you
            </Text>
          </View>
        </View>

        <View style={styles.buttons}>
          <Pressable
            style={[styles.button, styles.primaryButton, { backgroundColor: theme.primary }]}
            onPress={() => router.push('/auth/login')}
          >
            <Text style={[styles.buttonText, { color: theme.background }]}>
              {t('login')}
            </Text>
          </Pressable>

          <Pressable
            style={[styles.button, styles.secondaryButton, { borderColor: theme.primary }]}
            onPress={() => router.push('/auth/signup')}
          >
            <Text style={[styles.buttonText, { color: theme.primary }]}>
              {t('signup')}
            </Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: 'center',
  },
  header: {
    alignItems: 'center',
    marginBottom: 80,
  },
  logoContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.2,
    shadowRadius: 16,
    elevation: 8,
  },
  title: {
    fontSize: 36,
    fontFamily: 'Inter-Bold',
    marginBottom: 12,
    letterSpacing: -1,
  },
  subtitle: {
    fontSize: 18,
    fontFamily: 'Inter-Regular',
    textAlign: 'center',
    opacity: 0.8,
    lineHeight: 26,
  },
  features: {
    marginBottom: 60,
    paddingHorizontal: 8,
  },
  feature: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    paddingVertical: 4,
  },
  featureText: {
    fontSize: 17,
    fontFamily: 'Inter-Medium',
    marginLeft: 16,
    letterSpacing: -0.2,
  },
  buttons: {
    gap: 20,
    paddingHorizontal: 8,
  },
  button: {
    paddingVertical: 18,
    paddingHorizontal: 32,
    borderRadius: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 4,
  },
  primaryButton: {
    shadowOpacity: 0.2,
  },
  secondaryButton: {
    borderWidth: 2,
    backgroundColor: 'transparent',
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Inter-Bold',
    letterSpacing: -0.3,
  },
});