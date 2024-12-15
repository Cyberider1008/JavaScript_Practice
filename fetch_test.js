fetch("https://dummyjson.com/users")
            .then((res)=>res.json())
            .then((data)=>{
                // console.log(data);
                console.log(data.users[0].id);
                console.log(data.users[0].firstName);
                console.log(data.users[0].age);

            });