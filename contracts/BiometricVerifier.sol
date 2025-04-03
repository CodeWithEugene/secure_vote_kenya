// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

/**
 * @title BiometricVerifier
 * @dev Contract for secure biometric verification in the voting system
 */
contract BiometricVerifier {
    // State variables
    address public admin;
    mapping(bytes32 => bytes32) private biometricHashes; // voterId => biometricHash
    
    // Events
    event BiometricRegistered(bytes32 indexed voterId);
    event BiometricVerified(bytes32 indexed voterId, bool success);
    
    // Modifiers
    modifier onlyAdmin() {
        require(msg.sender == admin, "Only admin can perform this action");
        _;
    }
    
    // Constructor
    constructor() {
        admin = msg.sender;
    }
    
    /**
     * @dev Register a voter's biometric data
     * @param _voterId National ID hash
     * @param _biometricHash Hash of voter's biometric data
     */
    function registerBiometric(bytes32 _voterId, bytes32 _biometricHash) external onlyAdmin {
        require(biometricHashes[_voterId] == bytes32(0), "Biometric data already registered");
        
        biometricHashes[_voterId] = _biometricHash;
        
        emit BiometricRegistered(_voterId);
    }
    
    /**
     * @dev Verify a voter's biometric data
     * @param _voterId National ID hash
     * @param _biometricHash Hash of voter's biometric data for verification
     * @return Whether the verification was successful
     */
    function verifyBiometric(bytes32 _voterId, bytes32 _biometricHash) external returns (bool) {
        bool success = biometricHashes[_voterId] == _biometricHash;
        
        emit BiometricVerified(_voterId, success);
        
        return success;
    }
    
    /**
     * @dev Check if a voter has registered biometric data
     * @param _voterId National ID hash
     * @return Whether the voter has registered biometric data
     */
    function hasBiometric(bytes32 _voterId) external view returns (bool) {
        return biometricHashes[_voterId] != bytes32(0);
    }
}

