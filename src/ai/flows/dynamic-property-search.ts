'use server';

/**
 * @fileOverview A dynamic property search AI agent.
 *
 * - dynamicPropertySearch - A function that handles the dynamic property search process.
 * - DynamicPropertySearchInput - The input type for the dynamicPropertySearch function.
 * - DynamicPropertySearchOutput - The return type for the dynamicPropertySearch function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const DynamicPropertySearchInputSchema = z.object({
  query: z.string().describe('The user query for property search.'),
  location: z.string().optional().describe('The preferred location for the property.'),
  propertyType: z.string().optional().describe('The type of property (e.g., apartment, house, office).'),
  budget: z.string().optional().describe('The budget for the property (e.g., ₦500,000 - ₦1,000,000).'),
  amenities: z.string().optional().describe('Desired amenities (e.g., parking, security, garden).'),
});
export type DynamicPropertySearchInput = z.infer<typeof DynamicPropertySearchInputSchema>;

const DynamicPropertySearchOutputSchema = z.object({
  refinedQuery: z.string().describe('The refined query based on predictive reasoning.'),
  suggestedLocations: z.array(z.string()).describe('Suggested locations based on the query.'),
  suggestedPropertyTypes: z.array(z.string()).describe('Suggested property types based on the query.'),
  suggestedBudgets: z.array(z.string()).describe('Suggested budgets based on the query.'),
  suggestedAmenities: z.array(z.string()).describe('Suggested amenities based on the query.'),
  propertyListings: z.string().describe('JSON array with simplified property listings of 5 maximum records, including key details like price, size, and location, or return null if nothing is found.'),
});
export type DynamicPropertySearchOutput = z.infer<typeof DynamicPropertySearchOutputSchema>;

export async function dynamicPropertySearch(input: DynamicPropertySearchInput): Promise<DynamicPropertySearchOutput> {
  return dynamicPropertySearchFlow(input);
}

const prompt = ai.definePrompt({
  name: 'dynamicPropertySearchPrompt',
  input: {schema: DynamicPropertySearchInputSchema},
  output: {schema: DynamicPropertySearchOutputSchema},
  prompt: `You are an AI-powered property search assistant. Your goal is to refine the user's query, suggest relevant options, and provide a list of matching properties.

  User Query: {{{query}}}
  Location: {{{location}}}
  Property Type: {{{propertyType}}}
  Budget: {{{budget}}}
  Amenities: {{{amenities}}}

  Based on the user's input, provide the following:

  - refinedQuery: A more specific and optimized query for property search.
  - suggestedLocations: A list of up to 3 relevant locations based on the query and location.
  - suggestedPropertyTypes: A list of up to 3 property types based on the query and propertyType.
  - suggestedBudgets: A list of up to 3 budget ranges based on the query and budget.
  - suggestedAmenities: A list of up to 3 relevant amenities based on the query and amenities.
  - propertyListings: Respond with a JSON array with simplified property listings of 5 maximum records, including key details like price, size, and location, or return null if nothing is found.

  Ensure the output is well-structured and easy to understand.`,  
});

const dynamicPropertySearchFlow = ai.defineFlow(
  {
    name: 'dynamicPropertySearchFlow',
    inputSchema: DynamicPropertySearchInputSchema,
    outputSchema: DynamicPropertySearchOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
