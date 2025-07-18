import { useQuery, useMutation, useInfiniteQuery, useQueryClient } from '@tanstack/react-query';
import type { INewUser } from '../../types';
import { createUserAccount } from '../appwrite/Api';
import { signInAccount } from '../appwrite/Api';

export const useCreateUserAccount = () => {
    return useMutation({
        mutationFn: (user: INewUser) =>
            createUserAccount(user)
    });
}
export const useCreateSignInAccount = () => {
    return useMutation({
        mutationFn: (user: {email:string,password:string}) =>
            signInAccount(user)
    });
}

