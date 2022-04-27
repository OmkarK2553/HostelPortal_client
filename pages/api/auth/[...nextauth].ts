import NextAuth from "next-auth"
// import Providers from "next-auth/providers"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import TwitterProvider from "next-auth/providers/twitter";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
       
      })
  ],
})

// profile(profile) {
//     return {
//       // Return all the profile information you need.
//       // The only truly required field is `id`
//       // to be able identify the account when added to a database
//     }
//   },