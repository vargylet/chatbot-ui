import { OPENAI_API_TYPE } from '../utils/app/const';

export interface OpenAIModel {
  id: string;
  name: string;
  maxLength: number; // maximum length of a message
  tokenLimit: number;
}

export enum OpenAIModelID {
  GPT_3_5 = 'gpt-3.5-turbo',
  GPT_3_5_TURBO_0125 = 'gpt-3.5-turbo-0125',
  GPT_4 = 'gpt-4',
  GPT_4_32K = 'gpt-4-32k',
  GPT_4_TURBO = 'gpt-4-1106-preview'
}

// in case the `DEFAULT_MODEL` environment variable is not set or set to an unsupported model
export const fallbackModelID = OpenAIModelID.GPT_3_5;

export const OpenAIModels: Record<OpenAIModelID, OpenAIModel> = {
  [OpenAIModelID.GPT_3_5]: {
    id: OpenAIModelID.GPT_3_5,
    name: 'GPT-3.5',
    maxLength: 12288,
    tokenLimit: 4096,
  },
  [OpenAIModelID.GPT_3_5_TURBO_0125]: {
    id: OpenAIModelID.GPT_3_5_TURBO_0125,
    name: 'GPT-3.5-Turbo-0125',
    maxLength: 49155,
    tokenLimit: 16385,
  },
  [OpenAIModelID.GPT_4]: {
    id: OpenAIModelID.GPT_4,
    name: 'GPT-4',
    maxLength: 24000,
    tokenLimit: 8000,
  },
  [OpenAIModelID.GPT_4_32K]: {
    id: OpenAIModelID.GPT_4_32K,
    name: 'GPT-4-32K',
    maxLength: 98304,
    tokenLimit: 32768,
  },
  [OpenAIModelID.GPT_4_TURBO]: {
    id: OpenAIModelID.GPT_4_TURBO,
    name: 'GPT-4-TURBO',
    maxLength: 380000,
    tokenLimit: 128000,
  },
};
