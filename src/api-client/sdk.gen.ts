// This file is auto-generated by @hey-api/openapi-ts

import type { Options as ClientOptions, TDataShape, Client } from '@hey-api/client-axios';
import type { AuthControllerLoginData, AuthControllerLoginResponse, AuthControllerRefreshData, AuthControllerRefreshResponse, AuthControllerLogoutData, AuthControllerLogoutResponse, UsersControllerCreateData, UsersControllerCreateResponse, UsersControllerDeleteData, UsersControllerDeleteResponse, UsersControllerFindOneData, UsersControllerFindOneResponse, UsersControllerUpdateData, UsersControllerUpdateResponse } from './types.gen';
import { client as _heyApiClient } from './client.gen';

export type Options<TData extends TDataShape = TDataShape, ThrowOnError extends boolean = boolean> = ClientOptions<TData, ThrowOnError> & {
    /**
     * You can provide a client instance returned by `createClient()` instead of
     * individual options. This might be also useful if you want to implement a
     * custom client.
     */
    client?: Client;
    /**
     * You can pass arbitrary values through the `meta` object. This can be
     * used to access values that aren't defined as part of the SDK function.
     */
    meta?: Record<string, unknown>;
};

export const authControllerLogin = <ThrowOnError extends boolean = false>(options: Options<AuthControllerLoginData, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).post<AuthControllerLoginResponse, unknown, ThrowOnError>({
        url: '/auth/login',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options?.headers
        }
    });
};

export const authControllerRefresh = <ThrowOnError extends boolean = false>(options: Options<AuthControllerRefreshData, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).post<AuthControllerRefreshResponse, unknown, ThrowOnError>({
        url: '/auth/refresh',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options?.headers
        }
    });
};

export const authControllerLogout = <ThrowOnError extends boolean = false>(options: Options<AuthControllerLogoutData, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).post<AuthControllerLogoutResponse, unknown, ThrowOnError>({
        url: '/auth/logout',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options?.headers
        }
    });
};

export const usersControllerCreate = <ThrowOnError extends boolean = false>(options: Options<UsersControllerCreateData, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).post<UsersControllerCreateResponse, unknown, ThrowOnError>({
        url: '/users',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options?.headers
        }
    });
};

export const usersControllerDelete = <ThrowOnError extends boolean = false>(options: Options<UsersControllerDeleteData, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).delete<UsersControllerDeleteResponse, unknown, ThrowOnError>({
        url: '/users/{id}',
        ...options
    });
};

export const usersControllerFindOne = <ThrowOnError extends boolean = false>(options: Options<UsersControllerFindOneData, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).get<UsersControllerFindOneResponse, unknown, ThrowOnError>({
        url: '/users/{id}',
        ...options
    });
};

export const usersControllerUpdate = <ThrowOnError extends boolean = false>(options: Options<UsersControllerUpdateData, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).put<UsersControllerUpdateResponse, unknown, ThrowOnError>({
        url: '/users/{id}',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options?.headers
        }
    });
};