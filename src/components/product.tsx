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
  Bar,
  BarChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts';

const productData = [
  {
    id: 'P001',
    name: 'Amoxicillin',
    category: 'Antibiotic',
    stock: 500,
    price: 15.99,
  },
  {
    id: 'P002',
    name: 'Lisinopril',
    category: 'Blood Pressure',
    stock: 300,
    price: 12.5,
  },
  {
    id: 'P003',
    name: 'Metformin',
    category: 'Diabetes',
    stock: 600,
    price: 8.75,
  },
  {
    id: 'P004',
    name: 'Atorvastatin',
    category: 'Cholesterol',
    stock: 400,
    price: 22.99,
  },
  {
    id: 'P005',
    name: 'Levothyroxine',
    category: 'Thyroid',
    stock: 350,
    price: 10.25,
  },
];

const productSalesData = [
  { name: 'Amoxicillin', sales: 1200 },
  { name: 'Lisinopril', sales: 900 },
  { name: 'Metformin', sales: 1500 },
  { name: 'Atorvastatin', sales: 800 },
  { name: 'Levothyroxine', sales: 1100 },
];

export function Product() {
  return (
    <div className='space-y-6'>
      <Card>
        <CardHeader>
          <CardTitle>Add New Product</CardTitle>
        </CardHeader>
        <CardContent>
          <form className='space-y-4'>
            <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
              <Input placeholder='Product Name' />
              <Input placeholder='Category' />
              <Input placeholder='Stock' type='number' />
              <Input placeholder='Price' type='number' step='0.01' />
            </div>
            <Button>Add Product</Button>
          </form>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Product List</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Stock</TableHead>
                <TableHead>Price</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {productData.map((product) => (
                <TableRow key={product.id}>
                  <TableCell>{product.id}</TableCell>
                  <TableCell>{product.name}</TableCell>
                  <TableCell>{product.category}</TableCell>
                  <TableCell>
                    <Badge
                      variant={product.stock > 100 ? 'default' : 'destructive'}
                    >
                      {product.stock}
                    </Badge>
                  </TableCell>
                  <TableCell>₹{product.price.toFixed(2)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Product Sales</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width='100%' height={300}>
            <BarChart data={productSalesData}>
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
              <Bar dataKey='sales' fill='#8884d8' radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}
