const Country = ( {id, name, flag, continent, capital, subregion, area, population, Activities } ) => {
    return (
        <div>
            <div>
                <img src={ flag } alt="bandera"/>
            </div>
            <div>
                <h3>{ name }</h3>
                <div>
                    <label>{ id }</label>
                    <br />
                    <label>{ continent }</label>
                    <br />
                    <label> capital: { capital }</label>
                </div>
                <div>
                    <label> subregion: {subregion}</label>
                    <br />
                    <label> area: {area}</label>
                    <br />
                    <label> population: {population} </label>
                    <br />
                </div>
                <div>
                    Activities: {Activities}
                </div>
            </div>



        </div>
    )
}

export default Country;

