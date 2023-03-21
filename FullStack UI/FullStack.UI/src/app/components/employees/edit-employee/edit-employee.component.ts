import { EmployeesService } from './../../../services/employees.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/models/employee.model';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})

export class EditEmployeeComponent {
  editEmployeeRequest: Employee = {
    id: '',
    name: '',
    email: '',
    phone: 0,
    salary: 0,
    department: ''
  }


  constructor(private route: ActivatedRoute, private employeeService: EmployeesService, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');

        if (id) {
          //Call api
          this.employeeService.getEmployee(id)
            .subscribe({
              next: (data) => {
                this.editEmployeeRequest = data;
              },
              error: (errorRes) => {
                console.error(errorRes);
              }
            })
        }
      }
    })
  }

  editEmployee() {
    this.employeeService.editEmployee(this.editEmployeeRequest.id, this.editEmployeeRequest)
      .subscribe({
        next: (data) => {
          this.router.navigate(['employees'])
        },
        error: (response) => {
          console.error(response);
        }
      })
  }

  deleteEmployee(id: string) {
    this.employeeService.deleteEmployee(this.editEmployeeRequest.id)
      .subscribe({
        next: (data) => {
          this.router.navigate(['employees'])
        },
        error: (response) => {
          console.error(response);
        }
      })
  }
}
