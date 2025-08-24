export default function Die(props) {
    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "white"
    }
    return (
        <button 
        aria-label={`Die with value ${props.value}, 
        ${props.isHeld ? "held" : "not held"}`}
        aria-pressed={props.isHeld}        
        value={props.value} 
        style={styles} 
        onClick={() => props.hold(props.id)}>
            {props.value}
        </button>
    )
}