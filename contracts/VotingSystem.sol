// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

/**
 * @title VotingSystem
 * @dev A blockchain-based voting system for secure and transparent elections in Kenya
 */
contract VotingSystem {
    // Structs
    struct Voter {
        bool isRegistered;
        bool hasVoted;
        bytes32 biometricHash;
        address walletAddress;
    }
    
    struct Candidate {
        string name;
        string party;
        string description;
        uint256 voteCount;
    }
    
    struct Election {
        string title;
        string description;
        uint256 startTime;
        uint256 endTime;
        bool isActive;
        bool resultsReleased;
        mapping(uint256 => Candidate) candidates;
        uint256 candidateCount;
        mapping(address => bool) hasVoted;
    }
    
    // State variables
    address public admin;
    mapping(bytes32 => Voter) public voters;
    mapping(uint256 => Election) public elections;
    uint256 public electionCount;
    
    // Events
    event VoterRegistered(bytes32 indexed voterId, address walletAddress);
    event ElectionCreated(uint256 indexed electionId, string title, uint256 startTime, uint256 endTime);
    event CandidateAdded(uint256 indexed electionId, uint256 candidateId, string name, string party);
    event VoteCast(uint256 indexed electionId, address indexed voter, uint256 timestamp);
    event ElectionStarted(uint256 indexed electionId, uint256 timestamp);
    event ElectionEnded(uint256 indexed electionId, uint256 timestamp);
    event ResultsReleased(uint256 indexed electionId, uint256 timestamp);
    
    // Modifiers
    modifier onlyAdmin() {
        require(msg.sender == admin, "Only admin can perform this action");
        _;
    }
    
    modifier electionExists(uint256 _electionId) {
        require(_electionId < electionCount, "Election does not exist");
        _;
    }
    
    modifier electionActive(uint256 _electionId) {
        require(elections[_electionId].isActive, "Election is not active");
        require(block.timestamp >= elections[_electionId].startTime, "Election has not started yet");
        require(block.timestamp <= elections[_electionId].endTime, "Election has ended");
        _;
    }
    
    modifier hasNotVoted(uint256 _electionId) {
        require(!elections[_electionId].hasVoted[msg.sender], "Voter has already cast a vote in this election");
        _;
    }
    
    // Constructor
    constructor() {
        admin = msg.sender;
    }
    
    /**
     * @dev Register a new voter
     * @param _voterId National ID hash
     * @param _biometricHash Hash of voter's biometric data
     */
    function registerVoter(bytes32 _voterId, bytes32 _biometricHash) external onlyAdmin {
        require(!voters[_voterId].isRegistered, "Voter already registered");
        
        Voter storage voter = voters[_voterId];
        voter.isRegistered = true;
        voter.hasVoted = false;
        voter.biometricHash = _biometricHash;
        voter.walletAddress = address(0); // Will be set when voter claims their wallet
        
        emit VoterRegistered(_voterId, address(0));
    }
    
    /**
     * @dev Voter claims their wallet address
     * @param _voterId National ID hash
     * @param _biometricHash Hash of voter's biometric data for verification
     */
    function claimVoterWallet(bytes32 _voterId, bytes32 _biometricHash) external {
        require(voters[_voterId].isRegistered, "Voter not registered");
        require(voters[_voterId].biometricHash == _biometricHash, "Biometric verification failed");
        require(voters[_voterId].walletAddress == address(0), "Wallet already claimed");
        
        voters[_voterId].walletAddress = msg.sender;
        
        emit VoterRegistered(_voterId, msg.sender);
    }
    
    /**
     * @dev Create a new election
     * @param _title Election title
     * @param _description Election description
     * @param _startTime Start time of the election (unix timestamp)
     * @param _endTime End time of the election (unix timestamp)
     */
    function createElection(
        string memory _title,
        string memory _description,
        uint256 _startTime,
        uint256 _endTime
    ) external onlyAdmin {
        require(_startTime > block.timestamp, "Start time must be in the future");
        require(_endTime > _startTime, "End time must be after start time");
        
        uint256 electionId = electionCount++;
        Election storage election = elections[electionId];
        election.title = _title;
        election.description = _description;
        election.startTime = _startTime;
        election.endTime = _endTime;
        election.isActive = false;
        election.resultsReleased = false;
        election.candidateCount = 0;
        
        emit ElectionCreated(electionId, _title, _startTime, _endTime);
    }
    
    /**
     * @dev Add a candidate to an election
     * @param _electionId ID of the election
     * @param _name Candidate name
     * @param _party Candidate party
     * @param _description Candidate description
     */
    function addCandidate(
        uint256 _electionId,
        string memory _name,
        string memory _party,
        string memory _description
    ) external onlyAdmin electionExists(_electionId) {
        require(!elections[_electionId].isActive, "Cannot add candidate to active election");
        
        Election storage election = elections[_electionId];
        uint256 candidateId = election.candidateCount++;
        
        Candidate storage candidate = election.candidates[candidateId];
        candidate.name = _name;
        candidate.party = _party;
        candidate.description = _description;
        candidate.voteCount = 0;
        
        emit CandidateAdded(_electionId, candidateId, _name, _party);
    }
    
    /**
     * @dev Start an election
     * @param _electionId ID of the election
     */
    function startElection(uint256 _electionId) external onlyAdmin electionExists(_electionId) {
        require(!elections[_electionId].isActive, "Election already active");
        require(block.timestamp <= elections[_electionId].startTime, "Start time has passed");
        require(elections[_electionId].candidateCount > 0, "No candidates added to election");
        
        elections[_electionId].isActive = true;
        
        emit ElectionStarted(_electionId, block.timestamp);
    }
    
    /**
     * @dev Cast a vote in an election
     * @param _electionId ID of the election
     * @param _candidateId ID of the candidate
     */
    function castVote(
        uint256 _electionId,
        uint256 _candidateId
    ) external electionExists(_electionId) electionActive(_electionId) hasNotVoted(_electionId) {
        Election storage election = elections[_electionId];
        require(_candidateId < election.candidateCount, "Invalid candidate ID");
        
        election.candidates[_candidateId].voteCount++;
        election.hasVoted[msg.sender] = true;
        
        emit VoteCast(_electionId, msg.sender, block.timestamp);
    }
    
    /**
     * @dev End an election
     * @param _electionId ID of the election
     */
    function endElection(uint256 _electionId) external onlyAdmin electionExists(_electionId) {
        require(elections[_electionId].isActive, "Election not active");
        require(block.timestamp >= elections[_electionId].endTime, "Election end time not reached");
        
        elections[_electionId].isActive = false;
        
        emit ElectionEnded(_electionId, block.timestamp);
    }
    
    /**
     * @dev Release election results
     * @param _electionId ID of the election
     */
    function releaseResults(uint256 _electionId) external onlyAdmin electionExists(_electionId) {
        require(!elections[_electionId].isActive, "Election still active");
        require(!elections[_electionId].resultsReleased, "Results already released");
        
        elections[_electionId].resultsReleased = true;
        
        emit ResultsReleased(_electionId, block.timestamp);
    }
    
    /**
     * @dev Get candidate details
     * @param _electionId ID of the election
     * @param _candidateId ID of the candidate
     * @return name Candidate name
     * @return party Candidate party
     * @return description Candidate description
     * @return voteCount Number of votes received
     */
    function getCandidate(
        uint256 _electionId,
        uint256 _candidateId
    ) external view electionExists(_electionId) returns (
        string memory name,
        string memory party,
        string memory description,
        uint256 voteCount
    ) {
        require(_candidateId < elections[_electionId].candidateCount, "Invalid candidate ID");
        
        Candidate storage candidate = elections[_electionId].candidates[_candidateId];
        
        return (
            candidate.name,
            candidate.party,
            candidate.description,
            elections[_electionId].resultsReleased ? candidate.voteCount : 0
        );
    }
    
    /**
     * @dev Get election details
     * @param _electionId ID of the election
     * @return title Election title
     * @return description Election description
     * @return startTime Start time of the election
     * @return endTime End time of the election
     * @return isActive Whether the election is active
     * @return resultsReleased Whether the results have been released
     * @return candidateCount Number of candidates
     */
    function getElectionDetails(
        uint256 _electionId
    ) external view electionExists(_electionId) returns (
        string memory title,
        string memory description,
        uint256 startTime,
        uint256 endTime,
        bool isActive,
        bool resultsReleased,
        uint256 candidateCount
    ) {
        Election storage election = elections[_electionId];
        
        return (
            election.title,
            election.description,
            election.startTime,
            election.endTime,
            election.isActive,
            election.resultsReleased,
            election.candidateCount
        );
    }
    
    /**
     * @dev Check if a voter has voted in an election
     * @param _electionId ID of the election
     * @param _voter Address of the voter
     * @return Whether the voter has voted
     */
    function hasVoted(uint256 _electionId, address _voter) external view electionExists(_electionId) returns (bool) {
        return elections[_electionId].hasVoted[_voter];
    }
}

