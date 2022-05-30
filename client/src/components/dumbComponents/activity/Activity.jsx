// import styles
import "./Activity.css"

const Activity = ({ id, name, season, difficulty, flagCountry, handleClick }) => {

    return(
        <div className="container">
            <div className="destroyElement" onClick={() => handleClick(id)}/> 
            <div>
                <span> <b>Name</b>: { name } </span>
                <br />
                <span> <b>Season</b>: { season }</span>
                <br />
                <span> <b>Dificulty</b>: {`(${difficulty})`} </span>
            </div>
            <div className="containerImgIco">
                {flagCountry}
            </div>
        </div>

    )

}

export default Activity;