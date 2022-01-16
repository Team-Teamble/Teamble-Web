export class APIError extends Error {
  error = "APIError";
}

export class UnknownAPIError extends APIError {
  error = "UnknownAPIError";

  constructor(public code: number) {
    super();
  }
}

export class UnauthorizedError extends APIError {
  error = "Unauthorized";

  constructor(public message: string) {
    super();
  }
}

export class NotFoundError extends APIError {
  error = "NotFound";

  constructor(public message: string) {
    super();
  }
}

export class BadRequestError extends APIError {
  error = "BadRequest";

  constructor(public message: string) {
    super();
  }
}
