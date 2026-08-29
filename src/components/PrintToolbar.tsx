import React, { useState, useEffect } from 'react';
import { 
  Printer, 
  Leaf, 
  HelpCircle, 
  ChevronDown, 
  FileText, 
  Layers, 
  CheckCircle2, 
  Sparkles,
  Info,
  ExternalLink
} from 'lucide-react';

interface PrintToolbarProps {
  inkSaver: boolean;
  setInkSaver: React.Dispatch<React.SetStateAction<boolean>>;
  compactMode: boolean;
  setCompactMode: React.Dispatch<React.SetStateAction<boolean>>;
}

export const PrintToolbar: React.FC<PrintToolbarProps> = ({
  inkSaver,
  setInkSaver,
  compactMode,
  setCompactMode,
}) => {
  const [showTips, setShowTips] = useState(false);
  const [showSections, setShowSections] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handlePrint = () => {
    window.print();
  };

  const sections = [
    { id: 'sec-cover', label: 'Cover & Package Overview' },
    { id: 'sec-1', label: '1. Design & Pre-Construction' },
    { id: 'sec-2', label: '2. Foundation & Methodology' },
    { id: 'sec-3', label: '3. Structure' },
    { id: 'sec-4', label: '4. Masonry & Plastering' },
    { id: 'sec-5', label: '5. Waterproofing' },
    { id: 'sec-6', label: '6. Flooring & Wall Tiling' },
    { id: 'sec-7', label: '7. Kitchen Fixtures' },
    { id: 'sec-8', label: '8. Bathrooms & Plumbing' },
    { id: 'sec-9', label: '9. Doors & Windows' },
    { id: 'sec-10', label: '10. Painting & Finishing' },
    { id: 'sec-11', label: '11. Electrical Works' },
    { id: 'sec-12', label: '12. Water Storage' },
    { id: 'sec-13', label: '13. Railings, Gates & Compound' },
    { id: 'sec-14', label: '14. Quality Assurance Protocol' },
    { id: 'sec-summary', label: 'Pricing Summary & Positioning' },
    { id: 'sec-warranty', label: 'Warranty & ADC Promise' },
    { id: 'sec-exclusions', label: 'Exclusions & Terms & Conditions' },
  ];

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setShowSections(false);
    }
  };

  return (
    <header className="no-print sticky top-0 z-50 w-full bg-[#0b2545]/95 backdrop-blur-md border-b border-sky-900/60 text-white shadow-xl transition-all">
      <div className="max-w-7xl mx-auto px-4 py-2.5 sm:px-6 flex flex-wrap items-center justify-between gap-3">
        {/* Left: Brand Badge & Document Title */}
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-lg bg-sky-600 flex items-center justify-center font-bold text-white shadow-md shadow-sky-500/25">
            A
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className="font-bold text-sm text-sky-50 tracking-tight">ADC Master Proposal</span>
              <span className="bg-sky-500/20 text-sky-200 text-[10px] font-semibold px-2 py-0.5 rounded-full border border-sky-400/30">
                2026 Turnkey
              </span>
            </div>
            <p className="text-[11px] text-sky-200/70 hidden sm:block">Print-optimized specification matrix &amp; rate document</p>
          </div>
        </div>

        {/* Center/Right Actions */}
        <div className="flex items-center flex-wrap gap-2 sm:gap-3">
          {/* Quick Jump Dropdown */}
          <div className="relative">
            <button
              id="jump-to-section-btn"
              onClick={() => setShowSections(!showSections)}
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-md bg-[#133a68] hover:bg-[#1a4a82] text-sky-100 text-xs font-medium border border-sky-800/80 transition"
              title="Jump to Section"
            >
              <FileText className="w-3.5 h-3.5 text-sky-300" />
              <span className="hidden md:inline">Sections</span>
              <ChevronDown className="w-3 h-3 text-sky-300" />
            </button>

            {showSections && (
              <div 
                className="absolute left-0 sm:right-0 sm:left-auto mt-2 w-64 max-h-96 overflow-y-auto bg-[#0b2545] border border-sky-800 rounded-lg shadow-2xl py-2 z-50 text-xs"
                onMouseLeave={() => setShowSections(false)}
              >
                <div className="px-3 py-1.5 text-[10px] font-bold text-sky-300 uppercase tracking-wider border-b border-sky-900">
                  Quick Navigation
                </div>
                {sections.map((sec) => (
                  <button
                    key={sec.id}
                    onClick={() => scrollToSection(sec.id)}
                    className="w-full text-left px-3 py-2 text-sky-100 hover:text-white hover:bg-sky-600/30 transition flex items-center justify-between"
                  >
                    <span>{sec.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Ink Saver Mode Toggle */}
          <button
            id="ink-saver-toggle-btn"
            onClick={() => setInkSaver(!inkSaver)}
            className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-md text-xs font-medium border transition ${
              inkSaver 
                ? 'bg-emerald-950/80 border-emerald-500 text-emerald-300 shadow-sm shadow-emerald-500/20' 
                : 'bg-[#133a68] hover:bg-[#1a4a82] border-sky-800/80 text-sky-100'
            }`}
            title="Toggle Ink-Saver Mode (Clean white background for monochrome or high-speed printing)"
          >
            <Leaf className={`w-3.5 h-3.5 ${inkSaver ? 'text-emerald-400' : 'text-sky-300'}`} />
            <span>{inkSaver ? 'Ink-Saver: ON' : 'Eco Ink Saver'}</span>
          </button>

          {/* Compact Print Mode Toggle */}
          <button
            id="compact-mode-toggle-btn"
            onClick={() => setCompactMode(!compactMode)}
            className={`hidden lg:flex items-center space-x-1.5 px-3 py-1.5 rounded-md text-xs font-medium border transition ${
              compactMode 
                ? 'bg-sky-950/90 border-sky-400 text-sky-200' 
                : 'bg-[#133a68] hover:bg-[#1a4a82] border-sky-800/80 text-sky-100'
            }`}
            title="Toggle Compact Table Density for fewer total printed pages"
          >
            <Layers className={`w-3.5 h-3.5 ${compactMode ? 'text-sky-300' : 'text-sky-300'}`} />
            <span>{compactMode ? 'Compact Density' : 'Standard Density'}</span>
          </button>

          {/* Print Tips Dialog Trigger */}
          <button
            id="print-tips-btn"
            onClick={() => setShowTips(!showTips)}
            className="flex items-center space-x-1 px-2.5 py-1.5 rounded-md bg-[#133a68] hover:bg-[#1a4a82] text-sky-100 text-xs border border-sky-800/80 transition"
            title="Print Settings & PDF Export Guide"
          >
            <HelpCircle className="w-3.5 h-3.5 text-sky-300" />
            <span className="hidden sm:inline">Print Tips</span>
          </button>

          {/* Main Print / PDF Button */}
          <button
            id="print-now-btn"
            onClick={handlePrint}
            className="flex items-center space-x-2 px-4 py-1.5 rounded-md bg-sky-600 hover:bg-sky-500 text-white text-xs font-bold shadow-lg shadow-sky-600/30 hover:shadow-sky-600/50 transition cursor-pointer active:scale-95"
          >
            <Printer className="w-4 h-4" />
            <span>Print / Save PDF</span>
          </button>
        </div>
      </div>

      {/* Print Tips Help Banner / Modal */}
      {showTips && (
        <div className="bg-[#0e2c4d]/98 border-t border-sky-800 px-4 py-3 text-xs text-sky-100 shadow-inner">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-3">
            <div className="space-y-1">
              <div className="flex items-center space-x-2 text-sky-300 font-semibold">
                <Info className="w-4 h-4" />
                <span>Recommended Browser Print Settings for Perfect PDF Output:</span>
              </div>
              <ul className="text-[11.5px] text-sky-100 list-disc list-inside space-y-0.5 ml-1">
                <li><strong className="text-white">Destination:</strong> Save as PDF (or select your printer).</li>
                <li><strong className="text-white">Background Graphics:</strong> Check/Enable this box to render colored table headers and badge tags.</li>
                <li><strong className="text-white">Paper Size:</strong> A4 or Letter (Portrait).</li>
                <li><strong className="text-white">Margins:</strong> Default or Minimum (10mm margins are pre-configured in CSS).</li>
                <li><strong className="text-white">Ink-Saver Mode:</strong> Toggle &quot;Eco Ink Saver&quot; above to eliminate dark header fills for minimal black toner usage.</li>
              </ul>
            </div>
            <div className="flex items-center gap-2 self-end md:self-center">
              <button
                onClick={handlePrint}
                className="px-3 py-1 bg-sky-600 hover:bg-sky-500 text-white rounded text-xs font-medium transition"
              >
                Open Print Dialog
              </button>
              <button
                onClick={() => setShowTips(false)}
                className="px-2.5 py-1 bg-[#1a4473] hover:bg-[#20528c] text-sky-200 rounded text-xs transition"
              >
                Dismiss
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
