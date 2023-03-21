import { Employee } from './../models/employee.model';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  baseApiUrl: string = environment.baseApiUrl;
  constructor(private http: HttpClient) { }

  getAllEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.baseApiUrl}/api/employees`);
  }

  addEmployee(addEmployeeRequest: Employee): Observable<Employee> {
    return this.http.post<Employee>(`${this.baseApiUrl}/api/employees`, addEmployeeRequest);
  }

  getEmployee(id: string): Observable<Employee> {
    return this.http.get<Employee>(`${this.baseApiUrl}/api/employees/${id}`);
  }

  editEmployee(id: string, editEmployeeRequest: Employee): Observable<Employee> {
    return this.http.post<Employee>(`${this.baseApiUrl}/api/employees/${id}/`, editEmployeeRequest);
  }
  deleteEmployee(id: string): Observable<Employee> {
    return this.http.delete<Employee>(`${this.baseApiUrl}/api/employees/${id}`);
  }
}
