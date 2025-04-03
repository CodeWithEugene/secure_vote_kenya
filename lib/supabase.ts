import { createClient } from "@supabase/supabase-js"

// Check if environment variables are available
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

// Validate environment variables
if (!supabaseUrl) {
  console.error("Missing environment variable: NEXT_PUBLIC_SUPABASE_URL")
}

if (!supabaseAnonKey) {
  console.error("Missing environment variable: NEXT_PUBLIC_SUPABASE_ANON_KEY")
}

// Initialize Supabase client with fallbacks to prevent runtime errors
export const supabase = createClient(
  supabaseUrl || "https://placeholder-url.supabase.co",
  supabaseAnonKey || "placeholder-key",
)

// Auth related functions
export const signInWithEmail = async (email: string, password: string) => {
  if (!supabaseUrl || !supabaseAnonKey) {
    return {
      data: null,
      error: new Error("Supabase environment variables are not configured properly"),
    }
  }

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })
  return { data, error }
}

export const signUpWithEmail = async (email: string, password: string) => {
  if (!supabaseUrl || !supabaseAnonKey) {
    return {
      data: null,
      error: new Error("Supabase environment variables are not configured properly"),
    }
  }

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  })
  return { data, error }
}

export const signInWithOAuth = async (provider: "google" | "github" | "linkedin" | "apple") => {
  if (!supabaseUrl || !supabaseAnonKey) {
    return {
      data: null,
      error: new Error("Supabase environment variables are not configured properly"),
    }
  }

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider,
    options: {
      redirectTo: `${window.location.origin}/auth/callback`,
    },
  })
  return { data, error }
}

export const signOut = async () => {
  if (!supabaseUrl || !supabaseAnonKey) {
    return { error: new Error("Supabase environment variables are not configured properly") }
  }

  const { error } = await supabase.auth.signOut()
  return { error }
}

export const getCurrentUser = async () => {
  if (!supabaseUrl || !supabaseAnonKey) {
    return {
      data: null,
      error: new Error("Supabase environment variables are not configured properly"),
    }
  }

  const { data, error } = await supabase.auth.getUser()
  return { data, error }
}

// Voter related functions
export const createVoterProfile = async (userId: string, voterData: any) => {
  if (!supabaseUrl || !supabaseAnonKey) {
    return { data: null, error: new Error("Supabase environment variables are not configured properly") }
  }
  const { data, error } = await supabase.from("voter_profiles").insert([
    {
      user_id: userId,
      ...voterData,
    },
  ])
  return { data, error }
}

export const getVoterProfile = async (userId: string) => {
  if (!supabaseUrl || !supabaseAnonKey) {
    return { data: null, error: new Error("Supabase environment variables are not configured properly") }
  }
  const { data, error } = await supabase.from("voter_profiles").select("*").eq("user_id", userId).single()
  return { data, error }
}

export const updateVoterProfile = async (userId: string, updates: any) => {
  if (!supabaseUrl || !supabaseAnonKey) {
    return { data: null, error: new Error("Supabase environment variables are not configured properly") }
  }
  const { data, error } = await supabase.from("voter_profiles").update(updates).eq("user_id", userId)
  return { data, error }
}

// Login activity tracking
export const logLoginActivity = async (userId: string, deviceInfo: any) => {
  if (!supabaseUrl || !supabaseAnonKey) {
    return { data: null, error: new Error("Supabase environment variables are not configured properly") }
  }
  const { data, error } = await supabase.from("login_activities").insert([
    {
      user_id: userId,
      login_time: new Date().toISOString(),
      ip_address: deviceInfo.ip || "unknown",
      device_type: deviceInfo.deviceType || "unknown",
      browser: deviceInfo.browser || "unknown",
      location: deviceInfo.location || "unknown",
    },
  ])
  return { data, error }
}

export const getLoginActivities = async (userId: string) => {
  if (!supabaseUrl || !supabaseAnonKey) {
    return { data: null, error: new Error("Supabase environment variables are not configured properly") }
  }
  const { data, error } = await supabase
    .from("login_activities")
    .select("*")
    .eq("user_id", userId)
    .order("login_time", { ascending: false })
  return { data, error }
}

// Biometric data functions
export const storeBiometricData = async (userId: string, biometricData: any) => {
  if (!supabaseUrl || !supabaseAnonKey) {
    return { data: null, error: new Error("Supabase environment variables are not configured properly") }
  }
  const { data, error } = await supabase.from("biometric_data").insert([
    {
      user_id: userId,
      fingerprint_hash: biometricData.fingerprintHash,
      facial_recognition_data: biometricData.facialData,
      created_at: new Date().toISOString(),
    },
  ])
  return { data, error }
}

export const getBiometricData = async (userId: string) => {
  if (!supabaseUrl || !supabaseAnonKey) {
    return { data: null, error: new Error("Supabase environment variables are not configured properly") }
  }
  const { data, error } = await supabase.from("biometric_data").select("*").eq("user_id", userId).single()
  return { data, error }
}

// Election related functions
export const getUpcomingElections = async () => {
  if (!supabaseUrl || !supabaseAnonKey) {
    return { data: null, error: new Error("Supabase environment variables are not configured properly") }
  }
  const { data, error } = await supabase
    .from("elections")
    .select("*")
    .gt("election_date", new Date().toISOString())
    .order("election_date", { ascending: true })
  return { data, error }
}

export const getPastElections = async () => {
  if (!supabaseUrl || !supabaseAnonKey) {
    return { data: null, error: new Error("Supabase environment variables are not configured properly") }
  }
  const { data, error } = await supabase
    .from("elections")
    .select("*")
    .lt("election_date", new Date().toISOString())
    .order("election_date", { ascending: false })
  return { data, error }
}

export const getElectionById = async (electionId: string) => {
  if (!supabaseUrl || !supabaseAnonKey) {
    return { data: null, error: new Error("Supabase environment variables are not configured properly") }
  }
  const { data, error } = await supabase.from("elections").select("*, candidates(*)").eq("id", electionId).single()
  return { data, error }
}

export const recordVote = async (voteData: any) => {
  if (!supabaseUrl || !supabaseAnonKey) {
    return { data: null, error: new Error("Supabase environment variables are not configured properly") }
  }
  const { data, error } = await supabase.from("votes").insert([voteData])
  return { data, error }
}

