import { ScrollView, View, Text, TouchableOpacity, Linking, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useUser, useClerk } from '@clerk/clerk-expo'

const BADGES = [
  { icon: '📚', title: 'First Step', earned: false },
  { icon: '🔥', title: '7-Day Streak', earned: false },
  { icon: '🙏', title: 'Mano Po', earned: false },
  { icon: '🛒', title: 'Palengke Pro', earned: false },
  { icon: '🍚', title: 'Kumain Na!', earned: false },
  { icon: '🇵🇭', title: 'Tunay na Pinoy', earned: false },
]

export default function ProfileTab() {
  const { user } = useUser()
  const { signOut } = useClerk()

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fffdf5' }}>
      <ScrollView contentContainerStyle={{ padding: 20, gap: 20 }}>

        {/* Profile Header */}
        <View style={[styles.card, { alignItems: 'center', gap: 8 }]}>
          <Text style={{ fontSize: 48 }}>👤</Text>
          <Text style={{ fontSize: 20, fontWeight: '900', color: '#0038a8' }}>
            {user?.firstName ?? 'Kaibigan'}
          </Text>
          <Text style={{ fontSize: 13, color: '#6b5d45' }}>{user?.primaryEmailAddress?.emailAddress}</Text>
          <View style={styles.levelChip}><Text style={styles.levelText}>Baguhan</Text></View>
        </View>

        {/* Stats */}
        <View style={{ flexDirection: 'row', gap: 12 }}>
          {[
            { label: 'XP', value: '0', icon: '⚡', color: '#fcd116' },
            { label: 'Streak', value: '0', icon: '🔥', color: '#f97316' },
            { label: 'Lessons', value: '0', icon: '📚', color: '#0038a8' },
          ].map((s) => (
            <View key={s.label} style={[styles.card, { flex: 1, alignItems: 'center', gap: 4 }]}>
              <Text style={{ fontSize: 20 }}>{s.icon}</Text>
              <Text style={{ fontSize: 20, fontWeight: '900', color: s.color }}>{s.value}</Text>
              <Text style={{ fontSize: 11, color: '#6b5d45' }}>{s.label}</Text>
            </View>
          ))}
        </View>

        {/* Badges */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>🏅 Badges — Mga Medalya</Text>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 10, marginTop: 12 }}>
            {BADGES.map((b) => (
              <View
                key={b.title}
                style={[
                  styles.badge,
                  { opacity: b.earned ? 1 : 0.4, borderColor: b.earned ? '#fcd116' : '#e8e0d0' },
                ]}
              >
                <Text style={{ fontSize: 24 }}>{b.icon}</Text>
                <Text style={{ fontSize: 10, fontWeight: '700', color: '#1a1208', textAlign: 'center' }}>
                  {b.title}
                </Text>
              </View>
            ))}
          </View>
        </View>

        {/* Donation */}
        <View style={[styles.card, { backgroundColor: '#fef9e7', borderColor: 'rgba(252,209,22,0.4)' }]}>
          <Text style={{ fontSize: 24, textAlign: 'center', marginBottom: 8 }}>☕</Text>
          <Text style={styles.donateTitle}>Ako Pinoy is free forever.</Text>
          <Text style={styles.donateDesc}>
            If you love this app, consider supporting with $3–$5. Salamat!
          </Text>
          <TouchableOpacity
            style={styles.donateBtn}
            onPress={() => Linking.openURL('https://ko-fi.com')}
          >
            <Text style={styles.donateBtnText}>☕ Mag-donate — Support ($3–$5)</Text>
          </TouchableOpacity>
        </View>

        {/* Sign out */}
        <TouchableOpacity
          style={[styles.card, { alignItems: 'center', borderColor: '#ce1126' }]}
          onPress={() => signOut()}
        >
          <Text style={{ color: '#ce1126', fontWeight: '700', fontSize: 15 }}>Sign Out</Text>
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white', borderRadius: 16,
    borderWidth: 1.5, borderColor: '#e8e0d0', padding: 16,
  },
  levelChip: { backgroundColor: '#0038a8', borderRadius: 999, paddingHorizontal: 14, paddingVertical: 4 },
  levelText: { color: 'white', fontWeight: '700', fontSize: 13 },
  sectionTitle: { fontSize: 16, fontWeight: '800', color: '#1a1208' },
  badge: {
    width: 80, padding: 10, borderRadius: 12,
    borderWidth: 1.5, alignItems: 'center', gap: 6,
    backgroundColor: 'white',
  },
  donateTitle: { fontSize: 17, fontWeight: '800', color: '#3d2b1f', textAlign: 'center', marginBottom: 6 },
  donateDesc: { fontSize: 13, color: '#6b5d45', textAlign: 'center', lineHeight: 20, marginBottom: 16 },
  donateBtn: {
    backgroundColor: '#fcd116', borderRadius: 999,
    paddingVertical: 12, alignItems: 'center',
  },
  donateBtnText: { fontWeight: '800', fontSize: 14, color: '#3d2b1f' },
})
