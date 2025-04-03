import { NextResponse } from "next/server"
import { ethers } from "ethers"
import { VotingSystemABI, BiometricVerifierABI } from "@/contracts/abis"

// Contract addresses would be environment variables in production
const VOTING_SYSTEM_ADDRESS = "0x123456789abcdef123456789abcdef123456789a"
const BIOMETRIC_VERIFIER_ADDRESS = "0xabcdef123456789abcdef123456789abcdef1234"

// Provider setup - would use environment variables in production
const provider = new ethers.JsonRpcProvider("https://eth-goerli.g.alchemy.com/v2/your-api-key")

// Get contract instances
const getVotingSystem = () => {
  return new ethers.Contract(VOTING_SYSTEM_ADDRESS, VotingSystemABI.abi, provider)
}

const getBiometricVerifier = () => {
  return new ethers.Contract(BIOMETRIC_VERIFIER_ADDRESS, BiometricVerifierABI.abi, provider)
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const action = searchParams.get("action")

  try {
    if (action === "getElections") {
      const votingSystem = getVotingSystem()
      const electionCount = await votingSystem.electionCount()

      const elections = []
      for (let i = 0; i < electionCount; i++) {
        const electionDetails = await votingSystem.getElectionDetails(i)
        elections.push({
          id: i,
          title: electionDetails.title,
          description: electionDetails.description,
          startTime: new Date(Number(electionDetails.startTime) * 1000).toISOString(),
          endTime: new Date(Number(electionDetails.endTime) * 1000).toISOString(),
          isActive: electionDetails.isActive,
          resultsReleased: electionDetails.resultsReleased,
          candidateCount: Number(electionDetails.candidateCount),
        })
      }

      return NextResponse.json({ elections })
    } else if (action === "getElection") {
      const electionId = searchParams.get("electionId")
      if (!electionId) {
        return NextResponse.json({ error: "Election ID is required" }, { status: 400 })
      }

      const votingSystem = getVotingSystem()
      const electionDetails = await votingSystem.getElectionDetails(electionId)

      const candidates = []
      for (let i = 0; i < electionDetails.candidateCount; i++) {
        const candidate = await votingSystem.getCandidate(electionId, i)
        candidates.push({
          id: i,
          name: candidate.name,
          party: candidate.party,
          description: candidate.description,
          voteCount: electionDetails.resultsReleased ? Number(candidate.voteCount) : null,
        })
      }

      return NextResponse.json({
        election: {
          id: Number(electionId),
          title: electionDetails.title,
          description: electionDetails.description,
          startTime: new Date(Number(electionDetails.startTime) * 1000).toISOString(),
          endTime: new Date(Number(electionDetails.endTime) * 1000).toISOString(),
          isActive: electionDetails.isActive,
          resultsReleased: electionDetails.resultsReleased,
          candidates,
        },
      })
    } else {
      return NextResponse.json({ error: "Invalid action" }, { status: 400 })
    }
  } catch (error) {
    console.error("Blockchain API error:", error)
    return NextResponse.json({ error: "Failed to fetch data from blockchain" }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { action } = body

    if (action === "castVote") {
      const { electionId, candidateId, voterAddress, privateKey } = body

      if (!electionId || !candidateId || !voterAddress || !privateKey) {
        return NextResponse.json({ error: "Missing required parameters" }, { status: 400 })
      }

      // Create a wallet instance with the private key
      const wallet = new ethers.Wallet(privateKey, provider)

      // Connect to the contract with the wallet
      const votingSystem = new ethers.Contract(VOTING_SYSTEM_ADDRESS, VotingSystemABI.abi, wallet)

      // Cast the vote
      const tx = await votingSystem.castVote(electionId, candidateId)
      const receipt = await tx.wait()

      return NextResponse.json({
        success: true,
        transactionHash: receipt.hash,
      })
    } else if (action === "verifyBiometric") {
      const { voterId, biometricHash } = body

      if (!voterId || !biometricHash) {
        return NextResponse.json({ error: "Missing required parameters" }, { status: 400 })
      }

      // This would be a server-side operation with proper security
      // For demo purposes, we're simulating the verification
      const biometricVerifier = getBiometricVerifier()
      const isVerified = await biometricVerifier.verifyBiometric(
        ethers.keccak256(ethers.toUtf8Bytes(voterId)),
        ethers.keccak256(ethers.toUtf8Bytes(biometricHash)),
      )

      return NextResponse.json({
        success: true,
        verified: isVerified,
      })
    } else {
      return NextResponse.json({ error: "Invalid action" }, { status: 400 })
    }
  } catch (error) {
    console.error("Blockchain API error:", error)
    return NextResponse.json({ error: "Failed to execute blockchain transaction" }, { status: 500 })
  }
}

