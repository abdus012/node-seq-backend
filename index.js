const db = require("./seqDB/index");
const Joi = require("joi");
const baseRoutes = {
  name: "myPlugin",
  version: "1.0.0",
  register: async function (server, options) {
    server.route([
      {
        method: "GET",
        path: "/",
        async handler(request, h) {
          try {
            let response = "";
            const result1 = await db["emp_details"]
              .findAll({})
              .then((result) => {
                response = h.response(result);
              });
            return response;
          } catch (err) {
            return {
              error: err,
            };
          }
        },
      },
      {
        method: "GET",
        path: "/getJoinedData",
        async handler(request, h) {
          try {
            let response = "";
            // FROM Orders
// INNER JOIN Customers ON Orders.CustomerID=Customers.CustomerID;
            qry = 'SELECT emp_details.emp_name,emp_department.department_name FROM emp_details INNER JOIN emp_department ON emp_details.emp_domain=emp_department.department_name';
            console.log(qry);
            const result1 = await await db.sequelize.query(qry)
              .then((result) => {
                response = h.response(result[0]);
              });
            return response;
          } catch (err) {
            return {
              error: err,
            };
          }
        },
      },
      {
        method: "POST",
        path: "/pushDepartment",
        async handler(request, h) {
          const { department_name } = request.payload;
          try {
            let response = "";
            db["emp_department"]
              .create({
                department_name: department_name,
                emp_count: 0,
              })
              .then((Result) => {});
            return {
              code: 100,
              msg: "Data added made successfully",
            };
          } catch (err) {
            return {
              error: err,
            };
          }
        },
      },
      {
        method: "POST",
        path: "/pushNewEmployee",
        async handler(request, h) {
          const { emp_name, emp_domain } = request.payload;
          try {
            let response = "";
            db["emp_details"]
              .create({
                emp_name: emp_name,
                emp_domain: emp_domain,
              })
              .then((Result) => {});
            return {
              code: 100,
              msg: "Data added made successfully",
            };
          } catch (err) {
            return {
              error: err,
            };
          }
        },
      },
    ]);
  },
};

module.exports = baseRoutes;
