(import React from 'react';
import { CreditCard, Shield, CheckCircle, Clock, DollarSign, Smartphone } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="bg-gradient-to-r from-pink-500 to-pink-600 p-2 rounded-full">
                <CreditCard className="h-6 w-6 text-white" />
              </div>
              <div className="ml-3 premium-brand">
                <div className="brand-name">Cashifygcmart</div>
                <div className="brand-tagline">Instant Offers, Same-Day Payments</div>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pink-50 to-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
              <span className="block">Sell Unused Gift Cards for</span>
              <span className="text-pink-600 block">Same-Day Cash Online</span>
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
              CashifyGCmart is the trusted gift card exchange platform offering instant quotes, 
              competitive rates up to 93%, and secure same-day payments.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/form-submission">
                <button className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105">
                  Start Here
                </button>
              </a>
              <a href="/rate-calculator">
                <button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105">
                  Check Rates
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-green-600" />
              <span>SSL Secured</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <span>No Hidden Fees</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-green-600" />
              <span>Same-Day Payouts</span>
            </div>
            <div className="flex items-center gap-2">
              <CreditCard className="w-5 h-5 text-green-600" />
              <span>230+ Vendors</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
