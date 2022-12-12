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




      // function removeUrlAnchor(url) {
      //   let arr = url.split("");
      //   if  (arr.indexOf("#") == -1){
      //       return url
      //   } else return url.slice(0, arr.indexOf("#"))
      //   // return url.slice(0, arr.indexOf("#"));
      // }
      // console.log(removeUrlAnchor("www.codewars.com/katas/"));



      // function repeatStringNumTimes(str, num) {
      //   let newstr = ""
      //   for( let i = 0; i < num; i++ ){
      //     newstr += str

      //   }

      //   return newstr
      // }
      
     
      // console.log(repeatStringNumTimes("abc", -2));



      // function truncateString(str, num){
  
      //   return `${str.slice(0, num)}...`;
      // }
      // console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8))
     

      function titleCase(str) {
        let lower = str.toLowerCase();
        let arr = lower.split(" ");
        let newarr = arr.map((el) =>
          el.replace(el.charAt(0), el.charAt(0).toUpperCase())
        );
        return newarr.join(' ');
      }
      
      console.log(titleCase("I'm a little tea pot"))



      const users = {
        Alan: {
          online: false
        },
        Jeff: {
          online: true
        },
        Sarah: {
          online: false
        }
      }
      
      function countOnline(usersObj) {
        // Only change code below this line
        let i = 0;
        for (let user in usersObj) {
          if (usersObj[user].online == true) {
            i++;
          }
        }
        return i;
        // Only change code above this line
      }
      console.log(countOnline(users));
      

      const person = {
        name: ['Bob', 'Smith'],
        age: 32,
        gender: 'male',
        interests: ['music', 'skiing'],
        bio: function() {
          alert(this.name[0] + ' ' + this.name[1] + ' is ' + this.age + ' years old. He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.');
        },
        greeting: function() {
          alert('Hi! I\'m ' + this.name[0] + '.');
        }
      };
    
      let myDataName = 'height';
      let myDataValue = '1.75m';
      person[myDataName] = myDataValue;
      
    console.log(person);