"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

// Define the translations
const translations: Record<string, Record<string, string>> = {
  en: {
    "Upcoming Elections": "Upcoming Elections",
    "Elections Participated": "Elections Participated",
    "Verification Status": "Verification Status",
    Verified: "Verified",
    "No Upcoming Elections": "No Upcoming Elections",
    "There are no upcoming elections at this time.": "There are no upcoming elections at this time.",
    "View Details": "View Details",
    Upcoming: "Upcoming",
    Participated: "Participated",
    "Did Not Participate": "Did Not Participate",
    "Vote Cast: Parliamentary By-Election": "Vote Cast: Parliamentary By-Election",
    "March 15, 2023 at 10:45 AM": "March 15, 2023 at 10:45 AM",
    "Account Created": "Account Created",
    "January 5, 2023 at 2:30 PM": "January 5, 2023 at 2:30 PM",
    Overview: "Overview",
    Elections: "Elections",
    Security: "Security",
    Notifications: "Notifications",
    Profile: "Profile",
    "Voter ID": "Voter ID",
    "Verified Voter": "Verified Voter",
    "Identity Verified": "Identity Verified",
    "Your identity has been verified": "Your identity has been verified",
    "Biometrics Registered": "Biometrics Registered",
    "Your biometric data is securely stored": "Your biometric data is securely stored",
    "Blockchain Wallet Created": "Blockchain Wallet Created",
    "Your secure voting wallet is active": "Your secure voting wallet is active",
    Result: "Result",
    "View Results": "View Results",
    "Downloading...": "Downloading...",
    "Mark All as Read": "Mark All as Read",
    New: "New",
    "No Notifications": "No Notifications",
    "You don't have any notifications at this time.": "You don't have any notifications at this time.",
    "Email Notifications": "Email Notifications",
    "SMS Notifications": "SMS Notifications",
    "Election Reminders": "Election Reminders",
    "Full Name": "Full Name",
    Edit: "Edit",
    "National ID": "National ID",
    "Email Address": "Email Address",
    "Phone Number": "Phone Number",
    "Biometric Data": "Biometric Data",
    "Fingerprint and Retina Scan": "Fingerprint and Retina Scan",
    // Removed duplicate key to resolve the error
    Enabled: "Enabled",
    Manage: "Manage",
    "Blockchain Wallet": "Blockchain Wallet",
    Active: "Active",
    "Change Password": "Change Password",
    "Save Changes": "Save Changes",
    "Switch to light mode": "Switch to light mode",
    "Switch to dark mode": "Switch to dark mode",
    "Next Election Countdown": "Next Election Countdown",
    "Time remaining until the next election": "Time remaining until the next election",
    "Your Voting Activity": "Your Voting Activity",
    "Your voting participation over time": "Your voting participation over time",
    "Past Elections": "Past Elections",
    "Previous elections": "Previous elections",
    "Security Status": "Security Status",
    "Monitor and enhance your account security": "Monitor and enhance your account security",
    "Security Recommendations": "Security Recommendations",
    "Two-Factor Authentication": "Two-Factor Authentication",
    "Your account is protected with two-factor authentication":
      "Your account is protected with two-factor authentication",
    "Biometric Verification": "Biometric Verification",
    "Your biometric data is securely stored and verified": "Your biometric data is securely stored and verified",
    "Password Update": "Password Update",
    "Consider updating your password for enhanced security": "Consider updating your password for enhanced security",
    "Recent Login Activity": "Recent Login Activity",
    "Nairobi, Kenya": "Nairobi, Kenya",
    "October 15, 2023 at 10:30 AM": "October 15, 2023 at 10:30 AM",
    Current: "Current",
    Device: "Device",
    Desktop: "Desktop",
    Mobile: "Mobile",
    "October 10, 2023 at 3:45 PM": "October 10, 2023 at 3:45 PM",
    "View All Activity": "View All Activity",
    "Security Settings": "Security Settings",
    "Manage your notifications and alerts": "Manage your notifications and alerts",
    "Notification Settings": "Notification Settings",
    "Your Profile": "Your Profile",
    "Manage your voter information": "Manage your voter information",
  },
  sw: {
    "Upcoming Elections": "Uchaguzi Ujao",
    "Elections Participated": "Uchaguzi Uliohudhuria",
    "Verification Status": "Hali ya Uthibitishaji",
    Verified: "Imethibitishwa",
    "No Upcoming Elections": "Hakuna Uchaguzi Ujao",
    "There are no upcoming elections at this time.": "Hakuna uchaguzi ujao kwa sasa.",
    "View Details": "Angalia Maelezo",
    Upcoming: "Inakuja",
    Participated: "Ulishiriki",
    "Did Not Participate": "Hukushiriki",
    "Vote Cast: Parliamentary By-Election": "Kura Iliyopigwa: Uchaguzi Mdogo wa Bunge",
    "March 15, 2023 at 10:45 AM": "Machi 15, 2023 saa 10:45 Asubuhi",
    "Account Created": "Akaunti Imeundwa",
    "January 5, 2023 at 2:30 PM": "Januari 5, 2023 saa 2:30 Mchana",
    Overview: "Muhtasari",
    Elections: "Uchaguzi",
    Security: "Usalama",
    Notifications: "Arifa",
    Profile: "Wasifu",
    "Voter ID": "Kitambulisho cha Mpiga Kura",
    "Verified Voter": "Mpiga Kura Aliyethibitishwa",
    "Identity Verified": "Utambulisho Umethibitishwa",
    "Your identity has been verified": "Utambulisho wako umethibitishwa",
    "Biometrics Registered": "Bayometriki Imesajiliwa",
    "Your biometric data is securely stored": "Data yako ya bayometriki imehifadhiwa kwa usalama",
    "Blockchain Wallet Created": "Pochi ya Blockchain Imeundwa",
    "Your secure voting wallet is active": "Pochi yako salama ya kupiga kura inatumika",
    Result: "Matokeo",
    "View Results": "Angalia Matokeo",
    "Downloading...": "Inapakua...",
    "Mark All as Read": "Weka Zote kama Zilizosomwa",
    New: "Mpya",
    "No Notifications": "Hakuna Arifa",
    "You don't have any notifications at this time.": "Huna arifa zozote kwa sasa.",
    "Email Notifications": "Arifa za Barua Pepe",
    "SMS Notifications": "Arifa za SMS",
    "Election Reminders": "Vikumbusho vya Uchaguzi",
    "Full Name": "Jina Kamili",
    Edit: "Hariri",
    "National ID": "Kitambulisho cha Taifa",
    "Email Address": "Anwani ya Barua Pepe",
    "Phone Number": "Nambari ya Simu",
    "Biometric Data": "Data ya Bayometriki",
    "Fingerprint and Retina Scan": "Alama za Vidole na Skanio la Retina",
    "Two-Factor Authentication": "Uthibitishaji wa Vipengele Viwili",
    Enabled: "Imewashwa",
    Manage: "Simamia",
    "Blockchain Wallet": "Pochi ya Blockchain",
    Active: "Inatumika",
    "Change Password": "Badilisha Nenosiri",
    "Save Changes": "Hifadhi Mabadiliko",
    "Switch to light mode": "Badilisha hadi hali ya mwanga",
    "Switch to dark mode": "Badilisha hadi hali ya giza",
    "Your Voting Activity": "Shughuli Yako ya Kupiga Kura",
  },
  fr: {
    "Upcoming Elections": "Élections à Venir",
    "Elections Participated": "Élections Participées",
    "Verification Status": "Statut de Vérification",
    Verified: "Vérifié",
    "No Upcoming Elections": "Aucune Élection à Venir",
    "There are no upcoming elections at this time.": "Il n'y a pas d'élections à venir pour le moment.",
    "View Details": "Voir les Détails",
    Upcoming: "À Venir",
    Participated: "Participé",
    "Did Not Participate": "N'a Pas Participé",
    "Vote Cast: Parliamentary By-Election": "Vote Exprimé: Élection Partielle Parlementaire",
    "March 15, 2023 at 10:45 AM": "15 Mars 2023 à 10h45",
    "Account Created": "Compte Créé",
    "January 5, 2023 at 2:30 PM": "5 Janvier 2023 à 14h30",
    Overview: "Aperçu",
    Elections: "Élections",
    Security: "Sécurité",
    Notifications: "Notifications",
    Profile: "Profil",
    "Voter ID": "ID d'Électeur",
    "Verified Voter": "Électeur Vérifié",
    "Identity Verified": "Identité Vérifiée",
    "Your identity has been verified": "Votre identité a été vérifiée",
    "Biometrics Registered": "Biométrie Enregistrée",
    "Your biometric data is securely stored": "Vos données biométriques sont stockées en toute sécurité",
    "Blockchain Wallet Created": "Portefeuille Blockchain Créé",
    "Your secure voting wallet is active": "Votre portefeuille de vote sécurisé est actif",
    Result: "Résultat",
    "View Results": "Voir les Résultats",
    "Downloading...": "Téléchargement...",
    "Mark All as Read": "Marquer Tout comme Lu",
    New: "Nouveau",
    "No Notifications": "Aucune Notification",
    "You don't have any notifications at this time.": "Vous n'avez aucune notification pour le moment.",
    "Email Notifications": "Notifications par Email",
    "SMS Notifications": "Notifications par SMS",
    "Election Reminders": "Rappels d'Élection",
    "Full Name": "Nom Complet",
    Edit: "Modifier",
    "National ID": "Carte d'Identité Nationale",
    "Email Address": "Adresse Email",
    "Phone Number": "Numéro de Téléphone",
    "Biometric Data": "Données Biométriques",
    "Fingerprint and Retina Scan": "Empreinte Digitale et Scan Rétinien",
    "Two-Factor Authentication": "Authentification à Deux Facteurs",
    Enabled: "Activé",
    Manage: "Gérer",
    "Blockchain Wallet": "Portefeuille Blockchain",
    Active: "Actif",
    "Change Password": "Changer le Mot de Passe",
    "Save Changes": "Enregistrer les Modifications",
    "Your Voting Activity": "Votre Activité de Vote",
  },
}

// Create the context
interface I18nContextType {
  t: (key: string) => string
  setLanguage: (lang: string) => void
  currentLanguage: string
}

const I18nContext = createContext<I18nContextType>({
  t: (key: string) => key,
  setLanguage: () => {},
  currentLanguage: "en",
})

// Create the provider
interface I18nProviderProps {
  children: ReactNode
}

export function I18nProvider({ children }: I18nProviderProps) {
  const [language, setLanguage] = useState("en")

  useEffect(() => {
    // Try to get the language from localStorage
    const savedLanguage = localStorage.getItem("language")
    if (savedLanguage && translations[savedLanguage]) {
      setLanguage(savedLanguage)
    }
  }, [])

  const changeLanguage = (lang: string) => {
    if (translations[lang]) {
      setLanguage(lang)
      localStorage.setItem("language", lang)
    }
  }

  const translate = (key: string): string => {
    if (translations[language] && translations[language][key]) {
      return translations[language][key]
    }
    return key
  }

  return (
    <I18nContext.Provider value={{ t: translate, setLanguage: changeLanguage, currentLanguage: language }}>
      {children}
    </I18nContext.Provider>
  )
}

// Create the hook
export function useTranslation() {
  return useContext(I18nContext)
}

