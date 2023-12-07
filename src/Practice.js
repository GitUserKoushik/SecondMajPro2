// 1)
for(let a= 1;a<=20;a++){
    if(a%2===0){
        console.log(a);
    }
    
}

// 2)
let str = "Hello Mr Hy I am good boy";

// 3)
function abc(a){
for(let b = a.length;b>=0;b--){
   console.log(a[b]);
}
}
abc("4564789759");

// 4)

function double(arr){
  let dblarr = arr.map((data)=>{
       return data*2;
    })
    console.log(dblarr);
}
double([2,3,4,5,6,7,8]);
// 
function even(arr){
    let evenarr = arr.filter((data)=>{
        return data%2===0;
    })
    console.log( evenarr);
}

even([2,3,4,5,6,7,8,9]);
// 

function add (arr){
    let addarr = arr.reduce((a,b)=>{
       return a+b;
    })
    console.log(addarr);
}
add([2,3,4,5,6,7,8])
// 

function high(arr){
    let highnum = arr.reduce((a,b)=>
      (a>b? a:b)
    );
    console.log(highnum);
}
high([2,3,4,5,6,7,8,9]);
// 
function prime(arr){
    let count = 0;
    let primenum = arr.filter((data)=>{
        for(let a = 1;a<=data;a++){
            if(data%a==0){
                count++;
            }
            
        }
        if(count==2){
            return data;
        }
       
    })
    console.log(primenum);
}
prime([2,3,4,5,6,7,8,9])
// 
function sorting (arr){
    let sorted = arr.sort((a,b)=>{
       return a.rollnum - b.rollnum;
    });
    console.log(sorted);
}
sorting([{name:"Koushik",rollnum:3},{name:"Souvik",rollnum:4},{name:"Chintu",rollnum:1},{name:"Pintu",rollnum:2},{name:"Choton",rollnum:5}]);
// 
function dup(arr){
    let newarr = [...new Set(arr)];
    console.log(newarr);
}
dup([2,2,3,4,4,5,5,6,8,8,8]);
// 
function sum(...arr){
  let sumarr = arr.reduce((a,b)=>{
    return a+b;
  })
  console.log(sumarr);
}
sum(2,3,4,5,6,7,8,7,8,9,7,6,5,4);
// 
 function average(...arr){
    let avgarr = arr.reduce((a,b)=>{
        return a+b;
    })/arr.length;
console.log(avgarr);
}
average(2,3,4,5,6,7,8);
// 
function bignum(...arr){
    let bigarr = arr.reduce((a,b)=>{
        return a>b?a:b;
    })
    console.log(bigarr);
}
bignum(2,3,9,8,5,6,7,4,34,56);
// 
function final(...arr){
    let comboarr = [].concat(...arr);
    console.log(comboarr);
}
final([2,3,4,5],[3,4,5,6],[4,5,6,7]);
// 
function lenarr (...arr){
    let stringarr = arr.filter((data)=>{
        return data.length>5;
    })
    console.log(stringarr);
}
lenarr("rgergwerg","wrgr","rr","eargerg","erg","werfgwgf","wefgweg");
// 
let objarr = [{name:"Koushik",roll:1},{name:"Souvik",roll:2},{name:"Koulick",roll:3}];
objarr[0].name = "Subhomoy";
console.log(objarr);
