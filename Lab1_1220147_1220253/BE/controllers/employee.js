let employee = [
  { id: '1', name: 'Mohamed Sayed' },
];

exports.getEmployees = async (req, res, next) => {
  res.status(200).json({ data: employee });
};

// TODO
exports.deleteEmployee = async (req, res, next) => {
  try{
    const {id}= req.params;
    employee = employee.filter(emp=>emp.id !== id);
    res.status(200).send({ msg: 'Employee deleted successfully' });
  }
  catch(err){
    console.log("Status 500",err);
    res.status(500).json({ msg: 'Internal server error' });
  }
};

// TODO
exports.createEmployee = async (req, res, next) => {
  try{
    const {id,name} = req.body;
    if(employee.find(emp=>emp.id === id)){
      return res.status(400).json({ msg: 'Employee already exists' });
    }
    employee.push({id,name});
    console.log(employee);
    res.status(200).json({ msg: 'Employee created successfully' });
  }
  catch(err){
    console.log("Status 500",err);
    res.status(500).json({ msg: 'Internal server error' });
  }
};
