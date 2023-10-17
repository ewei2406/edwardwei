import './App.css'
import Search from './components/Search'
import Logo from './components/Logo'
import Button from './components/Button'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { createContext, useEffect, useState } from 'react'

export const MobileContext = createContext(false)

const App = () => {
    const [mobile, setMobile] = useState(false)

    useEffect(() => {
        if (window.innerWidth < 1000) setMobile(true)
        else setMobile(false)
    }, [])

    return (
        <MobileContext.Provider value={mobile}>
            <div style={{ height: '100%' }}>
                <Navbar/>
                <div style={{
                    height: 'calc(100% - 655px)',
                    maxHeight: '215px',
                }}>
                </div>
                <div style={{
                    display: 'flex',
                    marginTop: 60,
                    padding: '0 32px',
                    flexDirection: 'column',
                    alignItems: 'center',
                    flexGrow: 0,
                    gap: 45
                }}>
                    <Logo />
                    <Search />
                    <Button text="I'm Feeling Lucky" onClick={() => {}}/>
                </div>
                <Footer/>
            </div>
        </MobileContext.Provider>
    )
}

export default App