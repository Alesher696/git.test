function maps(x){
    return x.map(el => el * 2)
    }

    console.log(maps([1,1,1,2,4]));


//  NO DECISION 
    // function findNeedle(haystack) {
     
    //     if (haystack.indexOf('needle'))
    //     {return "Your function didn't return anything"}
    //     else{
    //         return `found the needle at position ${haystack.indexOf('needle')}`
    //     }
     
     
     
    // //  'Your function didn't return anything'

    // }
    //   console.log(findNeedle(['3', '123124234', undefined, 'world', 'hay', 2, '3', true, false]));



    function saleHotdogs(n){
        let result = (n < 5 ? n * 100 : (n >= 5 && n < 10) ? n * 95 : n >= 10 ? n * 90 : n * 0);
        return result 
      };

      console.log(saleHotdogs(10));




      function removeUrlAnchor(url) {
        let arr = url.split("");
        if  (arr.indexOf("#") == -1){
            return url
        } else return url.slice(0, arr.indexOf("#"))
        // return url.slice(0, arr.indexOf("#"));
      }
      console.log(removeUrlAnchor("www.codewars.com/katas/"));