'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';

export function Settings() {
  return (
    <div className='space-y-6'>
      <Card>
        <CardHeader>
          <CardTitle>General Settings</CardTitle>
        </CardHeader>
        <CardContent>
          <form className='space-y-4'>
            <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
              <div className='space-y-2'>
                <Label htmlFor='pharmacy-name'>Pharmacy Name</Label>
                <Input id='pharmacy-name' placeholder='Pharmacy Name' />
              </div>
              <div className='space-y-2'>
                <Label htmlFor='email'>Contact Email</Label>
                <Input id='email' placeholder='Contact Email' type='email' />
              </div>
              <div className='space-y-2'>
                <Label htmlFor='phone'>Contact Phone</Label>
                <Input id='phone' placeholder='Contact Phone' type='tel' />
              </div>
              <div className='space-y-2'>
                <Label htmlFor='address'>Address</Label>
                <Input id='address' placeholder='Address' />
              </div>
            </div>
            <div className='flex items-center space-x-2'>
              <Switch id='notifications' />
              <Label htmlFor='notifications'>Enable Email Notifications</Label>
            </div>
            <div className='flex items-center space-x-2'>
              <Switch id='dark-mode' />
              <Label htmlFor='dark-mode'>Dark Mode</Label>
            </div>
            <Button>Save Settings</Button>
          </form>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Security Settings</CardTitle>
        </CardHeader>
        <CardContent>
          <form className='space-y-4'>
            <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
              <div className='space-y-2'>
                <Label htmlFor='current-password'>Current Password</Label>
                <Input id='current-password' type='password' />
              </div>
              <div className='space-y-2'>
                <Label htmlFor='new-password'>New Password</Label>
                <Input id='new-password' type='password' />
              </div>
              <div className='space-y-2'>
                <Label htmlFor='confirm-password'>Confirm New Password</Label>
                <Input id='confirm-password' type='password' />
              </div>
            </div>
            <Button>Change Password</Button>
          </form>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>AI Integration Settings</CardTitle>
        </CardHeader>
        <CardContent>
          <form className='space-y-4'>
            <div className='flex items-center space-x-2'>
              <Switch id='ai-insights' />
              <Label htmlFor='ai-insights'>Enable AI Insights</Label>
            </div>
            <div className='flex items-center space-x-2'>
              <Switch id='ai-predictions' />
              <Label htmlFor='ai-predictions'>Enable AI Predictions</Label>
            </div>
            <div className='flex items-center space-x-2'>
              <Switch id='ai-recommendations' />
              <Label htmlFor='ai-recommendations'>
                Enable AI Recommendations
              </Label>
            </div>
            <Button>Save AI Settings</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
