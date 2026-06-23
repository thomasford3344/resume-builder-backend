export type AiProvider = 'openai' | 'claude';

export const OPENAI_MODEL_API_IDS: Record<string, string> = {
  'gpt-4.1-mini': 'gpt-4.1-mini',
  'gpt-4.5': 'gpt-4.5',
  'gpt-5': 'gpt-5',
  'gpt-5-instant': 'gpt-5',
  'gpt-5-thinking': 'gpt-5',
  'gpt-5-pro': 'gpt-5-pro',
  'gpt-5.1': 'gpt-5.1',
  'gpt-5.1-instant': 'gpt-5.1',
  'gpt-5.1-thinking': 'gpt-5.1',
  'gpt-5.1-pro': 'gpt-5.1-pro',
  'gpt-5.2': 'gpt-5.2',
  'gpt-5.2-instant': 'gpt-5.2',
  'gpt-5.2-thinking': 'gpt-5.2',
  'gpt-5.2-pro': 'gpt-5.2-pro',
  'gpt-5.5': 'gpt-5.5',
  'gpt-5.5-instant': 'gpt-5.5',
  'gpt-5.5-thinking': 'gpt-5.5',
  'gpt-5.5-pro': 'gpt-5.5-pro',
};

export const CLAUDE_MODEL_API_IDS: Record<string, string> = {
  'claude-sonnet-4-5-20250929': 'claude-sonnet-4-5-20250929',
  'claude-sonnet-4-6': 'claude-sonnet-4-6',
  'claude-opus-4-20250514': 'claude-opus-4-20250514',
  'claude-opus-4-1-20250805': 'claude-opus-4-1-20250805',
  'claude-opus-4-5-20251101': 'claude-opus-4-5-20251101',
  'claude-opus-4-6': 'claude-opus-4-6',
  'claude-opus-4-7': 'claude-opus-4-7',
  'claude-haiku-4-5-20251001': 'claude-haiku-4-5-20251001',
};

export function resolveApiModelId(
  provider: AiProvider,
  version: string,
): string {
  if (provider === 'openai') {
    return OPENAI_MODEL_API_IDS[version] ?? version;
  }
  return CLAUDE_MODEL_API_IDS[version] ?? version;
}
