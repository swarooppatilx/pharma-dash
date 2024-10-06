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
  Bar,
  BarChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts';

const customerData = [
  {
    id: 'C001',
    name: 'John Doe',
    email: 'john@example.com',
    phone: '123-456-7890',
    lastPurchase: '2023-06-15',
  },
  {
    id: 'C002',
    name: 'Jane Smith',
    email: 'jane@example.com',
    phone: '098-765-4321',
    lastPurchase: '2023-06-10',
  },
  {
    id: 'C003',
    name: 'Bob Johnson',
    email: 'bob@example.com',
    phone: '555-555-5555',
    lastPurchase: '2023-06-20',
  },
  {
    id: 'C004',
    name: 'Alice Brown',
    email: 'alice@example.com',
    phone: '111-222-3333',
    lastPurchase: '2023-06-18',
  },
  {
    id: 'C005',
    name: 'Charlie Davis',
    email: 'charlie@example.com',
    phone: '444-444-4444',
    lastPurchase: '2023-06-22',
  },
];

const customerPurchaseData = [
  { name: 'Jan', purchases: 20 },
  { name: 'Feb', purchases: 25 },
  { name: 'Mar', purchases: 30 },
  { name: 'Apr', purchases: 28 },
  { name: 'May', purchases: 35 },
  { name: 'Jun', purchases: 40 },
];

export function Customer() {
  return (
    <div className='space-y-6'>
      <Card>
        <CardHeader>
          <CardTitle>Add New Customer</CardTitle>
        </CardHeader>
        <CardContent>
          <form className='space-y-4'>
            <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
              <Input placeholder='Name' />
              <Input placeholder='Email' type='email' />
              <Input placeholder='Phone' type='tel' />
              <Input placeholder='Address' />
            </div>
            <Button>Add Customer</Button>
          </form>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Customer List</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Phone</TableHead>
                <TableHead>Last Purchase</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {customerData.map((customer) => (
                <TableRow key={customer.id}>
                  <TableCell>{customer.id}</TableCell>
                  <TableCell>{customer.name}</TableCell>
                  <TableCell>{customer.email}</TableCell>
                  <TableCell>{customer.phone}</TableCell>
                  <TableCell>{customer.lastPurchase}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Customer Purchase Trends</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width='100%' height={300}>
            <BarChart data={customerPurchaseData}>
              <XAxis
                dataKey='name'
                stroke='#888888'
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <YAxis
                stroke='#888888'
                fontSize={12}
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => `${value}`}
              />
              <Tooltip />
              <Bar dataKey='purchases' fill='#8884d8' radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}
