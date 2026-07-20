import Screen from '../components/Screen'
import TabBar from '../components/TabBar'
import { useStore } from '../state/store'
import { IconFlame, IconCheck } from '../icons/Icons'

export default function Progress() {
  const { state } = useStore()
  const { profile, streak, skills, stats } = state
  const xpPct = Math.min(100, Math.round((profile.xp / profile.xpToNext) * 100))

  return (
    <Screen withTabBar>
      <div style={{ padding: '20px 24px 6px' }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--accent)' }}>
          Progress
        </div>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 28, fontWeight: 700, color: 'var(--ink-strong)', marginTop: 5 }}>
          You're growing
        </h2>
      </div>

      {/* level card */}
      <div style={{ margin: '14px 20px 0', background: 'var(--accent-gradient)', color: '#fff', borderRadius: 22, padding: 20 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 24, fontWeight: 700, lineHeight: 1 }}>Level {profile.level}</div>
            <div style={{ fontSize: 13, opacity: 0.9, marginTop: 4 }}>{profile.title}</div>
          </div>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.22)',
              border: '2.5px solid #fff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: 20,
            }}
          >
            {profile.level}
          </div>
        </div>
        <div style={{ marginTop: 16, height: 8, background: 'rgba(255,255,255,0.3)', borderRadius: 99, overflow: 'hidden' }}>
          <div style={{ width: `${xpPct}%`, height: '100%', background: '#fff', borderRadius: 99 }} />
        </div>
        <div style={{ fontSize: 12, fontWeight: 700, marginTop: 7, opacity: 0.95 }}>
          {profile.xp} / {profile.xpToNext} XP to Level {profile.level + 1}
        </div>
      </div>

      {/* streak card */}
      <div style={{ margin: '14px 20px 0', background: '#fff', border: '1px solid var(--card-border)', borderRadius: 20, padding: 18 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
          <IconFlame size={20} />
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 16, color: 'oklch(0.3 0.03 55)' }}>
            {streak.current}-day streak
          </span>
          <span style={{ flex: 1 }} />
          <span style={{ fontSize: 12, fontWeight: 700, color: 'var(--muted)' }}>Best: {streak.best}</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 16 }}>
          {streak.week.map((d, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              {d.status === 'done' && (
                <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'var(--accent)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto' }}>
                  <IconCheck size={15} strokeWidth={2.4} />
                </div>
              )}
              {d.status === 'today' && (
                <div style={{ width: 32, height: 32, borderRadius: '50%', border: '2px dashed var(--accent)', color: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto', fontWeight: 800, fontSize: 15 }}>
                  ·
                </div>
              )}
              {d.status === 'empty' && (
                <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'oklch(0.95 0.01 65)', margin: '0 auto' }} />
              )}
              <div style={{ fontSize: 10, fontWeight: d.status === 'empty' ? 700 : 800, color: d.status === 'today' ? 'var(--accent)' : 'var(--muted)', marginTop: 5 }}>
                {d.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ padding: '22px 20px 8px', fontFamily: 'var(--font-display)', fontSize: 15, fontWeight: 700, color: 'oklch(0.42 0.03 55)' }}>
        Skills mastered
      </div>
      <div style={{ padding: '0 20px', display: 'flex', flexDirection: 'column', gap: 11 }}>
        {skills.map((skill) => (
          <div key={skill.name} style={{ background: '#fff', border: '1px solid var(--card-border)', borderRadius: 16, padding: '14px 16px', display: 'flex', alignItems: 'center' }}>
            <span style={{ flex: 1, fontSize: 14, fontWeight: 600, color: 'oklch(0.32 0.03 55)' }}>{skill.name}</span>
            <span style={{ display: 'flex', gap: 5 }}>
              {Array.from({ length: 5 }, (_, i) => (
                <i
                  key={i}
                  style={{
                    width: 9,
                    height: 9,
                    borderRadius: '50%',
                    background: i < skill.rating ? 'var(--accent)' : 'oklch(0.9 0.02 65)',
                    display: 'inline-block',
                  }}
                />
              ))}
            </span>
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', gap: 10, padding: '16px 20px 0' }}>
        <StatTile value={stats.pieces} label="Pieces" />
        <StatTile value={stats.words} label="Words" />
        <StatTile value={stats.lessons} label="Lessons" />
      </div>

      <TabBar />
    </Screen>
  )
}

function StatTile({ value, label }) {
  return (
    <div style={{ flex: 1, background: '#fff', border: '1px solid var(--card-border)', borderRadius: 16, padding: 14 }}>
      <div style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 700, color: 'oklch(0.3 0.03 55)' }}>{value}</div>
      <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--muted)', marginTop: 2 }}>{label}</div>
    </div>
  )
}
