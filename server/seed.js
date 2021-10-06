const mongoose = require('mongoose');
const db = require("./models");

mongoose.connect("mongodb://localhost/internship", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const seedData = [
    {
        name: {
            firstname: "stu_fn",
            lastname: "stu_ln"
        },
        username: "stu_user",
        password: "stu_pass",
        emailId: "ims2021_stu@gmail.com",
        currentClass: {
            year: "TE",
            div: 2
        }
    },
    {
        name: {
            firstname: "cc_fn",
            lastname: "cc_ln"
        },
        username: "cc_user",
        password: "cc_pass",
        emailId: "ims2021_cc@gmail.com",
        designation: "ClassCoordinator",
        department: "COMP",
        currentClass: {
            year: "TE",
            div: 2
        }
    },
    {
        name: {
            firstname: "dic_fn",
            lastname: "dic_ln"
        },
        username: "dic_user",
        password: "dic_pass",
        emailId: "ims2021_dic@gmail.com",
        designation: "DepartmentInternshipCoordinator",
        department: "COMP",
        currentClass: {
            year: "TE",
            div: 2
        }
    },
    {
        name: {
            firstname: "cic_fn",
            lastname: "cic_ln"
        },
        username: "cic_user",
        password: "cic_pass",
        emailId: "ims2021_cic@gmail.com",
        designation: "CollegeInternshipCoordinator",
        department: "COMP",
        currentClass: {
            year: "TE",
            div: 2
        }
    },
    {
        name: {
            firstname: "hod_fn",
            lastname: "hod_ln"
        },
        username: "hod_user",
        password: "hod_pass",
        emailId: "ims2021_hod@gmail.com",
        designation: "HOD",
        department: "COMP",
        currentClass: {
            year: "TE",
            div: 2
        }
    },
    {
        name: {
            firstname: "pri_fn",
            lastname: "pri_ln"
        },
        username: "pri_user",
        password: "pri_pass",
        emailId: "ims2021_pri@gmail.com",
        designation: "Principal",
        department: "COMP",
        currentClass: {
            year: "TE",
            div: 2
        }
    },
    {
        name: {
            firstname: "admin_fn",
            lastname: "admin_ln"
        },
        username: "admin_user",
        password: "admin_pass",
        emailId: "ims2021_admin@gmail.com",
        designation: "Admin",
        department: "COMP",
        currentClass: {
            year: "TE",
            div: 2
        }
    }
]

for(let x of seedData){
    if(x.username === 'stu_user') db.Student.create(x);
    else    db.Faculty.create(x)
}