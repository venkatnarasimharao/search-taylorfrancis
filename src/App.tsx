import './App.css'
import Navbar from '@/navbar'
import DataListTable from '@/tablelist'

function App() {
  return (
    <div className='app bg-gray-20'>
      <div>
        <Navbar />
      </div>
      {/* <div className="text-3xl font-bold underline">
        React app running...
      </div> */}
      <div className='data-table'>
        <DataListTable />
      </div>
    </div>
  )
}

export default App
