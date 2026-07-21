import { useNavigate } from 'react-router-dom'
import Screen from '../components/Screen'
import { useStore, getTodaySession } from '../state/store'
import { IconFeather, IconBook, IconMoon, IconSunRays, IconArrowRight, IconRevisit, IconCheck } from '../icons/Icons'

export default function Today() {
  const navigate = useNavigate()
  const { state, setTodayGenre, markPracticeDone } = useStore()
  const { profile, streak, todayGenre, sessionProgress, yesterdayPiece } = state
  const content = getTodaySession(state)
  const xpPct = Math.min(100, Math.round((profile.xp / profile.xpToNext) * 100))

  const byGenre = sessionProgress.byGenre || {}
  const gs = byGenre[todayGenre] || { done: false, practiceDone: false, recap: null }
  const sessionDone = gs.done
  const practiceDone = gs.practiceDone
  const recap = gs.recap
  // Each genre walks lesson → practice → recap on its own; the lesson only
  // advances at 6am. Poem and story are independent tracks for the day.
  const stage = !sessionDone ? 'session' : !practiceDone ? 'practice' : 'recap'
  const poemDone = !!(byGenre.poem && byGenre.poem.done)
  const storyDone = !!(byGenre.story && byGenre.story.done)
  const sherDone = !!(byGenre.sher && byGenre.sher.done)

  return (
    <Screen withTabBar>
      {/* hero band */}
      <div style={{ margin: '16px 18px 0', background: 'var(--accent-gradient)', borderRadius: 26, padding: '20px 22px', color: '#fff' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 26, fontWeight: 700, lineHeight: 1.1, display: 'flex', alignItems: 'center', gap: 9 }}>
              Hi {profile.name.split(' ')[0]}! <IconSunRays size={24} strokeWidth={1.8} />
            </div>
            <div style={{ fontSize: 14, opacity: 0.92, marginTop: 6 }}>
              {stage === 'session' ? "Ready for today's writing?" : stage === 'practice' ? "Today's lesson is done — nicely done." : 'A full day of writing. Rest easy.'}
            </div>
          </div>
          <div className="press" onClick={() => navigate('/progress')} style={{ width: 64, height: 64, borderRadius: '50%', background: 'rgba(255,255,255,0.22)', border: '3px solid #fff', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', flex: 'none', cursor: 'pointer' }}>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 700, lineHeight: 1 }}>{streak.current}</div>
            <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: '0.05em' }}>DAYS</div>
          </div>
        </div>
        <div className="press" onClick={() => navigate('/progress')} style={{ marginTop: 16, cursor: 'pointer' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, fontWeight: 700, marginBottom: 5 }}>
            <span>Level {profile.level} · {profile.title}</span>
            <span>{profile.xp} / {profile.xpToNext} XP</span>
          </div>
          <div style={{ height: 8, background: 'rgba(255,255,255,0.3)', borderRadius: 99, overflow: 'hidden' }}>
            <div style={{ width: `${xpPct}%`, height: '100%', background: '#fff', borderRadius: 99 }} />
          </div>
          <div style={{ fontSize: 11, fontWeight: 700, opacity: 0.85, marginTop: 8, textAlign: 'right' }}>View progress ›</div>
        </div>
      </div>

      {/* genre chooser — always available; each track is its own daily lesson */}
      <div style={{ padding: '22px 20px 8px' }}>
        <div style={{ fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 600, color: 'oklch(0.3 0.03 55)', marginBottom: 12 }}>
          Today I want to write…
        </div>
        <div style={{ display: 'flex', gap: 10 }}>
          <GenreButton active={todayGenre === 'poem'} done={poemDone} onClick={() => setTodayGenre('poem')} icon={<IconFeather size={24} strokeWidth={1.7} />} label="Poem" />
          <GenreButton active={todayGenre === 'story'} done={storyDone} onClick={() => setTodayGenre('story')} icon={<IconBook size={24} strokeWidth={1.7} />} label="Story" />
          <GenreButton active={todayGenre === 'sher'} done={sherDone} onClick={() => setTodayGenre('sher')} icon={<IconMoon size={24} strokeWidth={1.7} />} label="Sher" />
        </div>
      </div>

      {stage === 'session' && (
        <SessionCard content={content} sessionProgress={sessionProgress} onBegin={() => navigate('/session/lesson')} />
      )}

      {stage === 'practice' && (
        <PracticeCard
          genre={todayGenre}
          onPractice={() => navigate('/session/write?mode=session-extra')}
          onSkip={() => markPracticeDone(todayGenre)}
        />
      )}

      {stage === 'recap' && (
        <RecapCard recap={recap} onFreewrite={() => navigate('/write?mode=freewrite')} />
      )}

      {/* revisit yesterday */}
      {yesterdayPiece && (
        <button className="press" onClick={() => navigate(`/you/${yesterdayPiece.id}`)} style={{ margin: '12px 20px 0', width: 'calc(100% - 40px)', display: 'flex', alignItems: 'center', gap: 12, background: '#fff', border: '1px solid var(--card-border)', borderRadius: 18, padding: '14px 16px', textAlign: 'left' }}>
          <div style={{ width: 40, height: 40, borderRadius: 12, background: 'var(--accent-tint)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent)', flex: 'none' }}>
            <IconRevisit size={20} strokeWidth={1.8} />
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', color: 'oklch(0.6 0.06 45)', letterSpacing: '0.05em' }}>Finish yesterday</div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 15, fontWeight: 600, color: 'oklch(0.3 0.03 55)' }}>"{yesterdayPiece.title}"</div>
          </div>
          <span style={{ color: 'var(--accent)', fontSize: 18, fontWeight: 700 }}>→</span>
        </button>
      )}
    </Screen>
  )
}

