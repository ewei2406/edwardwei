import AuthIcon from "../AuthIcon"
import './index.css'

const Navlink = ({ text, href }: { text: string, href: string }) => <a href={href} className="navlink">
    {text}
</a>

const Navbar = () => {
    return <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        display: 'flex',
        padding: '12px 20px',
        justifyContent: 'space-between'
    }}>
        <div style={{
            display: 'flex',
            gap: 15,
            paddingLeft: 5,
            alignItems: 'center'
        }}>
            <Navlink text="About" href="/about" />
        </div>

        <div style={{
            display: 'flex',
            gap: 15,
            alignItems: 'center'
        }}>
            <Navlink text="Contact" href="/contact" />
            <Navlink text="Photos" href="/photos" />
            <div id="dotsIcon" style={{ marginLeft: 5 }}>
                <svg focusable="false" viewBox="0 0 24 24"><path d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z"></path></svg>
            </div>
            <AuthIcon />
        </div>
    </div>
}
export default Navbar