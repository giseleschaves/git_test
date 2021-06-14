let memeList = ['redo-cat-meme4.jpg', 
                '16_I-just-sold-the-dog-Final.jpg', 
                '17_I-ate-too-much-Final.jpg', 
                '18_Toilet-paper-Final.jpg'];

    
    btn = document.querySelector('#btn-meme');
    img = document.querySelector('#img-meme');

    btn.addEventListener('click', randomMeme);

    function randomMeme() {
        let memeIndex = Math.floor(Math.random()*memeList.length);
        img.src = `./meme-img/${memeList[memeIndex]}`;  
    }
    

    