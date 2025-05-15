
"use client";

import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useState } from 'react'; // Added for isSubmitting state
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { SendHorizonal } from 'lucide-react'; // Changed icon
import { db } from '@/firebase/config'; // Import Firestore instance
import { collection, addDoc } from 'firebase/firestore';

const contactFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function ContactSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  const onSubmit: SubmitHandler<ContactFormValues> = async (data) => {
    setIsSubmitting(true);
    try {
      // Add a new document with a generated ID to the "inquiries" collection
      await addDoc(collection(db, "inquiries"), {
        name: data.name,
        email: data.email,
        message: data.message,
        submittedAt: new Date(), // Optional: add a timestamp
      });

      toast({
        title: 'Message Sent!',
        description: "Thank you for your inquiry. We'll be in touch soon.",
      });
      form.reset();
    } catch (error) {
      console.error("Error adding document: ", error);
      toast({
        title: 'Error Sending Message',
        description: "There was an issue sending your message. Please try again later.",
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
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
            <Button type="submit" disabled={isSubmitting} className="w-full text-lg py-6 transition-transform hover:scale-105">
              {isSubmitting ? 'Sending...' : 'Send Message'}
              <SendHorizonal className="ml-2 h-5 w-5" />
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
