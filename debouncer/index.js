let show = document.getElementById('show1')

let show1 = document.createElement("div");
show1.setAttribute("id","show") 


let timer;
async function searchMoviesEle(func, delay) {
    if(timer) {
        clearTimeout(timer);
        

    }
    timer = setTimeout(function() {
        func()
    }, delay)

}

async function main() {
    let name = document.getElementById("search").value;

    if(name.length <= 2) {
        show.innerHTML = null;
        return false;
    }

    let m = await getMovie(name)

    // console.log(m)
    appendMovie(m)
}


async function getMovie(name) {

    try {
        let res = await fetch(`https://www.omdbapi.com/?s=${name}&apikey=27ce9455`);

        let data = await res.json();
        // console.log(data)
        if(data.Response == "True") {
            show1.innerHTML = null;
            return data.Search;
           
        } 
        else {
            console.log("Wrong Input...")
        }
    } catch(err) {
        console.log('This error might be because of spelling mistakes' + err)
    }
}



async function appendMovie(m) {
    show.innerHTML = null;
    show1.innerHTML = null;

    if(m === undefined) {
        return false;
    }
    m.forEach((el) => {
        let div = document.createElement("div");
        div.setAttribute("id", "show2")
        let div2 = document.createElement("div")
        div2.setAttribute("id","poster_div")

        let img = document.createElement('img');
        img.src =  el.Poster;

        let p = document.createElement('p');
        
        let btn  = document.createElement('button');

        btn.setAttribute('id', 'btn1');
        btn.addEventListener('click', function () {
            show.innerHTML = null;
            
            appendMovies(el)
        })

        p.innerText = el.Title;
        btn.append(p);
        div2.append(img)
        div.append(div2, btn);

        show1.append(div)
        show.append(show1)

    })


}