import Link from 'next/link'
import { notFound } from 'next/navigation'

const ARTICLES: Record<string, {
  title: string
  icon: string
  category: string
  readTime: string
  sections: Array<{ heading?: string; body: string }>
  vocabulary?: Array<{ tagalog: string; english: string; note?: string }>
  keyTakeaway: string
}> = {
  bayanihan: {
    title: 'Bayanihan — The Spirit of Community',
    icon: '🤝',
    category: 'Values',
    readTime: '3 min',
    sections: [
      { body: 'Bayanihan (ba-ya-NI-han) is one of the most beautiful and defining values of Filipino culture. It refers to the spirit of communal unity, cooperation, and togetherness — the idea that a community must work together to achieve a common goal.' },
      { heading: 'Where the word comes from', body: 'The word comes from "bayan," meaning town, nation, or community. In its purest traditional form, bayanihan referred to the practice of neighbors literally helping a family move their entire house — a nipa hut — by carrying it on their shoulders to a new location, all together, without asking for payment.' },
      { heading: 'Bayanihan in modern life', body: 'Today, bayanihan lives on in many forms: neighbors helping after a typhoon, communities feeding each other during hard times, families pooling money for a relative\'s hospital bill, or strangers helping push a broken-down vehicle. It is the Filipino instinct to help — not because they have to, but because it is the right thing to do.' },
      { heading: 'Why it matters to you', body: 'If you live or work with Filipinos, you will see bayanihan constantly. When someone needs help, people just show up. It is also why Filipinos can seem overly generous — offering food, giving rides, sharing what little they have. This comes from a deep cultural value, not just politeness.' },
    ],
    vocabulary: [
      { tagalog: 'Bayanihan', english: 'Communal unity / helping each other', note: 'From "bayan" = community' },
      { tagalog: 'Tulungan', english: 'To help each other (verb)', note: '"Magtulungan tayo" = Let\'s help each other' },
      { tagalog: 'Kapitbahay', english: 'Neighbor', note: 'Kapít = close/hold + bahay = house' },
      { tagalog: 'Pamayanan', english: 'Community / neighborhood' },
    ],
    keyTakeaway: 'Bayanihan is not just a word — it\'s a way of life. When you see Filipinos automatically helping without being asked, you are witnessing bayanihan in action.',
  },
  'utang-na-loob': {
    title: 'Utang na Loob — Debt of Gratitude',
    icon: '💛',
    category: 'Values',
    readTime: '4 min',
    sections: [
      { body: 'Utang na loob (U-tang na lo-OB) literally means "debt of the inner self" or "debt of gratitude." It is one of the most important and sometimes misunderstood Filipino values — a deep sense of obligation to repay kindness, help, or favors received.' },
      { heading: 'How it works', body: 'In Filipino culture, when someone does something significant for you — helps you get a job, lends money during a crisis, takes care of a sick family member — you incur an utang na loob. This is not a simple "I\'ll return the favor." It is a profound moral obligation that may last years or even a lifetime.' },
      { heading: 'In practice', body: 'Utang na loob explains many Filipino behaviors that might seem strange to outsiders: why someone stays in a terrible job because the boss once helped their family, why a person can\'t say no to a relative\'s request, or why Filipinos go to extraordinary lengths to help those who helped them first.' },
      { heading: 'The positive and the challenging', body: 'On the positive side, utang na loob creates incredibly loyal, caring relationships. On the challenging side, it can be exploited — some people use past favors to manipulate others. Understanding this value helps you understand Filipino loyalty, sacrifice, and sometimes why they struggle to say "no."' },
    ],
    vocabulary: [
      { tagalog: 'Utang na loob', english: 'Debt of gratitude', note: 'Utang = debt, Loob = inner self' },
      { tagalog: 'Nagpapasalamat', english: 'Being grateful / giving thanks' },
      { tagalog: 'Obligasyon', english: 'Obligation', note: 'From Spanish "obligación"' },
      { tagalog: 'Walang utang na loob', english: 'Ungrateful person', note: 'A serious insult in Filipino culture' },
    ],
    keyTakeaway: 'If a Filipino has utang na loob to you, they will move mountains for you. If you have it to them, honor it — forgetting it is one of the worst things you can do in Filipino culture.',
  },
  hiya: {
    title: 'Hiya — Shame and Social Harmony',
    icon: '🙈',
    category: 'Values',
    readTime: '3 min',
    sections: [
      { body: 'Hiya (HI-ya) is often translated as "shame" or "embarrassment," but it\'s much more nuanced than that. It is the Filipino value of maintaining social harmony by avoiding actions that would cause embarrassment to oneself or others.' },
      { heading: 'What hiya looks like', body: 'Hiya is why Filipinos often say "yes" even when they mean "no" — they don\'t want to embarrass you by refusing. It\'s why they might not speak up in a meeting even when they have important ideas — they don\'t want to seem arrogant. It\'s why they apologize profusely even for small mistakes.' },
      { heading: 'Walang hiya — a serious accusation', body: '"Walang hiya!" (No shame!) is one of the strongest insults in Filipino culture. It means someone has no regard for others\' feelings, social norms, or proper behavior. Being called walang hiya is deeply offensive.' },
      { heading: 'Navigating hiya', body: 'For non-Filipinos, understanding hiya helps explain indirect communication. When a Filipino says "maybe" or "we\'ll see" it might mean "no." When they say "it\'s okay" while looking uncomfortable, it might not be okay. Learning to read between the lines is essential.' },
    ],
    vocabulary: [
      { tagalog: 'Hiya', english: 'Shame / embarrassment / shyness' },
      { tagalog: 'Walang hiya', english: 'Shameless / no sense of shame', note: 'Strong insult' },
      { tagalog: 'Mahiyain', english: 'Shy person / someone easily embarrassed' },
      { tagalog: 'Nakakahiya', english: 'Embarrassing / shameful' },
    ],
    keyTakeaway: 'Hiya is not weakness — it\'s a sophisticated social navigation system. Understanding it will help you communicate more effectively with Filipinos and avoid unintentionally causing embarrassment.',
  },
  pakikisama: {
    title: 'Pakikisama — Getting Along Together',
    icon: '🤗',
    category: 'Values',
    readTime: '3 min',
    sections: [
      { body: 'Pakikisama (pa-ki-ki-SA-ma) means "getting along with others" or "group solidarity." It is the Filipino value of maintaining smooth, harmonious relationships within a group — even at personal sacrifice.' },
      { heading: 'The spirit of pakikisama', body: 'Pakikisama means going along with the group decision, not rocking the boat, putting the group\'s comfort above your own preferences. If your barkada (friend group) decides to eat at a certain restaurant and you don\'t like it, you go anyway. If your workmates are doing things a certain way, you adapt.' },
      { heading: 'Why Filipinos value it', body: 'In a society where family and community are everything, maintaining smooth relationships is survival. Conflict and disharmony have real social consequences — being seen as difficult or antisocial can affect your family\'s reputation and your social standing in the community.' },
      { heading: 'For foreigners', body: 'Pakikisama explains why Filipino workplaces can seem conflict-averse, why Filipinos are great team players, and why they might not voice disagreements openly. It\'s not passivity — it\'s a deeply held value about group harmony over individual preference.' },
    ],
    vocabulary: [
      { tagalog: 'Pakikisama', english: 'Getting along / group solidarity', note: 'From "sama" = to join/go with' },
      { tagalog: 'Barkada', english: 'Friend group / gang (positive)', note: 'Your close circle of friends' },
      { tagalog: 'Makisama', english: 'To join / to go along with the group' },
      { tagalog: 'Samahan mo ako', english: 'Come with me / accompany me', note: 'Very common phrase' },
    ],
    keyTakeaway: 'Pakikisama is why Filipinos are among the best team players in the world. Invite them in, make them feel part of the group, and they will give everything for the team.',
  },
  'fiesta-culture': {
    title: 'Filipino Fiesta Culture',
    icon: '🎉',
    category: 'Traditions',
    readTime: '5 min',
    sections: [
      { body: 'Every city, town, and barangay in the Philippines has its own patron saint — and every patron saint has a fiesta. There are over 42,000 barangays in the Philippines, which means there is a fiesta happening somewhere in the country almost every single day of the year.' },
      { heading: 'What happens at a fiesta', body: 'A fiesta is a full community celebration lasting several days. Streets are decorated with colorful parol (lanterns) and banderitas (flags). There are processions, masses, beauty pageants, street dancing, concerts, carnivals, and of course — massive amounts of food. Every home becomes open house, welcoming anyone who comes to eat.' },
      { heading: 'The food', body: 'Fiesta food is the best Filipino food. The center is always the lechon (whole roasted pig), surrounded by pancit (noodles), kare-kare, dinuguan, leche flan, and whatever each family specializes in. Refusing to eat when offered at a fiesta is considered impolite — you eat, and you eat a lot.' },
      { heading: 'Open house culture', body: 'During fiesta, every home is open to visitors. You can walk into any house, even strangers\', and you will be fed. This is one of the purest expressions of Filipino hospitality. Bring a small gift if you can, compliment the food, and enjoy the warmth.' },
    ],
    vocabulary: [
      { tagalog: 'Fiesta', english: 'Festival / town celebration', note: 'From Spanish "fiesta"' },
      { tagalog: 'Lechon', english: 'Whole roasted pig — the star of any fiesta' },
      { tagalog: 'Parol', english: 'Star-shaped Christmas/fiesta lantern', note: 'Symbol of Filipino Christmas' },
      { tagalog: 'Maligayang fiesta!', english: 'Happy fiesta!', note: 'The standard fiesta greeting' },
    ],
    keyTakeaway: 'If you ever get invited to a fiesta — GO. It is one of the most genuine, joyful, and welcoming experiences the Philippines has to offer.',
  },
  'holy-week': {
    title: 'Holy Week in the Philippines',
    icon: '✝️',
    category: 'Religion',
    readTime: '4 min',
    sections: [
      { body: 'The Philippines is the only Christian nation in Asia, with over 80% of the population being Roman Catholic. Holy Week (Semana Santa) — the week before Easter — is the most solemn and observed religious event in the Filipino calendar.' },
      { heading: 'What happens', body: 'The country practically shuts down during Holy Week. Most businesses close, roads empty, and millions travel home to their provinces. Filipinos attend masses, join processions, watch Passion plays (Senakulo), and observe periods of fasting and abstinence from meat, especially on Good Friday.' },
      { heading: 'Black Saturday and Easter', body: 'Black Saturday is one of the quietest days in the Philippines — many people fast the entire day. Then at midnight, the Salubong (meeting ceremony) begins, and Easter Sunday erupts in celebration with masses, family reunions, and food.' },
      { heading: 'For visitors', body: 'If you are in the Philippines during Holy Week, be respectful of the solemnity. Many Filipinos take this very seriously. Avoid loud parties or disrespectful behavior in public. However, do watch a Senakulo (Passion play) if you can — it is a powerful cultural experience.' },
    ],
    vocabulary: [
      { tagalog: 'Semana Santa', english: 'Holy Week', note: 'From Spanish "Semana Santa"' },
      { tagalog: 'Mahal na Araw', english: 'Holy Week (Filipino term)', note: 'Mahal = holy/dear, Araw = day' },
      { tagalog: 'Prusisyon', english: 'Religious procession', note: 'Held on Good Friday' },
      { tagalog: 'Pabasa', english: 'Continuous chanting of the Passion of Christ' },
    ],
    keyTakeaway: 'Holy Week reveals the depth of Filipino faith. Even non-religious Filipinos observe it as a time for family, reflection, and rest. Respect the solemnity and you will gain deep appreciation for Filipino spirituality.',
  },
  'filipino-food-culture': {
    title: 'Filipino Food Culture',
    icon: '🍽️',
    category: 'Food',
    readTime: '6 min',
    sections: [
      { body: '"Kumain ka na ba?" (Have you eaten?) is one of the most common Filipino greetings — and that tells you everything about how central food is to Filipino culture. Food is not just nutrition; it is love, hospitality, celebration, and identity.' },
      { heading: 'The everyday staples', body: 'Every Filipino meal centers on rice (kanin). Without rice, it\'s not a real meal — it\'s just a snack. The meal is built around ulam (viand) — the meat, fish, or vegetable dish served with rice. Adobo (vinegar-braised meat), sinigang (sour soup), tinola (ginger chicken soup), and pinakbet (vegetable stew) are everyday favorites.' },
      { heading: 'Breakfast: The tapsilog family', body: 'Filipino breakfast is a universe of its own. The "silog" combinations are iconic: tapsilog (cured beef + fried rice + egg), longsilog (longaniza sausage + fried rice + egg), bangsilog (milkfish + fried rice + egg). The "si" stands for sinangag (garlic fried rice) and "log" for itlog (egg).' },
      { heading: 'Eating together', body: 'Filipinos eat together whenever possible. Kamayan style — eating with your hands on a banana leaf spread with food — is one of the most communal and joyful eating experiences. When a Filipino offers you food, accept it graciously. Refusing food is one of the easiest ways to accidentally offend.' },
      { heading: 'Street food', body: 'Filipino street food is legendary: isaw (grilled chicken intestines), kwek-kwek (battered quail eggs), balut (fertilized duck egg — the ultimate Filipino challenge), fishball, and taho (warm silken tofu with syrup). Street food culture is deeply Filipino.' },
    ],
    vocabulary: [
      { tagalog: 'Kanin', english: 'Cooked rice — the center of every meal' },
      { tagalog: 'Ulam', english: 'Viand / the dish eaten with rice' },
      { tagalog: 'Masarap!', english: 'Delicious!', note: 'Say this and Filipinos will love you forever' },
      { tagalog: 'Kain na!', english: 'Let\'s eat! / Come eat!', note: 'The most welcoming Filipino phrase' },
      { tagalog: 'Balut', english: 'Fertilized duck egg — Filipino street food challenge' },
    ],
    keyTakeaway: '"Masarap!" is the most powerful word in the Filipino hospitality toolkit. Say it sincerely after any Filipino meal and you will make a friend for life.',
  },
  'jeepney-icon': {
    title: 'The Jeepney — Icon of the Philippines',
    icon: '🚌',
    category: 'Daily Life',
    readTime: '3 min',
    sections: [
      { body: 'The jeepney is the most recognizable symbol of the Philippines. Originally made from US military jeeps left after World War II, Filipinos transformed them into colorful, art-decorated public transport vehicles that became a cultural icon.' },
      { heading: 'What makes a jeepney', body: 'A classic jeepney is extended at the back with two bench seats running lengthwise, decorated with chrome horses, saints, family names, LED lights, sound systems, and elaborate artwork. Each one is unique — a rolling art piece. The driver sits in front, passengers pile in the back, and fares are passed hand-to-hand to the driver.' },
      { heading: 'How to ride one', body: 'Find a jeepney route going your direction (routes are displayed on the side). Hop in the back, sit or squeeze in. When you want to stop, shout "Para po!" (Stop please!). Hand your fare forward through other passengers saying "Bayad po" (Payment please), and the driver or passengers pass change back.' },
      { heading: 'The modern jeepney', body: 'The Philippine government has been replacing old jeepneys with modern, Euro 4-compliant "modern jeepneys" — still colorful and art-decorated but with air conditioning and GPS. The transition is emotional for many Filipinos who grew up with the classic smoke-belching, music-blaring original.' },
    ],
    vocabulary: [
      { tagalog: 'Jeepney', english: 'Iconic Filipino public transport', note: 'From US military jeep + Filipino ingenuity' },
      { tagalog: 'Para po!', english: 'Stop please!', note: 'Shout this to get off the jeepney' },
      { tagalog: 'Bayad po', english: 'Payment / fare', note: 'Say when passing your fare to the driver' },
      { tagalog: 'Sukli', english: 'Change (money returned)', note: 'Passed back through passengers' },
    ],
    keyTakeaway: 'Riding a jeepney is one of the most authentically Filipino experiences. It\'s cheap, colorful, crowded, loud — and completely unforgettable.',
  },
  'filipino-family': {
    title: 'The Filipino Family Structure',
    icon: '👨‍👩‍👧‍👦',
    category: 'Family',
    readTime: '4 min',
    sections: [
      { body: 'In the Philippines, family is not just important — it is everything. The Filipino family is the primary social unit, the safety net, the source of identity, and the most fundamental obligation in a person\'s life.' },
      { heading: 'Multi-generational households', body: 'It is completely normal — and expected — for multiple generations to live under one roof. Grandparents, parents, children, aunts, uncles, and cousins often share a home. Moving out to live alone is seen as strange, even cold. You leave home when you get married (and even then, you might live next door).' },
      { heading: 'Family titles matter', body: 'Filipinos use specific terms of address for all relatives, and these extend to non-relatives too. Older men are called "Kuya" (older brother), older women "Ate" (older sister), parents\' friends become "Tito" and "Tita" (uncle/aunt), and elderly people are "Lolo" and "Lola" (grandpa/grandma). Using these terms shows respect and inclusion.' },
      { heading: 'Obligations and support', body: 'Children are expected to support their parents financially when they can. Overseas Filipino Workers (OFWs) send billions in remittances home every year — not because they\'re obligated by law, but because it\'s family. In return, the family supports your children, helps in emergencies, and is simply always there.' },
    ],
    vocabulary: [
      { tagalog: 'Pamilya', english: 'Family', note: 'From Spanish "familia"' },
      { tagalog: 'Kuya / Ate', english: 'Older brother / older sister', note: 'Used even for non-relatives as a sign of respect' },
      { tagalog: 'Tito / Tita', english: 'Uncle / Aunt', note: 'Also used for parents\' friends' },
      { tagalog: 'Lolo / Lola', english: 'Grandfather / Grandmother' },
      { tagalog: 'Mahal kita', english: 'I love you', note: 'Mahal = love AND expensive — love is priceless!' },
    ],
    keyTakeaway: 'When you befriend a Filipino, you befriend their whole family. This is not an exaggeration — be prepared to be adopted, fed, and asked about your plans for the future.',
  },
}

