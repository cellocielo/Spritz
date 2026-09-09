import React, { useState } from 'react';
import MobileFrame from './components/MobileFrame';
import TopBar from './components/TopBar';
import BottomNavbar from './components/BottomNavbar';
import SettingsModal from './components/SettingsModal';
import SignInView from './components/SignInView';
import ProgressBar from './components/ProgressBar';
import MyCollectionView from './components/MyCollectionView';
import BrowseFeed from './components/BrowseFeed';
import SocialProfileView from './components/SocialProfileView';
import VisualScentMap from './components/VisualScentMap';
import FriendsChatDrawer from './components/FriendsChatDrawer';
import StepClimate from './components/StepClimate';
import StepOccasion from './components/StepOccasion';
import StepBudget from './components/StepBudget';
import StepNotes from './components/StepNotes';
import StepSillage from './components/StepSillage';
import ResultsView from './components/ResultsView';
import FragranceDetailModal from './components/FragranceDetailModal';
import LayeringGuideModal from './components/LayeringGuideModal';
import WishlistDrawer from './components/WishlistDrawer';

export default function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 5;

  // View Navigation: 'collection', 'map', 'add', 'friends', 'quiz', 'results'
  const [viewMode, setViewMode] = useState('collection');
  const [isGenerating, setIsGenerating] = useState(false);
  const [isMobileFrame, setIsMobileFrame] = useState(true);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [customSubmissions, setCustomSubmissions] = useState([]);

  // User Collection & Questionnaire State
  const [ownedFragrances, setOwnedFragrances] = useState(['Bleu de Chanel EDP', 'Santal 33']);
  const [climate, setClimate] = useState('all-year');
  const [occasion, setOccasion] = useState('daily');
  const [budget, setBudget] = useState('150-300');
  
  // Note / Vibe Preferences
  const [prefMode, setPrefMode] = useState('vibe');
  const [selectedVibeSetting, setSelectedVibeSetting] = useState('cozy-jazz-lounge');
  const [rankedNotes, setRankedNotes] = useState(['woods', 'sweet-gourmand']);

  const [sillage, setSillage] = useState('pleasant-trail');

  // Modals & Wishlist
  const [wishlist, setWishlist] = useState([]);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [selectedDetailFragrance, setSelectedDetailFragrance] = useState(null);
  const [selectedLayeringFragrance, setSelectedLayeringFragrance] = useState(null);

  // User Profile & Settings State
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [userTag, setUserTag] = useState('@owen_scents');
  const [userAvatar, setUserAvatar] = useState('https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80');
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const stepTitles = [
    'Climate & Location',
    'Purpose & Occasion',
    'Budget Range',
    'Scent & Vibe Preference',
    'Presence & Trail'
  ];

  const handleNextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    } else {
      setViewMode('collection');
    }
  };

  const handleSubmitQuestionnaire = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      setViewMode('results');
    }, 1200);
  };

  const handleReset = () => {
    setViewMode('quiz');
    setCurrentStep(1);
  };

  const handleGoHome = () => {
    setViewMode('collection');
    setCurrentStep(1);
  };

  const handleSubmitNewFragrance = (newFrag) => {
    if (!newFrag || !newFrag.name) return;
    
    // Duplicate prevention: check if fragrance name or ID already exists in custom submissions
    setCustomSubmissions(prev => {
      const alreadyInSubmissions = prev.some(
        f => f.id === newFrag.id || f.name.toLowerCase() === newFrag.name.toLowerCase()
      );
      if (alreadyInSubmissions) return prev;
      return [newFrag, ...prev];
    });

    // Duplicate prevention: check if fragrance name already exists in owned shelf
    setOwnedFragrances(prev => {
      const alreadyOwned = prev.some(
        n => n.toLowerCase() === newFrag.name.toLowerCase() || (newFrag.id && n.toLowerCase() === newFrag.id.toLowerCase())
      );
      if (alreadyOwned) return prev;
      return [...prev, newFrag.name];
    });
  };

  const handleToggleWishlist = (fragrance) => {
    if (!fragrance || !fragrance.id) return;
    const list = wishlist || [];
    if (list.some(w => w.id === fragrance.id)) {
      setWishlist(list.filter(w => w.id !== fragrance.id));
    } else {
      setWishlist([...list, fragrance]);
    }
  };

  const handleToggleOwned = (fragrance) => {
    if (!fragrance || !fragrance.name) return;
    const name = fragrance.name;
    const id = fragrance.id;
    if (ownedFragrances.some(n => n.toLowerCase() === name.toLowerCase() || (id && n.toLowerCase() === id.toLowerCase()))) {
      setOwnedFragrances(ownedFragrances.filter(n => n.toLowerCase() !== name.toLowerCase() && (!id || n.toLowerCase() !== id.toLowerCase())));
    } else {
      setOwnedFragrances([...ownedFragrances, name]);
    }
  };

  const preferencesObj = {
    ownedFragrances,
    climate,
    occasion,
    budget,
    prefMode,
    selectedVibeSetting,
    rankedNotes,
    sillage
  };

  if (!isAuthenticated) {
    return (
      <MobileFrame isMobileFrame={isMobileFrame}>
        <SignInView
          defaultTag={userTag}
          onSignIn={(userData) => {
            if (userData?.tag) setUserTag(userData.tag);
            if (userData?.avatar) setUserAvatar(userData.avatar);
            setIsAuthenticated(true);
            setViewMode('collection');
          }}
        />
      </MobileFrame>
    );
  }

  return (
    <MobileFrame isMobileFrame={isMobileFrame}>
      
      {/* Top Bar: User Tag (Top-Left), Profile Picture (Center), Settings Icon (Right) */}
      <TopBar
        userTag={userTag}
        userAvatar={userAvatar}
        onProfileClick={() => setViewMode('collection')}
        onOpenSettings={() => setIsSettingsOpen(true)}
      />

      {/* Main Container */}
      <main className="flex-1 p-4 sm:p-6 pb-40 sm:pb-48 max-w-xl mx-auto w-full">
        
        {/* VIEW 1: MY SHELF */}
        {(viewMode === 'collection' || viewMode === 'home') && (
          <MyCollectionView
            ownedFragranceNames={ownedFragrances}
            wishlist={wishlist}
            onToggleWishlist={handleToggleWishlist}
            onSelectDetail={(fragrance) => setSelectedDetailFragrance(fragrance)}
            onGoToAdd={() => setViewMode('add')}
            onOpenQuiz={() => {
              setCurrentStep(1);
              setViewMode('quiz');
            }}
          />
        )}

        {/* VIEW 2: VISUAL MAP & GAP ANALYSIS */}
        {viewMode === 'map' && (
          <VisualScentMap
            ownedFragranceNames={ownedFragrances}
            onSelectDetail={(fragrance) => setSelectedDetailFragrance(fragrance)}
          />
        )}

        {/* VIEW 3: ADD FRAGRANCES & CATALOG */}
        {(viewMode === 'add' || viewMode === 'browse') && (
          <BrowseFeed
            wishlist={wishlist}
            ownedFragrances={ownedFragrances}
            onToggleWishlist={handleToggleWishlist}
            onToggleOwned={handleToggleOwned}
            onSelectDetail={(fragrance) => setSelectedDetailFragrance(fragrance)}
            onOpenLayeringModal={(fragrance) => setSelectedLayeringFragrance(fragrance)}
            customSubmissions={customSubmissions}
            onSubmitNewFragrance={handleSubmitNewFragrance}
          />
        )}

        {/* VIEW 4: FRIENDS & COMMUNITY */}
        {(viewMode === 'friends' || viewMode === 'social') && (
          <SocialProfileView
            ownedFragrances={ownedFragrances}
            onSelectDetail={(fragrance) => setSelectedDetailFragrance(fragrance)}
            onOpenChat={() => setIsChatOpen(true)}
          />
        )}

        {/* VIEW 4: QUESTIONNAIRE WIZARD */}
        {viewMode === 'quiz' && (
          <>
            <ProgressBar
              currentStep={currentStep}
              totalSteps={totalSteps}
              stepTitles={stepTitles}
            />

            <div className="mt-4 transition-all duration-300">
              {currentStep === 1 && (
                <StepClimate
                  climate={climate}
                  setClimate={setClimate}
                  onNext={handleNextStep}
                  onPrev={handlePrevStep}
                />
              )}

              {currentStep === 2 && (
                <StepOccasion
                  occasion={occasion}
                  setOccasion={setOccasion}
                  onNext={handleNextStep}
                  onPrev={handlePrevStep}
                />
              )}

              {currentStep === 3 && (
                <StepBudget
                  budget={budget}
                  setBudget={setBudget}
                  onNext={handleNextStep}
                  onPrev={handlePrevStep}
                />
              )}

              {currentStep === 4 && (
                <StepNotes
                  prefMode={prefMode}
                  setPrefMode={setPrefMode}
                  selectedVibeSetting={selectedVibeSetting}
                  setSelectedVibeSetting={setSelectedVibeSetting}
                  rankedNotes={rankedNotes}
                  setRankedNotes={setRankedNotes}
                  onNext={handleNextStep}
                  onPrev={handlePrevStep}
                />
              )}

              {currentStep === 5 && (
                <StepSillage
                  sillage={sillage}
                  setSillage={setSillage}
                  onSubmit={handleSubmitQuestionnaire}
                  onPrev={handlePrevStep}
                  isGenerating={isGenerating}
                />
              )}
            </div>
          </>
        )}

        {/* VIEW 5: RECOMMENDATION RESULTS */}
        {viewMode === 'results' && (
          <ResultsView
            preferences={preferencesObj}
            onReset={handleReset}
            onGoHome={handleGoHome}
            onGoBrowse={() => setViewMode('add')}
            onSelectDetail={(fragrance) => setSelectedDetailFragrance(fragrance)}
            wishlist={wishlist}
            onToggleWishlist={handleToggleWishlist}
            onOpenLayeringModal={(fragrance) => setSelectedLayeringFragrance(fragrance)}
          />
        )}

      </main>

      {/* Floating Bottom Navigation Dock */}
      <BottomNavbar
        viewMode={viewMode}
        setViewMode={setViewMode}
      />

      {/* Settings & Profile Customization Modal */}
      <SettingsModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        userTag={userTag}
        setUserTag={setUserTag}
        userAvatar={userAvatar}
        setUserAvatar={setUserAvatar}
        isMobileFrame={isMobileFrame}
        onToggleMobileFrame={() => setIsMobileFrame(!isMobileFrame)}
        onLogout={() => {
          setIsAuthenticated(false);
          setIsSettingsOpen(false);
        }}
      />

      {/* Modals & Drawers */}
      {selectedDetailFragrance && (
        <FragranceDetailModal
          fragrance={selectedDetailFragrance}
          onClose={() => setSelectedDetailFragrance(null)}
          isWishlisted={Boolean(wishlist?.some(w => w.id === selectedDetailFragrance.id))}
          onToggleWishlist={handleToggleWishlist}
          onOpenLayering={(fragrance) => setSelectedLayeringFragrance(fragrance)}
        />
      )}

      {selectedLayeringFragrance && (
        <LayeringGuideModal
          recommendedFragrance={selectedLayeringFragrance}
          ownedFragrances={ownedFragrances}
          onClose={() => setSelectedLayeringFragrance(null)}
        />
      )}

      {/* Friends Chat & Fragrance Sharing Drawer */}
      <FriendsChatDrawer
        isOpen={isChatOpen}
        onClose={() => setIsChatOpen(false)}
        onSelectDetail={(fragrance) => setSelectedDetailFragrance(fragrance)}
      />

      {isWishlistOpen && (
        <WishlistDrawer
          wishlist={wishlist}
          onClose={() => setIsWishlistOpen(false)}
          onRemoveFromWishlist={(id) => setWishlist(wishlist.filter(w => w.id !== id))}
          onSelectDetail={(fragrance) => setSelectedDetailFragrance(fragrance)}
        />
      )}

    </MobileFrame>
  );
}
