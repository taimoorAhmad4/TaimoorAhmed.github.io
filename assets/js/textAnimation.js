  const element = document.getElementById("words");

        (function () {
            var words = ["FREELANCER", "DESIGNER", "DEVELOPER"],
                i = 0;
            setInterval(function () {
                $('#words').fadeOut(function () {

                    $(this).html(words[(i = (i + 1) % words.length)]);
                    if (element.innerHTML == "FREELANCER") {
                        $(this).css({ "letter-spacing": "0px", "font-size": "90px", "left": "230px", "top": "260px" })
                    } else if (element.innerHTML == "DESIGNER") {
                        $(this).css({ "letter-spacing": "8px", "font-size": "100px", "left": "250px", "top": "240px" })
                    } else {
                        $(this).css({ "letter-spacing": "1px", "font-size": "95px", "left": "250px", "top": "250px" })
                    }

                    $(this).fadeIn()




                });
            }, 2500)



        })();