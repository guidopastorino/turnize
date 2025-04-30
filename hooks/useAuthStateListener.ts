'use client';

import { useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useDispatch } from 'react-redux';
import { setUser, clearUser } from '@/store/user/userSlice';
import { UserState } from '@/types/types';
import ky from 'ky';

const useAuthStateListener = () => {
  const { data: session, status } = useSession();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUserData = async (userId: string) => {
      try {
        const userData = await ky.get(`/api/users/${userId}`).json<UserState>();
        dispatch(setUser(userData));
      } catch (error) {
        console.error('Error al obtener los datos del usuario:', error);
        dispatch(clearUser());
      }
    };

    if (status === 'authenticated' && session?.user?.id) {
      fetchUserData(session.user.id);
    } else if (status === 'unauthenticated') {
      dispatch(clearUser());
    }
  }, [status, session, dispatch]);
};

export default useAuthStateListener;