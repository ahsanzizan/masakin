import { apiUrl } from "@config/index"; // Ignored config/index
import { getSecureItemSync } from "./secureStoreManager";

export interface ApiResponse<T> {
  message: string;
  statusCode: number;
  result: T;
}

export interface ApiErrorResponse {
  message: string[];
  statusCode: number;
  error: string;
}

export const fetchApi = async <T>(
  route: string,
  init?: RequestInit
): Promise<ApiResponse<T> | ApiErrorResponse> => {
  const res = await fetch(apiUrl + route, init);

  return await res.json();
};

export const fetchApiWithAuth = async <T>(
  route: string,
  init?: RequestInit
): Promise<ApiResponse<T> | ApiErrorResponse> => {
  const token = await getSecureItemSync("token");
  const res = await fetch(apiUrl + route, {
    ...init,
    headers: { ...init?.headers, Authorization: "Bearer " + token },
  });

  return await res.json();
};

// Api Response Type guard
export const isSuccess = <T>(
  response: ApiResponse<T> | ApiErrorResponse
): response is ApiResponse<T> => {
  return (response as ApiResponse<T>).result !== undefined;
};
