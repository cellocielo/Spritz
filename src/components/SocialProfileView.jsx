import React, { useState } from 'react';
import { Users, MessageSquare, Sparkles, ChevronRight, X } from 'lucide-react';
import { MOCK_FRIENDS, MOCK_ACTIVITY_FEED } from '../data/friendsData';

export default function SocialProfileView({ ownedFragrances = [], onSelectDetail, onOpenChat }) {
  const [activeSubTab, setActiveSubTab] = useState('feed'); // Default: Activity Feed
  const [selectedFriend, setSelectedFriend] = useState(null);

  return (
    <div className="space-y-6 pb-12 animate-fadeIn text-stone-900">
      
      {/* Clean Minimal Header */}
      <div className="bg-white rounded-3xl p-5 border border-stone-200 shadow-xs flex items-center justify-between">
        <h2 className="text-2xl font-serif font-bold text-stone-900 flex items-center gap-2">
          <Users className="w-5 h-5 text-stone-900" />
          <span>Friends & Community</span>
        </h2>
        
        {/* Toggle between Activity Feed and Friends List */}
        <div className="flex bg-stone-100 p-1 rounded-2xl border border-stone-200 text-xs font-bold">
          <button
            onClick={() => {
              setActiveSubTab('feed');
              setSelectedFriend(null);
            }}
            className={`px-3 py-1.5 rounded-xl transition-all ${
              activeSubTab === 'feed' ? 'bg-stone-900 text-white shadow-2xs' : 'text-stone-600'
            }`}
          >
            Activity Feed
          </button>
          <button
            onClick={() => setActiveSubTab('friends')}
            className={`px-3 py-1.5 rounded-xl transition-all ${
              activeSubTab === 'friends' ? 'bg-stone-900 text-white shadow-2xs' : 'text-stone-600'
            }`}
          >
            Friends List ({MOCK_FRIENDS.length})
          </button>
        </div>
      </div>

      {/* VIEW 1: ACTIVITY FEED (PRIMARY DEFAULT VIEW) */}
      {activeSubTab === 'feed' && !selectedFriend && (
        <div className="space-y-3 animate-fadeIn">
          {MOCK_ACTIVITY_FEED.map((act) => {
            const friendObj = MOCK_FRIENDS.find(f => f.name === act.friendName) || MOCK_FRIENDS[0];

            return (
              <div
                key={act.id}
                className="bg-white rounded-3xl p-4 border border-stone-200 space-y-3 shadow-2xs"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={act.avatar}
                      alt={act.friendName}
                      className="w-10 h-10 rounded-full object-cover border border-stone-200"
                    />
                    <div>
                      <h4 className="font-bold text-stone-900 text-xs">{act.friendName}</h4>
                      <p className="text-[10px] text-stone-500 font-semibold">{act.action} • {act.timeAgo}</p>
                    </div>
                  </div>

                  {/* Direct Message Icon Next to Friend Item */}
                  <button
                    onClick={() => onOpenChat(friendObj.id)}
                    className="p-2 rounded-xl bg-[#faf9f6] border border-stone-200 text-stone-700 hover:text-stone-900 hover:border-stone-400 transition-all flex items-center gap-1 font-bold text-[11px]"
                    title={`Message ${act.friendName.split(' ')[0]}`}
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-amber-600" />
                    <span>Message</span>
                  </button>
                </div>

                <div className="p-3 rounded-2xl bg-[#faf9f6] border border-stone-200 flex items-center justify-between gap-3">
                  <div className="space-y-0.5 min-w-0">
                    <h5 className="font-serif font-bold text-sm text-stone-900 truncate">{act.fragranceName}</h5>
                    <p className="text-[10px] text-stone-500 uppercase">{act.brand}</p>
                    {act.review && (
                      <p className="text-xs text-stone-700 italic font-serif mt-1">"{act.review}"</p>
                    )}
                  </div>

                  {act.rating && (
                    <div className="px-2.5 py-1 rounded-xl bg-amber-100 text-amber-950 font-bold text-xs shrink-0 border border-amber-300">
                      ★ {act.rating}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* VIEW 2: FRIENDS LIST */}
      {activeSubTab === 'friends' && !selectedFriend && (
        <div className="space-y-3 animate-fadeIn">
          {MOCK_FRIENDS.map((friend) => (
            <div
              key={friend.id}
              className="bg-white rounded-3xl p-4 border border-stone-200 flex items-center justify-between shadow-2xs hover:border-stone-400 transition-all"
            >
              <div 
                onClick={() => setSelectedFriend(friend)}
                className="flex items-center gap-3 flex-1 cursor-pointer min-w-0"
              >
                <img
                  src={friend.avatar}
                  alt={friend.name}
                  className="w-12 h-12 rounded-full object-cover border border-stone-200 shrink-0"
                />
                <div className="space-y-0.5 min-w-0 pr-2">
                  <h4 className="font-bold text-stone-900 text-sm truncate">{friend.name}</h4>
                  <p className="text-xs text-stone-500 font-semibold truncate">{friend.handle} • {friend.location}</p>
                  <p className="text-[11px] text-stone-600 font-medium truncate">Signature: {friend.topSignature}</p>
                </div>
              </div>

              {/* Direct Message Icon Next to Friend Item */}
              <button
                onClick={() => onOpenChat(friend.id)}
                className="p-2.5 rounded-2xl bg-[#faf9f6] border border-stone-200 text-stone-800 hover:bg-stone-900 hover:text-white transition-all flex items-center gap-1.5 font-bold text-xs shrink-0 shadow-2xs"
                title={`Chat with ${friend.name.split(' ')[0]}`}
              >
                <MessageSquare className="w-4 h-4 text-amber-600" />
                <span>Message</span>
              </button>
            </div>
          ))}
        </div>
      )}

      {/* FRIEND PROFILE DETAIL MODAL */}
      {selectedFriend && (
        <div className="bg-white rounded-3xl p-5 border border-stone-200 space-y-4 shadow-md animate-fadeIn">
          <div className="flex items-center justify-between border-b border-stone-100 pb-3">
            <div className="flex items-center gap-3">
              <img src={selectedFriend.avatar} alt={selectedFriend.name} className="w-12 h-12 rounded-full object-cover border border-stone-200" />
              <div>
                <h3 className="font-serif font-bold text-lg text-stone-900">{selectedFriend.name}</h3>
                <p className="text-xs text-stone-500 font-semibold">{selectedFriend.handle}</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => onOpenChat(selectedFriend.id)}
                className="px-3.5 py-2 rounded-xl bg-stone-900 text-white font-bold text-xs flex items-center gap-1.5"
              >
                <MessageSquare className="w-4 h-4 text-amber-400" />
                <span>Message</span>
              </button>
              <button
                onClick={() => setSelectedFriend(null)}
                className="px-3.5 py-2 rounded-xl bg-stone-100 text-stone-700 font-bold text-xs"
              >
                Back
              </button>
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="font-serif font-bold text-sm text-stone-900">Ranked Shelf ({selectedFriend.rankedShelf.length})</h4>
            <div className="space-y-2">
              {selectedFriend.rankedShelf.map((item) => (
                <div key={item.name} className="p-3 rounded-2xl bg-[#faf9f6] border border-stone-200 flex items-center justify-between gap-3">
                  <div className="space-y-0.5">
                    <span className="text-[10px] font-bold text-stone-500 uppercase">#{item.rank} • {item.brand}</span>
                    <h5 className="font-serif font-bold text-xs text-stone-900">{item.name}</h5>
                    <p className="text-[11px] text-stone-600 italic">"{item.review}"</p>
                  </div>
                  <span className="font-mono font-bold text-xs bg-white px-2 py-1 rounded-lg border border-stone-200">★ {item.rating}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
