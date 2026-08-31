import React, { useState } from 'react';
import MobileFrame from './components/MobileFrame';
import Header from './components/Header';
import ProgressBar from './components/ProgressBar';
import MyCollectionView from './components/MyCollectionView';
import BrowseFeed from './components/BrowseFeed';
import SocialProfileView from './components/SocialProfileView';
import VisualScentMap from './components/VisualScentMap';
import FriendsChatDrawer from './components/FriendsChatDrawer';
import StepCollection from './components/StepCollection';
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
  const totalSteps = 6;

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

  const stepTitles = [
    'Current Collection',
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
    setCustomSubmissions(prev => [newFrag, ...prev]);
    setOwnedFragrances(prev => [...prev, newFrag.name]);
  };

  const handleToggleWishlist = (fragrance) => {
    const list = wishlist || [];
    if (list.some(w => w.id === fragrance.id)) {
      setWishlist(list.filter(w => w.id !== fragrance.id));
    } else {
      setWishlist([...list, fragrance]);
    }
  };

  const handleToggleOwned = (fragrance) => {
    const name = fragrance.name;
    if (ownedFragrances.some(n => n.toLowerCase() === name.toLowerCase())) {
      setOwnedFragrances(ownedFragrances.filter(n => n.toLowerCase() !== name.toLowerCase()));
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

  return (
    <MobileFrame isMobileFrame={isMobileFrame}>
      
      {/* Header */}
      <Header
        viewMode={viewMode}
        setViewMode={setViewMode}
        onOpenChat={() => setIsChatOpen(true)}
        isMobileFrame={isMobileFrame}
        onToggleMobileFrame={() => setIsMobileFrame(!isMobileFrame)}
      />

      {/* Main Container */}
      <main className="flex-1 p-4 sm:p-6 max-w-xl mx-auto w-full">
        
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
                <StepCollection
                  ownedFragrances={ownedFragrances}
                  setOwnedFragrances={setOwnedFragrances}
                  onNext={handleNextStep}
                />
              )}

              {currentStep === 2 && (
                <StepClimate
                  climate={climate}
                  setClimate={setClimate}
                  onNext={handleNextStep}
                  onPrev={handlePrevStep}
                />
              )}

              {currentStep === 3 && (
                <StepOccasion
                  occasion={occasion}
                  setOccasion={setOccasion}
                  onNext={handleNextStep}
                  onPrev={handlePrevStep}
                />
              )}

              {currentStep === 4 && (
                <StepBudget
                  budget={budget}
                  setBudget={setBudget}
                  onNext={handleNextStep}
                  onPrev={handlePrevStep}
                />
              )}

              {currentStep === 5 && (
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

              {currentStep === 6 && (
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
