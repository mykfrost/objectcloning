const circle = {
radius: 1,
draw(){
console.log('draw');
}

};


//this is the old method of cloning
// const another ={};
// for (let key in circle)
// another[key] = cicle=[key];

//new method is as shown below

// const another = Object.assign({
//     color:'yellow',
//   source : 'Fox News'
// },circle);


// const another = Object.assign({},circle);

//Third way of cloning an object

const another = {... circle};


console.log(another);