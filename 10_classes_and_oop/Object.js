// function multiplyBy5 (num){
//     return num*5
// }

// console.log(multiplyBy5(5))


function fnOne(username,score){
    this.username=username
    this.score=score
}

fnOne.prototype.imhere =  function(){
    console.log(`${this.username} is here`); // this mtlb jis
}


const chai = new fnOne("Chai",232)
chai.imhere()