import { HashRouter, Routes, Route } from 'react-router-dom'
import { StoreProvider, useStore } from './state/store'
import Onboarding from './screens/Onboarding'
import Today from './screens/Today'
import SessionLesson from './screens/SessionLesson'
import SessionExample from './screens/SessionExample'
import WriteScreen from './screens/WriteScreen'
import Learn from './screens/Learn'
import CourseDetail from './screens/CourseDetail'
import LessonView from './screens/LessonView'
import Practice from './screens/Practice'
import Progress from './screens/Progress'
import You from './screens/You'
import PortfolioItem from './screens/PortfolioItem'

function AppShell() {
  const { state } = useStore()

  if (!state.onboarded) {
    return <Onboarding />
  }

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Today />} />
        <Route path="/session/lesson" element={<SessionLesson />} />
        <Route path="/session/example" element={<SessionExample />} />
        <Route path="/session/write" element={<WriteScreen />} />
        <Route path="/write" element={<WriteScreen />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/learn/:courseId" element={<CourseDetail />} />
        <Route path="/learn/:courseId/:lessonId" element={<LessonView />} />
        <Route path="/practice" element={<Practice />} />
        <Route path="/progress" element={<Progress />} />
        <Route path="/you" element={<You />} />
        <Route path="/you/:pieceId" element={<PortfolioItem />} />
      </Routes>
    </HashRouter>
  )
}

export default function App() {
  return (
    <StoreProvider>
      <div
        style={{
          position: 'relative',
          width: '100%',
          // 100dvh (dynamic viewport height) tracks Safari's collapsing/expanding
          // toolbar in real time; fixed+inset:0 alone leaves a gap when the
          // toolbar animates after the fixed element's size was first computed.
          height: '100dvh',
          background: 'var(--canvas)',
          overflow: 'hidden',
        }}
      >
        <AppShell />
      </div>
    </StoreProvider>
  )
}
