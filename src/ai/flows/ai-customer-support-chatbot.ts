'use server';

/**
 * @fileOverview An AI-powered customer support chatbot flow.
 *
 * - aiCustomerSupportChatbot - A function that handles the customer support process.
 * - AiCustomerSupportChatbotInput - The input type for the aiCustomerSupportChatbot function.
 * - AiCustomerSupportChatbotOutput - The return type for the aiCustomerSupportChatbot function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AiCustomerSupportChatbotInputSchema = z.object({
  userId: z.string().describe('The ID of the user.'),
  query: z.string().describe('The user query for the chatbot.'),
});
export type AiCustomerSupportChatbotInput = z.infer<typeof AiCustomerSupportChatbotInputSchema>;

const AiCustomerSupportChatbotOutputSchema = z.object({
  response: z.string().describe('The response from the chatbot.'),
});
export type AiCustomerSupportChatbotOutput = z.infer<typeof AiCustomerSupportChatbotOutputSchema>;

export async function aiCustomerSupportChatbot(input: AiCustomerSupportChatbotInput): Promise<AiCustomerSupportChatbotOutput> {
  return aiCustomerSupportChatbotFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiCustomerSupportChatbotPrompt',
  input: {schema: AiCustomerSupportChatbotInputSchema},
  output: {schema: AiCustomerSupportChatbotOutputSchema},
  prompt: `You are Zippatek Africa's customer support chatbot, designed to assist users with their questions and requests.
  You have access to the user's account and purchase history to personalize the experience.
  Use the following information to provide the most relevant and helpful response to the user's query.

  User ID: {{{userId}}}
  Query: {{{query}}}

  Response:`, // Ensure that the response is formatted according to Zippatek's brand guidelines (confident, direct, technical, African-proud, and human).
});

const aiCustomerSupportChatbotFlow = ai.defineFlow(
  {
    name: 'aiCustomerSupportChatbotFlow',
    inputSchema: AiCustomerSupportChatbotInputSchema,
    outputSchema: AiCustomerSupportChatbotOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return {response: output!};
  }
);
