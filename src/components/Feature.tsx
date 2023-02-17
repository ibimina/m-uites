function Feature({id, image, alt, feature, description,ticked , click}: {id:string,image: string, alt: string, feature: string, description: string,ticked: boolean, click: (index: string) => void}) {
    return (
    <div className={`latest ${ticked?"checked":""}`} onClick={()=>click(id)}>
        <img src={image}alt={alt} />
            <div className={`featured ${ticked ? "checked" : ""}`}>
            <h2>{feature}</h2>
            <p className="featured-text">
              {description}
            </p>
        </div>
        {ticked && <img src="./assets/tick-circle.svg" alt="tick" className="tick" />}
    </div>
     );
}

export default Feature;