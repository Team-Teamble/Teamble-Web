export interface CommonResponse<T> {
  status: number;
  success: boolean;
  message: string;
  data: T;
}
