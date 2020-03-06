import React, { Component } from "react";
import Slider from "react-slick";
import './Sapatos.styles.scss';
import { ReactComponent as Sandaria } from '../../../../../assets/images/Produto02Sandaria.svg';
import { ReactComponent as SandariaGG } from '../../../../../assets/images/SandariaGG.svg';



function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "black", left: "411px", top: "-41px", position: "relative" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "black", left: "-32px", top: "72px", position: "relative" }}
            onClick={onClick}
        />
    );
}



export default class AsNavFor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nav1: null,
            nav2: null
        };
    }

    componentDidMount() {
        this.setState({
            nav1: this.slider1,
            nav2: this.slider2,
        });
    }

    render() {
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />
        };
        return (
            <React.Fragment>
                <nav className="sapatos">
                    <div className="sapatos_rotaAtual">
                        <span className="sapatos_rotaAtual--nome">Home</span>
                        <span className="sapatos_rotaAtual--separador">/ </span>
                        <span className="sapatos_rotaAtual--nome">Sapatos</span>
                    </div>
                    <div className="sapatos_Slider">

                        <Slider className="sapatos_Slider--video"
                            asNavFor={this.state.nav1}
                            ref={slider => (this.slider2 = slider)}
                            slidesToShow={1}
                            swipeToSlide={true}
                            focusOnSelect={true}
                            arrows={false}


                        >


                            <div className="sapatos_Slider--video-box">
                                <h3 className="sapatos_Slider--video-img">video</h3>

                            </div>





                        </Slider>


                        <Slider className="sapatos_Slider--VerticalDots"
                            asNavFor={this.state.nav1}
                            ref={slider => (this.slider2 = slider)}
                            slidesToShow={4}
                            {...settings}

                        >


                            <div className="sapatos_Slider--VerticalDots-box">
                                <Sandaria className="sapatos_Slider--VerticalDots-img" />
                            </div>
                            <div className="sapatos_Slider--VerticalDots-box">
                                <Sandaria className="sapatos_Slider--VerticalDots-img" />
                            </div>
                            <div className="sapatos_Slider--VerticalDots-box">
                                <Sandaria className="sapatos_Slider--VerticalDots-img" />
                            </div>
                            <div className="sapatos_Slider--VerticalDots-box">
                                <Sandaria className="sapatos_Slider--VerticalDots-img" />
                            </div>
                            <div className="sapatos_Slider--VerticalDots-box">
                                <Sandaria className="sapatos_Slider--VerticalDots-img" />
                            </div>
                            <div className="sapatos_Slider--VerticalDots-box">
                                <Sandaria className="sapatos_Slider--VerticalDots-img" />
                            </div>

                        </Slider>





                        <Slider className="sapatos_Slider--MainBox"
                            asNavFor={this.state.nav2}
                            ref={slider => (this.slider1 = slider)}
                        >
                            <div className="sapatos_Slider--MainBox-box">
                                <SandariaGG className="sapatos_Slider--MainBox-img" />

                            </div>
                            <div className="sapatos_Slider--MainBox-box">
                                <SandariaGG className="sapatos_Slider--MainBox-img" />

                            </div>
                            <div className="sapatos_Slider--MainBox-box">
                                <SandariaGG className="sapatos_Slider--MainBox-img" />

                            </div>
                            <div className="sapatos_Slider--MainBox-box">
                                <SandariaGG className="sapatos_Slider--MainBox-img" />

                            </div>
                            <div className="sapatos_Slider--MainBox-box">
                                <SandariaGG className="sapatos_Slider--MainBox-img" />

                            </div>
                            <div className="sapatos_Slider--MainBox-box">
                                <SandariaGG className="sapatos_Slider--MainBox-img" />

                            </div>
                        </Slider>



                        <Slider className="sapatos_Slider--BoxDetalhes"
                            asNavFor={this.state.nav1}
                            ref={slider => (this.slider2 = slider)}
                            slidesToShow={1}
                            swipeToSlide={true}
                            focusOnSelect={true}
                            arrows={false}

                        >


                            <div className="sapatos_Slider--BoxDetalhes-box">
                                <h3 className="sapatos_Slider--BoxDetalhes-img">1</h3>

                            </div>

                            <div className="sapatos_Slider--BoxDetalhes-box">
                                <h3 className="sapatos_Slider--BoxDetalhes-img">2</h3>

                            </div>

                            <div className="sapatos_Slider--BoxDetalhes-box">
                                <h3 className="sapatos_Slider--BoxDetalhes-img">3</h3>

                            </div>

                            <div className="sapatos_Slider--BoxDetalhes-box">
                                <h3 className="sapatos_Slider--BoxDetalhes-img">4</h3>

                            </div>



                            <div className="sapatos_Slider--BoxDetalhes-box">
                                <h3 className="sapatos_Slider--BoxDetalhes-img">5</h3>

                            </div>

                            <div className="sapatos_Slider--BoxDetalhes-box">
                                <h3 className="sapatos_Slider--BoxDetalhes-img">6</h3>

                            </div>
                        </Slider>


                    </div>

                </nav>
            </React.Fragment>
        );
    }
}
