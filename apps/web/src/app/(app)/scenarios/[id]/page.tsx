'use client'

import { useState, use } from 'react'
import Link from 'next/link'

const SCENARIOS: Record<string, {
  title: string
  subtitle: string
  icon: string
  xp: number
  difficulty: string
  intro: string
  dialogue: Array<{ speaker: 'npc' | 'player'; npc?: string; options?: Array<{ text: string; tagalog: string; correct: boolean; feedback: string }> }>
}> = {
  palengke: {
    title: 'Sa Palengke',
    subtitle: 'At the Wet Market',
    icon: '🛒',
    xp: 20,
    difficulty: 'Intermediate',
    intro: 'You are at the Palengke (wet market). A vendor is selling fresh vegetables. Practice bargaining in Tagalog!',
    dialogue: [
      { speaker: 'npc', npc: 'Hoy! Bili na kayo! Sariwang gulay! (Hey! Buy now! Fresh vegetables!)' },
      { speaker: 'player', options: [
        { text: 'Magkano po ito? (How much is this?)', tagalog: 'Magkano po ito?', correct: true, feedback: 'Tama! "Magkano?" is the perfect phrase for asking prices. The vendor says: "Dalawang daan po. (Two hundred pesos.)"' },
        { text: 'Kumusta ka? (How are you?)', tagalog: 'Kumusta ka?', correct: false, feedback: 'That\'s a greeting, not a price question. Try "Magkano po?" to ask the price!' },
        { text: 'Paalam! (Goodbye!)', tagalog: 'Paalam!', correct: false, feedback: 'You just arrived! Use "Magkano po?" to ask how much it costs.' },
      ]},
      { speaker: 'npc', npc: 'Dalawang daan po. (Two hundred pesos.)' },
      { speaker: 'player', options: [
        { text: 'Mahal naman! Isa\'t limampu na lang? (Too expensive! Just one fifty?)', tagalog: 'Mahal naman! Isa\'t limampu na lang?', correct: true, feedback: 'Magaling! That\'s how you bargain! The vendor replies: "Sige na, isa\'t walo. (Okay, one eighty.)"' },
        { text: 'Salamat po! (Thank you!)', tagalog: 'Salamat po!', correct: false, feedback: 'You haven\'t bought anything yet. Try bargaining with "Mahal naman, puwede bang ibaba?" (Too expensive, can you lower it?)' },
        { text: 'Hindi ko gusto. (I don\'t want it.)', tagalog: 'Hindi ko gusto.', correct: false, feedback: 'Try bargaining instead! Say "Mahal naman! Puwede bang ibaba?" to negotiate the price.' },
      ]},
      { speaker: 'npc', npc: 'Sige na, isa\'t walo na lang. (Okay, just one eighty.)' },
      { speaker: 'player', options: [
        { text: 'Sige po, eto na. (Okay, here you go.)', tagalog: 'Sige po, eto na.', correct: true, feedback: 'Napakahusay! You successfully bought vegetables at the palengke! "Sige" means okay/go ahead — a very common Filipino word.' },
        { text: 'Hindi, masyadong mahal pa rin. (No, still too expensive.)', tagalog: 'Hindi, masyadong mahal pa rin.', correct: false, feedback: 'The vendor already gave a discount. It\'s polite to accept with "Sige po, eto na." You\'ll get another chance to practice!' },
        { text: 'Libre ba? (Is it free?)', tagalog: 'Libre ba?', correct: false, feedback: 'Haha! Nothing is free at the palengke. Accept the deal with "Sige po, eto na!"' },
      ]},
    ],
  },
  jeepney: {
    title: 'Sakay ng Jeepney',
    subtitle: 'Riding the Jeepney',
    icon: '🚌',
    xp: 15,
    difficulty: 'Beginner',
    intro: 'You need to ride a jeepney to get to SM Mall. Practice the key phrases for jeepney rides!',
    dialogue: [
      { speaker: 'npc', npc: 'Pasok na! Saan kayo? (Come in! Where are you going?)' },
      { speaker: 'player', options: [
        { text: 'Sa SM po. (To SM please.)', tagalog: 'Sa SM po.', correct: true, feedback: 'Tama! "Sa [place] po" is how you say where you\'re going. Adding "po" is respectful. The driver says: "Sige, sumakay na." (Okay, get in.)' },
        { text: 'Kumain na ako. (I already ate.)', tagalog: 'Kumain na ako.', correct: false, feedback: 'That\'s about eating, not where you\'re going! Say "Sa SM po" to tell the driver your destination.' },
        { text: 'Magkano? (How much?)', tagalog: 'Magkano?', correct: false, feedback: 'Good try, but first tell the driver where you\'re going! Say "Sa SM po." then you can ask the fare.' },
      ]},
      { speaker: 'npc', npc: 'Sige, sumakay na. Bayad po! (Okay get in. Pay please!)' },
      { speaker: 'player', options: [
        { text: 'Bayad po, para sa isa. (Payment, for one person.)', tagalog: 'Bayad po, para sa isa.', correct: true, feedback: 'Perpekto! Pass your payment through other passengers saying "Bayad po!" The driver says the fare is "Sampung piso po." (Ten pesos.)' },
        { text: 'Wala akong pera. (I have no money.)', tagalog: 'Wala akong pera.', correct: false, feedback: 'You need to pay! Say "Bayad po" and pass your fare to the driver.' },
        { text: 'Malayo pa ba? (Is it still far?)', tagalog: 'Malayo pa ba?', correct: false, feedback: 'Pay first! Say "Bayad po" and hand your fare to the driver or pass it forward.' },
      ]},
      { speaker: 'npc', npc: 'Sampung piso po. (Ten pesos.)' },
      { speaker: 'player', options: [
        { text: 'Para po! (Stop please!)', tagalog: 'Para po!', correct: true, feedback: 'Napakahusay! "Para po!" is the magic phrase to ask the driver to stop. You\'ve completed the jeepney scenario!' },
        { text: 'Salamat po driver. (Thank you driver.)', tagalog: 'Salamat po driver.', correct: false, feedback: 'You haven\'t reached your stop yet! When you need to get off, shout "Para po!" to signal the driver to stop.' },
        { text: 'Ulit? (Again?)', tagalog: 'Ulit?', correct: false, feedback: 'When you want the driver to stop, shout "Para po!" — that\'s the signal for the driver to let you off.' },
      ]},
    ],
  },
  'family-gathering': {
    title: 'Pamilyang Pagtitipon',
    subtitle: 'Family Gathering',
    icon: '👨‍👩‍👧‍👦',
    xp: 20,
    difficulty: 'Beginner',
    intro: 'You\'re attending a Filipino family gathering. Lola (grandma) is greeting everyone. Practice respectful Filipino customs!',
    dialogue: [
      { speaker: 'npc', npc: 'Nandito na si Lola! (Grandma is here!)' },
      { speaker: 'player', options: [
        { text: 'Mano po, Lola! (Bless me, Grandma!)', tagalog: 'Mano po, Lola!', correct: true, feedback: 'Napakagalang! Mano Po is the most respectful Filipino greeting for elders — you gently take their hand and press it to your forehead. Lola says: "Ay, magalang ka talaga!" (You\'re so respectful!)' },
        { text: 'Hey Lola, what\'s up?', tagalog: '(In English)', correct: false, feedback: 'In Filipino culture, always greet elders respectfully. Say "Mano po, Lola!" and do the mano gesture — press the back of her hand to your forehead.' },
        { text: 'Kumusta ka, Lola? (How are you, Grandma?)', tagalog: 'Kumusta ka, Lola?', correct: false, feedback: 'Good effort, but with elders you should use "Mano po" first! Then you can ask "Kumusta po kayo?" (using "po" and "kayo" for extra respect).' },
      ]},
      { speaker: 'npc', npc: 'Ay, magalang ka talaga! Kumain ka na ba? (You\'re so respectful! Have you eaten?)' },
      { speaker: 'player', options: [
        { text: 'Hindi pa po, Lola. Kumain tayo! (Not yet, Grandma. Let\'s eat!)', tagalog: 'Hindi pa po, Lola. Kumain tayo!', correct: true, feedback: 'Perpekto! "Kumain ka na ba?" is a Filipino expression of care. Answering "Hindi pa" (Not yet) is an invitation to eat together. Lola is very happy!' },
        { text: 'Kumain na po ako. (I already ate.)', tagalog: 'Kumain na po ako.', correct: false, feedback: 'That\'s honest, but at a Filipino gathering saying you haven\'t eaten yet ("Hindi pa po") is an invitation to share food together!' },
        { text: 'Gusto ko ng lechon! (I want lechon!)', tagalog: 'Gusto ko ng lechon!', correct: false, feedback: 'Ha! Lechon is delicious, but respond to Lola\'s greeting properly first. Say "Hindi pa po, Lola" to accept her invitation to eat.' },
      ]},
      { speaker: 'npc', npc: 'Sige, kain na tayo! Maraming pagkain dito! (Let\'s eat! There\'s lots of food here!)' },
      { speaker: 'player', options: [
        { text: 'Masarap po ang pagkain ninyo, Lola! (Your food is delicious, Grandma!)', tagalog: 'Masarap po ang pagkain ninyo, Lola!', correct: true, feedback: 'Napakahusay! Complimenting the food is one of the best things you can do at a Filipino gathering. Lola will love you forever! "Masarap" means delicious — one of the most important Filipino words!' },
        { text: 'Saan ang CR? (Where is the bathroom?)', tagalog: 'Saan ang CR?', correct: false, feedback: 'Ha! "CR" (comfort room) can wait. Compliment the food first! Say "Masarap po!" to make Lola very happy.' },
        { text: 'Pwede pa? (Can I have more?)', tagalog: 'Pwede pa?', correct: false, feedback: 'Good hunger, but compliment first! Say "Masarap po ang pagkain!" then you can definitely ask for more.' },
      ]},
    ],
  },
  carinderia: {
    title: 'Sa Carinderia',
    subtitle: 'At the Local Eatery',
    icon: '🍽️',
    xp: 15,
    difficulty: 'Beginner',
    intro: 'You\'re hungry and found a carinderia (turo-turo). Practice ordering a Filipino meal!',
    dialogue: [
      { speaker: 'npc', npc: 'Hoy, ano ang gusto mo? Turo-turo! (Hey, what do you want? Just point and choose!)' },
      { speaker: 'player', options: [
        { text: 'Ito po, at kanin. (This one, and rice.)', tagalog: 'Ito po, at kanin.', correct: true, feedback: 'Tama! "Ito po" (this one please) is perfect for turo-turo style. Rice ("kanin") comes with everything! The manang says: "Isang order, adobo at kanin!" (One order, adobo and rice!)' },
        { text: 'Wala akong gusto. (I don\'t want anything.)', tagalog: 'Wala akong gusto.', correct: false, feedback: 'But you\'re hungry! Point at the food and say "Ito po" (this one please) to order.' },
        { text: 'Magkano lahat? (How much is everything?)', tagalog: 'Magkano lahat?', correct: false, feedback: 'Order first! Point at what you want and say "Ito po, at kanin" (this one, and rice).' },
      ]},
      { speaker: 'npc', npc: 'Isang order adobo at kanin! Maginom ka? (One order adobo and rice! Will you drink?)' },
      { speaker: 'player', options: [
        { text: 'Tubig na lang po. (Just water please.)', tagalog: 'Tubig na lang po.', correct: true, feedback: 'Magaling! "Tubig" (water) is always available and usually free at carinderias. "Na lang" means "just" or "only" — a very useful Filipino phrase!' },
        { text: 'Beer po! (Beer please!)', tagalog: 'Beer po!', correct: false, feedback: 'For lunch? Maybe water is better. Say "Tubig na lang po" for water, which is usually free at carinderias!' },
        { text: 'Hindi na. (No more / No thanks.)', tagalog: 'Hindi na.', correct: false, feedback: 'Try ordering water! Say "Tubig na lang po" — "tubig" means water and it\'s usually free at carinderias.' },
      ]},
      { speaker: 'npc', npc: 'Sige! Magbayad ka na. Animnapung piso. (Okay! Pay now. Sixty pesos.)' },
      { speaker: 'player', options: [
        { text: 'Eto po, salamat! (Here you go, thank you!)', tagalog: 'Eto po, salamat!', correct: true, feedback: 'Napakahusay! You successfully ordered at a carinderia! "Eto po" when handing something and "Salamat" to say thanks — two very useful phrases. Kain na! (Let\'s eat!)' },
        { text: 'Mahal! (Expensive!)', tagalog: 'Mahal!', correct: false, feedback: '60 pesos for a meal is actually cheap! Just say "Eto po, salamat!" and hand over your money.' },
        { text: 'Libre ba? (Is it free?)', tagalog: 'Libre ba?', correct: false, feedback: 'Ha! Carinderias are cheap but not free. Pay up with "Eto po, salamat!"' },
      ]},
    ],
  },
  fiesta: {
    title: 'Fiesta!',
    subtitle: 'Town Fiesta',
    icon: '🎉',
    xp: 25,
    difficulty: 'Intermediate',
    intro: 'It\'s the town fiesta! The whole barangay is celebrating. Practice fiesta vocabulary and expressions!',
    dialogue: [
      { speaker: 'npc', npc: 'Maligayang fiesta! Kumain ka na ba ng lechon? (Happy fiesta! Have you eaten lechon yet?)' },
      { speaker: 'player', options: [
        { text: 'Hindi pa! Saan ang lechon? (Not yet! Where is the lechon?)', tagalog: 'Hindi pa! Saan ang lechon?', correct: true, feedback: 'Magaling! Lechon (roasted pig) is the star of every Filipino fiesta. "Saan?" means "where?" — very useful for finding things. Your neighbor points to the food table!' },
        { text: 'Ayoko ng lechon. (I don\'t like lechon.)', tagalog: 'Ayoko ng lechon.', correct: false, feedback: 'Lechon is sacred at a Filipino fiesta! Even if you don\'t eat pork, show enthusiasm. Try "Hindi pa! Saan ang lechon?" to join in the spirit.' },
        { text: 'Kumain na ako. (I already ate.)', tagalog: 'Kumain na ako.', correct: false, feedback: 'At a fiesta, you never stop eating! Show excitement with "Hindi pa! Saan ang lechon?" to get into the fiesta spirit.' },
      ]},
      { speaker: 'npc', npc: 'Doon! Sumali ka sa sayawan mamaya! (Over there! Join the dancing later!)' },
      { speaker: 'player', options: [
        { text: 'Oo, gusto ko sumayaw! Masaya ang fiesta! (Yes, I want to dance! The fiesta is fun!)', tagalog: 'Oo, gusto ko sumayaw! Masaya ang fiesta!', correct: true, feedback: 'Napakasaya! "Masaya" means happy/fun — one of the most Filipino words. And "gusto ko" means "I want to." You\'re fully joining the fiesta spirit!' },
        { text: 'Hindi ako marunong sumayaw. (I don\'t know how to dance.)', tagalog: 'Hindi ako marunong sumayaw.', correct: false, feedback: 'At a fiesta, everyone dances regardless! Show the spirit with "Sige, susubukan ko!" (Okay, I\'ll try!) or just say "Masaya ang fiesta!"' },
        { text: 'Antok na ako. (I\'m sleepy.)', tagalog: 'Antok na ako.', correct: false, feedback: 'It\'s fiesta! No sleeping! Say "Masaya ang fiesta!" to show your enthusiasm. Fiestas go all night!' },
      ]},
      { speaker: 'npc', npc: 'Tuloy ka sa bahay namin para sa mano kay Lolo! (Come to our house to do mano to Grandpa!)' },
      { speaker: 'player', options: [
        { text: 'Sige po! Mano po, Lolo! (Sure! Bless me, Grandpa!)', tagalog: 'Sige po! Mano po, Lolo!', correct: true, feedback: 'Napakahusay! You used "po" for respect, accepted the invitation with "sige," and did mano po to the elder. You are officially an honorary Filipino! Maligayang fiesta! 🎉' },
        { text: 'Hindi na, busy ako. (No thanks, I\'m busy.)', tagalog: 'Hindi na, busy ako.', correct: false, feedback: 'Refusing a Filipino family\'s invitation is considered rude. Accept graciously with "Sige po!" and don\'t forget to do mano to the elders!' },
        { text: 'May bayad ba? (Is there a fee?)', tagalog: 'May bayad ba?', correct: false, feedback: 'Ha! Filipino hospitality is always free! Accept with "Sige po!" and enjoy the Filipino tradition of open-house hospitality during fiestas.' },
      ]},
    ],
  },
}

