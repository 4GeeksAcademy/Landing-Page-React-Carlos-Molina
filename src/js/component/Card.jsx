import React from "react";

const Card = (props) => {
    return (
        <div className="card" style={{width: "18rem"}}>
            <img src="https://media.istockphoto.com/id/1460460653/es/foto/lobos-durante-la-noche.webp?b=1&s=170667a&w=0&k=20&c=EgIq14YcGmyteSJai5kWNyvdjZIhVkWfzq8R84ZS1gw=" className="card-img-top" alt="Imagen de Lobo"/>
                <div className="card-body">
                    <h5 className="card-title">Razones</h5>
                    <p className="card-text">No sé a qué viene la imagen del lobo, pero está bonito. </p>
                    <a href="#" className="btn btn-primary">Apruébame, por favor :)</a>
                </div>
        </div>
    );
};

export default Card;
