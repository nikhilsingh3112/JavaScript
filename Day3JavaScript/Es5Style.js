function EmployeeName(name)//------>first class function
{
    this.Name=name;
}

EmployeeName.prototype.getEmployeeName=function()
{
    return this.Name;
};

var ename=new EmployeeName("Ganesh");
console.log(ename.getEmployeeName());
