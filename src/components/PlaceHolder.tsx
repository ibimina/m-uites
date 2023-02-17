function placeholder({ emoji }: { emoji: string }) {
    return (<div className="placeholder">
        <div className="placeholder-img">
            <span>{emoji}</span>
        </div>
        <div className="placeholder-longtext">
        </div>
        <div className="placeholder-shorttext">
        </div>
    </div>);
}

export default placeholder;