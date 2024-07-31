import React from "react";

const Jumbotron = (props) => {
    return (
        <div className="p-5 mb-4 bg-light rounded-3">
            <div className="container-fluid py-5">
                <h1 className="display-5 fw-bold">Título genérico de un trabajo aprobado</h1>
                <p className="col-md-8 fs-4">Aquí te muestro las razones por las que deberías aprobarme el trabajo.</p>
                <button className="btn btn-primary btn-lg" type="button">Apruébame Javi</button>
            </div>
        </div>
	);
};

export default Jumbotron;
