// Summarize contract flow using Genkit AI.

'use server';

/**
 * @fileOverview Summarizes legal contracts, extracting key provisions, obligations, and potential risks.
 *
 * - summarizeContract - A function that handles the contract summarization process.
 * - SummarizeContractInput - The input type for the summarizeContract function.
 * - SummarizeContractOutput - The return type for the summarizeContract function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeContractInputSchema = z.object({
  contractText: z
    .string()
    .describe('The text of the legal contract to be summarized.'),
  jurisdiction: z
    .string()
    .optional()
    .describe('The jurisdiction governing the contract, e.g., California, Delaware.'),
});
export type SummarizeContractInput = z.infer<typeof SummarizeContractInputSchema>;

const SummarizeContractOutputSchema = z.object({
  summary: z.string().describe('A summary of the key provisions of the contract.'),
  keyProvisions: z.array(z.string()).describe('Key provisions in the contract.'),
  obligations: z.array(z.string()).describe('Key obligations outlined in the contract.'),
  potentialRisks: z.array(z.string()).describe('Potential risks associated with the contract.'),
});
export type SummarizeContractOutput = z.infer<typeof SummarizeContractOutputSchema>;

export async function summarizeContract(input: SummarizeContractInput): Promise<SummarizeContractOutput> {
  return summarizeContractFlow(input);
}

const summarizeContractPrompt = ai.definePrompt({
  name: 'summarizeContractPrompt',
  input: {schema: SummarizeContractInputSchema},
  output: {schema: SummarizeContractOutputSchema},
  prompt: `You are an AI legal assistant specializing in summarizing legal contracts.

  Your goal is to provide a concise and informative summary of the contract, highlighting key provisions, obligations, and potential risks.

  Consider any jurisdiction that is passed in, and use it to look for any recent changes in laws that may affect the contract.

  Contract Text: {{{contractText}}}

  Jurisdiction: {{{jurisdiction}}}

  Output should be in JSON format.
  `,
});

const summarizeContractFlow = ai.defineFlow(
  {
    name: 'summarizeContractFlow',
    inputSchema: SummarizeContractInputSchema,
    outputSchema: SummarizeContractOutputSchema,
  },
  async input => {
    const {output} = await summarizeContractPrompt(input);
    return output!;
  }
);
