import { ScrollView, View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Link } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useUser } from '@clerk/clerk-expo'

const COLORS = {
  primary: '#0038a8',
  gold: '#fcd116',
  streak: '#f97316',
  surface: '#fffdf5',
  card: '#ffffff',
  border: '#e8e0d0',
  text: '#1a1208',
  muted: '#6b5d45',
}

const QUICK_ACTIONS = [
  { href: '/practice', icon: '🧠', label: 'Daily Quiz', color: '#0038a8' },
  { href: '/learn', icon: '📚', label: 'New Lesson', color: '#7c3aed' },
  { href: '/practice', icon: '📖', label: 'Review Words', color: '#22c55e' },
  { href: '/culture', icon: '🌺', label: 'Culture', color: '#f97316' },
]

export default function HomeTab() {
  const { user } = useUser()
  const firstName = user?.firstName ?? 'Kaibigan'

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.surface }}>
      <ScrollView contentContainerStyle={{ padding: 20, gap: 20 }} showsVerticalScrollIndicator={false}>

        {/* Header */}
        <View>
          <Text style={styles.greeting}>Magandang araw, {firstName}! 👋</Text>
          <Text style={styles.subtext}>Good day! Ready to learn something Filipino?</Text>
        </View>

        {/* Streak Card */}
        <View style={[styles.card, { backgroundColor: '#f97316', padding: 20 }]}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 16 }}>
            <Text style={{ fontSize: 40 }}>🔥</Text>
            <View style={{ flex: 1 }}>
              <Text style={{ fontWeight: '900', fontSize: 32, color: 'white' }}>0</Text>
              <Text style={{ color: 'rgba(255,255,255,0.9)', fontSize: 14 }}>day streak — learn today!</Text>
            </View>
          </View>
        </View>

        {/* XP Progress */}
        <View style={styles.card}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 12 }}>
            <View style={styles.levelChip}>
              <Text style={styles.levelChipText}>Baguhan</Text>
            </View>
            <View style={styles.xpBadge}>
              <Text style={styles.xpBadgeText}>⚡ 0 XP</Text>
            </View>
          </View>
          <View style={styles.progressTrack}>
            <View style={[styles.progressFill, { width: '0%' }]} />
          </View>
          <Text style={{ fontSize: 12, color: COLORS.muted, marginTop: 6 }}>500 XP to Natututo</Text>
        </View>

        {/* Word of the Day */}
        <View style={[styles.card, { backgroundColor: COLORS.primary, padding: 20 }]}>
          <Text style={{ fontSize: 11, color: '#fcd116', fontWeight: '700', marginBottom: 8 }}>
            📅 WORD OF THE DAY
          </Text>
          <Text style={{ fontSize: 28, fontWeight: '900', color: 'white', marginBottom: 4 }}>
            Salamat
          </Text>
          <Text style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', fontStyle: 'italic', marginBottom: 6 }}>
            /sa-LA-mat/
          </Text>
          <Text style={{ fontSize: 16, color: 'rgba(255,255,255,0.9)' }}>Thank you</Text>
        </View>

        {/* Quick Actions */}
        <View>
          <Text style={styles.sectionTitle}>Quick Actions</Text>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 12 }}>
            {QUICK_ACTIONS.map((action) => (
              <Link key={action.label} href={action.href as '/'} asChild>
                <TouchableOpacity
                  style={{
                    width: '47%',
                    padding: 16,
                    borderRadius: 16,
                    backgroundColor: COLORS.card,
                    borderWidth: 1.5,
                    borderColor: COLORS.border,
                    alignItems: 'center',
                    gap: 8,
                  }}
                >
                  <Text style={{ fontSize: 28 }}>{action.icon}</Text>
                  <Text style={{ fontWeight: '700', fontSize: 14, color: COLORS.text, textAlign: 'center' }}>
                    {action.label}
                  </Text>
                </TouchableOpacity>
              </Link>
            ))}
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  greeting: {
    fontSize: 24,
    fontWeight: '900',
    color: COLORS.primary,
    marginBottom: 4,
  },
  subtext: {
    fontSize: 14,
    color: COLORS.muted,
  },
  card: {
    backgroundColor: COLORS.card,
    borderRadius: 16,
    borderWidth: 1.5,
    borderColor: COLORS.border,
    padding: 16,
    shadowColor: '#0038a8',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '800',
    color: COLORS.text,
    marginBottom: 12,
  },
  levelChip: {
    backgroundColor: COLORS.primary,
    borderRadius: 999,
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  levelChipText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 13,
  },
  xpBadge: {
    backgroundColor: COLORS.gold,
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  xpBadgeText: {
    color: '#3d2b1f',
    fontWeight: '800',
    fontSize: 13,
  },
  progressTrack: {
    height: 10,
    borderRadius: 999,
    backgroundColor: '#f5f0e8',
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    borderRadius: 999,
    backgroundColor: COLORS.primary,
  },
})
