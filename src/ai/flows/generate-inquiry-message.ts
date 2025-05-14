'use server';
/**
 * @fileOverview AI tool to generate personalized introduction messages.
 *
 * - generateInquiryMessage - A function that generates personalized introduction messages.
 * - GenerateInquiryMessageInput - The input type for the generateInquiryMessage function.
 * - GenerateInquiryMessageOutput - The return type for the generateInquiryMessage function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateInquiryMessageInputSchema = z.object({
  userName: z.string().describe('Your name.'),
  userSkills: z.array(z.string()).describe('Your skills.'),
  collaborationReason: z.string().describe('Why you want to collaborate with Sagar.'),
});
export type GenerateInquiryMessageInput = z.infer<typeof GenerateInquiryMessageInputSchema>;

const GenerateInquiryMessageOutputSchema = z.object({
  message: z.string().describe('A personalized introduction message for Sagar.'),
});
export type GenerateInquiryMessageOutput = z.infer<typeof GenerateInquiryMessageOutputSchema>;

export async function generateInquiryMessage(input: GenerateInquiryMessageInput): Promise<GenerateInquiryMessageOutput> {
  return generateInquiryMessageFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateInquiryMessagePrompt',
  input: {schema: GenerateInquiryMessageInputSchema},
  output: {schema: GenerateInquiryMessageOutputSchema},
  prompt: `You are an expert at writing personalized introduction messages.

  Compose a personalized introduction message to Sagar, expressing interest in collaboration.
  Incorporate the user's name, skills, and reasons for collaboration to make the message compelling and genuine.

  User Name: {{{userName}}}
  User Skills: {{#if userSkills}}{{#each userSkills}}- {{{this}}}{{/each}}{{else}}No skills listed.{{/if}}
  Reason for Collaboration: {{{collaborationReason}}}
  `,
});

const generateInquiryMessageFlow = ai.defineFlow(
  {
    name: 'generateInquiryMessageFlow',
    inputSchema: GenerateInquiryMessageInputSchema,
    outputSchema: GenerateInquiryMessageOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
