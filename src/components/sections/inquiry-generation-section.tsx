
"use client";

import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { generateInquiryMessage, type GenerateInquiryMessageInput } from '@/ai/flows/generate-inquiry-message';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Wand2, Copy, Check } from 'lucide-react';

const formSchema = z.object({
  userName: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  userSkills: z.string().min(5, { message: 'Please list some skills (comma-separated).' }),
  collaborationReason: z.string().min(10, { message: 'Reason must be at least 10 characters.' }),
});

type InquiryFormValues = z.infer<typeof formSchema>;

export default function InquiryGenerationSection() {
  const [generatedMessage, setGeneratedMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const { toast } = useToast();

  const form = useForm<InquiryFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      userName: '',
      userSkills: '',
      collaborationReason: '',
    },
  });

  const onSubmit: SubmitHandler<InquiryFormValues> = async (data) => {
    setIsLoading(true);
    setGeneratedMessage(null);
    try {
      const skillsArray = data.userSkills.split(',').map(skill => skill.trim()).filter(skill => skill !== '');
      const input: GenerateInquiryMessageInput = {
        userName: data.userName,
        userSkills: skillsArray,
        collaborationReason: data.collaborationReason,
      };
      const result = await generateInquiryMessage(input);
      setGeneratedMessage(result.message);
      toast({
        title: 'Message Generated!',
        description: 'Your personalized inquiry message is ready.',
      });
    } catch (error) {
      console.error('Error generating message:', error);
      toast({
        title: 'Error',
        description: 'Failed to generate message. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = () => {
    if (generatedMessage) {
      navigator.clipboard.writeText(generatedMessage);
      setIsCopied(true);
      toast({ title: 'Copied to clipboard!'});
      setTimeout(() => setIsCopied(false), 2000);
    }
  };

  return (
    <section id="inquiry" className="bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="max-w-2xl mx-auto shadow-xl">
          <CardHeader className="text-center">
            <Wand2 className="mx-auto h-12 w-12 text-primary mb-4" />
            <CardTitle className="text-3xl md:text-4xl text-primary">Craft Your Inquiry with AI</CardTitle>
            <CardDescription className="text-lg text-muted-foreground">
              Let AI help you write a personalized message to Sagar.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="userName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-lg">Your Name</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., Ada Lovelace" {...field} className="text-base" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="userSkills"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-lg">Your Key Skills (comma-separated)</FormLabel>
                      <FormControl>
                        <Textarea placeholder="e.g., Project Management, UI/UX Design, Public Speaking" {...field} rows={3} className="text-base" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="collaborationReason"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-lg">Why You Want to Collaborate</FormLabel>
                      <FormControl>
                        <Textarea placeholder="e.g., I'm impressed by your work on X and believe our skills align for Y..." {...field} rows={4} className="text-base" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" disabled={isLoading} className="w-full text-lg py-6 transition-transform hover:scale-105">
                  {isLoading ? 'Generating...' : 'Generate Message'}
                  {!isLoading && <Wand2 className="ml-2 h-5 w-5" />}
                </Button>
              </form>
            </Form>
          </CardContent>
          {generatedMessage && (
            <CardFooter className="flex flex-col gap-4 pt-6 border-t">
               <h3 className="text-xl font-semibold text-primary self-start">Generated Message:</h3>
              <div className="relative w-full p-4 border rounded-md bg-muted/50 text-muted-foreground">
                <p className="whitespace-pre-wrap text-sm leading-relaxed">{generatedMessage}</p>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handleCopy}
                  className="absolute top-2 right-2 text-muted-foreground hover:text-primary"
                  aria-label="Copy message"
                >
                  {isCopied ? <Check className="h-5 w-5 text-green-500" /> : <Copy className="h-5 w-5" />}
                </Button>
              </div>
            </CardFooter>
          )}
        </Card>
      </div>
    </section>
  );
}
