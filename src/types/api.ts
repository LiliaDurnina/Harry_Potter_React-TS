export interface ApiResponse<T> {
  data: T;
  status: number;
  message?: string;
}

export interface PhotoApiResponse {
  thumbnail?: {
    source: string;
  };
}