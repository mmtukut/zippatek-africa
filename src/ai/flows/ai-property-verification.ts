'use server';

/**
 * @fileOverview A property verification AI agent using AI and satellite data.
 *
 * - aiPropertyVerification - A function that handles the property verification process.
 * - AiPropertyVerificationInput - The input type for the aiPropertyVerification function.
 * - AiPropertyVerificationOutput - The return type for the aiPropertyVerification function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AiPropertyVerificationInputSchema = z.object({
  propertyAddress: z.string().describe('The address of the property to verify.'),
  satelliteImageDataUri: z
    .string()
    .describe(
      "A satellite image of the property, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
  propertyDescription: z.string().describe('The description of the property.'),
});
export type AiPropertyVerificationInput = z.infer<typeof AiPropertyVerificationInputSchema>;

const AiPropertyVerificationOutputSchema = z.object({
  isLegitimate: z.boolean().describe('Whether or not the property is legitimate.'),
  fraudFlags: z.array(z.string()).describe('A list of potential fraud flags identified.'),
  confidenceScore: z
    .number()
    .describe('A confidence score indicating the certainty of the verification.'),
});
export type AiPropertyVerificationOutput = z.infer<typeof AiPropertyVerificationOutputSchema>;

export async function aiPropertyVerification(
  input: AiPropertyVerificationInput
): Promise<AiPropertyVerificationOutput> {
  return aiPropertyVerificationFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiPropertyVerificationPrompt',
  input: {schema: AiPropertyVerificationInputSchema},
  output: {schema: AiPropertyVerificationOutputSchema},
  prompt: `You are an expert property verification agent specializing in detecting fraudulent property listings.

You will use the provided property address, satellite image, and property description to determine if the listing is legitimate.

Address: {{{propertyAddress}}}
Satellite Image: {{media url=satelliteImageDataUri}}
Description: {{{propertyDescription}}}

Consider the following factors when determining legitimacy:
- Consistency between the address, satellite image, and description.
- Presence of any red flags in the description (e.g., unusually low price, pressure to act quickly).
- Comparison of the satellite image with historical data to check for recent changes or discrepancies.

Output a confidence score (0-1) indicating the certainty of your verification, a boolean indicating if the listing is legitimate, and a list of any fraud flags identified.`,
});

const aiPropertyVerificationFlow = ai.defineFlow(
  {
    name: 'aiPropertyVerificationFlow',
    inputSchema: AiPropertyVerificationInputSchema,
    outputSchema: AiPropertyVerificationOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
