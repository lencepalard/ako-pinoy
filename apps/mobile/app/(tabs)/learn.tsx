import { ScrollView, View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Link } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'

const LESSONS = [
  { slug: 'basic-greetings', title: 'Basic Greetings', tagalog: 'Mga Pagbati', icon: '👋', xp: 10, difficulty: 'Beginner' },
  { slug: 'mano-po-tradition', title: 'Mano Po Tradition', tagalog: 'Tradisyon ng Mano Po', icon: '🙏', xp: 10, difficulty: 'Beginner' },
  { slug: 'numbers-counting', title: 'Numbers & Counting', tagalog: 'Mga Numero', icon: '🔢', xp: 10, difficulty: 'Beginner' },
  { slug: 'filipino-family', title: 'Filipino Family', tagalog: 'Pamilyang Pilipino', icon: '👨‍👩‍👧‍👦', xp: 10, difficulty: 'Beginner' },
  { slug: 'food-and-eating', title: 'Food & Eating', tagalog: 'Pagkain', icon: '🍚', xp: 15, difficulty: 'Beginner' },
  { slug: 'jeepney-ride', title: 'Riding the Jeepney', tagalog: 'Jeepney', icon: '🚌', xp: 15, difficulty: 'Intermediate' },
]

export default function LearnTab() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fffdf5' }}>
      <ScrollView contentContainerStyle={{ padding: 20 }} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>📚 Mga Aralin</Text>
        <Text style={styles.subtitle}>Lessons · {LESSONS.length} available</Text>

        <View style={{ gap: 12, marginTop: 16 }}>
          {LESSONS.map((lesson) => (
            <Link key={lesson.slug} href={`/lesson/${lesson.slug}` as '/'} asChild>
              <TouchableOpacity style={styles.lessonCard}>
                <View style={styles.lessonIcon}>
                  <Text style={{ fontSize: 28 }}>{lesson.icon}</Text>
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={styles.lessonTitle}>{lesson.title}</Text>
                  <Text style={styles.lessonTagalog}>{lesson.tagalog}</Text>
                  <View style={{ flexDirection: 'row', gap: 6, marginTop: 4 }}>
                    <View style={styles.diffBadge}>
                      <Text style={styles.diffBadgeText}>{lesson.difficulty}</Text>
                    </View>
                    <View style={styles.xpBadge}>
                      <Text style={styles.xpBadgeText}>+{lesson.xp} XP</Text>
                    </View>
                  </View>
                </View>
                <Text style={{ fontSize: 20, color: '#9e9080' }}>›</Text>
              </TouchableOpacity>
            </Link>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  title: { fontSize: 26, fontWeight: '900', color: '#0038a8' },
  subtitle: { fontSize: 14, color: '#6b5d45', marginTop: 4 },
  lessonCard: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    padding: 16,
    backgroundColor: 'white',
    borderRadius: 16,
    borderWidth: 1.5,
    borderColor: '#e8e0d0',
  },
  lessonIcon: {
    width: 52,
    height: 52,
    borderRadius: 14,
    backgroundColor: 'rgba(0,56,168,0.08)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  lessonTitle: { fontSize: 15, fontWeight: '700', color: '#1a1208' },
  lessonTagalog: { fontSize: 12, color: '#6b5d45', fontStyle: 'italic', marginTop: 2 },
  diffBadge: { backgroundColor: 'rgba(34,197,94,0.15)', borderRadius: 999, paddingHorizontal: 8, paddingVertical: 2 },
  diffBadgeText: { fontSize: 11, fontWeight: '600', color: '#22c55e' },
  xpBadge: { backgroundColor: '#fcd116', borderRadius: 999, paddingHorizontal: 8, paddingVertical: 2 },
  xpBadgeText: { fontSize: 11, fontWeight: '800', color: '#3d2b1f' },
})
