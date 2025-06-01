import { createClient } from "@supabase/supabase-js"
import type { Database } from "@/types/database"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey)

// Admin client for server-side operations
export const supabaseAdmin =
  process.env.SUPABASE_SERVICE_ROLE_KEY && supabaseUrl
    ? createClient<Database>(supabaseUrl, process.env.SUPABASE_SERVICE_ROLE_KEY, {
        auth: {
          autoRefreshToken: false,
          persistSession: false,
        },
      })
    : null

// Mock user data for testing
const mockUsers = [
  {
    id: "admin-001",
    email: "info@simplimator.com",
    password: "admin123",
    user_metadata: {
      full_name: "Admin User",
      user_role: "admin",
    },
  },
  {
    id: "host-001",
    email: "host@example.com",
    password: "host123",
    user_metadata: {
      full_name: "Host User",
      user_role: "host",
    },
  },
  {
    id: "client-001",
    email: "client@example.com",
    password: "client123",
    user_metadata: {
      full_name: "Client User",
      user_role: "client",
    },
  },
]

// Get current session
export const getSession = async () => {
  if (supabase) {
    try {
      const { data, error } = await supabase.auth.getSession()
      if (error) throw error
      return data.session
    } catch (error) {
      console.error("Error getting session:", error)
      return null
    }
  } else {
    // Mock session from localStorage
    try {
      const storedUser = localStorage.getItem("espacero_user")
      if (storedUser) {
        const user = JSON.parse(storedUser)
        return {
          user,
          access_token: "mock-token",
          refresh_token: "mock-refresh-token",
        }
      }
      return null
    } catch (error) {
      console.error("Error getting mock session:", error)
      return null
    }
  }
}

// Sign up function
export const signUp = async (email: string, password: string, userData: any) => {
  if (supabase) {
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: userData,
        },
      })
      return { data, error }
    } catch (error) {
      return { data: null, error }
    }
  } else {
    // Mock sign up
    try {
      const newUser = {
        id: Math.random().toString(36).substr(2, 9),
        email,
        user_metadata: {
          ...userData,
          user_role: userData.user_role || "client",
        },
        created_at: new Date().toISOString(),
      }

      // Store in localStorage for mock persistence
      localStorage.setItem("espacero_user", JSON.stringify(newUser))

      return {
        data: { user: newUser },
        error: null,
      }
    } catch (error) {
      return {
        data: null,
        error: error instanceof Error ? error : new Error("Unknown error during signup"),
      }
    }
  }
}

// Sign in function
export const signIn = async (email: string, password: string) => {
  if (supabase) {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })
      return { data, error }
    } catch (error) {
      return { data: null, error }
    }
  } else {
    // Mock sign in
    try {
      const mockUser = mockUsers.find((user) => user.email === email && user.password === password)

      if (!mockUser) {
        return {
          data: null,
          error: new Error("Invalid email or password"),
        }
      }

      const { password: _, ...userWithoutPassword } = mockUser
      const userData = {
        ...userWithoutPassword,
        created_at: new Date().toISOString(),
      }

      // Store in localStorage for mock persistence
      localStorage.setItem("espacero_user", JSON.stringify(userData))

      return {
        data: { user: userData },
        error: null,
      }
    } catch (error) {
      return {
        data: null,
        error: error instanceof Error ? error : new Error("Unknown error during signin"),
      }
    }
  }
}

// Sign out function
export const signOut = async () => {
  if (supabase) {
    try {
      const { error } = await supabase.auth.signOut()
      return { error }
    } catch (error) {
      return { error }
    }
  } else {
    // Mock sign out
    try {
      localStorage.removeItem("espacero_user")
      return { error: null }
    } catch (error) {
      return { error: error instanceof Error ? error : new Error("Unknown error during signout") }
    }
  }
}

// Get current user
export const getCurrentUser = async () => {
  if (supabase) {
    try {
      const {
        data: { user },
        error,
      } = await supabase.auth.getUser()
      if (error) throw error
      return user
    } catch (error) {
      console.error("Error getting current user:", error)
      return null
    }
  } else {
    // Mock get current user
    try {
      const storedUser = localStorage.getItem("espacero_user")
      return storedUser ? JSON.parse(storedUser) : null
    } catch (error) {
      console.error("Error getting mock current user:", error)
      return null
    }
  }
}

// Helper function to check if Supabase is available
export const isSupabaseAvailable = () => {
  return !!supabase
}
