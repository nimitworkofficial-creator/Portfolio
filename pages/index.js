import { useState } from 'react';

export default function Home() {
  const [activeTab, setActiveTab] = useState('products');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-6xl mx-auto px-6 py-20">
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-blue-500/20 rounded-full border border-blue-500/30">
              <span className="text-blue-300 text-sm font-medium">Open to GTM Opportunities</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Nimit Mathur
            </h1>
            
            <p className="text-2xl md:text-3xl text-slate-300 font-light">
              GTM Operator Who Thinks Like a Founder
            </p>
            
            <p className="text-xl text-slate-400 max-w-3xl leading-relaxed">
              6+ years driving growth for SaaS companies through strategic account management, 
              customer success, and data-driven GTM execution. I don&apos;t just manage accounts—I 
              identify market opportunities, design solutions, and build scalable growth systems.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <a 
                href="https://www.linkedin.com/in/nimitm" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-all font-semibold"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                Connect on LinkedIn
              </a>
              <a 
                href="mailto:nimitworkofficial@gmail.com"
                className="flex items-center gap-2 px-6 py-3 bg-slate-700 hover:bg-slate-600 rounded-lg transition-all font-semibold"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Value Props */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-slate-800/50 rounded-xl border border-slate-700">
            <svg className="text-blue-400 mb-4 w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
            </svg>
            <h3 className="text-xl font-bold mb-2">Growth Driver</h3>
            <p className="text-slate-400">Managed $12M+ ARR books. 95%+ retention. Consistent overachievement on upsell targets.</p>
          </div>
          <div className="p-6 bg-slate-800/50 rounded-xl border border-slate-700">
            <svg className="text-purple-400 mb-4 w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
            </svg>
            <h3 className="text-xl font-bold mb-2">Relationship Builder</h3>
            <p className="text-slate-400">Built C-level relationships across enterprise accounts through consultative, data-driven approach.</p>
          </div>
          <div className="p-6 bg-slate-800/50 rounded-xl border border-slate-700">
            <svg className="text-green-400 mb-4 w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
            </svg>
            <h3 className="text-xl font-bold mb-2">Product Thinker</h3>
            <p className="text-slate-400">Design customer-centric solutions. Collaborate with product/engineering on scaled implementations.</p>
          </div>
        </div>
      </div>

      {/* Main Content Tabs */}
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex gap-4 border-b border-slate-700 mb-8">
          <button
            onClick={() => setActiveTab('products')}
            className={`px-6 py-3 font-semibold transition-all ${
              activeTab === 'products'
                ? 'text-blue-400 border-b-2 border-blue-400'
                : 'text-slate-400 hover:text-slate-300'
            }`}
          >
            Product Thinking
          </button>
          <button
            onClick={() => setActiveTab('experience')}
            className={`px-6 py-3 font-semibold transition-all ${
              activeTab === 'experience'
                ? 'text-blue-400 border-b-2 border-blue-400'
                : 'text-slate-400 hover:text-slate-300'
            }`}
          >
            Experience
          </button>
        </div>

        {/* Products Tab */}
        {activeTab === 'products' && (
          <div className="space-y-8">
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-3">How I Think About Product & GTM</h2>
              <p className="text-slate-400 text-lg">
                I believe the best GTM operators understand product deeply. Here are three app concepts 
                I&apos;ve designed, showing how I think about market problems, solutions, and go-to-market strategy.
              </p>
            </div>

            {/* FreshTrack */}
            <div className="bg-slate-800/30 rounded-xl p-8 border border-slate-700 hover:border-slate-600 transition-all">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-2xl font-bold text-blue-400">FreshTrack</h3>
                <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">B2C</span>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-semibold text-slate-400 uppercase mb-1">Problem</h4>
                  <p className="text-slate-200">40% of food waste happens in households due to poor inventory management</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-400 uppercase mb-1">Solution</h4>
                  <p className="text-slate-200">AI-powered pantry tracking app that sends expiry alerts and suggests recipes based on expiring ingredients</p>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-sm font-semibold text-slate-400 uppercase mb-1">Market</h4>
                    <p className="text-slate-200">B2C with B2B2C potential (grocery chains, meal kit services)</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-400 uppercase mb-1">Impact</h4>
                    <p className="text-slate-200">Reduce household food waste by 30%, save avg. family $1,200/year</p>
                  </div>
                </div>
                <div className="pt-4 border-t border-slate-700">
                  <h4 className="text-sm font-semibold text-green-400 uppercase mb-2 flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                    </svg>
                    GTM Strategy
                  </h4>
                  <p className="text-slate-200">PLG via free tier → Premium features → Partnership with grocery loyalty programs</p>
                </div>
              </div>
            </div>

            {/* NutriLens */}
            <div className="bg-slate-800/30 rounded-xl p-8 border border-slate-700 hover:border-slate-600 transition-all">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-2xl font-bold text-blue-400">NutriLens</h3>
                <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">B2B + B2C</span>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-semibold text-slate-400 uppercase mb-1">Problem</h4>
                  <p className="text-slate-200">People struggle to track nutrition consistently - 85% of diet apps abandoned within 30 days</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-400 uppercase mb-1">Solution</h4>
                  <p className="text-slate-200">Photo-first nutrition tracker with AI recognition. Snap a photo, get instant macro breakdown</p>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-sm font-semibold text-slate-400 uppercase mb-1">Market</h4>
                    <p className="text-slate-200">B2C (fitness enthusiasts, health-conscious millennials) + B2B (corporate wellness)</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-400 uppercase mb-1">Impact</h4>
                    <p className="text-slate-200">10x faster logging = 3x better retention vs. traditional apps</p>
                  </div>
                </div>
                <div className="pt-4 border-t border-slate-700">
                  <h4 className="text-sm font-semibold text-green-400 uppercase mb-2 flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                    </svg>
                    GTM Strategy
                  </h4>
                  <p className="text-slate-200">Viral loop through social sharing → Corporate wellness partnerships → Integration with fitness apps</p>
                </div>
              </div>
            </div>

            {/* ProSpeak */}
            <div className="bg-slate-800/30 rounded-xl p-8 border border-slate-700 hover:border-slate-600 transition-all">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-2xl font-bold text-blue-400">ProSpeak</h3>
                <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">B2B + B2C</span>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-semibold text-slate-400 uppercase mb-1">Problem</h4>
                  <p className="text-slate-200">Non-native English speakers struggle with workplace communication, limiting career growth</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-400 uppercase mb-1">Solution</h4>
                  <p className="text-slate-200">AI conversation coach for professional English with real-time feedback on clarity, tone, and cultural context</p>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-sm font-semibold text-slate-400 uppercase mb-1">Market</h4>
                    <p className="text-slate-200">B2B2C (corporations with global teams) + D2C (individual professionals)</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-400 uppercase mb-1">Impact</h4>
                    <p className="text-slate-200">Improve workplace communication confidence by 60% in 90 days</p>
                  </div>
                </div>
                <div className="pt-4 border-t border-slate-700">
                  <h4 className="text-sm font-semibold text-green-400 uppercase mb-2 flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                    </svg>
                    GTM Strategy
                  </h4>
                  <p className="text-slate-200">Enterprise pilot programs → Usage-based pricing → Community-led growth via success stories</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Experience Tab */}
        {activeTab === 'experience' && (
          <div className="space-y-6">
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-3">Track Record</h2>
              <p className="text-slate-400 text-lg">
                Proven ability to drive revenue growth, build lasting customer relationships, 
                and execute strategic initiatives across multiple industries.
              </p>
            </div>

            <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700 hover:border-slate-600 transition-all">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-3">
                <div>
                  <h3 className="text-xl font-bold text-white">Account Specialist</h3>
                  <p className="text-blue-400 font-semibold">Telus</p>
                </div>
                <span className="text-slate-400 text-sm mt-2 md:mt-0">2025</span>
              </div>
              <p className="text-slate-300">Hit quota month 1. Built C-suite relationships driving upsells across QSR & FinServ verticals</p>
            </div>

            <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700 hover:border-slate-600 transition-all">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-3">
                <div>
                  <h3 className="text-xl font-bold text-white">Business Development Specialist</h3>
                  <p className="text-blue-400 font-semibold">ModalX (SaaS)</p>
                </div>
                <span className="text-slate-400 text-sm mt-2 md:mt-0">2024</span>
              </div>
              <p className="text-slate-300">Owned full POC cycle for enterprise clients. Optimized onboarding, reducing time-to-value</p>
            </div>

            <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700 hover:border-slate-600 transition-all">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-3">
                <div>
                  <h3 className="text-xl font-bold text-white">Account Strategist</h3>
                  <p className="text-blue-400 font-semibold">Google (via XWS)</p>
                </div>
                <span className="text-slate-400 text-sm mt-2 md:mt-0">2021-2022</span>
              </div>
              <p className="text-slate-300">Managed $12M ARR book. 95%+ retention. Added 7-10 net new clients quarterly</p>
            </div>

            <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700 hover:border-slate-600 transition-all">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-3">
                <div>
                  <h3 className="text-xl font-bold text-white">Sr. Account Manager</h3>
                  <p className="text-blue-400 font-semibold">Media.net (AdTech)</p>
                </div>
                <span className="text-slate-400 text-sm mt-2 md:mt-0">2014-2016</span>
              </div>
              <p className="text-slate-300">Managed $6M in partnerships. Expanded wallet share 15% YoY through consultative approach</p>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-xl border border-blue-800/50">
              <h3 className="text-xl font-bold mb-3">Key Achievements</h3>
              <ul className="space-y-2 text-slate-300">
                <li className="flex items-start gap-2">
                  <svg className="text-blue-400 mt-1 flex-shrink-0 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                  </svg>
                  <span>Managed $18M+ in combined ARR across multiple SaaS/AdTech companies</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="text-blue-400 mt-1 flex-shrink-0 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                  </svg>
                  <span>Consistently achieved 95%+ retention rates through proactive account management</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="text-blue-400 mt-1 flex-shrink-0 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                  </svg>
                  <span>Expanded wallet share 15% YoY through consultative selling and upsells</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="text-blue-400 mt-1 flex-shrink-0 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                  </svg>
                  <span>Built C-level relationships at enterprises across QSR, FinServ, and Media verticals</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="text-blue-400 mt-1 flex-shrink-0 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                  </svg>
                  <span>Reduced time-to-value by 50% through process optimization and workflow design</span>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>

      {/* Skills Section */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8">Core Competencies</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="px-4 py-3 bg-slate-800/50 rounded-lg border border-slate-700 text-center">Strategic Account Management</div>
          <div className="px-4 py-3 bg-slate-800/50 rounded-lg border border-slate-700 text-center">Customer Success & Retention</div>
          <div className="px-4 py-3 bg-slate-800/50 rounded-lg border border-slate-700 text-center">Enterprise Sales & Upselling</div>
          <div className="px-4 py-3 bg-slate-800/50 rounded-lg border border-slate-700 text-center">GTM Strategy & Execution</div>
          <div className="px-4 py-3 bg-slate-800/50 rounded-lg border border-slate-700 text-center">Product-Led Growth (PLG)</div>
          <div className="px-4 py-3 bg-slate-800/50 rounded-lg border border-slate-700 text-center">C-Level Relationship Building</div>
          <div className="px-4 py-3 bg-slate-800/50 rounded-lg border border-slate-700 text-center">Data-Driven Decision Making</div>
          <div className="px-4 py-3 bg-slate-800/50 rounded-lg border border-slate-700 text-center">Cross-Functional Collaboration</div>
          <div className="px-4 py-3 bg-slate-800/50 rounded-lg border border-slate-700 text-center">Process Optimization</div>
          <div className="px-4 py-3 bg-slate-800/50 rounded-lg border border-slate-700 text-center">SaaS/Tech Industry Expertise</div>
          <div className="px-4 py-3 bg-slate-800/50 rounded-lg border border-slate-700 text-center">CRM & Sales Tools (Salesforce, Gong)</div>
          <div className="px-4 py-3 bg-slate-800/50 rounded-lg border border-slate-700 text-center">Change Management</div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center">
          <h2 className="text-4xl font-bold mb-4">Let&apos;s Build Something Together</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Looking for foundational GTM roles at fast-growing startups where I can drive revenue, 
            build customer relationships, and contribute to product strategy.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a 
              href="https://www.linkedin.com/in/nimitm"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-4 bg-white text-blue-600 hover:bg-blue-50 rounded-lg transition-all font-bold text-lg"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              Connect on LinkedIn
            </a>
            <a 
              href="mailto:nimitworkofficial@gmail.com"
              className="flex items-center gap-2 px-8 py-4 bg-blue-800 hover:bg-blue-900 rounded-lg transition-all font-bold text-lg"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              Email Me
            </a>
          </div>
          <p className="text-blue-200 mt-6">
            📍 Burnaby, BC | Open to remote/hybrid | Authorized to work in US (TN Visa)
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-slate-800 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center text-slate-400">
          <p>© 2025 Nimit Mathur. Available for immediate start.</p>
        </div>
      </div>
    </div>
  );
}
