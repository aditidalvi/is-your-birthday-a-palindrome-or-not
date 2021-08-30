function reverseString(str) {
    var listOfChars = str.split("");
    var reversedListOfChar = listOfChars.reverse();
    var reversedString = reversedListOfChar.join("");
    return reversedString;
  }
  
  function isStringPalindrome(str) {
    var reversedString = reverseString(str);
    return str === reversedString;
  }
  
  function getDateAsString(date) {
    var dateInStr = { day: "", month: "", year: "" };
  
    if (date.day < 10) {
      dateInStr.day = "0" + date.day;
    } else {
      dateInStr.day = date.day.toString();
    }
  
    if (date.month < 10) {
      dateInStr.month = "0" + date.month;
    } else {
      dateInStr.month = date.month.toString();
    }
  
    dateInStr.year = date.year.toString();
    return dateInStr;
  }
  
  function getDateInAllFormats(date) {
    var ddmmyyyy = date.day + date.month + date.year;
    var mmddyyyy = date.month + date.day + date.year;
    var yyyymmdd = date.year + date.month + date.day;
    var ddmmyy = date.day + date.month + date.year.substring(2,);
    var mmddyy = date.month + date.day + date.year.substring(2,);
    var yyddmm = date.year.substring(2,) + date.day + date.month;
  
    return [ddmmyyyy, mmddyyyy, yyyymmdd, ddmmyy, mmddyy, yyddmm];
  }
  
  function checkPalindromeForAllDateFormats(date) {
    var dateFormatList = getDateInAllFormats(date);
    var palindromeList = [];
  
    for (var i = 0; i < dateFormatList.length; i++) {
      var result = isStringPalindrome(dateFormatList[i]);
      palindromeList.push(result);
    }
    return palindromeList;
  }
  
  function isLeapYear(year) {
    if ((year % 400 === 0) || ((year % 100 !== 0) && (year % 4 === 0))) {
      return true
    }
  
   else{
    return false;
   }
  }
  
  function getNextDate(date) {
    var day = date.day + 1;
    var month = date.month;
    var year = date.year;
  
    var daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  
    if (month === 2) {
      if (isLeapYear(year)) {
        if (day > 29) {
          day = 1;
          month = 3;
        }
      } else {
        if (day > 28) {
          day = 1;
          month = 3;
        }
      }
    } else {
      if (day > daysInMonth[month - 1]) {
        day = 1;
        month++;
      }
    }
  
    if (month > 12) {
      month = 1;
      year++;
    }
  
    return {
      day: day,
      month: month,
      year: year,
    };
  }
  
  function getNextPalindromeDate(date) {
    var nextDate = getNextDate(date);
    var counter = 0;
  
    while (1) {
      counter++;
      var dateStr = getDateAsString(nextDate);
      var resultList = checkPalindromeForAllDateFormats(dateStr);
  
      for (let i = 0; i < resultList.length; i++) {
        if (resultList[i]) {
          return [counter, nextDate];
        }
      }
      nextDate = getNextDate(nextDate);
    }
  }
  
  
  
  var getsDate = document.querySelector("#date");
  var showBtn = document.querySelector("#btn");
  var result = document.querySelector("#result");
  

 

  function clickHandler() {
    var dates = getsDate.value;
  
    if (dates !== "") {
        
      var yyyy = dates.substring(0,4);
      var mm = dates.substring(5,7);
      var dd = dates.substring(8,);
  
      var date = {
        day: Number(dd),
        month: Number(mm),
        year: Number(yyyy),
      };

      console
  
      var dateStr = getDateAsString(date);
      var list = checkPalindromeForAllDateFormats(dateStr);
      var isPalindrome = false;
  
      for (let i = 0; i < list.length; i++) {
        if (list[i]) {
          isPalindrome = true;
          break;
        }
      }
  
      if (!isPalindrome) {
        const [counter1, nextDate] = getNextPalindromeDate(date);
     
          result.innerText = `The nearest palindrome date is ${nextDate.day}-${nextDate.month}-${nextDate.year}, you missed by ${counter1} days.`;
        
      } else {
        result.innerText = "Yay! Your birthday is palindrome!";
      }
    }
  }
  
  //showBtn.addEventListener("click", clickHandler);
  
  
  
          
         

   
   
      
    
    
    
    
    
    
    
    
    
    
    
    

     


