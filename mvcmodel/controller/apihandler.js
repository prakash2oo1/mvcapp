const fs = require('fs')
const path ='./MOCK_DATA.json'
//const path ='./data/MOCK_DATA.json'
const employees =JSON.parse(fs.readFileSync(`${path}`))

exports.getEmployees = (req,res)=>{
    res.json({
        status:"success",
        data:employees
    })
}


exports.getAllEmployee=(req,res)=>{
    res.status(200).json(
     {
        status:"Success",
       // result: employees.length,
        // data : {
        //       employeesInfo : employees
        // }
     })

}
exports.addEmployee=(req,res)=>{
    const empId = employees[employees.length-1].id+1
    const newEmployee = 
      {
        id : empId,
        first_name:req.body.fn,
        last_name : req.body.ln,
        email:req.body.email,
        ip : req.body.ipadd
      }
      console.log(newEmployee)
      employees.push(newEmployee)
      fs.writeFile(`${path}`,JSON.stringify(employees),
      (err)=>{
         if(err) {
            res.status(404).json(
                {
                    "msg":"failed to register user",
                    "error":err
                }
            )
         }
         else{
         res.status(201).json(
            {
                status:"Successfully registered",
                employeesInfo:newEmployee
            }
         )

         }
      })
}

exports.remove=(req,res)=>{
    console.log("removing employee")
    console.log(req.params.id)

    const empid = req.params.id*1 // converting string id to int
    console.log(empid)
    const position = employees.findIndex(emp=>emp.id===empid) // matching the employee id and getting its postion
    if(empid>employees.length)
         {
            res.status(404).json(
                {
                status:"Invalid id",
                desc: "Employee id is not valid please check again"
            })
         }

    employees.splice(position,1)

    fs.writeFile(`${path}`,JSON.stringify(employees),
    (err)=>{
       if(err) {
          res.status(404).json(
              {
                  "msg":"failed to remove employee",
                  "error":err
              }
          )
       }
       else{
           res.status(202).json(
          {
              status:"deleted",
              msg:"Employee removed successfully"
          }
       )

       }
    })

    
}
