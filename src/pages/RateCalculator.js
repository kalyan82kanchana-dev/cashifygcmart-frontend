import React, { useState, useEffect } from 'react';
import { Calculator, CreditCard, CheckCircle, AlertCircle } from 'lucide-react';

const RateCalculator = () => {
  const [cardCategory, setCardCategory] = useState({
    withReceipt: false,
    withoutReceipt: false,
    partiallyUsed: false
  });
  
  const [selectedCard, setSelectedCard] = useState('');
  const [cardAmount, setCardAmount] = useState('');
  const [calculatedAmount, setCalculatedAmount] = useState('0.00');
  const [showLimitError, setShowLimitError] = useState(false);

  const giftCards = [
    { value: "adidas", label: "Adidas Gift Card" },
    { value: "airbnb", label: "AirBnb Gift Card" },
    { value: "amazon", label: "Amazon Gift Card" },
    { value: "amexp", label: "American Express Gift Card" },
    { value: "apple", label: "Apple Gift Card" },
    { value: "athleta", label: "Athleta" },
    { value: "bbb", label: "Bed Bath And Beyond Gift Card" },
    { value: "bestbuy", label: "Best Buy Gift Card" },
    { value: "banana", label: "Banana Republic" },
    { value: "booking", label: "Booking.com Gift Card" },
    { value: "costco", label: "Costco Cash Card" },
    { value: "cvs", label: "CVS Gift Card" },
    { value: "dell", label: "Dell Gift Card" },
    { value: "disney", label: "Disney Gift Card" },
    { value: "doordash", label: "Door Dash Gift Card" },
    { value: "ebay", label: "eBay Gift Card" },
    { value: "footlocker", label: "Footlocker Sports Gift Card" },
    { value: "gap", label: "GAP" },
    { value: "gamestop", label: "GameStop Gift Card" },
    { value: "googleplay", label: "Google Play Gift Card" },
    { value: "grubhub", label: "Grubhub Gift Card" },
    { value: "homedepot", label: "Home Depot Gift Card" },
    { value: "homegoods", label: "Home Goods" },
    { value: "hotels", label: "Hotels.com Gift Card" },
    { value: "ikea", label: "IKEA Gift Card" },
    { value: "itunes", label: "iTunes Gift Card" },
    { value: "kohls", label: "Kohls Store Gift Card" },
    { value: "lowes", label: "Lowes Gift Card" },
    { value: "lyft", label: "Lyft Gift Card" },
    { value: "macy's", label: "Macy's Gift Card" },
    { value: "mastercard", label: "MasterCard Gift Card" },
    { value: "master", label: "Master Gift Cards" },
    { value: "microsoft", label: "Microsoft Gift Card" },
    { value: "myvanilla", label: "My Vanilla Prepaid Card" },
    { value: "netflix", label: "Netflix Gift Card" },
    { value: "nike", label: "Nike Gift Card" },
    { value: "nintendo", label: "Nintendo eShop Digital Card/Gift Card" },
    { value: "nordstorm", label: "Nordstorm Gift Card" },
    { value: "oldnavy", label: "Old Navy eGift Card" },
    { value: "onevanilla", label: "One Vanilla VISA/MasterCard Gift Card" },
    { value: "petco", label: "Petco Gift Card" },
    { value: "psnetwork", label: "Play Station Network Gift Card" },
    { value: "razorgold", label: "Razor Gold Gift Card" },
    { value: "reebok", label: "Reebok Gift Card" },
    { value: "roblox", label: "Roblox Game Card" },
    { value: "samclub", label: "Sam's Club" },
    { value: "saks", label: "Saks Fifth Avenue Gift Card" },
    { value: "sephora", label: "Sephora Gift Card" },
    { value: "spotify", label: "Spotify Gift Card" },
    { value: "sierra", label: "Sierra" },
    { value: "starbucks", label: "Starbucks Card" },
    { value: "steam", label: "Steam Wallet Gift Card" },
    { value: "target", label: "Target Gift Card" },
    { value: "targetvisa", label: "Target VISA Gift Card" },
    { value: "tjmaxx", label: "Tjmaxx" },
    { value: "ubereats", label: "Uber Eats" },
    { value: "ulta", label: "Ulta Gift Card" },
    { value: "vicsecret", label: "Victoria's Secret Gift Card" },
    { value: "visa", label: "VISA Gift Card" },
    { value: "walmart", label: "Walmart Gift Card" }
  ];

  const calculateRate = () => {
    const amount = parseFloat(cardAmount);
    
    if (!amount || amount < 50) {
      setShowLimitError(true);
      setCalculatedAmount('0.00');
      return;
    }
    
    setShowLimitError(false);
    let percentCalc = 0;

    // High-value cards (92% with receipt, 78% without, 60%/55% partially used)
    if (['adidas', 'amazon', 'bestbuy', 'costco', 'doordash'].includes(selectedCard)) {
      if (cardCategory.withReceipt && cardCategory.partiallyUsed) {
        percentCalc = ((92 + 60) / 2 / 100) * amount;
      } else if (cardCategory.withoutReceipt && cardCategory.partiallyUsed) {
        percentCalc = (60 / 100) * amount;
      } else if (cardCategory.withReceipt) {
        percentCalc = (92 / 100) * amount;
      } else if (cardCategory.withoutReceipt) {
        percentCalc = (78 / 100) * amount;
      } else if (cardCategory.partiallyUsed) {
        percentCalc = (55 / 100) * amount;
      }
    } 
    // Mid-high value cards (88% with receipt, 74% without, 58%/53% partially used)
    else if (['apple', 'steam', 'playstation', 'xbox', 'target'].includes(selectedCard)) {
      if (cardCategory.withReceipt && cardCategory.partiallyUsed) {
        percentCalc = ((88 + 58) / 2 / 100) * amount;
      } else if (cardCategory.withoutReceipt && cardCategory.partiallyUsed) {
        percentCalc = (58 / 100) * amount;
      } else if (cardCategory.withReceipt) {
        percentCalc = (88 / 100) * amount;
      } else if (cardCategory.withoutReceipt) {
        percentCalc = (74 / 100) * amount;
      } else if (cardCategory.partiallyUsed) {
        percentCalc = (53 / 100) * amount;
      }
    } 
    // Standard cards (85% with receipt, 71% without, 55%/50% partially used)
    else {
      if (cardCategory.withReceipt && cardCategory.partiallyUsed) {
        percentCalc = ((85 + 55) / 2 / 100) * amount;
      } else if (cardCategory.withoutReceipt && cardCategory.partiallyUsed) {
        percentCalc = (55 / 100) * amount;
      } else if (cardCategory.withReceipt) {
        percentCalc = (85 / 100) * amount;
      } else if (cardCategory.withoutReceipt) {
        percentCalc = (71 / 100) * amount;
      } else if (cardCategory.partiallyUsed) {
        percentCalc = (50 / 100) * amount;
      }
    }

    setCalculatedAmount(percentCalc.toFixed(2));
  };

  const handleCategoryChange = (category) => {
    const newCategory = { 
      withReceipt: false, 
      withoutReceipt: false, 
      partiallyUsed: false 
    };
    newCategory[category] = true;
    setCardCategory(newCategory);
  };

  const isFormValid = () => {
    return selectedCard && cardAmount && (cardCategory.withReceipt || cardCategory.withoutReceipt || cardCategory.partiallyUsed);
  };

  useEffect(() => {
    if (isFormValid()) {
      calculateRate();
    } else {
      setCalculatedAmount('0.00');
    }
  }, [selectedCard, cardAmount, cardCategory]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <Calculator className="w-16 h-16 mx-auto mb-6" />
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Rate Calculator</h1>
          <p className="text-xl md:text-2xl opacity-90">
            Get instant quotes for your gift cards
          </p>
        </div>
      </div>

      {/* Calculator Section */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Calculate Your Gift Card Value</h2>
            <p className="text-gray-600">Select your gift card details to see how much cash you can get</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Form Section */}
            <div className="space-y-6">
              
              {/* Card Category */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">Card Category</label>
                <div className="space-y-2">
                  {[
                    { key: 'withReceipt', label: 'Gift Card With Receipt', desc: 'I have the original purchase receipt' },
                    { key: 'withoutReceipt', label: 'Gift Card Without Receipt', desc: 'I don\'t have the purchase receipt' },
                    { key: 'partiallyUsed', label: 'Partially Used Gift Card', desc: 'Card has been used but has remaining value' }
                  ].map((option) => (
                    <label key={option.key} className={`flex items-start p-4 border-2 rounded-lg cursor-pointer transition-all ${
                      cardCategory[option.key] 
                        ? 'border-pink-500 bg-pink-50' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}>
                      <input
                        type="radio"
                        name="category"
                        checked={cardCategory[option.key]}
                        onChange={() => handleCategoryChange(option.key)}
                        className="sr-only"
                      />
                      <div className={`flex-shrink-0 w-5 h-5 rounded-full border-2 mt-0.5 mr-3 flex items-center justify-center ${
                        cardCategory[option.key] ? 'border-pink-500 bg-pink-500' : 'border-gray-300'
                      }`}>
                        {cardCategory[option.key] && <div className="w-2 h-2 bg-white rounded-full" />}
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">{option.label}</div>
                        <div className="text-sm text-gray-500">{option.desc}</div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Gift Card Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Select Gift Card Brand</label>
                <select
                  value={selectedCard}
                  onChange={(e) => setSelectedCard(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                >
                  <option value="">Choose a gift card brand...</option>
                  {giftCards.map((card) => (
                    <option key={card.value} value={card.value}>
                      {card.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Amount Input */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Gift Card Value ($)</label>
                <input
                  type="number"
                  value={cardAmount}
                  onChange={(e) => setCardAmount(e.target.value)}
                  placeholder="Enter the card value"
                  min="50"
                  className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent ${
                    showLimitError ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {showLimitError && (
                  <div className="mt-2 flex items-center text-red-600 text-sm">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    Minimum gift card value is $50
                  </div>
                )}
              </div>

            </div>

            {/* Result Section */}
            <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl p-6">
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Your Estimated Cash Value</h3>
                
                <div className="bg-white rounded-lg p-6 shadow-sm mb-6">
                  <div className="text-4xl font-bold text-pink-600 mb-2">
                    ${calculatedAmount}
                  </div>
                  <div className="text-sm text-gray-600">
                    {cardAmount && calculatedAmount !== '0.00' 
                      ? `${((parseFloat(calculatedAmount) / parseFloat(cardAmount || 1)) * 100).toFixed(0)}% of card value`
                      : 'Enter details to calculate'
                    }
                  </div>
                </div>

                {isFormValid() && calculatedAmount !== '0.00' && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-center text-green-600 mb-4">
                      <CheckCircle className="w-5 h-5 mr-2" />
                      <span className="font-medium">Great! Your card qualifies</span>
                    </div>
                    
                    <button 
                      onClick={() => window.location.href = '/form-submission'}
                      className="w-full bg-pink-600 hover:bg-pink-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                    >
                      Proceed to Trade Card
                    </button>
                    
                    <button 
                      onClick={() => window.location.href = '/accepted-cards'}
                      className="w-full border-2 border-pink-600 text-pink-600 hover:bg-pink-600 hover:text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                    >
                      See All Accepted Cards
                    </button>
                  </div>
                )}
                
                {!isFormValid() && (
                  <div className="text-gray-500 text-sm">
                    Complete the form above to see your estimated cash value
                  </div>
                )}
              </div>
            </div>
          </div>
          
          {/* Info Section */}
          <div className="mt-8 p-6 bg-blue-50 rounded-lg">
            <h4 className="font-semibold text-blue-900 mb-2">💡 Rate Information</h4>
            <ul className="text-sm text-blue-800 space-y-1">
              <li>• Rates vary by card brand and condition</li>
              <li>• Cards with receipts get higher rates</li>
              <li>• Minimum card value: $50</li>
              <li>• Final rates may vary after verification</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RateCalculator;
