import { Router, Routes, Route } from '@solidjs/router'
import { type Component } from 'solid-js'

import { TodoView } from './pages/TodoView'

export const App: Component = () => (
  <Router>
    <Routes>
      <Route path="/todo" component={TodoView} />
    </Routes>
  </Router>
)
