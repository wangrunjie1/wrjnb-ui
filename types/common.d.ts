interface ComponentUsage {
  name: string;
  title: string;
  description: string;
  category: string;
  code: string;
  props: Array<{
    name: string;
    description: string;
    type: string;
    default: string;
    required?: boolean;
  }>;
  events: Array<{
    name: string;
    description: string;
    params: string;
  }>;
  examples: Array<{
    title: string;
    description: string;
    demo: any;
    demoCode: string;
  }>;
  slots?: Array<{
    name: string;
    description: string;
  }>;
}
