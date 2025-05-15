
"use client";

import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Download } from 'lucide-react'; // Changed from SendHorizonal to Download

const contactFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function ContactSection() {
  const { toast } = useToast();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  const onSubmit: SubmitHandler<ContactFormValues> = (data) => {
    // Prepare CSV content
    // Escape commas and newlines in data to prevent CSV corruption
    const escapeCsvCell = (cellData: string) => {
      let escaped = cellData.replace(/"/g, '""'); // Escape double quotes
      if (escaped.includes(',') || escaped.includes('\\n') || escaped.includes('"')) {
        escaped = `"${escaped}"`; // Enclose in double quotes if it contains comma, newline, or quote
      }
      return escaped;
    };

    const headers = ['Full Name', 'Email Address', 'Message'];
    const rows = [
      [
        escapeCsvCell(data.name),
        escapeCsvCell(data.email),
        escapeCsvCell(data.message)
      ]
    ];

    let csvContent = headers.join(",") + "\\n"
      + rows.map(e => e.join(",")).join("\\n");

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    
    if (typeof window !== "undefined") {
      const link = document.createElement("a");
      if (link.download !== undefined) { // feature detection
        const url = URL.createObjectURL(blob);
        link.setAttribute("href", url);
        link.setAttribute("download", "contact_inquiry.csv");
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
      }
    }

    toast({
      title: 'Inquiry Data Downloaded',
      description: "The contact details have been downloaded as contact_inquiry.csv.",
    });
    
    form.reset();
  };

  return (
    <Card id="contact" className="w-full shadow-xl rounded-lg">
      <CardHeader className="text-center">
        <CardTitle className="text-3xl md:text-4xl text-primary">Message Me</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg">Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., Jane Doe" {...field} className="text-base" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg">Email Address</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="e.g., jane.doe@example.com" {...field} className="text-base" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg">Your Message</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Tell me about your project or inquiry..." {...field} rows={5} className="text-base" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full text-lg py-6 transition-transform hover:scale-105">
              Download Inquiry Data
              <Download className="ml-2 h-5 w-5" />
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
