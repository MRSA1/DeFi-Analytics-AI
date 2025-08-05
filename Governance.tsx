import React, { useState } from 'react';
import { Vote, Calendar, Users, CheckCircle, XCircle, Clock } from 'lucide-react';

export const Governance: React.FC = () => {
  const [selectedProposal, setSelectedProposal] = useState(null);
  
  const proposals = [
    {
      id: 1,
      title: 'Increase Protocol Fee to 0.05%',
      description: 'Proposal to increase the protocol fee from 0.03% to 0.05% to fund development and marketing.',
      status: 'active',
      yesVotes: 145672,
      noVotes: 98234,
      totalVotes: 243906,
      endDate: '2024-01-15',
      proposer: '0x742d...4321'
    },
    {
      id: 2,
      title: 'Add Support for New Stablecoin',
      description: 'Integration of FRAX stablecoin into the protocol to increase liquidity options.',
      status: 'passed',
      yesVotes: 189543,
      noVotes: 67891,
      totalVotes: 257434,
      endDate: '2024-01-10',
      proposer: '0x123a...9876'
    },
    {
      id: 3,
      title: 'Upgrade Smart Contract Security',
      description: 'Implement additional security measures and audit findings from recent security review.',
      status: 'pending',
      yesVotes: 0,
      noVotes: 0,
      totalVotes: 0,
      endDate: '2024-01-20',
      proposer: '0x456b...5432'
    }
  ];
  
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'text-blue-400 bg-blue-600/20 border-blue-500/30';
      case 'passed':
        return 'text-green-400 bg-green-600/20 border-green-500/30';
      case 'failed':
        return 'text-red-400 bg-red-600/20 border-red-500/30';
      default:
        return 'text-yellow-400 bg-yellow-600/20 border-yellow-500/30';
    }
  };
  
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'passed':
        return <CheckCircle size={16} />;
      case 'failed':
        return <XCircle size={16} />;
      case 'active':
        return <Clock size={16} />;
      default:
        return <Calendar size={16} />;
    }
  };
  
  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
          <Vote className="text-white" size={24} />
        </div>
        <div>
          <h2 className="text-2xl font-bold">DAO Governance</h2>
          <p className="text-gray-400">Participate in protocol decision-making</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-400">Your Voting Power</span>
            <Vote className="text-purple-400" size={20} />
          </div>
          <p className="text-2xl font-bold">12,547</p>
          <p className="text-gray-400 text-sm">DAO Tokens</p>
        </div>
        
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-400">Active Proposals</span>
            <Calendar className="text-blue-400" size={20} />
          </div>
          <p className="text-2xl font-bold">3</p>
          <p className="text-gray-400 text-sm">Open for voting</p>
        </div>
        
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-400">Participation</span>
            <Users className="text-green-400" size={20} />
          </div>
          <p className="text-2xl font-bold">67%</p>
          <p className="text-gray-400 text-sm">Voter turnout</p>
        </div>
        
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-400">Your Votes</span>
            <CheckCircle className="text-yellow-400" size={20} />
          </div>
          <p className="text-2xl font-bold">8</p>
          <p className="text-gray-400 text-sm">Total cast</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
            <h3 className="text-lg font-semibold mb-4">Active Proposals</h3>
            
            <div className="space-y-4">
              {proposals.map((proposal) => (
                <div key={proposal.id} className="bg-gray-900 rounded-lg p-4 border border-gray-700">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h4 className="font-semibold">{proposal.title}</h4>
                        <span className={`px-2 py-1 rounded text-xs font-medium border ${getStatusColor(proposal.status)}`}>
                          <div className="flex items-center space-x-1">
                            {getStatusIcon(proposal.status)}
                            <span>{proposal.status.toUpperCase()}</span>
                          </div>
                        </span>
                      </div>
                      <p className="text-gray-400 text-sm mb-3">{proposal.description}</p>
                      <p className="text-gray-500 text-xs">
                        Proposed by {proposal.proposer} • Ends {proposal.endDate}
                      </p>
                    </div>
                  </div>
                  
                  {proposal.status === 'active' && (
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-gray-400">Voting Progress</span>
                        <span className="text-sm font-medium">
                          {proposal.totalVotes.toLocaleString()} votes
                        </span>
                      </div>
                      
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <CheckCircle size={16} className="text-green-400" />
                            <span className="text-sm">Yes</span>
                          </div>
                          <span className="text-sm font-medium text-green-400">
                            {((proposal.yesVotes / proposal.totalVotes) * 100).toFixed(1)}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div
                            className="bg-green-500 h-2 rounded-full"
                            style={{ width: `${(proposal.yesVotes / proposal.totalVotes) * 100}%` }}
                          />
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <XCircle size={16} className="text-red-400" />
                            <span className="text-sm">No</span>
                          </div>
                          <span className="text-sm font-medium text-red-400">
                            {((proposal.noVotes / proposal.totalVotes) * 100).toFixed(1)}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div
                            className="bg-red-500 h-2 rounded-full"
                            style={{ width: `${(proposal.noVotes / proposal.totalVotes) * 100}%` }}
                          />
                        </div>
                      </div>
                      
                      <div className="flex space-x-3">
                        <button className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg transition-colors">
                          Vote Yes
                        </button>
                        <button className="flex-1 bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg transition-colors">
                          Vote No
                        </button>
                      </div>
                    </div>
                  )}
                  
                  {proposal.status === 'passed' && (
                    <div className="bg-green-600/20 border border-green-500/30 rounded-lg p-3">
                      <p className="text-green-400 font-medium text-sm">✓ Proposal Passed</p>
                      <p className="text-gray-300 text-sm">
                        {((proposal.yesVotes / proposal.totalVotes) * 100).toFixed(1)}% voted in favor
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="space-y-6">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
            <h3 className="text-lg font-semibold mb-4">Create Proposal</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Title</label>
                <input
                  type="text"
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg px-3 py-2 text-white"
                  placeholder="Enter proposal title"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Description</label>
                <textarea
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg px-3 py-2 text-white h-24 resize-none"
                  placeholder="Describe your proposal..."
                />
              </div>
              
              <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg transition-colors">
                Submit Proposal
              </button>
            </div>
          </div>
          
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
            <h3 className="text-lg font-semibold mb-4">Delegation</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Delegate Address</label>
                <input
                  type="text"
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg px-3 py-2 text-white"
                  placeholder="0x..."
                />
              </div>
              
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors">
                Delegate Votes
              </button>
            </div>
          </div>
          
          <div className="bg-yellow-600/20 border border-yellow-500/30 rounded-xl p-4">
            <div className="flex items-center space-x-2 mb-2">
              <Clock className="text-yellow-400" size={16} />
              <h4 className="font-medium text-yellow-400">Voting Reminder</h4>
            </div>
            <p className="text-sm text-gray-300">
              The protocol fee proposal ends in 2 days. Make sure to cast your vote!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
