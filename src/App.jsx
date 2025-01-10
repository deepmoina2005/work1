import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Goals from './pages/Goals'
import FindMemory from './pages/Memories/FindMemory'
import AddNewMemory from './pages/Memories/AddNewMemory'
import ToDoLists from './pages/ToDoLists'
import Archive from './pages/Archive'
import Settings from './pages/Settings'
import Insight from './pages/Insight'
import Subscription from './pages/Subscription'
import Sidebar from './webcomponents/Sidebar'
import GoalsShowPage from './pages/GoalsShowPage'
import Vaults from './pages/Vaults'

const App = () => {
  return (
    <div className="bg-[#F3F3F3] flex">
      <Sidebar />

      {/* Main content area */}
      <div className="flex-1 mt-2 ml-2">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path='/vaults' element={<Vaults/>} />
          <Route path='/goals-view' element={<GoalsShowPage/>}/>
          <Route path="/goals" element={<Goals />} />
          <Route path="/find-memory" element={<FindMemory />} />
          <Route path="/add-new-memory" element={<AddNewMemory />} />
          <Route path="/todo-lists" element={<ToDoLists />} />
          <Route path="/archive" element={<Archive />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/insight" element={<Insight />} />
          <Route path="/subscription" element={<Subscription />} />
        </Routes>
      </div>
    </div>
  )
}

export default App