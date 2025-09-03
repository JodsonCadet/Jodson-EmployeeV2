import express from "express";
const router = express.Router();
export default router;

import employees from "#db/employees";

router.route("/").get((req, res) => {return res.send(employees)})
    

router.route("/").post(( req, res, next ) => {
        const { name } = req.body;
        const lastEmployee = employees[employees.length -1];

        let id = lastEmployee.id;

        id++;

        const obj = {
            id,
            name,
        };

        employees.push(obj);
        return res.send(obj)
    });
    router.route("/random").get((req, res) => {
        const randomIndex = Math.floor(Math.random() * employees.length);
       return res.send(employees[randomIndex]);
    })

    router.route("/:id").get((req, res) => {
        const { id } = req.params;

        if (!employee) {
            return res.status(404).send("Employee not found");
        } if (id > employees.length) {
            return res.status(404).send("Employee id not found");
        } 

        return res.send(employee);
    })


