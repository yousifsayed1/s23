import React from 'react';
import { ClipboardCheck, BarChart3, Users, Star, ExternalLink, Search, ThumbsUp, DollarSign, History, Lock } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <nav className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <ClipboardCheck className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">SurveyInsights</span>
            </div>
            <div className="flex items-center space-x-6">
              <a href="https://thealchemer.com/login" className="text-gray-600 hover:text-blue-600 transition-colors">
                Alchemer Login
              </a>
              <a href="https://thealchemer.com" className="flex items-center text-gray-600 hover:text-blue-600 transition-colors">
                Visit TheAlchemer <ExternalLink className="ml-1 h-4 w-4" />
              </a>
            </div>
          </nav>
        </div>
      </header>

      <main>
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <div className="flex justify-center mb-8">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
                alt="Data Analytics Dashboard"
                className="rounded-lg shadow-xl"
              />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Understanding Alchemer: The Evolution of SurveyGizmo
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              Formerly known as SurveyGizmo, Alchemer has transformed into a comprehensive enterprise feedback management platform, revolutionizing how organizations collect and analyze data.
            </p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">What is Alchemer?</h2>
            <div className="prose max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 mb-6">
                Alchemer, previously known as SurveyGizmo, is a leading enterprise feedback management platform that helps organizations transform customer and employee feedback into actionable insights. The platform combines the ease of use that made SurveyGizmo popular with enterprise-grade features suitable for large organizations.
              </p>
              <div className="grid md:grid-cols-2 gap-8 mt-12">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">Enterprise Solutions</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <Star className="h-5 w-5 text-blue-600 mr-2" />
                      <span>Advanced survey capabilities</span>
                    </li>
                    <li className="flex items-center">
                      <Lock className="h-5 w-5 text-blue-600 mr-2" />
                      <span>SSA compliance and security</span>
                    </li>
                    <li className="flex items-center">
                      <Users className="h-5 w-5 text-blue-600 mr-2" />
                      <span>Multi-user collaboration</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">Integration & Support</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <BarChart3 className="h-5 w-5 text-blue-600 mr-2" />
                      <span>Advanced analytics tools</span>
                    </li>
                    <li className="flex items-center">
                      <Search className="h-5 w-5 text-blue-600 mr-2" />
                      <span>Custom reporting options</span>
                    </li>
                    <li className="flex items-center">
                      <ThumbsUp className="h-5 w-5 text-blue-600 mr-2" />
                      <span>24/7 customer support</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Alchemer Pricing & Plans</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <DollarSign className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Collaborator</h3>
                <p className="text-gray-600 mb-4">Perfect for small teams and individual researchers</p>
                <a href="https://thealchemer.com" className="text-blue-600 hover:text-blue-700">View Pricing →</a>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <Users className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Professional</h3>
                <p className="text-gray-600 mb-4">Ideal for growing organizations and departments</p>
                <a href="https://thealchemer.com" className="text-blue-600 hover:text-blue-700">View Pricing →</a>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <Star className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Enterprise</h3>
                <p className="text-gray-600 mb-4">Full-featured solution for large organizations</p>
                <a href="https://thealchemer.com" className="text-blue-600 hover:text-blue-700">View Pricing →</a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">From SurveyGizmo to Alchemer: A Journey</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80"
                  alt="Business Evolution"
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="space-y-6">
                <div className="flex items-start">
                  <History className="h-6 w-6 text-blue-600 mr-4 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Brand Evolution</h3>
                    <p className="text-gray-600">The transformation from SurveyGizmo to Alchemer reflects the platform's growth into a comprehensive enterprise solution.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Lock className="h-6 w-6 text-blue-600 mr-4 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Enhanced Security</h3>
                    <p className="text-gray-600">Alchemer provides SSA compliance and enterprise-grade security features for sensitive data handling.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <BarChart3 className="h-6 w-6 text-blue-600 mr-4 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Advanced Analytics</h3>
                    <p className="text-gray-600">Powerful data analysis tools that transform responses into actionable business insights.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-blue-600">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Data Collection?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Join thousands of organizations using Alchemer for their survey and feedback needs
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="https://thealchemer.com/login"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 transition-colors"
              >
                Login to Alchemer <ExternalLink className="ml-2 h-5 w-5" />
              </a>
              <a
                href="https://thealchemer.com"
                className="inline-flex items-center px-6 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-blue-700 transition-colors"
              >
                Learn More <ExternalLink className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <ClipboardCheck className="h-6 w-6" />
                <span className="text-lg font-semibold">SurveyInsights</span>
              </div>
              <p className="text-gray-400">Your trusted source for information about Alchemer and survey platforms.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="https://thealchemer.com/login" className="text-gray-400 hover:text-white transition-colors">
                    Alchemer Login
                  </a>
                </li>
                <li>
                  <a href="https://thealchemer.com" className="text-gray-400 hover:text-white transition-colors">
                    Pricing Plans
                  </a>
                </li>
                <li>
                  <a href="https://thealchemer.com" className="text-gray-400 hover:text-white transition-colors">
                    About Alchemer
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Powered By</h3>
              <a href="https://thealchemer.com" className="text-gray-400 hover:text-white transition-colors flex items-center">
                TheAlchemer <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;