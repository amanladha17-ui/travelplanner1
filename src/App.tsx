import React, { useState } from 'react';
import { 
  Search, 
  MapPin, 
  Clock, 
  DollarSign, 
  Plane, 
  Train, 
  Bus, 
  Navigation,
  Star,
  Calendar,
  Users,
  ExternalLink,
  Coffee,
  Camera,
  Utensils,
  Map,
  Thermometer,
  CreditCard,
  Info
} from 'lucide-react';

interface RouteOption {
  id: string;
  type: 'flight' | 'train' | 'bus' | 'local';
  price: number;
  duration: string;
  departure: string;
  arrival: string;
  provider: string;
}

interface LayoverActivity {
  id: string;
  name: string;
  type: 'food' | 'attraction' | 'shopping';
  duration: string;
  distance: string;
  rating: number;
}

interface DestinationInfo {
  name: string;
  attractions: string[];
  culture: string[];
  tips: string[];
  weather: string;
  currency: string;
  transport: string;
}

function App() {
  const [searchFrom, setSearchFrom] = useState('');
  const [searchTo, setSearchTo] = useState('');
  const [travelDate, setTravelDate] = useState('');
  const [passengers, setPassengers] = useState(1);
  const [selectedTransport, setSelectedTransport] = useState<string[]>(['flight', 'train', 'bus']);

  // Mock data for demonstration
  const routeOptions: RouteOption[] = [
    {
      id: '1',
      type: 'flight',
      price: 24999,
      duration: '2h 45m',
      departure: '08:30',
      arrival: '11:15',
      provider: 'Airlines Direct'
    },
    {
      id: '2',
      type: 'train',
      price: 7499,
      duration: '4h 20m',
      departure: '09:15',
      arrival: '13:35',
      provider: 'Rail Connect'
    },
    {
      id: '3',
      type: 'bus',
      price: 3799,
      duration: '6h 15m',
      departure: '07:00',
      arrival: '13:15',
      provider: 'Express Coach'
    }
  ];

  const layoverActivities: LayoverActivity[] = [
    {
      id: '1',
      name: 'Local Food Market',
      type: 'food',
      duration: '1-2 hours',
      distance: '15 min from airport',
      rating: 4.5
    },
    {
      id: '2',
      name: 'City Center Walking Tour',
      type: 'attraction',
      duration: '2-3 hours',
      distance: '25 min from airport',
      rating: 4.7
    },
    {
      id: '3',
      name: 'Shopping District',
      type: 'shopping',
      duration: '1-3 hours',
      distance: '20 min from airport',
      rating: 4.2
    }
  ];

  const destinationGuide: DestinationInfo = {
    name: 'Mumbai, India',
    attractions: ['Gateway of India', 'Marine Drive', 'Chhatrapati Shivaji Terminus', 'Elephanta Caves'],
    culture: ['Bollywood hub', 'Street food culture', 'Financial capital', 'Diverse communities'],
    tips: ['Try local street food', 'Use Mumbai local trains', 'Bargain at markets'],
    weather: 'Tropical climate, monsoons June-September',
    currency: 'Indian Rupee (₹)',
    transport: 'Local trains, buses, auto-rickshaws'
  };

  const getTransportIcon = (type: string) => {
    switch (type) {
      case 'flight': return <Plane className="w-5 h-5" />;
      case 'train': return <Train className="w-5 h-5" />;
      case 'bus': return <Bus className="w-5 h-5" />;
      case 'local': return <Navigation className="w-5 h-5" />;
      default: return <MapPin className="w-5 h-5" />;
    }
  };

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'food': return <Utensils className="w-5 h-5" />;
      case 'attraction': return <Camera className="w-5 h-5" />;
      case 'shopping': return <Coffee className="w-5 h-5" />;
      default: return <MapPin className="w-5 h-5" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <MapPin className="w-8 h-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">TravelUnify</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#search" className="text-gray-700 hover:text-blue-600 transition-colors">Plan Route</a>
              <a href="#compare" className="text-gray-700 hover:text-blue-600 transition-colors">Compare Costs</a>
              <a href="#layovers" className="text-gray-700 hover:text-blue-600 transition-colors">Layover Ideas</a>
              <a href="#guides" className="text-gray-700 hover:text-blue-600 transition-colors">Destination Guides</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-teal-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Plan Your Perfect Journey
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            All your travel needs in one place - routes, costs, layovers, and destination guides
          </p>
        </div>
      </section>

      {/* Main Search Section */}
      <section id="search" className="py-12 -mt-8 relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Multi-Modal Route Planning</h3>
            
            {/* Search Form */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">From</label>
                <input
                  type="text"
                  value={searchFrom}
                  onChange={(e) => setSearchFrom(e.target.value)}
                  placeholder="Enter departure city"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">To</label>
                <input
                  type="text"
                  value={searchTo}
                  onChange={(e) => setSearchTo(e.target.value)}
                  placeholder="Enter destination city"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
                <input
                  type="date"
                  value={travelDate}
                  onChange={(e) => setTravelDate(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Passengers</label>
                <select
                  value={passengers}
                  onChange={(e) => setPassengers(Number(e.target.value))}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                >
                  {[1, 2, 3, 4, 5, 6].map(num => (
                    <option key={num} value={num}>{num} {num === 1 ? 'Passenger' : 'Passengers'}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Transport Type Selection */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-3">Transport Options</label>
              <div className="flex flex-wrap gap-3">
                {[
                  { key: 'flight', label: 'Flights', icon: Plane },
                  { key: 'train', label: 'Trains', icon: Train },
                  { key: 'bus', label: 'Buses', icon: Bus },
                  { key: 'local', label: 'Local Transit', icon: Navigation }
                ].map(({ key, label, icon: Icon }) => (
                  <button
                    key={key}
                    onClick={() => {
                      if (selectedTransport.includes(key)) {
                        setSelectedTransport(selectedTransport.filter(t => t !== key));
                      } else {
                        setSelectedTransport([...selectedTransport, key]);
                      }
                    }}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg border transition-all ${
                      selectedTransport.includes(key)
                        ? 'bg-blue-50 border-blue-500 text-blue-700'
                        : 'bg-white border-gray-300 text-gray-700 hover:border-gray-400'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{label}</span>
                  </button>
                ))}
              </div>
            </div>

            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center space-x-2">
              <Search className="w-5 h-5" />
              <span>Search Routes</span>
            </button>
          </div>
        </div>
      </section>

      {/* Cost Comparison Section */}
      <section id="compare" className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Cost Comparison & Booking</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {routeOptions.map((option) => (
              <div key={option.id} className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    {getTransportIcon(option.type)}
                    <span className="font-medium text-gray-900 capitalize">{option.type}</span>
                  </div>
                  <span className="text-2xl font-bold text-blue-600">₹{option.price}</span>
                </div>
                
                <div className="space-y-2 mb-6">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-600">{option.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-gray-600">{option.departure} - {option.arrival}</span>
                  </div>
                  <div className="text-sm text-gray-500">{option.provider}</div>
                </div>
                
                <button className="w-full bg-teal-600 hover:bg-teal-700 text-white font-medium py-2 px-4 rounded-lg transition-colors flex items-center justify-center space-x-2">
                  <ExternalLink className="w-4 h-4" />
                  <span>Book Now</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Layover Suggestions Section */}
      <section id="layovers" className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Make the Most of Your Layovers</h3>
            <p className="text-lg text-gray-600">Discover activities and experiences near your layover destinations</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="flex items-center space-x-2 mb-6">
              <Clock className="w-6 h-6 text-orange-600" />
              <h4 className="text-xl font-semibold text-gray-900">Layover in Delhi (4h 30m)</h4>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {layoverActivities.map((activity) => (
                <div key={activity.id} className="border border-gray-200 rounded-lg p-6 hover:border-orange-300 transition-colors">
                  <div className="flex items-center space-x-3 mb-4">
                    {getActivityIcon(activity.type)}
                    <h5 className="font-semibold text-gray-900">{activity.name}</h5>
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-600">{activity.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-600">{activity.distance}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="text-sm text-gray-600">{activity.rating}/5</span>
                    </div>
                  </div>
                  
                  <button className="text-orange-600 hover:text-orange-700 font-medium text-sm">
                    Learn More →
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Destination Guide Section */}
      <section id="guides" className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Destination Guide</h3>
          
          <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-xl p-8">
            <div className="flex items-center space-x-3 mb-8">
              <MapPin className="w-8 h-8 text-blue-600" />
              <h4 className="text-2xl font-bold text-gray-900">{destinationGuide.name}</h4>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Attractions */}
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <Camera className="w-5 h-5 text-teal-600" />
                  <h5 className="font-semibold text-gray-900">Top Attractions</h5>
                </div>
                <ul className="space-y-2">
                  {destinationGuide.attractions.map((attraction, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                      <span className="text-gray-700">{attraction}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Culture */}
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <Users className="w-5 h-5 text-teal-600" />
                  <h5 className="font-semibold text-gray-900">Local Culture</h5>
                </div>
                <ul className="space-y-2">
                  {destinationGuide.culture.map((item, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Travel Tips */}
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <Info className="w-5 h-5 text-teal-600" />
                  <h5 className="font-semibold text-gray-900">Travel Tips</h5>
                </div>
                <ul className="space-y-2">
                  {destinationGuide.tips.map((tip, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                      <span className="text-gray-700">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* Quick Info */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 pt-8 border-t border-gray-200">
              <div className="flex items-center space-x-3">
                <Thermometer className="w-5 h-5 text-orange-600" />
                <div>
                  <span className="font-medium text-gray-900">Weather:</span>
                  <p className="text-gray-600">{destinationGuide.weather}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <CreditCard className="w-5 h-5 text-orange-600" />
                <div>
                  <span className="font-medium text-gray-900">Currency:</span>
                  <p className="text-gray-600">{destinationGuide.currency}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Map className="w-5 h-5 text-orange-600" />
                <div>
                  <span className="font-medium text-gray-900">Local Transport:</span>
                  <p className="text-gray-600">{destinationGuide.transport}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <MapPin className="w-6 h-6 text-blue-400" />
                <h5 className="text-lg font-semibold">TravelUnify</h5>
              </div>
              <p className="text-gray-400">
                Your unified travel planning platform. Plan smarter, travel better.
              </p>
            </div>
            
            <div>
              <h6 className="font-semibold mb-4">Features</h6>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Route Planning</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cost Comparison</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Layover Ideas</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Travel Guides</a></li>
              </ul>
            </div>
            
            <div>
              <h6 className="font-semibold mb-4">Support</h6>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Travel Tips</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>
            
            <div>
              <h6 className="font-semibold mb-4">Company</h6>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 TravelUnify. All rights reserved. Phase 1 - Core Platform</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;