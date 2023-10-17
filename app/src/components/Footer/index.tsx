import './index.css'

const Footer = () => <div style={{
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'var(--dark05)',
    display: 'flex',
    padding: '12px 20px',
    justifyContent: 'space-between',
    height: 48,
    boxSizing: 'border-box',
    alignItems: 'center',
    fontSize: 14
}}>
    <div>
        <a href="/" className="footerlink">Business</a>
    </div>

    <div>
        🎓 <a href="/" className="footerlink">My third year as a student: join me</a>
    </div>

    <div>
        <a href="/" className="footerlink">Settings</a>
    </div>
</div>

export default Footer