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

const manufacturerData = [
  {
    id: 'M001',
    name: 'PharmaCorp',
    contact: 'John Smith',
    email: 'john@pharmacorp.com',
    phone: '123-456-7890',
  },
  {
    id: 'M002',
    name: 'MediSupply',
    contact: 'Jane Doe',
    email: 'jane@medisupply.com',
    phone: '098-765-4321',
  },
  {
    id: 'M003',
    name: 'HealthTech',
    contact: 'Bob Johnson',
    email: 'bob@healthtech.com',
    phone: '555-555-5555',
  },
  {
    id: 'M004',
    name: 'BioPharm',
    contact: 'Alice Brown',
    email: 'alice@biopharm.com',
    phone: '111-222-3333',
  },
  {
    id: 'M005',
    name: 'MedEquip',
    contact: 'Charlie Davis',
    email: 'charlie@medequip.com',
    phone: '444-444-4444',
  },
];

const manufacturerOrderData = [
  { name: 'PharmaCorp', orders: 50 },
  { name: 'MediSupply', orders: 40 },
  { name: 'HealthTech', orders: 30 },
  { name: 'BioPharm', orders: 45 },
  { name: 'MedEquip', orders: 35 },
];

export function Manufacturer() {
  return (
    <div className='space-y-6'>
      <Card>
        <CardHeader>
          <CardTitle>Add New Manufacturer</CardTitle>
        </CardHeader>
        <CardContent>
          <form className='space-y-4'>
            <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
              <Input placeholder='Manufacturer Name' />
              <Input placeholder='Contact Person' />
              <Input placeholder='Email' type='email' />
              <Input placeholder='Phone' type='tel' />
            </div>
            <Button>Add Manufacturer</Button>
          </form>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Manufacturer List</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Contact Person</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Phone</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {manufacturerData.map((manufacturer) => (
                <TableRow key={manufacturer.id}>
                  <TableCell>{manufacturer.id}</TableCell>
                  <TableCell>{manufacturer.name}</TableCell>
                  <TableCell>{manufacturer.contact}</TableCell>
                  <TableCell>{manufacturer.email}</TableCell>
                  <TableCell>{manufacturer.phone}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Manufacturer Order Volume</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width='100%' height={300}>
            <BarChart data={manufacturerOrderData}>
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
              <Bar dataKey='orders' fill='#8884d8' radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}
