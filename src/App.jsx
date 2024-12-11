import './App.css'
import { useState } from 'react'
import { TimerList } from './components/timer-list'
import { KillList } from './components/kill-list'

function App() {
  const [timers, setTimers] = useState([])
  const [killed, setKilled] = useState([])
  const [timeStart, setTimeStart] = useState('')
  const handleRemove = (id, timeEnd) => {
    setTimers(timers.filter(timer => {
      if (timer.id == id) {
        setKilled([...killed, { id, timeEnd }])
        return null
      }
      return timer
    }))
  }
  const handleRestore = (id, timeEnd) => {
    // Add the item back to the timers list
    setTimers((timers) => [...timers, { id, timeEnd }]);

    // Remove the item from the killed list
    setKilled((killed) => killed.filter(timer => timer.id !== id));
  };
  return (
    <>
      <div className="p-4">
        <button
          onClick={() => {
            setTimeStart(`${new Date().getMinutes()}:${new Date().getSeconds()}`)
            setDifference()
            setTimers([...timers, { id: Date.now() }])
          }}
          className="bg-red-300 px-4 py-2 rounded-md hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-red-300"
        >
          Create
        </button>
        <div className="flex flex-row gap-6 mt-4">
          <TimerList
            timers={timers}
            onDelete={handleRemove}
            className="flex-1 border border-gray-300 p-4 rounded-md"
          />
          <KillList
            onRestore={handleRestore}
            killed={killed}
            timeStart={timeStart}
            diff={diff}
            className="flex-1 border border-gray-300 p-4 rounded-md"
          />
        </div>
      </div>
    </>
  )
}

export default App