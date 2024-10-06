'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Pie,
  PieChart,
  ResponsiveContainer,
  Cell,
  Tooltip,
  Legend,
} from 'recharts';

const employeeData = [
  {
    id: 'E001',
    name: 'John Doe',
    position: 'Pharmacist',
    email: 'john@example.com',
    phone: '123-456-7890',
  },
  {
    id: 'E002',
    name: 'Jane Smith',
    position: 'Technician',
    email: 'jane@example.com',
    phone: '098-765-4321',
  },
  {
    id: 'E003',
    name: 'Bob Johnson',
    position: 'Cashier',
    email: 'bob@example.com',
    phone: '555-555-5555',
  },
  {
    id: 'E004',
    name: 'Alice Brown',
    position: 'Manager',
    email: 'alice@example.com',
    phone: '111-222-3333',
  },
  {
    id: 'E005',
    name: 'Charlie Davis',
    position: 'Pharmacist',
    email: 'charlie@example.com',
    phone: '444-444-4444',
  },
];

const employeeRoleData = [
  { name: 'Pharmacist', value: 2 },
  { name: 'Technician', value: 1 },
  { name: 'Cashier', value: 1 },
  { name: 'Manager', value: 1 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

export function Employee() {
  return (
    <div className='space-y-6'>
      <Card>
        <CardHeader>
          <CardTitle>Add New Employee</CardTitle>
        </CardHeader>
        <CardContent>
          <form className='space-y-4'>
            <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
              <Input placeholder='Name' />
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder='Position' />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value='pharmacist'>Pharmacist</SelectItem>
                  <SelectItem value='technician'>Technician</SelectItem>
                  <SelectItem value='cashier'>Cashier</SelectItem>
                  <SelectItem value='manager'>Manager</SelectItem>
                </SelectContent>
              </Select>
              <Input placeholder='Email' type='email' />
              <Input placeholder='Phone' type='tel' />
            </div>
            <Button>Add Employee</Button>
          </form>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Employee List</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Position</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Phone</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {employeeData.map((employee) => (
                <TableRow key={employee.id}>
                  <TableCell>{employee.id}</TableCell>
                  <TableCell>{employee.name}</TableCell>
                  <TableCell>{employee.position}</TableCell>
                  <TableCell>{employee.email}</TableCell>
                  <TableCell>{employee.phone}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Employee Roles Distribution</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width='100%' height={300}>
            <PieChart>
              <Pie
                data={employeeRoleData}
                cx='50%'
                cy='50%'
                labelLine={false}
                outerRadius={80}
                fill='#8884d8'
                dataKey='value'
              >
                {employeeRoleData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}
