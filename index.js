// Write your solution in this file!
const employee = {
    name: 'Hank',
    streetAdress: 'Lincon',
};
function updateEmployeeWithKeyAndValue(employee, key ,value) {
    const newObj = { ...employee, ...{[key]:value}};
    return newObj;
};
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
};
function deleteFromEmployeeByKey(employee, key) {
    const newLine = Object.assign({}, employee);
    delete newLine[key];
    return newLine;
};
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
};

