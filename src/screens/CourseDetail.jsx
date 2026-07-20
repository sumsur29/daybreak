import { useNavigate, useParams } from 'react-router-dom'
import Screen from '../components/Screen'
import BackTile from '../components/BackTile'
import { useStore } from '../state/store'
import { IconCheck } from '../icons/Icons'

export default function CourseDetail() {
  const navigate = useNavigate()
  const { courseId } = useParams()
  const { state } = useStore()
  const course = state.courses.find((c) => c.id === courseId)

  if (!course) {
    return (
      <Screen>
        <div style={{ padding: 24 }}>
          <BackTile to="/learn" />
          <p style={{ marginTop: 16 }}>Course not found.</p>
        </div>
      </Screen>
    )
  }

  return (
    <Screen>
      <div style={{ padding: '14px 20px 0', display: 'flex', alignItems: 'center', gap: 13 }}>
        <BackTile to="/learn" />
        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 16, color: 'oklch(0.3 0.03 55)' }}>
          {course.title}
        </div>
      </div>

      <div style={{ padding: '18px 20px 0' }}>
        <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--muted)' }}>
          {course.done} / {course.total} lessons complete
        </div>
        <div style={{ height: 6, background: 'oklch(0.93 0.02 65)', borderRadius: 99, marginTop: 8, overflow: 'hidden' }}>
          <div style={{ width: `${course.total ? (course.done / course.total) * 100 : 0}%`, height: '100%', background: 'var(--accent)' }} />
        </div>
      </div>

      <div style={{ padding: '18px 20px 96px', display: 'flex', flexDirection: 'column', gap: 10 }}>
        {course.lessons.map((lesson, i) => (
          <button
            key={lesson.id}
            className="press"
            onClick={() => navigate(`/learn/${course.id}/${lesson.id}`)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 14,
              textAlign: 'left',
              background: '#fff',
              border: '1px solid var(--card-border)',
              borderRadius: 16,
              padding: '14px 16px',
            }}
          >
            <span
              style={{
                width: 28,
                height: 28,
                borderRadius: '50%',
                background: lesson.done ? 'var(--accent)' : 'transparent',
                border: lesson.done ? 'none' : '1.5px solid oklch(0.8 0.06 45)',
                color: lesson.done ? '#fff' : 'var(--accent)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 700,
                fontSize: 12,
                flex: 'none',
              }}
            >
              {lesson.done ? <IconCheck size={13} strokeWidth={2.4} /> : i + 1}
            </span>
            <div style={{ fontSize: 14.5, fontWeight: 600, color: 'oklch(0.3 0.03 55)' }}>{lesson.title}</div>
          </button>
        ))}
      </div>
    </Screen>
  )
}
