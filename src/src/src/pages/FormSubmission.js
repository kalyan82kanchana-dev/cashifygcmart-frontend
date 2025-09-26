import React, { useState } from 'react';
import { User, CreditCard, DollarSign, Upload, ChevronLeft, ChevronRight, Check, AlertCircle } from 'lucide-react';

const FormSubmission = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    cards: [{
      brand: '',
      value: '',
      condition: '',
      hasReceipt: '',
      cardType: ''
    }],
    paymentMethod: ''
  });

  const steps = [
    { id: 1, title: 'Personal Information', icon: User },
    { id: 2, title: 'Gift Card Details', icon: CreditCard },
    { id: 3, title: 'Payment Method', icon: DollarSign },
    { id: 4, title: 'Upload & Review', icon: Upload }
  ];

  const progress = (currentStep / steps.length) * 100;

  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, steps.length));
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1));

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Submit Your Gift Card
          </h1>
          <p className="text-lg text-gray-600">
            Complete the form below to sell your gift cards quickly and securely
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            {steps.map((step, index) => {
              const StepIcon = step.icon;
              const isActive = currentStep === step.id;
              const isCompleted = currentStep > step.id;
              
              return (
                <div key={step.id} className="flex flex-col items-center space-y-2">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${
                    isCompleted ? 'bg-green-600 text-white' :
                    isActive ? 'bg-pink-600 text-white' : 'bg-gray-300 text-gray-600'
                  }`}>
                    {isCompleted ? <Check className="w-6 h-6" /> : <StepIcon className="w-6 h-6" />}
                  </div>
                  <div className="text-center">
                    <div className={`text-sm font-medium ${isActive || isCompleted ? 'text-gray-900' : 'text-gray-500'}`}>
                      {step.title}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-pink-600 h-2 rounded-full transition-all duration-300" style={{ width: `${progress}%` }} />
          </div>
        </div>

        {/* Form Content */}
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Step {currentStep}: {steps[currentStep - 1].title}</h2>
            <p className="text-gray-600 mb-8">Please fill in the required information below</p>
          </div>

          {/* Navigation */}
          <div className="flex flex-col sm:flex-row justify-between items-center mt-8 pt-6 border-t space-y-3 sm:space-y-0">
            <button
              onClick={prevStep}
              disabled={currentStep === 1}
              className={`w-full sm:w-auto flex items-center justify-center space-x-2 px-6 py-3 rounded-lg font-medium transition-colors ${
                currentStep === 1 
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
              <span>Previous</span>
            </button>

            <button
              onClick={nextStep}
              disabled={currentStep === steps.length}
              className={`w-full sm:w-auto flex items-center justify-center space-x-2 px-6 py-3 rounded-lg font-medium transition-colors ${
                currentStep === steps.length
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-pink-600 text-white hover:bg-pink-700'
              }`}
            >
              <span>{currentStep === steps.length ? 'Submit' : 'Next'}</span>
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormSubmission;