function GenreButton({ active, done, onClick, icon, label }) {
  return (
    <button className="press" onClick={onClick} style={{ position: 'relative', flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 8, padding: '16px 8px', borderRadius: 20, background: active ? 'var(--accent)' : 'oklch(0.96 0.02 65)', color: active ? '#fff' : 'oklch(0.42 0.05 45)', boxShadow: active ? 'var(--shadow-button)' : 'none' }}>
      {icon}
      <div style={{ fontSize: 14, fontWeight: 700 }}>{label}</div>
      {done && (
        <span style={{ position: 'absolute', top: 8, right: 8, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 18, height: 18, borderRadius: '50%', background: active ? 'rgba(255,255,255,0.28)' : 'var(--accent)', color: '#fff', flex: 'none' }}>
          <IconCheck size={11} strokeWidth={2.6} />
        </span>
      )}
    </button>
  )
}

function SessionCard({ content, sessionProgress, onBegin }) {
  return (
    <div style={{ margin: '12px 20px 0', background: '#fff', borderRadius: 24, padding: 22, boxShadow: 'var(--shadow-card)', border: '1px solid var(--card-border)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.09em', textTransform: 'uppercase', color: 'var(--accent)' }}>
          Today's session · {content.eyebrow}
        </div>
        <span style={{ fontSize: 11, fontWeight: 700, color: 'var(--accent)', background: 'var(--accent-tint)', padding: '5px 10px', borderRadius: 99 }}>+{content.xp} XP</span>
      </div>
      <div style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 600, color: 'oklch(0.28 0.03 55)', marginTop: 12, lineHeight: 1.2 }}>{content.title}</div>
      <div style={{ marginTop: 16, display: 'flex', flexDirection: 'column', gap: 14 }}>
        <AgendaStep n={1} title="Read the lesson" subtitle={content.lessonStepLabel} filled={sessionProgress.step >= 1} />
        <AgendaStep n={2} title="Study today's example" subtitle="See the technique in the wild" filled={sessionProgress.step >= 2} />
        <AgendaStep n={3} title="Write from a prompt" subtitle="Your turn" filled={sessionProgress.step >= 3} />
      </div>
      <button className="press" onClick={onBegin} style={{ width: '100%', marginTop: 20, background: 'var(--accent)', color: '#fff', textAlign: 'center', padding: 15, borderRadius: 16, fontWeight: 700, fontSize: 15, boxShadow: 'var(--shadow-button)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
        Begin session <IconArrowRight size={18} />
      </button>
    </div>
  )
}

