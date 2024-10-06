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
import { Package, Tag, IndianRupee } from 'lucide-react'; // Importing icons

const purchaseData = [
  { supplier: 'PharmaCorp', amount: 5000, date: '2023-06-01' },
  { supplier: 'MediSupply', amount: 3500, date: '2023-06-05' },
  { supplier: 'HealthTech', amount: 4200, date: '2023-06-10' },
  { supplier: 'MedEquip', amount: 2800, date: '2023-06-15' },
  { supplier: 'BioPharm', amount: 6000, date: '2023-06-20' },
];

const purchaseChartData = [
  { name: 'Jan', total: 4000 },
  { name: 'Feb', total: 3000 },
  { name: 'Mar', total: 5000 },
  { name: 'Apr', total: 4500 },
  { name: 'May', total: 5500 },
  { name: 'Jun', total: 6000 },
];

export function Purchase() {
  return (
    <div className='space-y-6'>
      <Card>
        <CardHeader>
          <CardTitle>New Purchase Order</CardTitle>
        </CardHeader>
        <CardContent>
          <form className='space-y-4'>
            <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
              <div className='flex items-center space-x-2'>
                <Package className='h-4 w-4 text-gray-600' />{' '}
                {/* Supplier Icon */}
                <Input placeholder='Supplier' />
              </div>
              <div className='flex items-center space-x-2'>
                <Tag className='h-4 w-4 text-gray-600' /> {/* Product Icon */}
                <Input placeholder='Product' />
              </div>
              <div className='flex items-center space-x-2'>
                <IndianRupee className='h-4 w-4 text-gray-600' />{' '}
                {/* Quantity Icon */}
                <Input placeholder='Quantity' type='number' />
              </div>
              <div className='flex items-center space-x-2'>
                <IndianRupee className='h-4 w-4 text-gray-600' />{' '}
                {/* Unit Price Icon */}
                <Input placeholder='Unit Price' type='number' step='0.01' />
              </div>
            </div>
            <Button>Create Purchase Order</Button>
          </form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Recent Purchases</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Supplier</TableHead>
                <TableHead>Amount (₹)</TableHead>
                <TableHead>Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {purchaseData.map((purchase, index) => (
                <TableRow key={index}>
                  <TableCell>{purchase.supplier}</TableCell>
                  <TableCell>₹{purchase.amount.toFixed(2)}</TableCell>
                  <TableCell>{purchase.date}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Purchase Trends</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width='100%' height={300}>
            <BarChart data={purchaseChartData}>
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
                tickFormatter={(value: number) => `₹${value}`}
              />
              <Tooltip formatter={(value: number) => `₹${value}`} />
              <Bar dataKey='total' fill='#adfa1d' radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}
