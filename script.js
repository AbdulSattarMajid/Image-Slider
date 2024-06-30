let i = 0;

function Next() {   
    let source = document.querySelector('img');
    i++;
    if (i < 2) {
        source.src = `pic${i}.jpg`;
    } else if (i >= 2 && i < 6) {
        source.src = `pic${i}.jpeg`;
    } else {
        i = 0;
        source.src = `pic${i}.jpg`;
    }
}

function Previous() {   
    let source = document.querySelector('img');
    if (i > 0 && i <= 2) {
        i--;
        source.src = `pic${i}.jpg`;
    } else if (i > 2 && i <= 6) {
        i--;
        source.src = `pic${i}.jpeg`;
    } else if (i === 0) {
        i = 5; 
        source.src = `pic${i}.jpeg`;
    }
}
