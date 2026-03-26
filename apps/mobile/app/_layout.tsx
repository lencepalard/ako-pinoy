import { useEffect } from 'react'
import { Stack } from 'expo-router'
import { ClerkProvider, useAuth } from '@clerk/clerk-expo'
import * as SecureStore from 'expo-secure-store'
import * as SplashScreen from 'expo-splash-screen'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { TRPCProvider } from '../lib/trpc'

SplashScreen.preventAutoHideAsync()

const tokenCache = {
  async getToken(key: string) {
    try {
      return SecureStore.getItemAsync(key)
    } catch {
      return null
    }
  },
  async saveToken(key: string, value: string) {
    return SecureStore.setItemAsync(key, value)
  },
}

export default function RootLayout() {
  useEffect(() => {
    SplashScreen.hideAsync()
  }, [])

  return (
    <ClerkProvider
      publishableKey={process.env['EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY']!}
      tokenCache={tokenCache}
    >
      <GestureHandlerRootView style={{ flex: 1 }}>
        <TRPCProvider>
          <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="lesson/[slug]" options={{ presentation: 'card', headerShown: true, title: 'Lesson' }} />
            <Stack.Screen name="quiz/[id]" options={{ presentation: 'fullScreenModal', headerShown: false }} />
          </Stack>
        </TRPCProvider>
      </GestureHandlerRootView>
    </ClerkProvider>
  )
}