export default function ScenarioPage({ params }: { params: Promise<{ id: string }> }): React.JSX.Element {
  const { id } = use(params)
  const scenario = SCENARIOS[id]

  const [step, setStep] = useState(0)
  const [score, setScore] = useState(0)
  const [feedback, setFeedback] = useState<string | null>(null)
  const [isCorrect, setIsCorrect] = useState(false)
  const [finished, setFinished] = useState(false)
  const [chosen, setChosen] = useState(false)

  if (!scenario) {
    return (
      <div style={{ textAlign: 'center', padding: '4rem 1rem' }}>
        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>😕</div>
        <h2 style={{ fontFamily: 'var(--font-nunito)', fontWeight: 800, color: 'var(--color-ph-blue)', marginBottom: '1rem' }}>
          Scenario not found
        </h2>
        <Link href="/scenarios" className="btn-press" style={{ textDecoration: 'none' }}>
          ← Back to Scenarios
        </Link>
      </div>
    )
  }

  const playerTurns = scenario.dialogue.filter((d) => d.speaker === 'player')
  const totalTurns = playerTurns.length

  function handleChoice(option: { correct: boolean; feedback: string }) {
    if (chosen) return
    setChosen(true)
    setIsCorrect(option.correct)
    setFeedback(option.feedback)
    if (option.correct) setScore((s) => s + 1)
  }

  function handleNext() {
    setFeedback(null)
    setChosen(false)

    // Find next step — skip npc lines after we show them via feedback
    let nextStep = step + 1
    // Advance past any npc-only lines that come right after current player line
    while (nextStep < scenario.dialogue.length && scenario.dialogue[nextStep]?.speaker === 'npc') {
      nextStep++
    }

    if (nextStep >= scenario.dialogue.length) {
      setFinished(true)
    } else {
      setStep(nextStep)
    }
  }

  const playerStepsSoFar = scenario.dialogue.slice(0, step + 1).filter((d) => d.speaker === 'player').length
  const progress = (playerStepsSoFar / totalTurns) * 100

  // Find preceding npc line for context
  const npcContext = (() => {
    for (let i = step - 1; i >= 0; i--) {
      if (scenario.dialogue[i]?.speaker === 'npc') return scenario.dialogue[i]!.npc
      break
    }
    return null
  })()

  const currentLine = scenario.dialogue[step]

  if (finished) {
    const pct = Math.round((score / totalTurns) * 100)
    return (
      <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center', padding: '2rem 0' }}>
        <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>
          {pct === 100 ? '🏆' : pct >= 67 ? '👍' : '📚'}
        </div>
        <h1 style={{ fontFamily: 'var(--font-nunito)', fontWeight: 900, fontSize: '2rem', color: 'var(--color-ph-blue)', marginBottom: '0.5rem' }}>
          {pct === 100 ? 'Perpekto! Perfect!' : pct >= 67 ? 'Magaling! Well done!' : 'Kaya mo! Keep practicing!'}
        </h1>
        <p style={{ color: 'var(--color-text-muted)', marginBottom: '2rem', fontFamily: 'var(--font-inter)' }}>
          You answered {score} of {totalTurns} correctly ({pct}%) · +{Math.round(scenario.xp * pct / 100)} XP earned
        </p>

        <div className="card" style={{ marginBottom: '1.5rem', textAlign: 'left' }}>
          <h3 style={{ fontFamily: 'var(--font-nunito)', fontWeight: 800, fontSize: '1rem', marginBottom: '0.75rem', color: 'var(--color-text)' }}>
            Key phrases from this scenario:
          </h3>
          {playerTurns.map((turn, i) => {
            const correct = turn.options?.find((o) => o.correct)
            return correct ? (
              <div key={i} style={{ padding: '0.5rem 0', borderBottom: i < playerTurns.length - 1 ? '1px solid var(--color-border)' : 'none' }}>
                <span style={{ fontFamily: 'var(--font-nunito)', fontWeight: 700, color: 'var(--color-ph-blue)' }}>{correct.tagalog}</span>
                <span style={{ color: 'var(--color-text-muted)', fontSize: '0.875rem', marginLeft: '0.5rem' }}>— {correct.text.split('(')[1]?.replace(')', '') ?? ''}</span>
              </div>
            ) : null
          })}
        </div>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button
            className="btn-press"
            onClick={() => { setStep(0); setScore(0); setFeedback(null); setFinished(false); setChosen(false) }}
          >
            🔄 Try Again
          </button>
          <Link href="/scenarios" className="btn-press btn-ghost" style={{ textDecoration: 'none' }}>
            ← All Scenarios
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div style={{ maxWidth: '640px', margin: '0 auto' }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
        <Link href="/scenarios" style={{ color: 'var(--color-text-muted)', textDecoration: 'none', fontSize: '1.5rem' }}>←</Link>
        <div>
          <h1 style={{ fontFamily: 'var(--font-nunito)', fontWeight: 900, fontSize: '1.5rem', color: 'var(--color-ph-blue)', margin: 0 }}>
            {scenario.icon} {scenario.title}
          </h1>
          <p style={{ color: 'var(--color-text-muted)', fontFamily: 'var(--font-inter)', fontSize: '0.875rem', margin: 0 }}>{scenario.subtitle}</p>
        </div>
      </div>

      {/* Progress */}
      <div style={{ marginBottom: '1.5rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
          <span style={{ fontFamily: 'var(--font-inter)', fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>
            Turn {playerStepsSoFar} of {totalTurns}
          </span>
          <span className="xp-badge">+{scenario.xp} XP</span>
        </div>
        <div className="progress-bar">
          <div className="progress-bar-fill" style={{ width: `${progress}%` }} />
        </div>
      </div>

      {/* Intro card (step 0 only) */}
      {step === 0 && (
        <div className="card" style={{ marginBottom: '1rem', background: 'rgba(0,56,168,0.04)', border: '1.5px solid rgba(0,56,168,0.15)' }}>
          <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.9375rem', color: 'var(--color-text)', margin: 0, lineHeight: 1.6 }}>
            📍 <strong>Setting:</strong> {scenario.intro}
          </p>
        </div>
      )}

      {/* NPC line */}
      {currentLine?.speaker === 'npc' && (
        <div className="card" style={{ marginBottom: '1rem', display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
          <div style={{ fontSize: '2rem', flexShrink: 0 }}>{scenario.icon}</div>
          <p style={{ fontFamily: 'var(--font-inter)', fontSize: '1rem', color: 'var(--color-text)', margin: 0, lineHeight: 1.6 }}>
            {currentLine.npc}
          </p>
        </div>
      )}

      {/* Player choice */}
      {currentLine?.speaker === 'player' && (
        <>
          {npcContext && step > 0 && (
            <div className="card" style={{ marginBottom: '1rem', display: 'flex', gap: '0.75rem', alignItems: 'flex-start', opacity: 0.8 }}>
              <div style={{ fontSize: '2rem', flexShrink: 0 }}>{scenario.icon}</div>
              <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.9375rem', color: 'var(--color-text)', margin: 0, lineHeight: 1.6 }}>
                {npcContext}
              </p>
            </div>
          )}

          <p style={{ fontFamily: 'var(--font-plus-jakarta)', fontWeight: 700, fontSize: '0.9375rem', color: 'var(--color-text-muted)', marginBottom: '0.75rem' }}>
            What do you say?
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.25rem' }}>
            {currentLine.options?.map((opt, i) => (
              <button
                key={i}
                onClick={() => handleChoice(opt)}
                disabled={chosen}
                className="quiz-option"
                style={{
                  textAlign: 'left',
                  ...(chosen && opt.correct ? { background: '#f0fdf4', border: '2px solid #22c55e', color: '#166534' } : {}),
                  ...(chosen && !opt.correct ? { opacity: 0.5 } : {}),
                }}
              >
                <span style={{ fontFamily: 'var(--font-nunito)', fontWeight: 800, fontSize: '0.875rem', color: 'var(--color-ph-blue)', display: 'block', marginBottom: '0.125rem' }}>
                  {opt.tagalog}
                </span>
                <span style={{ fontSize: '0.8125rem', color: 'var(--color-text-muted)' }}>
                  {opt.text.includes('(') ? opt.text.substring(opt.text.indexOf('(')) : ''}
                </span>
              </button>
            ))}
          </div>

          {/* Feedback */}
          {feedback && (
            <div
              className="card"
              style={{
                marginBottom: '1.25rem',
                background: isCorrect ? '#f0fdf4' : '#fff5f5',
                border: `1.5px solid ${isCorrect ? '#22c55e' : '#ce1126'}`,
              }}
            >
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <span style={{ fontSize: '1.5rem', flexShrink: 0 }}>{isCorrect ? '✅' : '❌'}</span>
                <div>
                  <div style={{ fontFamily: 'var(--font-nunito)', fontWeight: 800, fontSize: '0.9375rem', color: isCorrect ? '#166534' : '#991b1b', marginBottom: '0.375rem' }}>
                    {isCorrect ? 'Tama! Correct!' : 'Mali. Try again!'}
                  </div>
                  <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.9rem', color: isCorrect ? '#166534' : '#991b1b', margin: 0, lineHeight: 1.6 }}>
                    {feedback}
                  </p>
                </div>
              </div>
            </div>
          )}

          {chosen && (
            <button className="btn-press" onClick={handleNext} style={{ width: '100%' }}>
              {step + 1 >= scenario.dialogue.length - 1 ? 'Tapusin — Finish 🏁' : 'Magpatuloy — Continue →'}
            </button>
          )}
        </>
      )}
    </div>
  )
}
