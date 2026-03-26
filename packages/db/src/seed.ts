import 'dotenv/config'
import { db } from './client'
import { vocabulary, lessons, quizQuestions, achievements, scenarios } from './schema'

async function seed() {
  console.log('🌱 Seeding Ako Pinoy database...')

  // ── Vocabulary ──────────────────────────────────────────
  console.log('📖 Seeding vocabulary...')
  await db.insert(vocabulary).values([
    // Greetings
    { tagalog: 'Magandang umaga', english: 'Good morning', pronunciation: 'ma-gan-DANG u-MA-ga', category: 'greetings', difficulty: 'beginner', exampleTagalog: 'Magandang umaga, Lola!', exampleEnglish: 'Good morning, Grandma!' },
    { tagalog: 'Magandang hapon', english: 'Good afternoon', pronunciation: 'ma-gan-DANG HA-pon', category: 'greetings', difficulty: 'beginner' },
    { tagalog: 'Magandang gabi', english: 'Good evening', pronunciation: 'ma-gan-DANG GA-bi', category: 'greetings', difficulty: 'beginner' },
    { tagalog: 'Kumusta ka?', english: 'How are you?', pronunciation: 'ku-MUS-ta ka', category: 'greetings', difficulty: 'beginner', exampleTagalog: 'Kumusta ka, pare?', exampleEnglish: 'How are you, buddy?' },
    { tagalog: 'Mabuti naman', english: "I'm fine", pronunciation: 'ma-BU-ti NA-man', category: 'greetings', difficulty: 'beginner' },
    { tagalog: 'Salamat', english: 'Thank you', pronunciation: 'sa-LA-mat', category: 'greetings', difficulty: 'beginner', exampleTagalog: 'Salamat po!', exampleEnglish: 'Thank you (respectful)!' },
    { tagalog: 'Walang anuman', english: "You're welcome", pronunciation: 'wa-LANG a-NU-man', category: 'greetings', difficulty: 'beginner' },
    { tagalog: 'Paalam', english: 'Goodbye', pronunciation: 'pa-a-LAM', category: 'greetings', difficulty: 'beginner' },
    { tagalog: 'Kumain ka na ba?', english: 'Have you eaten?', pronunciation: 'ku-MA-in ka na ba', category: 'greetings', difficulty: 'beginner', exampleTagalog: 'Kumain ka na ba, hijo?', exampleEnglish: 'Have you eaten, son?' },
    { tagalog: 'Po', english: 'Respectful particle', pronunciation: 'po', category: 'greetings', difficulty: 'beginner' },
    { tagalog: 'Opo', english: 'Yes (respectful)', pronunciation: 'O-po', category: 'greetings', difficulty: 'beginner' },
    // Family
    { tagalog: 'Tatay', english: 'Father', pronunciation: 'TA-tay', category: 'family', difficulty: 'beginner' },
    { tagalog: 'Nanay', english: 'Mother', pronunciation: 'NA-nay', category: 'family', difficulty: 'beginner' },
    { tagalog: 'Kuya', english: 'Older brother (honorific)', pronunciation: 'KU-ya', category: 'family', difficulty: 'beginner' },
    { tagalog: 'Ate', english: 'Older sister (honorific)', pronunciation: 'A-te', category: 'family', difficulty: 'beginner' },
    { tagalog: 'Lolo', english: 'Grandfather', pronunciation: 'LO-lo', category: 'family', difficulty: 'beginner' },
    { tagalog: 'Lola', english: 'Grandmother', pronunciation: 'LO-la', category: 'family', difficulty: 'beginner' },
    { tagalog: 'Kapatid', english: 'Sibling', pronunciation: 'ka-PA-tid', category: 'family', difficulty: 'beginner' },
    { tagalog: 'Pamilya', english: 'Family', pronunciation: 'pa-MIL-ya', category: 'family', difficulty: 'beginner' },
    // Food
    { tagalog: 'Kanin', english: 'Cooked rice', pronunciation: 'KA-nin', category: 'food', difficulty: 'beginner' },
    { tagalog: 'Adobo', english: 'Marinated meat (vinegar & soy)', pronunciation: 'a-DO-bo', category: 'food', difficulty: 'beginner' },
    { tagalog: 'Sinigang', english: 'Sour tamarind soup', pronunciation: 'si-ni-GANG', category: 'food', difficulty: 'beginner' },
    { tagalog: 'Lechon', english: 'Roasted whole pig', pronunciation: 'LE-chon', category: 'food', difficulty: 'beginner' },
    { tagalog: 'Tapsilog', english: 'Breakfast: tapa + sinangag + itlog', pronunciation: 'tap-si-LOG', category: 'food', difficulty: 'intermediate' },
    { tagalog: 'Lumpia', english: 'Filipino spring rolls', pronunciation: 'LUM-pya', category: 'food', difficulty: 'beginner' },
    { tagalog: 'Pancit', english: 'Stir-fried noodles', pronunciation: 'PAN-sit', category: 'food', difficulty: 'beginner' },
    { tagalog: 'Halo-halo', english: 'Mixed iced dessert', pronunciation: 'HA-lo HA-lo', category: 'food', difficulty: 'beginner' },
    { tagalog: 'Masarap', english: 'Delicious', pronunciation: 'ma-sa-RAP', category: 'food', difficulty: 'beginner' },
    { tagalog: 'Kain tayo!', english: "Let's eat!", pronunciation: 'KAIN ta-YO', category: 'food', difficulty: 'beginner' },
    // Daily Life
    { tagalog: 'Bahay', english: 'House / Home', pronunciation: 'BA-hay', category: 'daily_life', difficulty: 'beginner' },
    { tagalog: 'Palengke', english: 'Wet market', pronunciation: 'pa-LENG-ke', category: 'daily_life', difficulty: 'beginner' },
    { tagalog: 'Jeepney', english: 'Iconic public transport', pronunciation: 'JEEP-ni', category: 'daily_life', difficulty: 'beginner' },
    { tagalog: 'Sige', english: 'Okay / Go ahead', pronunciation: 'SI-ge', category: 'daily_life', difficulty: 'beginner' },
    { tagalog: 'Sandali lang', english: 'Just a moment', pronunciation: 'san-DA-li lang', category: 'daily_life', difficulty: 'beginner' },
    { tagalog: 'Magkano?', english: 'How much?', pronunciation: 'mag-KA-no', category: 'daily_life', difficulty: 'beginner' },
    { tagalog: 'Mahal', english: 'Expensive / Dear / Love', pronunciation: 'ma-HAL', category: 'daily_life', difficulty: 'beginner' },
    { tagalog: 'Mura', english: 'Cheap', pronunciation: 'MU-ra', category: 'daily_life', difficulty: 'beginner' },
    // Culture
    { tagalog: 'Bayanihan', english: 'Communal unity / Working together', pronunciation: 'ba-ya-NI-han', category: 'culture', difficulty: 'intermediate' },
    { tagalog: 'Hiya', english: 'Shame / Social embarrassment', pronunciation: 'HI-ya', category: 'culture', difficulty: 'intermediate' },
    { tagalog: 'Pakikisama', english: 'Getting along / Group harmony', pronunciation: 'pa-ki-ki-SA-ma', category: 'culture', difficulty: 'intermediate' },
    { tagalog: 'Utang na loob', english: 'Debt of gratitude', pronunciation: 'U-tang na lo-OB', category: 'culture', difficulty: 'intermediate' },
    { tagalog: 'Bahala na', english: 'Come what may / Leave it to God', pronunciation: 'ba-HA-la na', category: 'culture', difficulty: 'intermediate' },
    { tagalog: 'Mano po', english: 'Respectful gesture to elders', pronunciation: 'MA-no po', category: 'culture', difficulty: 'beginner' },
    { tagalog: 'Fiesta', english: 'Town festival / Patron saint feast', pronunciation: 'FYES-ta', category: 'culture', difficulty: 'beginner' },
  ]).onConflictDoNothing()

  // ── Lessons ──────────────────────────────────────────────
  console.log('📚 Seeding lessons...')
  await db.insert(lessons).values([
    { title: 'Basic Greetings', slug: 'basic-greetings', description: 'Learn how to say hello, goodbye, and common greetings', category: 'language', difficulty: 'beginner', xpReward: 10, orderIndex: 1, isPublished: true },
    { title: 'Mano Po Tradition', slug: 'mano-po-tradition', description: 'The Filipino tradition of showing respect to elders', category: 'culture', difficulty: 'beginner', xpReward: 10, orderIndex: 2, isPublished: true },
    { title: 'Numbers & Counting', slug: 'numbers-counting', description: 'Count from 1 to 100 in Tagalog', category: 'language', difficulty: 'beginner', xpReward: 10, orderIndex: 3, isPublished: true },
    { title: 'Filipino Family', slug: 'filipino-family', description: 'Filipino family values, roles, and structure', category: 'culture', difficulty: 'beginner', xpReward: 10, orderIndex: 4, isPublished: true },
    { title: 'Food & Eating', slug: 'food-and-eating', description: 'Filipino cuisine and food culture', category: 'food', difficulty: 'beginner', xpReward: 15, orderIndex: 5, isPublished: true },
    { title: 'Colors in Tagalog', slug: 'colors-tagalog', description: 'Learn all the colors in Tagalog', category: 'language', difficulty: 'beginner', xpReward: 10, orderIndex: 6, isPublished: true },
    { title: 'Riding the Jeepney', slug: 'jeepney-ride', description: 'Navigate the iconic Filipino jeepney', category: 'scenario', difficulty: 'intermediate', xpReward: 15, orderIndex: 7, isPublished: true },
    { title: 'At the Palengke', slug: 'palengke-market', description: 'Shopping at the wet market', category: 'scenario', difficulty: 'intermediate', xpReward: 20, orderIndex: 8, isPublished: true },
    { title: 'Bayanihan Spirit', slug: 'bayanihan-spirit', description: 'The Filipino spirit of communal unity', category: 'values', difficulty: 'intermediate', xpReward: 15, orderIndex: 9, isPublished: true },
    { title: 'Tagalog Verb System', slug: 'tagalog-verbs', description: 'Understand the unique Filipino verb focus system', category: 'language', difficulty: 'intermediate', xpReward: 20, orderIndex: 10, isPublished: true },
  ]).onConflictDoNothing()

  // ── Achievements ──────────────────────────────────────────
  console.log('🏅 Seeding achievements...')
  await db.insert(achievements).values([
    { key: 'first_lesson', title: 'First Step', description: 'Completed your first lesson', xpReward: 5 },
    { key: 'first_correct', title: 'Salamat!', description: 'Got your first correct quiz answer', xpReward: 5 },
    { key: 'streak_7', title: '7-Day Streak', description: 'Learned 7 days in a row', xpReward: 50 },
    { key: 'streak_30', title: '30-Day Streak', description: 'Learned 30 days in a row', xpReward: 200 },
    { key: 'first_mano_po', title: 'Mano Po', description: 'Learned the Mano Po tradition', xpReward: 10 },
    { key: 'palengke_pro', title: 'Palengke Pro', description: 'Completed the Palengke scenario', xpReward: 20 },
    { key: 'kumain_na', title: 'Kumain Na!', description: 'Learned 20 food-related words', xpReward: 15 },
    { key: 'baybayin_basic', title: 'Baybayin Basic', description: 'Wrote your name in Baybayin', xpReward: 25 },
    { key: 'max_level', title: 'Tunay na Pinoy', description: 'Reached the highest level', xpReward: 500 },
    { key: 'supporter', title: 'Supporter', description: 'Supported Ako Pinoy with a donation', xpReward: 0 },
  ]).onConflictDoNothing()

  // ── Scenarios ─────────────────────────────────────────────
  console.log('🏙️ Seeding scenarios...')
  await db.insert(scenarios).values([
    {
      title: 'Sa Palengke',
      description: 'Practice bargaining and buying at the Filipino wet market',
      setting: 'palengke',
      xpReward: 20,
      isPublished: true,
      dialogueConfig: {
        systemPrompt: 'You are Aling Rosa, a friendly vendor at the palengke (wet market) in Manila. You sell vegetables and fruits. Speak in natural Filipino/Tagalog with some English mixed in (Taglish). Be warm and helpful. Teach the learner how to buy items, ask prices, and bargain politely.',
        characterName: 'Aling Rosa',
        setting: 'Manila palengke, morning time, busy market sounds',
      },
    },
    {
      title: 'Sakay ng Jeepney',
      description: 'Navigate the iconic Filipino jeepney',
      setting: 'jeepney',
      xpReward: 15,
      isPublished: true,
      dialogueConfig: {
        systemPrompt: 'You are Kuya Driver, a jeepney driver in Manila. Help the learner ride the jeepney correctly — how to get on, pass the fare, say where they are going, and ask to stop. Use natural Tagalog/Taglish.',
        characterName: 'Kuya Driver',
        setting: 'EDSA jeepney route, Metro Manila',
      },
    },
    {
      title: 'Family Gathering',
      description: 'Join a Filipino family reunion',
      setting: 'family',
      xpReward: 20,
      isPublished: true,
      dialogueConfig: {
        systemPrompt: 'You are Lola Coring, the grandmother of a Filipino family. The learner is visiting for a family gathering. Greet them warmly, ask if they have eaten, teach them mano po, and share stories about Filipino family values.',
        characterName: 'Lola Coring',
        setting: 'Filipino home, Sunday family lunch',
      },
    },
  ]).onConflictDoNothing()

  console.log('✅ Seeding complete! Database is ready.')
}

seed().catch((e) => {
  console.error('❌ Seed failed:', e)
  process.exit(1)
})
