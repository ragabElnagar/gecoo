import React from "react";
import HeaderTwo from "../../components/header/HeaderTwo";
import Footer from "../../components/footer/Footer";
const Error404 = () => {
  return (
    <React.Fragment>
      <HeaderTwo/>
      <section
        className="breadcrumb-area breadcrumb-bg"
        style={{ height: "100vh" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="breadcrumb-content text-center">
                <h2>
                  Page<span>Not Found</span>
                </h2>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <a href="/" className="btn btn-style-two">
                      Back To Home
                    </a>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </React.Fragment>
  );
};

export default Error404;
