"use client";

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { logoutUser } from '@/lib/api';
import { toast } from 'react-toastify';

const  RouteSessionWarning = () => {
  const pathname = usePathname();

  useEffect(() => {
    // Handler for page reload or tab close
    const handleBeforeUnload = async (e: BeforeUnloadEvent) => {
      // Get sessionId from localStorage or global state
      const sessionId = localStorage.getItem('sessionId');

      // Only show confirmation if on specific routes (optional)
      // const protectedRoutes = ['/panic-notes', '/dashboard'];
      const isProtectedRoute = true;

      if (isProtectedRoute && sessionId) {
        e.preventDefault(); // Standard way to show browser's default confirmation
        e.returnValue = ''; // Required for some browsers

        const shouldLeave = window.confirm('Are you sure you want to leave? Your notes will be lost.');
        
        if (shouldLeave) {
          try {
            await logoutUser(sessionId);
            // Optional: Clear sessionId from localStorage
            localStorage.removeItem('sessionId');
          } catch (error) {
            toast.error('Error during page leave');
          }
        }
      }
    };

    // Add event listener for page reload/close
    window.addEventListener('beforeunload', handleBeforeUnload);

    // Cleanup event listener
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [pathname]);

  return null;
}

export default RouteSessionWarning;