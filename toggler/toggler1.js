function toggle(...arr) {
    
    var index =  -1;

    return function () {
        index = index + 1;
        if(index >= arr.length) {
            index = 0;
        }
        return arr[index]
    }
}

const toggler = toggle(1,2,3,4);
for(var i = 0; i<10; i++) 
{
    console.log(toggler())
}