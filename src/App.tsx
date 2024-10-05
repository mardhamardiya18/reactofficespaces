
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Browse } from './pages/Browse'
import { Details } from './pages/Details'
import { BookOffice } from './pages/BookOffice'
import { CityDetail } from './pages/CityDetail'
import { SuccessBooking } from './pages/SuccessBooking'
import { CheckBooking } from './pages/CheckBooking'

function App() {

  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Browse/>} />
      <Route path='/office/:slug' element={<Details/>} />
      <Route path='/office/:slug/book' element={<BookOffice/>} />
      <Route path='/city/:slug' element={<CityDetail/>} />
      <Route path='/success-booking' element={<SuccessBooking/>} />
      <Route path='/check-booking' element={<CheckBooking/>} />

    </Routes>
   </BrowserRouter>
  )
}

export default App
