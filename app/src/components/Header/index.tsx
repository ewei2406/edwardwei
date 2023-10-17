const colors = ['var(--blue)', 'var(--red)', 'var(--yellow)', 'var(--green)']

const Header = ({ text }: { text: string }) => <h1 style={{
    letterSpacing: '1px',
    fontSize: '5em',
    margin: 0,
}}>
    {text.split("").map((l, i) => <span style={{ color: colors[i % colors.length] }}>{l}</span>
    )}
</h1>

export default Header