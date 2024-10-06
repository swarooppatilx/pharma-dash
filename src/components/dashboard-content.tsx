'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Bar,
  BarChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  Cell,
} from 'recharts';
import { IndianRupee, FileText, Boxes, Users } from 'lucide-react';

const revenueData = [
  { name: 'Jan', total: 4500 },
  { name: 'Feb', total: 3800 },
  { name: 'Mar', total: 5200 },
  { name: 'Apr', total: 4800 },
  { name: 'May', total: 5500 },
  { name: 'Jun', total: 6000 },
];

const categoryData = [
  { name: 'Prescription', value: 55 },
  { name: 'OTC', value: 30 },
  { name: 'Personal Care', value: 15 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

export function DashboardContent() {
  return (
    <div className='space-y-6'>
      <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
        <Card>
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
            <CardTitle className='text-sm font-medium'>Total Revenue</CardTitle>
            <IndianRupee className='h-4 w-4 text-muted-foreground' />{' '}
            {/* Lucide Icon */}
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold'>₹45,231.89</div>
            <p className='text-xs text-muted-foreground'>
              +20.1% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
            <CardTitle className='text-sm font-medium'>
              Active Prescriptions
            </CardTitle>
            <FileText className='h-4 w-4 text-muted-foreground' />{' '}
            {/* Lucide Icon */}
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold'>+2350</div>
            <p className='text-xs text-muted-foreground'>
              +180.1% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
            <CardTitle className='text-sm font-medium'>
              Inventory Value
            </CardTitle>
            <Boxes className='h-4 w-4 text-muted-foreground' />{' '}
            {/* Lucide Icon */}
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold'>₹12,234.56</div>
            <p className='text-xs text-muted-foreground'>
              +19% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
            <CardTitle className='text-sm font-medium'>
              Active Customers
            </CardTitle>
            <Users className='h-4 w-4 text-muted-foreground' />{' '}
            {/* Lucide Icon */}
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold'>+573</div>
            <p className='text-xs text-muted-foreground'>
              +201 since last hour
            </p>
          </CardContent>
        </Card>
      </div>
      <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-7'>
        <Card className='col-span-4'>
          <CardHeader>
            <CardTitle>Revenue Overview</CardTitle>
          </CardHeader>
          <CardContent className='pl-2'>
            <ResponsiveContainer width='100%' height={350}>
              <BarChart data={revenueData}>
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
                  tickFormatter={(value) => `₹${value}`}
                />
                <Tooltip />
                <Bar dataKey='total' fill='#adfa1d' radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        <Card className='col-span-3'>
          <CardHeader>
            <CardTitle>Sales by Category</CardTitle>
            <CardDescription>
              Distribution of sales across product categories
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width='100%' height={300}>
              <PieChart>
                <Pie
                  data={categoryData}
                  cx='50%'
                  cy='50%'
                  labelLine={false}
                  outerRadius={80}
                  fill='#8884d8'
                  dataKey='value'
                  label={({ name, percent }) =>
                    `${name} ${(percent * 100).toFixed(0)}%`
                  }
                >
                  {categoryData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>AI Insights</CardTitle>
        </CardHeader>
        <CardContent>
          <div className='space-y-4'>
            <div className='flex items-center space-x-2'>
              <Badge variant='secondary'>AI</Badge>
              <p>
                Sales of flu medications have increased by 25% this week.
                Consider stocking up.
              </p>
            </div>
            <div className='flex items-center space-x-2'>
              <Badge variant='secondary'>AI</Badge>
              <p>
                Customer retention rate has improved by 10% since implementing
                the new loyalty program.
              </p>
            </div>
            <div className='flex items-center space-x-2'>
              <Badge variant='secondary'>AI</Badge>
              <p>
                The new online prescription refill system has reduced wait times
                by 40%.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
