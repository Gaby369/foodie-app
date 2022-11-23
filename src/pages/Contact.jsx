import React from "react";
const Contact = () => {
  return (
    <div className="container contact">
      <div className="row">
        <div className="col-md-8 col-12 mx-auto">
          <div className="card shadow-lg border-0 p-4">
            <h1 className="text-center bg-dark text-white display-4 d-inline-block">
              Contáctenos
            </h1>
            <div className="form-group my-5">
              <div className="row">
                <div className="col-md-6 col-12 mx-auto my-2">
                  <input
                    type="text"
                    className="form-control-lg"
                    placeholder="Nombres"
                    required
                  />
                </div>
                <div className="col-md-6 col-12 mx-auto my-2">
                  <input
                    type="text"
                    className="form-control-lg"
                    placeholder="Apellidos"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="form-group mb-5">
              <div className="row">
                <div className="col-md-6 col-12 mx-auto my-2">
                  <input
                    type="email"
                    className="form-control-lg"
                    placeholder="Correo Electrónico"
                    required
                  />
                </div>
                <div className="col-md-6 col-12 mx-auto my-2">
                  <input
                    type="tel"
                    className="form-control-lg"
                    placeholder="Celular"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-11">
                <textarea
                  className="form-control"
                  row="20"
                  placeholder="Escribe tu mensaje aquí"
                  required
                ></textarea>
              </div>
            </div>
            <div className="mt-5 col-md-6 col-12 mx-auto">
              <button className="btn btn-outline-dark btn-lg btn-block">
                Enviar Mensaje
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
