function placeholder({ emoji }: { emoji: string }) {
    return (<div className="placeholder">
        <div className="placeholder-img">
            <span>{emoji}</span>
        </div>
        <div className="loading">
            <div className="placeholder-longtext text">
            </div>
            <div className="placeholder-shorttext text">
            </div>
        </div>
        
    </div>);
}

export default placeholder;