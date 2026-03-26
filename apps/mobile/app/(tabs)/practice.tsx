import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native'
import { Link } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function PracticeTab() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fffdf5' }}>
      <ScrollView contentContainerStyle={{ padding: 20, gap: 16 }}>
        <Text style={styles.title}>🧠 Pagsusulit</Text>
        <Text style={styles.subtitle}>Practice & Quiz</Text>

        {[
          { href: '/quiz/daily', icon: '⭐', title: 'Daily Challenge', desc: '10 questions · Mixed topics', xp: 40, color: '#0038a8' },
          { href: '/quiz/greetings-1', icon: '👋', title: 'Greetings Quiz', desc: '5 questions · Beginner', xp: 20, color: '#22c55e' },
          { href: '/quiz/culture-1', icon: '🌺', title: 'Culture Quiz', desc: '5 questions · Beginner', xp: 20, color: '#f97316' },
          { href: '/quiz/food-1', icon: '🍚', title: 'Food Quiz', desc: '5 questions · Beginner', xp: 20, color: '#ec4899' },
        ].map((quiz) => (
          <Link key={quiz.href} href={quiz.href as '/'} asChild>
            <TouchableOpacity style={[styles.card, { borderLeftWidth: 4, borderLeftColor: quiz.color }]}>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 14 }}>
                <Text style={{ fontSize: 32 }}>{quiz.icon}</Text>
                <View style={{ flex: 1 }}>
                  <Text style={styles.cardTitle}>{quiz.title}</Text>
                  <Text style={styles.cardDesc}>{quiz.desc}</Text>
                </View>
                <View style={styles.xpBadge}>
                  <Text style={styles.xpText}>+{quiz.xp} XP</Text>
                </View>
              </View>
            </TouchableOpacity>
          </Link>
        ))}
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  title: { fontSize: 26, fontWeight: '900', color: '#0038a8' },
  subtitle: { fontSize: 14, color: '#6b5d45', marginTop: 2 },
  card: {
    backgroundColor: 'white', borderRadius: 16,
    borderWidth: 1.5, borderColor: '#e8e0d0', padding: 16,
  },
  cardTitle: { fontSize: 16, fontWeight: '700', color: '#1a1208' },
  cardDesc: { fontSize: 13, color: '#6b5d45', marginTop: 2 },
  xpBadge: { backgroundColor: '#fcd116', borderRadius: 999, paddingHorizontal: 10, paddingVertical: 4 },
  xpText: { fontSize: 12, fontWeight: '800', color: '#3d2b1f' },
})
