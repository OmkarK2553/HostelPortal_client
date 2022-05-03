import React from 'react'
import '../css/messdetails.css'
import imgpath from '../img/logo.jpg'

const Mess = () => {
    let slideIndex = 1;
    showSlides(slideIndex);


    function plusSlides(n) {
        slideIndex += n;
        showSlides(slideIndex);
    }


    function showSlides(n) {
        let i;
        let slides = document.getElementsByClassName("img-container");

        if (n > slides.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = slides.length }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        slides[slideIndex - 1].style.display = "block";

    }
    return (
        <>
            <div>
                <h1>PICT MESS cum CANTEEN</h1>

            </div>
            <div className=" container">
                <div className="img-container">
                    <div className="slide-no">1/3</div>
                    <img src="./img/simg.jpg" alt="img-1" className="slide" />

                </div>
                <div className="img-container">
                    <div className="slide-no">2/3</div>
                    <img src="./img/simg.jpg" alt="img-1" className="slide" />

                </div>
                <div className="img-container">
                    <div className="slide-no">3/3</div>
                    <img src="./img/simg.jpg" alt="img-1" className="slide" />

                </div>
                <a className="prev" onclick="plusSlides(-1)">&#10094;</a>
                <a className="next" onclick="plusSlides(1)">&#10095;</a>


            </div>

            <div>
                <div className="today-menu"><h2>Today's Menu</h2></div>
                <center> <hr /> </center>
                <div className="menu-container">
                    <div className="lunch">Lunch</div>

                    <div className="dinner">Dinner</div>
                    <div className="vertical"></div>
                </div>
            </div>
            <div className="outer-grid">
                <h3 style="text-align: center;font-size:40px">Snacks</h3>
                <div className="grid-container">
                    <div className="grid-item"><div className="snack-img"><img src="./img/samosa.jpg" alt="" /></div><div style="font-size:31px;">Samosa</div></div>
                    <div className="grid-item"><div className="snack-img"><img src="./img/wadapav.jpg" alt="" /></div><div style="font-size:31px;">Wada Pav</div></div>
                    <div className="grid-item"><div className="snack-img"><img src="./img/idli.jpg" alt="" /></div><div style="font-size:31px;">Idli Sambar</div></div>
                    <div className="grid-item"><div className="snack-img"><img src="./img/pohe.jpg" alt="" /></div><div style="font-size:31px;">Pohe</div></div>
                    <div className="grid-item"><div className="snack-img"><img src="./img/upma.jpg" alt="" /></div><div style="font-size:31px;">Upma</div></div>
                    <div className="grid-item"><div className="snack-img"><img src="./img/pattice.jpg" alt="" /></div><div style="font-size:31px;">Pattice</div></div>
                    <div className="grid-item"><div className="snack-img"><img src="./img/tea.jpg" alt="" /></div><div style="font-size:31px;">Tea</div></div>
                    <div className="grid-item"><div className="snack-img"><img src="./img/milk.jpg" alt="" /></div><div style="font-size:31px;">Milk</div></div>
                    <div className="grid-item"><div className="snack-img"><img src="./img/coffee.jpg" alt="" /></div><div style="font-size:31px;">Coffee</div></div>
                </div>
            </div>

        </>
    )
}

export default Mess