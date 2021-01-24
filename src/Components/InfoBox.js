const InfoBox = (props) => {
    const {
        id, 
        name, 
        city, 
        country, 
        employer, 
        title,
        favoriteMovies,
    } = props.value 

  return (
      <div className="infoBackground">
    <div className="infoContainer">
    <h5>{`${id}/25`}</h5>
    <br/>
    <h3 class="line">{name.first} {name.last}</h3>   
    <div><span id="first">From:</span> <span id="second">{`${city}, ${country}`}</span>
    </div>
    <div><span id="first">Job Title:</span> <span id="second">{title}</span>
    </div>
    <div><span id="first">Employer:</span> <span id="second">{employer}</span>
    </div>
    <br />
    <div>
    <h4>Favorite Movies: </h4>
    <ol>
        <li>
            <span id="third">{favoriteMovies[0]}</span>
        </li>
        <li>
            <span id="third">{favoriteMovies[1]}</span>
        </li>
        <li>
            <span id="third">{favoriteMovies[2]}</span>
        </li>
    </ol>
    </div>
    </div>
    </div>
  );
};

export default InfoBox;