const CAT_COLORS: Record<string, string> = {
  Values: '#0038a8', Traditions: '#f97316', Religion: '#7c3aed',
  Food: '#22c55e', 'Daily Life': '#0ea5e9', Family: '#ec4899',
}

export default async function CultureArticlePage({ params }: { params: Promise<{ slug: string }> }): Promise<React.JSX.Element> {
  const { slug } = await params
  const article = ARTICLES[slug]

  if (!article) notFound()

  return (
    <div style={{ maxWidth: '720px', margin: '0 auto' }}>
      {/* Back */}
      <Link href="/culture" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.375rem', color: 'var(--color-text-muted)', textDecoration: 'none', fontFamily: 'var(--font-inter)', fontSize: '0.875rem', marginBottom: '1.5rem' }}>
        ← Back to Culture
      </Link>

      {/* Header */}
      <div style={{ marginBottom: '2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
          <span style={{ padding: '0.2rem 0.625rem', borderRadius: '9999px', fontSize: '0.75rem', fontWeight: 700, background: `${CAT_COLORS[article.category] ?? '#0038a8'}15`, color: CAT_COLORS[article.category] ?? '#0038a8' }}>
            {article.category}
          </span>
          <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>{article.readTime} read</span>
        </div>
        <h1 style={{ fontFamily: 'var(--font-nunito)', fontWeight: 900, fontSize: 'clamp(1.5rem, 4vw, 2rem)', color: 'var(--color-ph-blue)', lineHeight: 1.2, marginBottom: '0' }}>
          {article.icon} {article.title}
        </h1>
      </div>

      {/* Sections */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2rem' }}>
        {article.sections.map((section, i) => (
          <div key={i}>
            {section.heading && (
              <h2 style={{ fontFamily: 'var(--font-nunito)', fontWeight: 800, fontSize: '1.125rem', color: 'var(--color-text)', marginBottom: '0.5rem' }}>
                {section.heading}
              </h2>
            )}
            <p style={{ fontFamily: 'var(--font-inter)', fontSize: '1rem', color: 'var(--color-text)', lineHeight: 1.75, margin: 0 }}>
              {section.body}
            </p>
          </div>
        ))}
      </div>

      {/* Vocabulary */}
      {article.vocabulary && (
        <div className="card" style={{ marginBottom: '1.5rem' }}>
          <h2 style={{ fontFamily: 'var(--font-nunito)', fontWeight: 800, fontSize: '1.125rem', color: 'var(--color-text)', marginBottom: '1rem' }}>
            📖 Key Vocabulary
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {article.vocabulary.map((v) => (
              <div key={v.tagalog} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', paddingBottom: '0.75rem', borderBottom: '1px solid var(--color-border)' }}>
                <span style={{ fontFamily: 'var(--font-nunito)', fontWeight: 800, fontSize: '1rem', color: 'var(--color-ph-blue)', minWidth: '140px', flexShrink: 0 }}>
                  {v.tagalog}
                </span>
                <div>
                  <div style={{ fontWeight: 600, color: 'var(--color-text)', fontSize: '0.9375rem' }}>{v.english}</div>
                  {v.note && <div style={{ fontSize: '0.8125rem', color: 'var(--color-text-muted)', fontStyle: 'italic', marginTop: '0.125rem' }}>{v.note}</div>}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Key Takeaway */}
      <div style={{ padding: '1.25rem 1.5rem', borderRadius: 'var(--radius-lg)', background: 'linear-gradient(135deg, rgba(0,56,168,0.06), rgba(252,209,22,0.1))', border: '1.5px solid rgba(252,209,22,0.3)', marginBottom: '2rem' }}>
        <div style={{ fontFamily: 'var(--font-nunito)', fontWeight: 800, fontSize: '0.875rem', color: 'var(--color-ph-blue)', marginBottom: '0.375rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          🌟 Key Takeaway
        </div>
        <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.9375rem', color: 'var(--color-text)', lineHeight: 1.65, margin: 0, fontStyle: 'italic' }}>
          {article.keyTakeaway}
        </p>
      </div>

      {/* Bottom nav */}
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        <Link href="/culture" className="btn-press btn-ghost" style={{ textDecoration: 'none' }}>
          ← All Culture Articles
        </Link>
        <Link href="/lessons" className="btn-press" style={{ textDecoration: 'none' }}>
          📚 Continue Learning
        </Link>
      </div>
    </div>
  )
}
