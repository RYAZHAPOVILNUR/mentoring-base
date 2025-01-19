const getDatasFunc = async () => {
  let res = await fetch("https://jsonplaceholder.typicode.com/users");

  if (res.ok) { 
    let jsonData = await res.json();
    //1 

    const gData = jsonData.map((e) => {
      let jData = {
        id: e.id,
        username: e.username

      }
      return jData
    })

    //3 
    const filtered = jsonData.filter(e => e.id == 9)
    //4
    function getCityByName(val, usrArr) {
      return usrArr.find((u) => u.address.city === val) || null;
    }
    const getByCName = getUserByName("Lebsackbury", jsonData)

    //5 
    const get5el = users.slice(0, 5)

    //6
    jsonData.toReversed().map(e => console.log(e))
    //7
    const usrCount = jsonData.length



    jsonData.map((e) => {
     
      //2
      console.log(e.email)
      //3
      if (e.id === 9) {
        //console.log(e)
      }
      //4
      if (e.address.city.includes("Lebsackbury")) {
        //console.log(e)
      }
      //8
      if (e.address.city.includes(".com")) {
        //console.log(e)
      }
      //9
      if (e.username.length > 7) {
        //console.log(e)
      }
      //10
      const isLowerCase = (string) => /^[a-z]*$/.test(string)
      if (isLowerCase(e.name) == true) {
        //console.log(e.name)
      }



      console.log(e)
    })

  } else {
    alert("Ошибка HTTP: " + res.status);
  }


}
getDatasFunc()