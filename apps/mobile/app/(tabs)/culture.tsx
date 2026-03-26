import { ScrollView, View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const ARTICLES = [
  { title: 'Bayanihan — Community Spirit', category: 'Values', icon: '🤝', time: '3 min' },
  { title: 'Utang na Loob', category: 'Values', icon: '💛', time: '4 min' },
  { title: 'Mano Po Tradition', category: 'Customs', icon: '🙏', time: '2 min' },
  { title: 'Filipino Fiesta', category: 'Traditions', icon: '🎉', time: '5 min' },
  { title: 'Food Culture', category: 'Food', icon: '🍽️', time: '6 min' },
  { title: 'The Jeepney', category: 'Daily Life', icon: '🚌', time: '3 min' },
]

export default function CultureTab() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fffdf5' }}>
      <ScrollView contentContainerStyle={{ padding: 20 }}>
        <Text style={styles.title}>🌺 Kultura</Text>
        <Text style={styles.subtitle}>Filipino Culture · Deep Dives</Text>

        <View style={{ gap: 12, marginTop: 16 }}>
          {ARTICLES.map((a) => (
            <TouchableOpacity key={a.title} style={styles.card}>
              <Text style={{ fontSize: 28, marginBottom: 8 }}>{a.icon}</Text>
              <View style={styles.catRow}>
                <View style={styles.catBadge}><Text style={styles.catText}>{a.category}</Text></View>
                <Text style={styles.timeText}>{a.time} read</Text>
              </View>
              <Text style={styles.articleTitle}>{a.title}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  title: { fontSize: 26, fontWeight: '900', color: '#0038a8' },
  subtitle: { fontSize: 14, color: '#6b5d45', marginTop: 4 },
  card: {
    backgroundColor: 'white', borderRadius: 16,
    borderWidth: 1.5, borderColor: '#e8e0d0', padding: 16,
  },
  catRow: { flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 8 },
  catBadge: { backgroundColor: 'rgba(249,115,22,0.12)', borderRadius: 999, paddingHorizontal: 8, paddingVertical: 2 },
  catText: { fontSize: 11, fontWeight: '700', color: '#f97316' },
  timeText: { fontSize: 11, color: '#6b5d45' },
  articleTitle: { fontSize: 16, fontWeight: '800', color: '#1a1208' },
})
