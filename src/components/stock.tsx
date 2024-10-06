'use client';

import * as React from 'react';
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
  Bar,
  BarChart,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from 'recharts';

interface StockItem {
  name: string;
  current: number;
  reorder: number;
  predicted: number;
}

const stockData: StockItem[] = [
  { name: 'Amoxicillin', current: 500, reorder: 100, predicted: 450 },
  { name: 'Lisinopril', current: 300, reorder: 50, predicted: 280 },
  { name: 'Metformin', current: 600, reorder: 150, predicted: 580 },
  { name: 'Amlodipine', current: 400, reorder: 75, predicted: 420 },
  { name: 'Sertraline', current: 200, reorder: 40, predicted: 190 },
];

export function Stock() {
  return (
    <div className='space-y-6'>
      <Card>
        <CardHeader>
          <CardTitle>Stock Management</CardTitle>
        </CardHeader>
        <CardContent>
          <form className='space-y-4'>
            <div className='grid grid-cols-1 gap-4 md:grid-cols-3'>
              <Input placeholder='Product Name' />
              <Input placeholder='Quantity' type='number' />
              <Button>Update Stock</Button>
            </div>
          </form>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Current Stock</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Product Name</TableHead>
                <TableHead>Current Stock</TableHead>
                <TableHead>Reorder Level</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {stockData.map((item) => (
                <TableRow key={item.name}>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.current}</TableCell>
                  <TableCell>{item.reorder}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        item.current > item.reorder ? 'success' : 'destructive'
                      }
                    >
                      {item.current > item.reorder ? 'In Stock' : 'Low Stock'}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      <div className='grid gap-6 md:grid-cols-2'>
        <Card>
          <CardHeader>
            <CardTitle>Stock Levels</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width='100%' height={300}>
              <BarChart data={stockData}>
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
                />
                <Tooltip />
                <Legend />
                <Bar dataKey='current' fill='#8884d8' name='Current Stock' />
                <Bar dataKey='reorder' fill='#82ca9d' name='Reorder Level' />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>AI Stock Predictions</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width='100%' height={300}>
              <LineChart data={stockData}>
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
                />
                <Tooltip />
                <Legend />
                <Line
                  type='monotone'
                  dataKey='current'
                  stroke='#8884d8'
                  name='Current Stock'
                />
                <Line
                  type='monotone'
                  dataKey='predicted'
                  stroke='#82ca9d'
                  strokeDasharray='5 5'
                  name='Predicted Stock'
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
