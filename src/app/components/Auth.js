'use client';

import useAuthStore from '@/lib/store';
import { useEffect } from 'react';

export default function AuthStore({ isAuth }) {
  const { setIsLogin } = useAuthStore();
  useEffect(() => {
    setIsLogin(isAuth);
  }, [setIsLogin, isAuth]);

  return null;
}