function PracticeCard({ genre, onPractice, onSkip }) {
  return (
    <div style={{ margin: '12px 20px 0', background: '#fff', borderRadius: 24, padding: 22, boxShadow: 'var(--shadow-card)', border: '1px solid var(--card-border)' }}>
      <div style={{ display: 'inline-flex', alignItems: 'center', gap: 7, fontSize: 11, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--accent)', background: 'var(--accent-tint)', padding: '6px 11px', borderRadius: 99 }}>
        <IconCheck size={13} strokeWidth={2.6} /> Today's lesson · done
      </div>
      <div style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 600, color: 'oklch(0.28 0.03 55)', marginTop: 14, lineHeight: 1.2 }}>
        Keep the pen warm
      </div>
      <p style={{ fontFamily: 'var(--font-serif)', fontSize: 16, lineHeight: 1.55, color: 'oklch(0.4 0.03 55)', marginTop: 10 }}>
        You've done the work that counts. Write one more {genre === 'poem' ? 'poem' : genre === 'sher' ? 'sher' : 'story'} from a fresh prompt — no scoring, just for the love of it.
      </p>
      <button className="press" onClick={onPractice} style={{ width: '100%', marginTop: 18, background: 'var(--accent)', color: '#fff', textAlign: 'center', padding: 15, borderRadius: 16, fontWeight: 700, fontSize: 15, boxShadow: 'var(--shadow-button)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
        Write from a prompt <IconArrowRight size={18} />
      </button>
      <button className="press" onClick={onSkip} style={{ width: '100%', marginTop: 10, background: 'transparent', color: 'var(--muted)', textAlign: 'center', padding: 6, fontWeight: 700, fontSize: 13 }}>
        That's enough for today →
      </button>
    </div>
  )
}

function RecapCard({ recap, onFreewrite }) {
  return (
    <div style={{ margin: '12px 20px 0', background: '#fff', borderRadius: 24, padding: 22, boxShadow: 'var(--shadow-card)', border: '1px solid var(--card-border)' }}>
      <div style={{ display: 'inline-flex', alignItems: 'center', gap: 7, fontSize: 11, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--accent)', background: 'var(--accent-tint)', padding: '6px 11px', borderRadius: 99 }}>
        Today's lesson · recap
      </div>
      {recap ? (
        <>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: 21, fontWeight: 600, color: 'oklch(0.28 0.03 55)', marginTop: 14, lineHeight: 1.2 }}>{recap.title}</div>
          <div style={{ marginTop: 14, display: 'flex', flexDirection: 'column', gap: 11 }}>
            {recap.points.map((p, i) => (
              <div key={i} style={{ display: 'flex', gap: 11, alignItems: 'flex-start' }}>
                <span style={{ width: 20, height: 20, borderRadius: '50%', background: 'var(--accent-tint)', color: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none', marginTop: 2 }}>
                  <IconCheck size={12} strokeWidth={2.6} />
                </span>
                <span style={{ fontSize: 14.5, lineHeight: 1.55, color: 'oklch(0.35 0.03 55)' }}>{p}</span>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div style={{ fontFamily: 'var(--font-display)', fontSize: 21, fontWeight: 600, color: 'oklch(0.28 0.03 55)', marginTop: 14 }}>
          You're done for today.
        </div>
      )}
      <div style={{ marginTop: 18, paddingTop: 16, borderTop: '1px solid var(--card-border)', display: 'flex', alignItems: 'center', gap: 9, color: 'var(--muted)' }}>
        <IconSunRays size={17} strokeWidth={1.8} />
        <span style={{ fontSize: 13, fontWeight: 600 }}>A new lesson arrives at dawn.</span>
      </div>
      <button className="press" onClick={onFreewrite} style={{ width: '100%', marginTop: 14, background: 'var(--accent-tint)', color: 'var(--accent)', textAlign: 'center', padding: 13, borderRadius: 14, fontWeight: 700, fontSize: 14 }}>
        Open the blank page
      </button>
    </div>
  )
}

function AgendaStep({ n, title, subtitle, filled }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 13 }}>
      <span style={{ width: 28, height: 28, borderRadius: '50%', background: filled ? 'var(--accent)' : 'transparent', border: filled ? 'none' : '1.5px solid oklch(0.8 0.06 45)', color: filled ? '#fff' : 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 13, flex: 'none' }}>
        {n}
      </span>
      <div>
        <div style={{ fontSize: 14, fontWeight: 700, color: 'oklch(0.3 0.03 55)' }}>{title}</div>
        <div style={{ fontSize: 12, color: 'var(--muted)' }}>{subtitle}</div>
      </div>
    </div>
  )
}
