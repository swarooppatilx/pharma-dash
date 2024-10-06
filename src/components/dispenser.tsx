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
import { Badge } from '@/components/ui/badge';
import {
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts';

const dispensingData = [
  {
    id: 'RX001',
    patient: 'John Doe',
    medication: 'Amoxicillin',
    status: 'Ready',
  },
  {
    id: 'RX002',
    patient: 'Jane Smith',
    medication: 'Lisinopril',
    status: 'Dispensed',
  },
  {
    id: 'RX003',
    patient: 'Bob Johnson',
    medication: 'Metformin',
    status: 'Pending',
  },
  {
    id: 'RX004',
    patient: 'Alice Brown',
    medication: 'Atorvastatin',
    status: 'Ready',
  },
  {
    id: 'RX005',
    patient: 'Charlie Davis',
    medication: 'Levothyroxine',
    status: 'Dispensed',
  },
];

const dispensingTrendData = [
  { name: 'Mon', prescriptions: 45 },
  { name: 'Tue', prescriptions: 52 },
  { name: 'Wed', prescriptions: 49 },
  { name: 'Thu', prescriptions: 60 },
  { name: 'Fri', prescriptions: 55 },
  { name: 'Sat', prescriptions: 40 },
  { name: 'Sun', prescriptions: 37 },
];

export function Dispenser() {
  return (
    <div className='space-y-6'>
      <Card>
        <CardHeader>
          <CardTitle>Dispense Medication</CardTitle>
        </CardHeader>
        <CardContent>
          <form className='space-y-4'>
            <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
              <Input placeholder='Prescription ID' />
              <Input placeholder='Patient Name' />
              <Input placeholder='Medication' />
              <Input placeholder='Dosage' />
            </div>
            <Button>Dispense</Button>
          </form>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Recent Dispensing</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Prescription ID</TableHead>
                <TableHead>Patient</TableHead>
                <TableHead>Medication</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {dispensingData.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.id}</TableCell>
                  <TableCell>{item.patient}</TableCell>
                  <TableCell>{item.medication}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        item.status === 'Ready'
                          ? 'default'
                          : item.status === 'Dispensed'
                            ? 'secondary'
                            : 'outline'
                      }
                    >
                      {item.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Dispensing Trends</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width='100%' height={300}>
            <LineChart data={dispensingTrendData}>
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
              <Line
                type='monotone'
                dataKey='prescriptions'
                stroke='#8884d8'
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}
