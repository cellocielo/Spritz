import React, { useState } from 'react';
import { MessageSquare, Send, Paperclip, X, Heart, Sparkles, ChevronRight, Plus } from 'lucide-react';
import { MOCK_FRIENDS, MOCK_CHAT_THREADS } from '../data/friendsData';
import { FRAGRANCE_DATABASE } from '../data/fragrances';
import BottleVisualizer from './BottleVisualizer';

export default function FriendsChatDrawer({ isOpen, onClose, onSelectDetail, initialFriendId = 'user-1' }) {
  const [activeFriendId, setActiveFriendId] = useState(initialFriendId);
  const [chatThreads, setChatThreads] = useState(MOCK_CHAT_THREADS);
  const [inputText, setInputText] = useState('');
  const [isAttachingFragrance, setIsAttachingFragrance] = useState(false);

  // Sync active friend if opened with a specific friend ID
  React.useEffect(() => {
    if (initialFriendId) {
      setActiveFriendId(initialFriendId);
    }
  }, [initialFriendId]);

  if (!isOpen) return null;

  const currentFriend = MOCK_FRIENDS.find(f => f.id === activeFriendId) || MOCK_FRIENDS[0];
  const messages = chatThreads[activeFriendId] || [];

  const handleSendMessage = (attachedFragrance = null) => {
    if (!inputText.trim() && !attachedFragrance) return;

    const newMessage = {
      id: Date.now().toString(),
      sender: "You",
      text: inputText.trim(),
      timestamp: "Just now",
      attachedFragrance
    };

    setChatThreads(prev => ({
      ...prev,
      [activeFriendId]: [...(prev[activeFriendId] || []), newMessage]
    }));

    setInputText('');
    setIsAttachingFragrance(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-stone-900/60 backdrop-blur-sm animate-fadeIn">
      
      <div className="w-full max-w-lg bg-white border border-stone-200 rounded-t-3xl sm:rounded-3xl max-h-[88vh] flex flex-col shadow-2xl relative text-stone-900 overflow-hidden">
        
        {/* Header */}
        <div className="p-4 bg-[#faf9f6] border-b border-stone-200 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <MessageSquare className="w-5 h-5 text-stone-900" />
            <div>
              <h2 className="font-serif font-bold text-lg text-stone-900 leading-tight">
                Collector Chat & Scent Sharing
              </h2>
              <p className="text-[10px] text-stone-500 font-bold uppercase tracking-wider">
                Discuss notes & send bottles
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white text-stone-600 hover:text-stone-900 transition-colors border border-stone-200"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Friend Selector Tabs */}
        <div className="flex items-center gap-2 p-3 bg-stone-50 border-b border-stone-200 overflow-x-auto shrink-0 no-scrollbar">
          {MOCK_FRIENDS.map((friend) => {
            const isSelected = friend.id === activeFriendId;
            return (
              <button
                key={friend.id}
                onClick={() => {
                  setActiveFriendId(friend.id);
                  setIsAttachingFragrance(false);
                }}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-2xl border text-xs font-bold shrink-0 transition-all ${
                  isSelected
                    ? 'bg-stone-900 text-white border-stone-900 shadow-2xs'
                    : 'bg-white text-stone-700 border-stone-200 hover:border-stone-300'
                }`}
              >
                <img src={friend.avatar} alt={friend.name} className="w-5 h-5 rounded-full object-cover" />
                <span>{friend.name.split(' ')[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Chat Messages Body */}
        <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-[#faf9f6]">
          {messages.map((msg) => {
            const isMe = msg.sender === 'You';
            return (
              <div
                key={msg.id}
                className={`flex flex-col ${isMe ? 'items-end' : 'items-start'} space-y-1`}
              >
                <div className="flex items-center gap-1.5 text-[10px] text-stone-500 font-semibold px-1">
                  <span>{msg.sender}</span>
                  <span>•</span>
                  <span>{msg.timestamp}</span>
                </div>

                <div className={`p-3.5 rounded-2xl max-w-[85%] text-xs space-y-2 shadow-2xs ${
                  isMe
                    ? 'bg-stone-900 text-white rounded-br-none font-medium'
                    : 'bg-white text-stone-900 border border-stone-200 rounded-bl-none font-medium'
                }`}>
                  {msg.text && <p className="leading-relaxed">{msg.text}</p>}

                  {/* Attached Fragrance Card in Chat */}
                  {msg.attachedFragrance && (
                    <div 
                      onClick={() => {
                        const fullMatch = FRAGRANCE_DATABASE.find(f => f.id === msg.attachedFragrance.id) || msg.attachedFragrance;
                        onSelectDetail(fullMatch);
                      }}
                      className={`p-2.5 rounded-xl border flex items-center justify-between gap-3 cursor-pointer transition-transform hover:scale-102 ${
                        isMe 
                          ? 'bg-stone-800 border-stone-700 text-white' 
                          : 'bg-[#faf9f6] border-stone-300 text-stone-900'
                      }`}
                    >
                      <div className="min-w-0 space-y-0.5">
                        <span className="text-[9px] uppercase tracking-wider font-bold opacity-80 block">
                          🎁 Shared Fragrance
                        </span>
                        <h4 className="font-serif font-bold text-sm truncate">{msg.attachedFragrance.name}</h4>
                        <p className="text-[10px] opacity-80">{msg.attachedFragrance.brand} • {msg.attachedFragrance.estimatedPrice}</p>
                      </div>
                      <BottleVisualizer fragrance={msg.attachedFragrance} size="sm" />
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Fragrance Attachment Picker Drawer */}
        {isAttachingFragrance && (
          <div className="p-3 bg-white border-t border-stone-200 space-y-2 shrink-0 animate-fadeIn">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-stone-900">Select Fragrance to Share in Chat:</span>
              <button onClick={() => setIsAttachingFragrance(false)} className="text-stone-400 text-xs font-bold">Cancel</button>
            </div>
            <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
              {FRAGRANCE_DATABASE.slice(0, 8).map(frag => (
                <div
                  key={frag.id}
                  onClick={() => handleSendMessage(frag)}
                  className="p-2 rounded-2xl bg-[#faf9f6] border border-stone-200 shrink-0 w-32 cursor-pointer hover:border-stone-900 text-center space-y-1"
                >
                  <p className="font-serif font-bold text-xs text-stone-900 truncate">{frag.name}</p>
                  <p className="text-[9px] text-stone-500 uppercase">{frag.brand}</p>
                  <span className="text-[10px] font-bold text-amber-900 bg-amber-100 px-2 py-0.5 rounded-full inline-block">
                    Send Bottle
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Input Bar */}
        <div className="p-3 bg-white border-t border-stone-200 shrink-0 flex items-center gap-2">
          <button
            onClick={() => setIsAttachingFragrance(!isAttachingFragrance)}
            className={`p-2.5 rounded-xl border transition-colors ${
              isAttachingFragrance ? 'bg-amber-100 border-amber-300 text-amber-900' : 'bg-[#faf9f6] border-stone-200 text-stone-600 hover:text-stone-900'
            }`}
            title="Attach & Send Fragrance Bottle"
          >
            <Paperclip className="w-4 h-4" />
          </button>

          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
            placeholder={`Message ${currentFriend.name.split(' ')[0]}...`}
            className="flex-1 bg-[#faf9f6] text-stone-900 text-xs px-3.5 py-2.5 rounded-xl border border-stone-200 focus:outline-none focus:border-stone-900 font-medium"
          />

          <button
            onClick={() => handleSendMessage()}
            className="p-2.5 rounded-xl bg-stone-900 text-white hover:bg-stone-800 transition-colors shadow-2xs"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
}
