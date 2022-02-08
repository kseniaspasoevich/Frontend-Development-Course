document.addEventListener("keydown", function(event) {
        if (event.key == "a") {
            let audio = new Audio("white_keys/A.mp3");
            audio.play();}
            else if (event.key == "s") {
            let audio = new Audio("white_keys/S.mp3");
            audio.play();
                }
                else if (event.key == "d") {
                    let audio = new Audio("white_keys/D.mp3");
                    audio.play();
                    }
                    else if (event.key == "f") {
                     let audio = new Audio("white_keys/F.mp3");
                     audio.play();
                        }
                        else if (event.key == "g") {
                            let audio = new Audio("white_keys/G.mp3");
                            audio.play();
                            }
                            else if (event.key == "h") {
                                let audio = new Audio("white_keys/H.mp3");
                                audio.play();
                                }
                                else if (event.key == "j") {
                                    let audio = new Audio("white_keys/J.mp3");
                                    audio.play();
                                    }
                                else
                                    console.log("found 0 messages");


    });



