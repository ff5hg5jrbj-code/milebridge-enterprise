// app/about/page.tsx
import { Metadata } from 'next';
import About from '@/components/About';

export const metadata: Metadata = {
  title: 'About MileBridge | Leadership, Mission & Values',
  description: 'Learn about MileBridge Logistics - our mission, vision, values, and leadership team.',
};

export default function AboutPage() {
  return <About />;
}
