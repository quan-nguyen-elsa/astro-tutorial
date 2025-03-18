interface StrapiGraphQLResponse<T> {
  data: T;
  errors?: Array<{
    message: string;
    extensions?: Record<string, unknown>;
  }>;
}

interface FetchGraphQLParams<TVariables> {
  query: string;
  variables?: TVariables;
  revalidate?: number;
}

export async function fetchStrapiGraphQL<TData = any, TVariables = Record<string, any>>({
  query,
  variables,
  revalidate = 60, // Default cache revalidation time (seconds)
}: FetchGraphQLParams<TVariables>): Promise<TData> {
  try {
    const STRAPI_URL = import.meta.env.VITE_STRAPI_URL;
    // const STRAPI_API_TOKEN = import.meta.env.VITE_STRAPI_API_TOKEN;

    if (!STRAPI_URL) {
      throw new Error('Strapi environment variables not configured');
    }

    const response = await fetch(`${STRAPI_URL}/graphql`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Authorization: `Bearer ${STRAPI_API_TOKEN}`,
      },
      body: JSON.stringify({
        query,
        variables,
      })
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const { data, errors }: StrapiGraphQLResponse<TData> = await response.json();

    if (errors) {
      throw new Error(
        `GraphQL errors occurred: ${errors.map((e) => e.message).join(', ')}`
      );
    }

    if (!data) {
      throw new Error('No data returned from Strapi');
    }

    return data;
  } catch (error) {
    throw error; // Re-throw to let components handle errors
  }
}