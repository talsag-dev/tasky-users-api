// This file is auto-generated by @hey-api/openapi-ts

export type LoginDto = {
    email: string;
    password: string;
};

export type UserResponseDto = {
    id: string;
    name: string | null;
    email: string;
    created_at: string | null;
    updated_at: string | null;
};

export type AuthResponseDto = {
    user: UserResponseDto;
    accessToken: string;
    refreshToken: string;
};

export type RefreshTokenDto = {
    refreshToken: string;
};

export type TokenResponseDto = {
    accessToken: string;
    refreshToken: string;
};

export type LogoutResponseDto = {
    success: boolean;
};

export type CreateUserDto = {
    name: string;
    email: string;
    password: string;
};

export type UpdateUserDto = {
    name: string;
    email: string;
    password: string;
};

export type AuthControllerLoginData = {
    body: LoginDto;
    path?: never;
    query?: never;
    url: '/auth/login';
};

export type AuthControllerLoginResponses = {
    200: AuthResponseDto;
};

export type AuthControllerLoginResponse = AuthControllerLoginResponses[keyof AuthControllerLoginResponses];

export type AuthControllerRefreshData = {
    body: RefreshTokenDto;
    path?: never;
    query?: never;
    url: '/auth/refresh';
};

export type AuthControllerRefreshResponses = {
    200: TokenResponseDto;
};

export type AuthControllerRefreshResponse = AuthControllerRefreshResponses[keyof AuthControllerRefreshResponses];

export type AuthControllerLogoutData = {
    body: RefreshTokenDto;
    path?: never;
    query?: never;
    url: '/auth/logout';
};

export type AuthControllerLogoutResponses = {
    200: LogoutResponseDto;
};

export type AuthControllerLogoutResponse = AuthControllerLogoutResponses[keyof AuthControllerLogoutResponses];

export type UsersControllerCreateData = {
    body: CreateUserDto;
    path?: never;
    query?: never;
    url: '/users';
};

export type UsersControllerCreateResponses = {
    201: UserResponseDto;
};

export type UsersControllerCreateResponse = UsersControllerCreateResponses[keyof UsersControllerCreateResponses];

export type UsersControllerDeleteData = {
    body?: never;
    path: {
        id: string;
    };
    query?: never;
    url: '/users/{id}';
};

export type UsersControllerDeleteResponses = {
    200: UserResponseDto;
};

export type UsersControllerDeleteResponse = UsersControllerDeleteResponses[keyof UsersControllerDeleteResponses];

export type UsersControllerFindOneData = {
    body?: never;
    path: {
        id: string;
    };
    query?: never;
    url: '/users/{id}';
};

export type UsersControllerFindOneResponses = {
    200: UserResponseDto;
};

export type UsersControllerFindOneResponse = UsersControllerFindOneResponses[keyof UsersControllerFindOneResponses];

export type UsersControllerUpdateData = {
    body: UpdateUserDto;
    path: {
        id: string;
    };
    query?: never;
    url: '/users/{id}';
};

export type UsersControllerUpdateResponses = {
    200: UserResponseDto;
};

export type UsersControllerUpdateResponse = UsersControllerUpdateResponses[keyof UsersControllerUpdateResponses];

export type ClientOptions = {
    baseURL: string;
};