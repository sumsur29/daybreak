import { useNavigate, useParams } from 'react-router-dom'
import Screen from '../components/Screen'
import BackTile from '../components/BackTile'
import { useStore } from '../state/store'
import { IconBook } from '../icons/Icons'

export default function LessonView() {
  const navigate = useNavigate()
  const { courseId, lessonId } = useParams()
  const { state, startCourseLesson } = useStore()
  const course = state.courses.find((c) => c.id === courseId)
  const lesson = course?.lessons.find((l) => l.id === lessonId)

  if (!course || !lesson) {
    return (
      <Screen>
        <div style={{ padding: 24 }}>
          <BackTile to={`/learn/${courseId}`} />
          <p style={{ marginTop: 16 }}>Lesson not found.</p>
        </div>
      </Screen>
    )
  }

  const handleDone = () => {
    startCourseLesson(course.id, lesson.id)
    navigate(`/learn/${course.id}`)
  }

  return (
    <Screen>
      <div style={{ padding: '14px 22px 0' }}>
        <BackTile to={`/learn/${courseId}`} />
      </div>
      <div style={{ padding: '20px 24px 0' }}>
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
            fontSize: 11,
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.06em',
            color: 'var(--accent)',
            background: 'var(--accent-tint)',
            padding: '6px 11px',
            borderRadius: 99,
          }}
        >
          <IconBook size={13} strokeWidth={1.9} />
          {course.title}
        </div>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 25, fontWeight: 700, color: 'var(--ink-strong)', marginTop: 14, lineHeight: 1.2 }}>
          {lesson.title}
        </h2>
        {(lesson.paragraphs || [lesson.body]).filter(Boolean).map((p, i) => (
          <p key={i} style={{ fontSize: 15.5, lineHeight: 1.7, color: 'oklch(0.4 0.03 55)', marginTop: i === 0 ? 14 : 12 }}>
            {p}
          </p>
        ))}
        {lesson.tryIt && (
          <div
            style={{
              marginTop: 20,
              background: '#fff',
              border: '1px solid var(--card-border)',
              borderLeft: '3px solid var(--accent)',
              borderRadius: 14,
              padding: '16px 18px',
            }}
          >
            <div style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', color: 'oklch(0.6 0.06 45)', letterSpacing: '0.05em', marginBottom: 8 }}>
              Try it
            </div>
            <p style={{ fontSize: 14.5, lineHeight: 1.6, color: 'oklch(0.35 0.03 55)' }}>{lesson.tryIt}</p>
          </div>
        )}
        <div style={{ height: 120 }} />
      </div>

      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          padding: '16px 22px calc(env(safe-area-inset-bottom, 0px) + 30px)',
          background: 'linear-gradient(to top, var(--canvas) 72%, transparent)',
        }}
      >
        <button
          className="press"
          onClick={handleDone}
          style={{
            width: '100%',
            background: lesson.done ? 'oklch(0.96 0.02 65)' : 'var(--accent)',
            color: lesson.done ? 'oklch(0.42 0.05 45)' : '#fff',
            textAlign: 'center',
            padding: 16,
            borderRadius: 16,
            fontWeight: 700,
            fontSize: 15,
            boxShadow: lesson.done ? 'none' : 'var(--shadow-button)',
          }}
        >
          {lesson.done ? 'Completed ✓' : 'Mark as read'}
        </button>
      </div>
    </Screen>
  )
}
