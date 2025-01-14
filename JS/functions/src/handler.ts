import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import logging from "logging"
export const main = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  try {
    const response = {
      message: 'Hello from Lambda!' + logging.log(),
      timestamp: new Date().toISOString(),
      path: event.path,
      method: event.httpMethod
    };

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify(response)
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: 'Internal server error',
        error: error instanceof Error ? error.message : 'Unknown error'
      })
    };
  }
};