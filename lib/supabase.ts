// Simplified Supabase client without Web3 dependencies
export const supabase = null // Disabled for now to prevent MetaMask errors

export const supabaseAdmin = null

// Mock auth helpers
export const signUp = async (email: string, password: string, userData: any) => {
  return { data: null, error: new Error("Using mock authentication") }
}

export const signIn = async (email: string, password: string) => {
  return { data: null, error: new Error("Using mock authentication") }
}

export const signOut = async () => {
  return { error: null }
}

export const getCurrentUser = async () => {
  return null
}
