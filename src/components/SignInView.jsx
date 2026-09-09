import React, { useState } from 'react';
import { ArrowRight, ShieldCheck, UserCheck, Lock, Mail } from 'lucide-react';
import SpritzLogo from './SpritzLogo';

export default function SignInView({ onSignIn, defaultTag = '@owen_scents' }) {
  const [email, setEmail] = useState('owen.collector@spritz.io');
  const [password, setPassword] = useState('••••••••••••');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e?.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      onSignIn({
        tag: defaultTag,
        name: 'Owen Kim',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80'
      });
      setIsLoading(false);
    }, 400);
  };

  const handleDemoSignIn = () => {
    setIsLoading(true);
    setTimeout(() => {
      onSignIn({
        tag: defaultTag,
        name: 'Owen Kim',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80'
      });
      setIsLoading(false);
    }, 250);
  };

  return (
    <div 
      id="sign-in-screen"
      className="min-h-[80vh] flex flex-col justify-center items-center px-4 py-8 animate-fadeIn"
    >
      <div className="w-full max-w-sm bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/90 shadow-[0_12px_40px_rgba(0,0,0,0.06)] relative overflow-hidden">
        
        {/* Subtle decorative top glow */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-400 via-stone-800 to-amber-600" />

        {/* Brand Lockup - Clean S-bottle icon only (no text) */}
        <div className="text-center mb-6 pt-1 flex flex-col items-center justify-center">
          <SpritzLogo size="lg" showWordmark={false} className="mb-2" />
          <p className="text-xs text-stone-600 mt-1 max-w-xs mx-auto leading-relaxed">
            Sign in to access your curated scent shelf, olfactory map, and collection.
          </p>
        </div>

        {/* Sign In Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* Email Input */}
          <div className="space-y-1">
            <label className="text-xs font-semibold text-stone-700 block">
              Collector Email
            </label>
            <div className="flex items-center rounded-xl border border-stone-300 bg-stone-50/50 px-3 py-2.5 focus-within:ring-2 focus-within:ring-stone-900 focus-within:border-stone-900 transition-all">
              <Mail className="w-4 h-4 text-stone-400 mr-2 shrink-0" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
                className="w-full bg-transparent text-xs sm:text-sm font-medium text-stone-900 outline-none placeholder:text-stone-400"
              />
            </div>
          </div>

          {/* Password Input */}
          <div className="space-y-1">
            <div className="flex items-center justify-between">
              <label className="text-xs font-semibold text-stone-700 block">
                Password
              </label>
              <span className="text-[10px] text-stone-400 font-mono">Demo: any value</span>
            </div>
            <div className="flex items-center rounded-xl border border-stone-300 bg-stone-50/50 px-3 py-2.5 focus-within:ring-2 focus-within:ring-stone-900 focus-within:border-stone-900 transition-all">
              <Lock className="w-4 h-4 text-stone-400 mr-2 shrink-0" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                className="w-full bg-transparent text-xs sm:text-sm font-medium text-stone-900 outline-none placeholder:text-stone-400"
              />
            </div>
          </div>

          {/* Primary Sign In Button */}
          <button
            id="primary-sign-in-button"
            type="submit"
            disabled={isLoading}
            className="w-full py-3 px-4 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs tracking-wider uppercase transition-all shadow-md active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer mt-2 disabled:opacity-75"
          >
            {isLoading ? (
              <span className="flex items-center gap-2">
                <span className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Signing In...
              </span>
            ) : (
              <>
                <span>Sign In</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </>
            )}
          </button>
        </form>

        {/* Divider */}
        <div className="relative my-4">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-stone-200" />
          </div>
          <div className="relative flex justify-center text-[10px] uppercase font-bold tracking-widest text-stone-400">
            <span className="bg-white px-2">Instant Demo Access</span>
          </div>
        </div>

        {/* Instant Demo Account Button */}
        <button
          id="demo-account-sign-in-button"
          type="button"
          onClick={handleDemoSignIn}
          disabled={isLoading}
          className="w-full py-2.5 px-4 rounded-xl border border-amber-300/80 bg-gradient-to-r from-amber-50 to-orange-50 hover:from-amber-100 hover:to-orange-100 text-stone-800 font-semibold text-xs transition-all flex items-center justify-between group shadow-2xs cursor-pointer active:scale-[0.99]"
        >
          <div className="flex items-center gap-2 text-left">
            <div className="w-7 h-7 rounded-full bg-amber-400/30 flex items-center justify-center text-amber-800">
              <UserCheck className="w-4 h-4" />
            </div>
            <div>
              <div className="text-stone-900 font-bold text-xs">Sign in as Demo Collector</div>
              <div className="text-[10px] text-stone-500 font-mono">{defaultTag} • Full Shelf</div>
            </div>
          </div>
          <ArrowRight className="w-3.5 h-3.5 text-stone-500 group-hover:text-stone-900 group-hover:translate-x-0.5 transition-all" />
        </button>

        {/* Security badge */}
        <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-center gap-1 text-[10px] text-stone-400">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
          <span>Demo Environment • Ready to explore immediately</span>
        </div>

      </div>
    </div>
  );
}
