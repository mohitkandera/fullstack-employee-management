using System;
using System.Collections.Generic;

namespace BackendEmployee.Models;

public partial class EmployeeNew
{
    public int Id { get; set; }

    public string? Name { get; set; }

    public int? Age { get; set; }

    public string? Email { get; set; }

    public string PhoneNo { get; set; }

    public decimal? Salary { get; set; }

    public string? Department { get; set; }
}
