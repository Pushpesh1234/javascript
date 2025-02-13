const arr=[1,3,4,5,6]

const save=arr.forEach((item) => {
    //  console.log(item)
    // return item
}
    
);

//  console.log(save)

 const exaAr=[4,6,7,8,45,34,54,10,21,1,44]

 const takeFliter=exaAr.filter((num)=>num>=6)

//  console.log(takeFliter)

const anotherArr=[5,4,6,23,2,53,1, 12,3,66]
const eachArr=[]
anotherArr.forEach((item)=>{
    if(item>=7){
        eachArr.push(item)
    }
}

    )

// console.log(eachArr)


// filter is also can be  used for taking  object from database which is in a array

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  const print=books.filter( (item) => item.genre==="History");
  console.log(print)
