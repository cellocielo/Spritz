import React, { useState, useRef } from 'react';
import { X, Smartphone, Check, User, Camera, LogOut, Upload } from 'lucide-react';

const AVATAR_PRESETS = [
  {
    id: 'avatar-1',
    label: 'Sophia',
    url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80'
  },
  {
    id: 'avatar-2',
    label: 'Alex',
    url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80'
  },
  {
    id: 'avatar-3',
    label: 'Elena',
    url: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80'
  },
  {
    id: 'avatar-4',
    label: 'Julian',
    url: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80'
  }
];

export default function SettingsModal({
  isOpen,
  onClose,
  userTag,
  setUserTag,
  userAvatar,
  setUserAvatar,
  isMobileFrame,
  onToggleMobileFrame,
  onLogout
}) {
  const [tagInput, setTagInput] = useState(userTag.replace(/^@/, ''));
  const [displayName, setDisplayName] = useState('Owen Kim');
  const [savedSuccess, setSavedSuccess] = useState(false);
  const fileInputRef = useRef(null);

  if (!isOpen) return null;

  const handleSave = (e) => {
    e?.preventDefault();
    const cleanTag = tagInput.trim().replace(/^@/, '') || 'curator';
    setUserTag(`@${cleanTag}`);
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 400);
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          setUserAvatar(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div 
      id="settings-modal-backdrop"
      className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4 animate-fadeIn"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div 
        id="settings-modal-dialog"
        className="bg-[#faf9f6] w-full max-w-md rounded-3xl border border-stone-200 shadow-2xl overflow-hidden flex flex-col max-h-[90vh] text-stone-900 animate-scaleUp"
      >
        {/* Header */}
        <div className="px-5 py-4 bg-white border-b border-stone-200 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h3 className="font-serif font-bold text-lg text-stone-900">Settings & Profile</h3>
          </div>
          <button
            id="close-settings-button"
            onClick={onClose}
            className="w-8 h-8 rounded-full flex items-center justify-center text-stone-500 hover:text-stone-900 hover:bg-stone-100 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <form onSubmit={handleSave} className="flex-1 overflow-y-auto p-5 space-y-5">
          
          {/* Section 1: User Tag & Identity */}
          <div className="bg-white rounded-2xl p-4 border border-stone-200 space-y-4 shadow-2xs">
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500 flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-stone-700" />
              <span>Collector Tag & Profile</span>
            </h4>

            {/* Profile Picture with Camera Action */}
            <div className="space-y-2.5">
              <div className="flex items-center justify-between">
                <label className="text-xs font-semibold text-stone-700 block">Profile Picture</label>
                <span className="text-[11px] text-stone-400">Choose preset or use camera</span>
              </div>
              
              {/* Hidden file/camera input */}
              <input 
                ref={fileInputRef}
                type="file"
                accept="image/*"
                capture="user"
                onChange={handlePhotoUpload}
                className="hidden"
                id="camera-profile-upload-input"
              />

              <div className="flex items-center gap-3">
                {/* Active Avatar with Camera Badge */}
                <div 
                  onClick={() => fileInputRef.current?.click()}
                  className="relative group cursor-pointer shrink-0"
                  title="Click to take a photo or upload an image"
                >
                  <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full p-0.5 bg-gradient-to-tr from-amber-400 via-stone-300 to-stone-400 ring-2 ring-stone-200 shadow-xs group-hover:ring-stone-900 transition-all overflow-hidden">
                    <img
                      src={userAvatar}
                      alt="Current Avatar"
                      className="w-full h-full rounded-full object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  {/* Camera overlay hover */}
                  <div className="absolute inset-0 bg-black/40 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Camera className="w-5 h-5 text-white" />
                  </div>
                  {/* Camera Icon Pill Badge */}
                  <div className="absolute -bottom-0.5 -right-0.5 w-6 h-6 rounded-full bg-stone-900 text-white flex items-center justify-center shadow-md ring-2 ring-white group-hover:bg-amber-600 transition-colors">
                    <Camera className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Camera / Upload Button */}
                <button
                  id="camera-photo-button"
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-xl border border-stone-300 bg-stone-50 hover:bg-stone-100 text-stone-800 text-xs font-semibold shadow-2xs hover:border-stone-400 transition-all active:scale-95 cursor-pointer shrink-0"
                  title="Take or upload photo"
                >
                  <Camera className="w-4 h-4 text-stone-700" />
                  <span>Take / Upload Photo</span>
                </button>
              </div>

              {/* Avatar Presets Selection */}
              <div className="pt-1">
                <span className="text-[11px] text-stone-500 block mb-1.5">Or choose an avatar preset:</span>
                <div className="flex items-center gap-2 overflow-x-auto py-1">
                  {AVATAR_PRESETS.map((p) => {
                    const isSelected = userAvatar === p.url;
                    return (
                      <button
                        key={p.id}
                        type="button"
                        onClick={() => setUserAvatar(p.url)}
                        className={`relative w-9 h-9 rounded-full overflow-hidden transition-all shrink-0 cursor-pointer ${
                          isSelected ? 'ring-2 ring-stone-900 scale-105' : 'opacity-70 hover:opacity-100 hover:scale-100'
                        }`}
                        title={p.label}
                      >
                        <img src={p.url} alt={p.label} className="w-full h-full object-cover" />
                        {isSelected && (
                          <span className="absolute inset-0 bg-stone-900/35 flex items-center justify-center text-white">
                            <Check className="w-3.5 h-3.5 stroke-[3]" />
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Tag Input */}
            <div className="space-y-1.5">
              <label htmlFor="user-tag-input" className="text-xs font-semibold text-stone-700">
                User Tag (Top-Left Corner)
              </label>
              <div className="flex items-center rounded-xl border border-stone-300 bg-stone-50/50 px-3 py-2 focus-within:ring-2 focus-within:ring-stone-900 focus-within:border-stone-900 transition-all">
                <span className="text-amber-700 font-mono font-bold text-sm mr-1">@</span>
                <input
                  id="user-tag-input"
                  type="text"
                  value={tagInput}
                  onChange={(e) => setTagInput(e.target.value)}
                  placeholder="your_tag"
                  className="w-full bg-transparent text-sm font-medium text-stone-900 outline-none placeholder:text-stone-400"
                  maxLength={24}
                />
              </div>
              <p className="text-[10px] text-stone-500">
                This appears in the top-left corner of the header.
              </p>
            </div>

            {/* Display Name */}
            <div className="space-y-1.5">
              <label htmlFor="display-name-input" className="text-xs font-semibold text-stone-700">
                Display Name
              </label>
              <input
                id="display-name-input"
                type="text"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                className="w-full rounded-xl border border-stone-300 bg-stone-50/50 px-3 py-2 text-sm font-medium text-stone-900 outline-none focus:ring-2 focus:ring-stone-900 focus:border-stone-900 transition-all"
              />
            </div>
          </div>

          {/* Section 2: Display & Frame Preferences */}
          <div className="bg-white rounded-2xl p-4 border border-stone-200 space-y-3 shadow-2xs">
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500 flex items-center gap-1.5">
              <Smartphone className="w-3.5 h-3.5 text-stone-700" />
              <span>Display & Frame</span>
            </h4>

            <div className="flex items-center justify-between py-1">
              <div>
                <span className="text-xs font-semibold text-stone-900 block">Smartphone Frame Mockup</span>
                <span className="text-[11px] text-stone-500">Toggle mobile device shell preview</span>
              </div>
              <button
                id="toggle-mobile-frame-button"
                type="button"
                onClick={onToggleMobileFrame}
                className={`w-11 h-6 flex items-center rounded-full p-1 transition-colors ${
                  isMobileFrame ? 'bg-stone-900' : 'bg-stone-300'
                }`}
              >
                <div
                  className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${
                    isMobileFrame ? 'translate-x-5' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>
          </div>

          {/* Section 3: Account & Logout */}
          <div className="bg-white rounded-2xl p-4 border border-stone-200 space-y-3 shadow-2xs">
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500 flex items-center gap-1.5">
              <LogOut className="w-3.5 h-3.5 text-stone-700" />
              <span>Account & Session</span>
            </h4>

            <div className="flex items-center justify-between py-1">
              <div>
                <span className="text-xs font-semibold text-stone-900 block">Active Collector Account</span>
                <span className="text-[11px] text-stone-500 font-mono">{userTag}</span>
              </div>
              <button
                id="logout-button"
                type="button"
                onClick={() => {
                  onClose();
                  onLogout?.();
                }}
                className="px-3.5 py-1.5 rounded-xl border border-rose-200 bg-rose-50/80 hover:bg-rose-100 text-rose-700 text-xs font-semibold transition-all flex items-center gap-1.5 shadow-2xs active:scale-95 cursor-pointer"
                title="Log out and return to sign in screen"
              >
                <LogOut className="w-3.5 h-3.5 text-rose-600" />
                <span>Log Out</span>
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-2xl bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs tracking-wide shadow-md transition-all active:scale-[0.99] flex items-center justify-center gap-1.5 cursor-pointer"
          >
            {savedSuccess ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span>Saved!</span>
              </>
            ) : (
              <span>Save & Close</span>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
