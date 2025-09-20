// Enhanced Application Data with all new features
const appData = {
  "touristProfiles": [
    {
      "id": "DID001",
      "name": "Arjun Sharma",
      "email": "arjun.sharma@email.com",
      "phone": "+91-9876543210",
      "photo": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      "documentType": "Aadhaar",
      "documentNumber": "1234-5678-9012",
      "visitDuration": "7 days",
      "checkInDate": "2025-09-15",
      "checkOutDate": "2025-09-22",
      "safetyScore": 85,
      "currentLocation": {"lat": 15.2993, "lng": 74.1240, "address": "Goa Beach Resort"},
      "status": "active",
      "emergencyContact": "+91-9876543210",
      "travelInsurance": "TI-2025-001",
      "medicalConditions": "None",
      "bloodGroup": "O+",
      "nationality": "Indian",
      "preferredLanguage": "English"
    },
    {
      "id": "DID002", 
      "name": "Priya Patel",
      "email": "priya.patel@email.com",
      "phone": "+91-9876543211",
      "photo": "https://images.unsplash.com/photo-1494790108755-2616b613905b?w=150&h=150&fit=crop&crop=face",
      "documentType": "Passport",
      "documentNumber": "P1234567",
      "visitDuration": "10 days",
      "checkInDate": "2025-09-12",
      "checkOutDate": "2025-09-22",
      "safetyScore": 92,
      "currentLocation": {"lat": 26.9124, "lng": 75.7873, "address": "Jaipur City Palace"},
      "status": "active",
      "emergencyContact": "+91-9876543211",
      "travelInsurance": "TI-2025-002",
      "medicalConditions": "Diabetes",
      "bloodGroup": "A+",
      "nationality": "Indian",
      "preferredLanguage": "Hindi"
    },
    {
      "id": "DID003",
      "name": "Rajesh Kumar", 
      "email": "rajesh.kumar@email.com",
      "phone": "+91-9876543212",
      "photo": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      "documentType": "Aadhaar",
      "documentNumber": "5678-9012-3456",
      "visitDuration": "5 days",
      "checkInDate": "2025-09-17",
      "checkOutDate": "2025-09-22",
      "safetyScore": 78,
      "currentLocation": {"lat": 9.9312, "lng": 76.2673, "address": "Kochi Backwaters"},
      "status": "alert",
      "emergencyContact": "+91-9876543212",
      "travelInsurance": "TI-2025-003",
      "medicalConditions": "Hypertension",
      "bloodGroup": "B+",
      "nationality": "Indian",
      "preferredLanguage": "English"
    }
  ],
  "safeZones": [
    {"lat": 15.2993, "lng": 74.1240, "name": "Goa Beach Resort Area", "radius": 2000, "type": "safe", "safetyLevel": 95},
    {"lat": 26.9124, "lng": 75.7873, "name": "Jaipur Historic District", "radius": 1500, "type": "safe", "safetyLevel": 90},
    {"lat": 28.6139, "lng": 77.2090, "name": "Delhi Tourism Zone", "radius": 2500, "type": "safe", "safetyLevel": 88},
    {"lat": 19.0760, "lng": 72.8777, "name": "Mumbai Gateway Area", "radius": 1800, "type": "caution", "safetyLevel": 75}
  ],
  "dangerZones": [
    {"lat": 9.9312, "lng": 76.2673, "name": "Remote Forest Area - Kochi", "radius": 3000, "type": "danger", "safetyLevel": 35, "restrictions": ["No solo travel", "Daylight hours only", "Guide required"]},
    {"lat": 15.3200, "lng": 74.0800, "name": "Isolated Beach Stretch", "radius": 1200, "type": "danger", "safetyLevel": 40, "restrictions": ["Avoid after sunset", "Travel in groups"]},
    {"lat": 26.8500, "lng": 75.6000, "name": "Desert Remote Area", "radius": 5000, "type": "danger", "safetyLevel": 30, "restrictions": ["Professional guide required", "Emergency kit mandatory"]}
  ],
  "cautionZones": [
    {"lat": 15.2800, "lng": 74.1500, "name": "Goa Nightlife District", "radius": 800, "type": "caution", "safetyLevel": 65, "warnings": ["High crowd density", "Pickpocket risk"]},
    {"lat": 26.9000, "lng": 75.8200, "name": "Jaipur Market Area", "radius": 600, "type": "caution", "safetyLevel": 70, "warnings": ["Traffic congestion", "Vendor harassment"]}
  ],
  "incidents": [
    {
      "id": "INC001",
      "type": "SOS",
      "touristId": "DID003",
      "touristName": "Rajesh Kumar",
      "location": {"lat": 9.9312, "lng": 76.2673, "address": "Kochi Backwaters"},
      "timestamp": "2025-09-19T20:15:00Z",
      "status": "active",
      "priority": "critical",
      "description": "Tourist triggered emergency SOS - Lost in forest area",
      "assignedOfficer": "Officer Menon",
      "responseTime": "8 minutes",
      "eFIRGenerated": true,
      "eFIRNumber": "FIR-2025-001",
      "additionalInfo": "Tourist went off marked trail, phone battery low"
    },
    {
      "id": "INC002",
      "type": "geo-fence-breach",
      "touristId": "DID001", 
      "touristName": "Arjun Sharma",
      "location": {"lat": 15.3100, "lng": 74.0900, "address": "Near Isolated Beach"},
      "timestamp": "2025-09-19T19:45:00Z",
      "status": "resolved",
      "priority": "medium",
      "description": "Tourist approached danger zone boundary",
      "assignedOfficer": "Officer Singh",
      "responseTime": "3 minutes",
      "resolution": "Tourist warned and redirected to safe area"
    }
  ],
  "weatherAlerts": [
    {
      "location": "Goa",
      "condition": "Heavy Rain Warning",
      "severity": "moderate",
      "validUntil": "2025-09-20T06:00:00Z",
      "recommendations": ["Avoid beach activities", "Carry umbrella", "Check road conditions"]
    },
    {
      "location": "Rajasthan",
      "condition": "Dust Storm Alert",
      "severity": "high", 
      "validUntil": "2025-09-19T23:00:00Z",
      "recommendations": ["Stay indoors", "Wear protective mask", "Avoid outdoor activities"]
    }
  ],
  "emergencyServices": [
    {"name": "Police", "number": "100", "type": "emergency"},
    {"name": "Medical Emergency", "number": "108", "type": "emergency"},
    {"name": "Fire Service", "number": "101", "type": "emergency"},
    {"name": "Tourist Helpline", "number": "1363", "type": "support"},
    {"name": "Women Helpline", "number": "181", "type": "support"},
    {"name": "Disaster Management", "number": "1070", "type": "emergency"}
  ],
  "iotDevices": [
    {
      "deviceId": "IOT001",
      "touristId": "DID003",
      "type": "Smart Band",
      "status": "active",
      "batteryLevel": 65,
      "lastPing": "2025-09-19T20:30:00Z",
      "vitals": {"heartRate": 85, "temperature": 98.6, "steps": 12500}
    },
    {
      "deviceId": "IOT002", 
      "touristId": "DID001",
      "type": "Smart Tag",
      "status": "active",
      "batteryLevel": 80,
      "lastPing": "2025-09-19T20:32:00Z",
      "location": {"lat": 15.2993, "lng": 74.1240}
    }
  ],
  "culturalInfo": {
    "goa": {
      "guidelines": ["Respect local customs", "Dress modestly at religious sites", "Be aware of tides"],
      "emergencyPhrase": "मुझे मदद चाहिए (I need help)",
      "localContacts": ["+91-832-2458166"]
    },
    "rajasthan": {
      "guidelines": ["Carry water", "Dress for heat", "Respect traditions"],
      "emergencyPhrase": "मुझे सहायता चाहिए (I need assistance)", 
      "localContacts": ["+91-141-5110598"]
    }
  },
  "tourismStats": {
    "totalTourists": 1847,
    "activeTourists": 1254,
    "totalAlerts": 67,
    "resolvedIncidents": 58,
    "averageSafetyScore": 86.4,
    "responseTimeAvg": "4.2 minutes",
    "popularDestinations": [
      {"name": "Goa", "visitors": 445, "safetyRating": 4.8, "incidentRate": 0.02},
      {"name": "Rajasthan", "visitors": 389, "safetyRating": 4.6, "incidentRate": 0.03}, 
      {"name": "Kerala", "visitors": 278, "safetyRating": 4.4, "incidentRate": 0.05},
      {"name": "Delhi", "visitors": 567, "safetyRating": 4.2, "incidentRate": 0.04}
    ]
  }
};

// Application State
let currentUser = null;
let currentTheme = 'light';
let currentLanguage = 'EN';
let maps = {};
let charts = {};
let realTimeInterval = null;
let notifications = [];
let sosTimer = null;

// Initialize Application
document.addEventListener('DOMContentLoaded', function() {
    console.log('SafeTrip Enhanced Application Initializing...');
    
    // Initialize theme
    initializeTheme();
    
    // Setup all event listeners
    setupEventListeners();
    
    // Initialize particles
    initializeParticles();
    
    // Show landing page with animation
    showPage('landing-page');
    
    // Add loading class removal
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 500);
    
    console.log('SafeTrip Enhanced Application Ready');
});

// Theme Management
function initializeTheme() {
    const savedTheme = localStorage.getItem('safetrip-theme') || 'light';
    currentTheme = savedTheme;
    document.body.setAttribute('data-theme', currentTheme);
}

function toggleTheme() {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.body.setAttribute('data-theme', currentTheme);
    localStorage.setItem('safetrip-theme', currentTheme);
    
    // Add transition animation
    document.body.style.transition = 'background-color 0.3s ease, color 0.3s ease';
    setTimeout(() => {
        document.body.style.transition = '';
    }, 300);
}

// Particle Animation
function initializeParticles() {
    const particles = document.querySelectorAll('.particle');
    particles.forEach((particle, index) => {
        // Random positioning
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        
        // Random delay
        particle.style.animationDelay = Math.random() * 6 + 's';
    });
}

// Navigation Functions with Animation
function showPage(pageId, animate = true) {
    const currentPage = document.querySelector('.page.active');
    const targetPage = document.getElementById(pageId);
    
    if (!targetPage) {
        console.error('Target page not found:', pageId);
        return;
    }
    
    if (currentPage) {
        if (animate) {
            currentPage.style.animation = 'fadeOut 0.3s ease-out';
            setTimeout(() => {
                currentPage.classList.remove('active');
                targetPage.classList.add('active');
                targetPage.style.animation = 'fadeInUp 0.4s ease-out';
            }, 300);
        } else {
            currentPage.classList.remove('active');
            targetPage.classList.add('active');
        }
    } else {
        targetPage.classList.add('active');
        if (animate) {
            targetPage.style.animation = 'fadeInUp 0.4s ease-out';
        }
    }
}

function showSignup() {
    showPage('signup-page');
}

function showTouristLogin() {
    showPage('tourist-login');
}

function showAuthorityLogin() {
    showPage('authority-login');
}

function showLanding() {
    showPage('landing-page');
}

function logout() {
    currentUser = null;
    if (realTimeInterval) {
        clearInterval(realTimeInterval);
    }
    
    // Clear maps
    Object.values(maps).forEach(map => {
        if (map.remove) map.remove();
    });
    maps = {};
    
    // Clear charts
    Object.values(charts).forEach(chart => {
        if (chart.destroy) chart.destroy();
    });
    charts = {};
    
    showPage('landing-page');
}

// Authentication Functions
function authenticateTourist(id, document) {
    const tourist = appData.touristProfiles.find(t => 
        t.id === id && t.documentNumber === document
    );
    
    if (tourist) {
        currentUser = { ...tourist, type: 'tourist' };
        return true;
    }
    return false;
}

function authenticateAuthority(officerId, department) {
    if (officerId && department) {
        currentUser = { 
            id: officerId, 
            department: department, 
            type: 'authority',
            name: `Officer ${officerId}`
        };
        return true;
    }
    return false;
}

// Tourist Dashboard Functions
function initTouristDashboard() {
    if (!currentUser || currentUser.type !== 'tourist') return;
    
    console.log('Initializing enhanced tourist dashboard for:', currentUser.name);
    
    // Update all UI elements
    updateDigitalIDCard();
    updateSafetyScore(currentUser.safetyScore);
    updateLocationStatus();
    updateHealthMetrics();
    updateWeatherAlerts();
    
    // Initialize maps and components
    setTimeout(() => {
        initTouristMap();
        initTripPlanner();
    }, 100);
    
    // Load data
    loadTouristAlerts();
    loadCulturalInfo();
    
    // Start real-time updates
    startRealTimeUpdates();
    
    // Show welcome notification
    showNotification('Welcome to SafeTrip!', 'Your safety monitoring is now active.', 'success');
}

function updateDigitalIDCard() {
    const elements = {
        photo: document.getElementById('tourist-photo'),
        navPhoto: document.getElementById('nav-profile-photo'),
        name: document.getElementById('tourist-name'),
        id: document.getElementById('tourist-digital-id'),
        document: document.getElementById('tourist-document'),
        duration: document.getElementById('tourist-duration'),
        insurance: document.getElementById('tourist-insurance'),
        address: document.getElementById('current-address')
    };
    
    if (elements.photo) elements.photo.src = currentUser.photo;
    if (elements.navPhoto) elements.navPhoto.src = currentUser.photo;
    if (elements.name) elements.name.textContent = currentUser.name;
    if (elements.id) elements.id.textContent = currentUser.id;
    if (elements.document) elements.document.textContent = `${currentUser.documentType}: ${currentUser.documentNumber}`;
    if (elements.duration) elements.duration.textContent = currentUser.visitDuration;
    if (elements.insurance) elements.insurance.textContent = currentUser.travelInsurance || 'N/A';
    if (elements.address) elements.address.textContent = currentUser.currentLocation.address;
}

function updateSafetyScore(score) {
    const meterFill = document.getElementById('safety-meter');
    const scoreElement = document.getElementById('safety-score');
    const statusElement = document.getElementById('safety-status');
    
    if (scoreElement) {
        animateNumber(scoreElement, parseInt(scoreElement.textContent) || 0, score, 1500);
    }
    
    if (meterFill) {
        const percentage = score;
        let color;
        if (score >= 80) color = 'var(--color-success)';
        else if (score >= 60) color = 'var(--color-warning)';
        else color = 'var(--color-error)';
        
        setTimeout(() => {
            meterFill.style.background = `conic-gradient(${color} 0deg, ${color} ${percentage * 3.6}deg, var(--color-secondary) ${percentage * 3.6}deg)`;
        }, 500);
    }
    
    if (statusElement) {
        let status, className;
        if (score >= 80) {
            status = 'Safe';
            className = 'safe';
        } else if (score >= 60) {
            status = 'Caution';
            className = 'caution';
        } else {
            status = 'Danger';
            className = 'danger';
        }
        
        statusElement.textContent = status;
        statusElement.className = `safety-status ${className}`;
    }
}

function updateLocationStatus() {
    const zoneStatus = document.getElementById('current-zone-status');
    const zoneName = document.getElementById('zone-name');
    
    if (!zoneStatus || !zoneName) return;
    
    // Determine current zone based on location
    const currentLoc = currentUser.currentLocation;
    let zone = determineCurrentZone(currentLoc.lat, currentLoc.lng);
    
    zoneStatus.className = `zone-status ${zone.type}`;
    zoneName.textContent = zone.name;
}

function determineCurrentZone(lat, lng) {
    // Check if in safe zone
    for (let zone of appData.safeZones) {
        if (calculateDistance(lat, lng, zone.lat, zone.lng) < (zone.radius / 1000)) {
            return {type: 'safe', name: zone.name};
        }
    }
    
    // Check if in danger zone
    for (let zone of appData.dangerZones) {
        if (calculateDistance(lat, lng, zone.lat, zone.lng) < (zone.radius / 1000)) {
            return {type: 'danger', name: zone.name};
        }
    }
    
    // Check if in caution zone
    for (let zone of appData.cautionZones) {
        if (calculateDistance(lat, lng, zone.lat, zone.lng) < (zone.radius / 1000)) {
            return {type: 'caution', name: zone.name};
        }
    }
    
    return {type: 'safe', name: 'General Area'};
}

function updateHealthMetrics() {
    const device = appData.iotDevices.find(d => d.touristId === currentUser.id);
    if (!device || !device.vitals) return;
    
    const heartRateEl = document.getElementById('heart-rate');
    const tempEl = document.getElementById('body-temp');
    const stepsEl = document.getElementById('step-count');
    
    if (heartRateEl) animateNumber(heartRateEl, 60, device.vitals.heartRate, 1000);
    if (tempEl) tempEl.textContent = device.vitals.temperature;
    if (stepsEl) animateNumber(stepsEl, 0, device.vitals.steps, 2000);
}

function updateWeatherAlerts() {
    const weatherAlertsContainer = document.getElementById('weather-alerts');
    if (!weatherAlertsContainer) return;
    
    weatherAlertsContainer.innerHTML = '';
    
    appData.weatherAlerts.forEach(alert => {
        if (isAlertRelevant(alert)) {
            const alertEl = document.createElement('div');
            alertEl.className = `weather-alert ${alert.severity}`;
            alertEl.innerHTML = `
                <div class="alert-icon">
                    <i class="fas fa-exclamation-triangle"></i>
                </div>
                <div class="alert-content">
                    <h5>${alert.condition}</h5>
                    <p>Valid until ${new Date(alert.validUntil).toLocaleString()}</p>
                </div>
            `;
            weatherAlertsContainer.appendChild(alertEl);
        }
    });
}

function isAlertRelevant(alert) {
    // Simple check based on current location
    const currentAddress = currentUser.currentLocation.address.toLowerCase();
    return currentAddress.includes(alert.location.toLowerCase());
}

function initTouristMap() {
    if (!currentUser) return;
    
    const mapContainer = document.getElementById('tourist-map');
    if (!mapContainer) return;
    
    mapContainer.innerHTML = '';
    
    try {
        const map = L.map('tourist-map').setView([currentUser.currentLocation.lat, currentUser.currentLocation.lng], 12);
        
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors'
        }).addTo(map);
        
        // Add current location marker
        const currentMarker = L.marker([currentUser.currentLocation.lat, currentUser.currentLocation.lng], {
            icon: L.divIcon({
                className: 'current-location-marker',
                html: '<div class="marker-pulse"><i class="fas fa-user"></i></div>',
                iconSize: [30, 30]
            })
        }).addTo(map).bindPopup(`<b>Your Location</b><br>${currentUser.currentLocation.address}`);
        
        // Add safe zones (GREEN)
        appData.safeZones.forEach(zone => {
            L.circle([zone.lat, zone.lng], {
                radius: zone.radius,
                color: '#22c55e',
                fillColor: '#22c55e',
                fillOpacity: 0.2,
                weight: 2
            }).addTo(map).bindPopup(`
                <b>${zone.name}</b><br>
                Type: Safe Zone<br>
                Safety Level: ${zone.safetyLevel}%
            `);
        });
        
        // Add danger zones (RED)
        appData.dangerZones.forEach(zone => {
            L.circle([zone.lat, zone.lng], {
                radius: zone.radius,
                color: '#ef4444',
                fillColor: '#ef4444',
                fillOpacity: 0.3,
                weight: 3
            }).addTo(map).bindPopup(`
                <b>${zone.name}</b><br>
                Type: Danger Zone<br>
                Safety Level: ${zone.safetyLevel}%<br>
                <b>Restrictions:</b><br>
                ${zone.restrictions ? zone.restrictions.join('<br>') : 'Use caution'}
            `);
        });
        
        // Add caution zones (YELLOW)
        appData.cautionZones.forEach(zone => {
            L.circle([zone.lat, zone.lng], {
                radius: zone.radius,
                color: '#f59e0b',
                fillColor: '#f59e0b',
                fillOpacity: 0.25,
                weight: 2
            }).addTo(map).bindPopup(`
                <b>${zone.name}</b><br>
                Type: Caution Zone<br>
                Safety Level: ${zone.safetyLevel}%<br>
                <b>Warnings:</b><br>
                ${zone.warnings ? zone.warnings.join('<br>') : 'Exercise caution'}
            `);
        });
        
        maps.tourist = map;
        
        // Center map button
        const centerBtn = document.getElementById('center-map-btn');
        if (centerBtn) {
            centerBtn.addEventListener('click', () => {
                map.setView([currentUser.currentLocation.lat, currentUser.currentLocation.lng], 14);
            });
        }
        
    } catch (error) {
        console.error('Error initializing tourist map:', error);
        mapContainer.innerHTML = '<p>Map loading failed. Please refresh the page.</p>';
    }
}

function initTripPlanner() {
    // Initialize with sample planned route
    const plannedRoutes = document.getElementById('planned-routes');
    if (!plannedRoutes) return;
    
    // Add sample routes based on current location
    const routes = [
        {
            name: "Beach Tour Circuit",
            description: "Calangute → Baga → Anjuna",
            safety: 92,
            duration: "2.5 hrs"
        },
        {
            name: "Heritage Walk",
            description: "Old Goa Churches",
            safety: 95,
            duration: "3 hrs"
        }
    ];
    
    plannedRoutes.innerHTML = '';
    routes.forEach(route => {
        const routeEl = document.createElement('div');
        routeEl.className = 'route-item';
        routeEl.innerHTML = `
            <div class="route-info">
                <h4>${route.name}</h4>
                <p>${route.description}</p>
            </div>
            <div class="route-stats">
                <span class="safety-rating good">
                    <i class="fas fa-shield-alt"></i> ${route.safety}%
                </span>
                <span class="duration">${route.duration}</span>
            </div>
        `;
        plannedRoutes.appendChild(routeEl);
    });
}

function loadTouristAlerts() {
    const alertsContainer = document.getElementById('tourist-alerts');
    if (!alertsContainer) return;
    
    alertsContainer.innerHTML = '';
    
    // Add welcome alert
    addAlertToContainer(alertsContainer, {
        type: 'info',
        title: `Welcome ${currentUser.name}!`,
        message: 'Your safety monitoring is now active.',
        time: 'Just now'
    });
    
    // Add relevant incidents for current user
    const relevantIncidents = appData.incidents.filter(incident => 
        incident.touristId === currentUser.id || incident.status === 'active'
    );
    
    relevantIncidents.forEach(incident => {
        addAlertToContainer(alertsContainer, {
            type: incident.type === 'SOS' ? 'danger' : 'warning',
            title: incident.description,
            message: `Status: ${incident.status}`,
            time: formatTime(incident.timestamp)
        });
    });
    
    // Add weather alerts
    appData.weatherAlerts.forEach(alert => {
        if (isAlertRelevant(alert)) {
            addAlertToContainer(alertsContainer, {
                type: alert.severity === 'high' ? 'danger' : 'warning',
                title: alert.condition,
                message: alert.recommendations[0],
                time: '30 min ago'
            });
        }
    });
}

function addAlertToContainer(container, alert) {
    const alertEl = document.createElement('div');
    alertEl.className = 'alert-item';
    alertEl.innerHTML = `
        <div class="alert-icon ${alert.type}">
            <i class="fas fa-${getAlertIcon(alert.type)}"></i>
        </div>
        <div class="alert-content">
            <div class="alert-title">${alert.title}</div>
            <div class="alert-message">${alert.message}</div>
            <div class="alert-time">${alert.time}</div>
        </div>
    `;
    container.appendChild(alertEl);
}

function getAlertIcon(type) {
    switch(type) {
        case 'danger': return 'exclamation-triangle';
        case 'warning': return 'exclamation-circle';
        case 'info': return 'info-circle';
        default: return 'info-circle';
    }
}

function loadCulturalInfo() {
    const cultureContainer = document.getElementById('culture-info');
    if (!cultureContainer) return;
    
    // Get cultural info based on location
    const location = currentUser.currentLocation.address.toLowerCase();
    let culturalData;
    
    if (location.includes('goa')) {
        culturalData = appData.culturalInfo.goa;
    } else if (location.includes('rajasthan') || location.includes('jaipur')) {
        culturalData = appData.culturalInfo.rajasthan;
    }
    
    if (culturalData) {
        cultureContainer.innerHTML = `
            <div class="info-section">
                <h4>Cultural Guidelines</h4>
                <ul>
                    ${culturalData.guidelines.map(guideline => `<li>${guideline}</li>`).join('')}
                </ul>
            </div>
            <div class="info-section">
                <h4>Emergency Phrase</h4>
                <div class="phrase">
                    <span class="phrase-text">${culturalData.emergencyPhrase.split('(')[0]}</span>
                    <span class="phrase-translation">${culturalData.emergencyPhrase.split('(')[1]?.replace(')', '') || 'Emergency help phrase'}</span>
                </div>
            </div>
        `;
    }
}

// Enhanced SOS Functionality
function initSOSButton() {
    const sosBtn = document.getElementById('sos-btn');
    const quickSosBtn = document.getElementById('sos-quick-btn');
    
    if (sosBtn) {
        let pressTimer;
        let isPressed = false;
        
        const startSOS = (e) => {
            e.preventDefault();
            isPressed = true;
            sosBtn.classList.add('pressing');
            
            pressTimer = setTimeout(() => {
                if (isPressed) {
                    triggerSOS();
                }
            }, 3000);
        };
        
        const cancelSOS = (e) => {
            e.preventDefault();
            isPressed = false;
            sosBtn.classList.remove('pressing');
            
            if (pressTimer) {
                clearTimeout(pressTimer);
            }
        };
        
        // Mouse events
        sosBtn.addEventListener('mousedown', startSOS);
        sosBtn.addEventListener('mouseup', cancelSOS);
        sosBtn.addEventListener('mouseleave', cancelSOS);
        
        // Touch events
        sosBtn.addEventListener('touchstart', startSOS);
        sosBtn.addEventListener('touchend', cancelSOS);
    }
    
    if (quickSosBtn) {
        quickSosBtn.addEventListener('click', triggerSOS);
    }
}

function triggerSOS() {
    console.log('SOS Triggered!');
    
    // Add new SOS incident
    const newIncident = {
        id: `INC${Date.now()}`,
        type: 'SOS',
        touristId: currentUser.id,
        touristName: currentUser.name,
        location: currentUser.currentLocation,
        timestamp: new Date().toISOString(),
        status: 'active',
        priority: 'critical',
        description: 'Emergency SOS triggered by tourist',
        assignedOfficer: 'Auto-assigned',
        responseTime: 'Calculating...'
    };
    
    appData.incidents.unshift(newIncident);
    
    // Show SOS modal
    showModal('sos-modal');
    
    // Vibrate if supported
    if ('vibrate' in navigator) {
        navigator.vibrate([200, 100, 200, 100, 200]);
    }
    
    // Show notification
    showNotification('Emergency Alert Sent!', 'Authorities have been notified of your emergency.', 'error');
    
    // Update safety score
    currentUser.safetyScore = Math.max(20, currentUser.safetyScore - 20);
    updateSafetyScore(currentUser.safetyScore);
    
    // Reload alerts
    loadTouristAlerts();
}

// Voice Assistant Simulation
function activateVoiceAssistant() {
    const voiceBtn = document.getElementById('voice-assistant-btn');
    if (!voiceBtn) return;
    
    voiceBtn.classList.add('listening');
    voiceBtn.innerHTML = '<i class="fas fa-stop"></i><span>Listening...</span>';
    
    // Simulate voice recognition
    setTimeout(() => {
        voiceBtn.classList.remove('listening');
        voiceBtn.innerHTML = '<i class="fas fa-microphone"></i><span>Voice Assistant</span>';
        
        // Simulate response
        showNotification('Voice Command Recognized', 'I heard "Where is the nearest hospital?" - Searching...', 'info');
        
        setTimeout(() => {
            showNotification('Location Found', 'Goa Medical College Hospital - 2.3 km away. Navigation started.', 'success');
        }, 2000);
    }, 3000);
}

// Government Dashboard Functions
function initGovDashboard() {
    if (!currentUser || currentUser.type !== 'authority') return;
    
    console.log('Initializing enhanced government dashboard for:', currentUser.name);
    
    // Update stats with animation
    updateGovStats();
    
    // Show overview section by default
    showGovSection('overview');
    
    // Initialize components
    setTimeout(() => {
        initGovMap();
        initDestinationsChart();
        initAnalyticsCharts();
        initActivityFeed();
    }, 200);
    
    // Load data
    loadTouristsTable();
    loadGovAlerts();
    loadGeofencesList();
    loadEFirList();
    loadAnomalyDetection();
    
    // Start real-time updates
    startRealTimeUpdates();
}

function updateGovStats() {
    const stats = appData.tourismStats;
    
    const elements = {
        total: document.getElementById('total-tourists'),
        active: document.getElementById('active-tourists'),
        alerts: document.getElementById('total-alerts'),
        safety: document.getElementById('avg-safety')
    };
    
    // Animate numbers
    if (elements.total) animateNumber(elements.total, 1000, stats.totalTourists, 2000);
    if (elements.active) animateNumber(elements.active, 800, stats.activeTourists, 1800);
    if (elements.alerts) animateNumber(elements.alerts, 20, stats.totalAlerts, 1500);
    if (elements.safety) animateNumber(elements.safety, 80, stats.averageSafetyScore, 2200);
}

function showGovSection(sectionName) {
    console.log('Showing government section:', sectionName);
    
    // Update menu
    document.querySelectorAll('.menu-item').forEach(item => {
        item.classList.remove('active');
    });
    
    const activeMenuItem = document.querySelector(`[data-section="${sectionName}"]`);
    if (activeMenuItem) {
        activeMenuItem.classList.add('active');
    }
    
    // Update sections
    document.querySelectorAll('.gov-section').forEach(section => {
        section.classList.remove('active');
    });
    
    const targetSection = document.getElementById(`${sectionName}-section`);
    if (targetSection) {
        targetSection.classList.add('active');
    }
    
    // Initialize section-specific content
    setTimeout(() => {
        switch (sectionName) {
            case 'overview':
                if (!maps.gov) initGovMap();
                if (!charts.destinations) initDestinationsChart();
                initActivityFeed();
                break;
            case 'analytics':
                initAnalyticsCharts();
                break;
            case 'geofences':
                initGeofenceMap();
                break;
        }
    }, 100);
}

function initGovMap() {
    const mapContainer = document.getElementById('gov-map');
    if (!mapContainer || maps.gov) return;
    
    try {
        const map = L.map('gov-map').setView([20.5937, 78.9629], 5);
        
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors'
        }).addTo(map);
        
        // Add tourist clusters
        appData.tourismStats.popularDestinations.forEach(destination => {
            let lat, lng;
            
            // Map destination names to coordinates
            switch(destination.name) {
                case 'Goa': lat = 15.2993; lng = 74.1240; break;
                case 'Rajasthan': lat = 26.9124; lng = 75.7873; break;
                case 'Kerala': lat = 9.9312; lng = 76.2673; break;
                case 'Delhi': lat = 28.6139; lng = 77.2090; break;
                default: lat = 20.5937; lng = 78.9629;
            }
            
            // Create cluster marker
            const markerSize = Math.sqrt(destination.visitors) * 3;
            L.circleMarker([lat, lng], {
                radius: markerSize,
                fillColor: '#1FB8CD',
                color: '#1FB8CD',
                weight: 2,
                opacity: 0.8,
                fillOpacity: 0.6
            }).addTo(map).bindPopup(`
                <b>${destination.name}</b><br>
                Visitors: ${destination.visitors}<br>
                Safety Rating: ${destination.safetyRating}/5<br>
                Incident Rate: ${destination.incidentRate}%
            `);
        });
        
        // Add active incidents
        appData.incidents.forEach(incident => {
            if (incident.status === 'active') {
                L.marker([incident.location.lat, incident.location.lng], {
                    icon: L.divIcon({
                        className: 'alert-marker',
                        html: '<i class="fas fa-exclamation-triangle" style="color: #ef4444; font-size: 16px;"></i>',
                        iconSize: [20, 20]
                    })
                }).addTo(map).bindPopup(`
                    <b>Active Incident</b><br>
                    Tourist: ${incident.touristName}<br>
                    Type: ${incident.type}<br>
                    Priority: ${incident.priority}
                `);
            }
        });
        
        maps.gov = map;
    } catch (error) {
        console.error('Error initializing government map:', error);
        mapContainer.innerHTML = '<p>Map loading failed. Please refresh the page.</p>';
    }
}

function initDestinationsChart() {
    const ctx = document.getElementById('destinations-chart');
    if (!ctx || charts.destinations) return;
    
    try {
        const destinations = appData.tourismStats.popularDestinations;
        
        charts.destinations = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: destinations.map(d => d.name),
                datasets: [{
                    label: 'Visitors',
                    data: destinations.map(d => d.visitors),
                    backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5'],
                    borderColor: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5'],
                    borderWidth: 1,
                    borderRadius: 8,
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: {
                            color: 'rgba(0, 0, 0, 0.1)'
                        }
                    },
                    x: {
                        grid: {
                            display: false
                        }
                    }
                },
                animation: {
                    duration: 2000,
                    easing: 'easeInOutQuart'
                }
            }
        });
    } catch (error) {
        console.error('Error initializing destinations chart:', error);
    }
}

function initAnalyticsCharts() {
    // Safety Trends Chart
    const trendsCtx = document.getElementById('safety-trends-chart');
    if (trendsCtx && !charts.safetyTrends) {
        try {
            charts.safetyTrends = new Chart(trendsCtx, {
                type: 'line',
                data: {
                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                    datasets: [{
                        label: 'Average Safety Score',
                        data: [82, 85, 83, 86, 88, 86],
                        borderColor: '#1FB8CD',
                        backgroundColor: 'rgba(31, 184, 205, 0.1)',
                        fill: true,
                        tension: 0.4,
                        pointBackgroundColor: '#1FB8CD',
                        pointBorderColor: '#ffffff',
                        pointBorderWidth: 2,
                        pointRadius: 6
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            display: false
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: false,
                            min: 75,
                            max: 95
                        }
                    },
                    animation: {
                        duration: 2000,
                        easing: 'easeInOutQuart'
                    }
                }
            });
        } catch (error) {
            console.error('Error initializing safety trends chart:', error);
        }
    }
    
    // Incident Types Chart
    const incidentCtx = document.getElementById('incident-types-chart');
    if (incidentCtx && !charts.incidentTypes) {
        try {
            charts.incidentTypes = new Chart(incidentCtx, {
                type: 'doughnut',
                data: {
                    labels: ['Theft', 'Lost Tourist', 'Medical', 'Harassment', 'Other'],
                    datasets: [{
                        data: [12, 8, 5, 3, 7],
                        backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F'],
                        borderWidth: 0,
                        hoverBorderWidth: 3,
                        hoverBorderColor: '#ffffff'
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            position: 'right'
                        }
                    },
                    animation: {
                        duration: 2000,
                        easing: 'easeInOutQuart'
                    }
                }
            });
        } catch (error) {
            console.error('Error initializing incident types chart:', error);
        }
    }
}

function initActivityFeed() {
    const feedContainer = document.getElementById('activity-feed');
    if (!feedContainer) return;
    
    const activities = [
        {
            type: 'incident',
            message: 'New SOS alert from Rajesh Kumar in Kochi',
            time: '2 minutes ago',
            icon: 'exclamation-triangle',
            severity: 'high'
        },
        {
            type: 'geofence',
            message: 'Tourist entered restricted area in Goa',
            time: '15 minutes ago',
            icon: 'map-marked-alt',
            severity: 'medium'
        },
        {
            type: 'system',
            message: 'IoT device battery low for DID001',
            time: '1 hour ago',
            icon: 'battery-quarter',
            severity: 'low'
        },
        {
            type: 'update',
            message: 'Safety scores updated for 1,247 tourists',
            time: '2 hours ago',
            icon: 'sync-alt',
            severity: 'info'
        }
    ];
    
    feedContainer.innerHTML = '';
    activities.forEach(activity => {
        const activityEl = document.createElement('div');
        activityEl.className = 'activity-item';
        activityEl.innerHTML = `
            <div class="activity-icon ${activity.severity}">
                <i class="fas fa-${activity.icon}"></i>
            </div>
            <div class="activity-content">
                <div class="activity-message">${activity.message}</div>
                <div class="activity-time">${activity.time}</div>
            </div>
        `;
        feedContainer.appendChild(activityEl);
    });
}

function loadTouristsTable() {
    const tbody = document.getElementById('tourists-tbody');
    if (!tbody) return;
    
    tbody.innerHTML = '';
    
    appData.touristProfiles.forEach(tourist => {
        const iotDevice = appData.iotDevices.find(d => d.touristId === tourist.id);
        const zone = determineCurrentZone(tourist.currentLocation.lat, tourist.currentLocation.lng);
        
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><input type="checkbox" class="tourist-checkbox" data-tourist-id="${tourist.id}"></td>
            <td>
                <div class="tourist-info">
                    <img src="${tourist.photo}" alt="${tourist.name}" class="tourist-photo">
                    <div>
                        <div class="tourist-name">${tourist.name}</div>
                        <div class="tourist-contact">${tourist.phone}</div>
                    </div>
                </div>
            </td>
            <td>${tourist.id}</td>
            <td>${tourist.currentLocation.address}</td>
            <td><span class="zone-badge ${zone.type}">${zone.type.toUpperCase()}</span></td>
            <td>
                <div class="safety-score-mini">
                    <span class="score-value">${tourist.safetyScore}</span>
                    <div class="score-bar">
                        <div class="score-fill" style="width: ${tourist.safetyScore}%"></div>
                    </div>
                </div>
            </td>
            <td>
                <span class="iot-status ${iotDevice ? 'online' : 'offline'}">
                    <i class="fas fa-${iotDevice ? 'wifi' : 'wifi-slash'}"></i>
                    ${iotDevice ? `${iotDevice.batteryLevel}%` : 'Offline'}
                </span>
            </td>
            <td>${formatTime(new Date().toISOString())}</td>
            <td>
                <div class="action-buttons">
                    <button class="action-btn track-btn" data-tourist-id="${tourist.id}" title="Track Location">
                        <i class="fas fa-map-marker-alt"></i>
                    </button>
                    <button class="action-btn contact-btn" data-tourist-id="${tourist.id}" title="Contact Tourist">
                        <i class="fas fa-phone"></i>
                    </button>
                    <button class="action-btn alert-btn" data-tourist-id="${tourist.id}" title="Send Alert">
                        <i class="fas fa-bell"></i>
                    </button>
                </div>
            </td>
        `;
        tbody.appendChild(row);
    });
    
    // Add event listeners for action buttons
    document.querySelectorAll('.track-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const touristId = e.currentTarget.getAttribute('data-tourist-id');
            trackTourist(touristId);
        });
    });
    
    document.querySelectorAll('.contact-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const touristId = e.currentTarget.getAttribute('data-tourist-id');
            contactTourist(touristId);
        });
    });
    
    document.querySelectorAll('.alert-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const touristId = e.currentTarget.getAttribute('data-tourist-id');
            sendAlertToTourist(touristId);
        });
    });
}

function loadGovAlerts() {
    const alertsContainer = document.getElementById('gov-alerts');
    if (!alertsContainer) return;
    
    alertsContainer.innerHTML = '';
    
    // Sort incidents by priority and timestamp
    const sortedIncidents = [...appData.incidents].sort((a, b) => {
        const priorityOrder = {critical: 3, high: 2, medium: 1, low: 0};
        return priorityOrder[b.priority] - priorityOrder[a.priority] || new Date(b.timestamp) - new Date(a.timestamp);
    });
    
    sortedIncidents.forEach(incident => {
        const alertEl = document.createElement('div');
        alertEl.className = `gov-alert-item ${incident.priority}-priority`;
        alertEl.innerHTML = `
            <div class="alert-header">
                <div class="alert-info">
                    <h4>${incident.type.toUpperCase()} - ${incident.touristName}</h4>
                    <span class="status-badge ${incident.status}">${incident.status.toUpperCase()}</span>
                    <span class="priority-badge ${incident.priority}">${incident.priority.toUpperCase()}</span>
                </div>
                <div class="alert-actions">
                    <button class="btn btn--sm btn--outline view-btn" data-incident-id="${incident.id}">
                        <i class="fas fa-eye"></i> View
                    </button>
                    ${incident.status === 'active' ? `
                        <button class="btn btn--sm btn--primary assign-btn" data-incident-id="${incident.id}">
                            <i class="fas fa-user-plus"></i> Assign
                        </button>
                        <button class="btn btn--sm btn--success resolve-btn" data-incident-id="${incident.id}">
                            <i class="fas fa-check"></i> Resolve
                        </button>
                    ` : ''}
                </div>
            </div>
            <div class="alert-meta">
                <span><i class="fas fa-clock"></i> ${formatTime(incident.timestamp)}</span>
                <span><i class="fas fa-map-marker-alt"></i> ${incident.location.address}</span>
                <span><i class="fas fa-user-shield"></i> ${incident.assignedOfficer}</span>
                ${incident.responseTime ? `<span><i class="fas fa-stopwatch"></i> Response: ${incident.responseTime}</span>` : ''}
            </div>
            <div class="alert-description">
                <p>${incident.description}</p>
                ${incident.additionalInfo ? `<div class="additional-info"><strong>Additional Info:</strong> ${incident.additionalInfo}</div>` : ''}
            </div>
            ${incident.eFIRGenerated ? `
                <div class="efir-info">
                    <i class="fas fa-file-alt"></i> e-FIR Generated: ${incident.eFIRNumber}
                </div>
            ` : ''}
        `;
        alertsContainer.appendChild(alertEl);
    });
    
    // Add event listeners
    document.querySelectorAll('.assign-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const incidentId = e.currentTarget.getAttribute('data-incident-id');
            assignIncident(incidentId);
        });
    });
    
    document.querySelectorAll('.resolve-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const incidentId = e.currentTarget.getAttribute('data-incident-id');
            resolveIncident(incidentId);
        });
    });
}

function loadGeofencesList() {
    const container = document.getElementById('geofences-list');
    if (!container) return;
    
    container.innerHTML = '';
    
    // Combine all zones
    const allZones = [
        ...appData.safeZones.map(z => ({...z, type: 'safe'})),
        ...appData.dangerZones.map(z => ({...z, type: 'danger'})),
        ...appData.cautionZones.map(z => ({...z, type: 'caution'}))
    ];
    
    allZones.forEach(zone => {
        const zoneEl = document.createElement('div');
        zoneEl.className = `geofence-item ${zone.type}`;
        zoneEl.innerHTML = `
            <div class="geofence-header">
                <div class="geofence-name">${zone.name}</div>
                <div class="geofence-controls">
                    <span class="geofence-type ${zone.type}">${zone.type.toUpperCase()}</span>
                    <div class="geofence-actions">
                        <button class="action-btn edit-btn" title="Edit Zone">
                            <i class="fas fa-edit"></i>
                        </button>
                        <button class="action-btn delete-btn" title="Delete Zone">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </div>
            </div>
            <div class="geofence-details">
                <div class="detail-item">
                    <span class="detail-label">Safety Level:</span>
                    <span class="detail-value">${zone.safetyLevel}%</span>
                </div>
                <div class="detail-item">
                    <span class="detail-label">Radius:</span>
                    <span class="detail-value">${zone.radius}m</span>
                </div>
                ${zone.restrictions ? `
                    <div class="detail-item">
                        <span class="detail-label">Restrictions:</span>
                        <ul class="restrictions-list">
                            ${zone.restrictions.map(r => `<li>${r}</li>`).join('')}
                        </ul>
                    </div>
                ` : ''}
                ${zone.warnings ? `
                    <div class="detail-item">
                        <span class="detail-label">Warnings:</span>
                        <ul class="warnings-list">
                            ${zone.warnings.map(w => `<li>${w}</li>`).join('')}
                        </ul>
                    </div>
                ` : ''}
            </div>
        `;
        container.appendChild(zoneEl);
    });
}

function loadEFirList() {
    const container = document.getElementById('efir-list');
    if (!container) return;
    
    const efirs = appData.incidents.filter(incident => incident.eFIRGenerated).map(incident => ({
        id: incident.eFIRNumber,
        type: incident.type,
        tourist: incident.touristName,
        date: incident.timestamp,
        status: incident.status,
        priority: incident.priority
    }));
    
    container.innerHTML = '';
    efirs.forEach(efir => {
        const efirEl = document.createElement('div');
        efirEl.className = 'efir-item';
        efirEl.innerHTML = `
            <div class="efir-header">
                <div class="efir-id">${efir.id}</div>
                <span class="status-badge ${efir.status}">${efir.status}</span>
            </div>
            <div class="efir-details">
                <div class="efir-detail">
                    <span class="label">Type:</span>
                    <span class="value">${efir.type}</span>
                </div>
                <div class="efir-detail">
                    <span class="label">Tourist:</span>
                    <span class="value">${efir.tourist}</span>
                </div>
                <div class="efir-detail">
                    <span class="label">Date:</span>
                    <span class="value">${new Date(efir.date).toLocaleDateString()}</span>
                </div>
                <div class="efir-detail">
                    <span class="label">Priority:</span>
                    <span class="value priority-${efir.priority}">${efir.priority}</span>
                </div>
            </div>
            <div class="efir-actions">
                <button class="btn btn--sm btn--outline">
                    <i class="fas fa-eye"></i> View
                </button>
                <button class="btn btn--sm btn--primary">
                    <i class="fas fa-download"></i> Download
                </button>
            </div>
        `;
        container.appendChild(efirEl);
    });
}

function loadAnomalyDetection() {
    const container = document.getElementById('anomaly-list');
    if (!container) return;
    
    const anomalies = [
        {
            type: 'Route Deviation',
            tourist: 'Arjun Sharma',
            severity: 'medium',
            description: 'Tourist deviated from planned route by 2.5km',
            time: '15 minutes ago',
            aiConfidence: 87
        },
        {
            type: 'Extended Inactivity',
            tourist: 'Priya Patel',
            severity: 'low',
            description: 'No movement detected for 3 hours at tourist site',
            time: '1 hour ago',
            aiConfidence: 92
        },
        {
            type: 'Unusual Speed Pattern',
            tourist: 'Rajesh Kumar',
            severity: 'high',
            description: 'Rapid movement pattern detected in forest area',
            time: '5 minutes ago',
            aiConfidence: 95
        }
    ];
    
    container.innerHTML = '';
    anomalies.forEach(anomaly => {
        const anomalyEl = document.createElement('div');
        anomalyEl.className = `anomaly-item ${anomaly.severity}`;
        anomalyEl.innerHTML = `
            <div class="anomaly-header">
                <div class="anomaly-type">${anomaly.type}</div>
                <div class="anomaly-confidence">AI: ${anomaly.aiConfidence}%</div>
            </div>
            <div class="anomaly-tourist">${anomaly.tourist}</div>
            <div class="anomaly-description">${anomaly.description}</div>
            <div class="anomaly-time">${anomaly.time}</div>
            <div class="anomaly-actions">
                <button class="btn btn--sm btn--outline">Investigate</button>
                <button class="btn btn--sm btn--ghost">Dismiss</button>
            </div>
        `;
        container.appendChild(anomalyEl);
    });
}

function initGeofenceMap() {
    const mapContainer = document.getElementById('geofence-map');
    if (!mapContainer) return;
    
    mapContainer.innerHTML = '';
    
    try {
        const map = L.map('geofence-map').setView([20.5937, 78.9629], 5);
        
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors'
        }).addTo(map);
        
        // Add all geo-fences with proper colors
        [...appData.safeZones, ...appData.dangerZones, ...appData.cautionZones].forEach(zone => {
            let color;
            switch(zone.type) {
                case 'safe': color = '#22c55e'; break;
                case 'danger': color = '#ef4444'; break;
                case 'caution': color = '#f59e0b'; break;
                default: color = '#6b7280';
            }
            
            L.circle([zone.lat, zone.lng], {
                radius: zone.radius,
                color: color,
                fillColor: color,
                fillOpacity: 0.3,
                weight: 3
            }).addTo(map).bindPopup(`
                <b>${zone.name}</b><br>
                Type: ${zone.type}<br>
                Safety Level: ${zone.safetyLevel}%
            `);
        });
        
        maps.geofence = map;
    } catch (error) {
        console.error('Error initializing geofence map:', error);
        mapContainer.innerHTML = '<p>Map loading failed. Please refresh the page.</p>';
    }
}

// Utility Functions
function animateNumber(element, start, end, duration = 1000) {
    if (!element) return;
    
    const range = end - start;
    const increment = range / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if ((increment > 0 && current >= end) || (increment < 0 && current <= end)) {
            current = end;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current);
    }, 16);
}

function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // Radius of the Earth in km
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = Math.sin(dLat/2) * Math.sin(dLat/2) + 
              Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
              Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c;
}

function formatTime(timestamp) {
    const date = new Date(timestamp);
    const now = new Date();
    const diff = now - date;
    const minutes = Math.floor(diff / 60000);
    
    if (minutes < 1) return 'Just now';
    if (minutes < 60) return `${minutes}m ago`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours}h ago`;
    const days = Math.floor(hours / 24);
    if (days < 7) return `${days}d ago`;
    return date.toLocaleDateString();
}

function showModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('hidden');
        document.body.style.overflow = '';
    }
}

function showNotification(title, message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <div class="notification-icon">
            <i class="fas fa-${getNotificationIcon(type)}"></i>
        </div>
        <div class="notification-content">
            <div class="notification-title">${title}</div>
            <div class="notification-message">${message}</div>
        </div>
        <button class="notification-close">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    // Add to notifications array
    notifications.unshift({title, message, type, timestamp: new Date().toISOString()});
    
    // Update notification badge
    updateNotificationBadge();
    
    // Show notification (you could implement a toast notification system here)
    console.log(`Notification [${type.toUpperCase()}]: ${title} - ${message}`);
}

function getNotificationIcon(type) {
    switch(type) {
        case 'success': return 'check-circle';
        case 'error': return 'exclamation-circle';
        case 'warning': return 'exclamation-triangle';
        default: return 'info-circle';
    }
}

function updateNotificationBadge() {
    const badge = document.querySelector('.notification-badge');
    if (badge) {
        badge.textContent = notifications.length;
        badge.style.display = notifications.length > 0 ? 'flex' : 'none';
    }
}

// Action Functions
function trackTourist(touristId) {
    const tourist = appData.touristProfiles.find(t => t.id === touristId);
    if (tourist && maps.gov) {
        maps.gov.setView([tourist.currentLocation.lat, tourist.currentLocation.lng], 15);
        showNotification('Tourist Located', `Tracking ${tourist.name} at ${tourist.currentLocation.address}`, 'success');
    }
}

function contactTourist(touristId) {
    const tourist = appData.touristProfiles.find(t => t.id === touristId);
    if (tourist) {
        showNotification('Contact Initiated', `Calling ${tourist.name} at ${tourist.phone}`, 'info');
    }
}

function sendAlertToTourist(touristId) {
    const tourist = appData.touristProfiles.find(t => t.id === touristId);
    if (tourist) {
        showNotification('Alert Sent', `Safety alert sent to ${tourist.name}`, 'warning');
    }
}

function assignIncident(incidentId) {
    const incident = appData.incidents.find(i => i.id === incidentId);
    if (incident) {
        incident.assignedOfficer = currentUser.name;
        loadGovAlerts();
        showNotification('Incident Assigned', `${incident.type} incident assigned to you`, 'info');
    }
}

function resolveIncident(incidentId) {
    const incident = appData.incidents.find(i => i.id === incidentId);
    if (incident) {
        incident.status = 'resolved';
        loadGovAlerts();
        updateGovStats();
        showNotification('Incident Resolved', `${incident.type} incident marked as resolved`, 'success');
    }
}

function startRealTimeUpdates() {
    if (realTimeInterval) {
        clearInterval(realTimeInterval);
    }
    
    realTimeInterval = setInterval(() => {
        // Simulate real-time data updates
        simulateDataUpdates();
    }, 30000); // Update every 30 seconds
}

function simulateDataUpdates() {
    // Update tourist safety scores
    appData.touristProfiles.forEach(tourist => {
        const change = Math.random() * 4 - 2; // -2 to +2
        tourist.safetyScore = Math.max(20, Math.min(100, tourist.safetyScore + change));
    });
    
    // Update IoT device data
    appData.iotDevices.forEach(device => {
        if (device.vitals) {
            device.vitals.heartRate += Math.floor(Math.random() * 10 - 5); // -5 to +5
            device.vitals.heartRate = Math.max(60, Math.min(120, device.vitals.heartRate));
            device.vitals.steps += Math.floor(Math.random() * 100);
        }
        device.batteryLevel = Math.max(10, device.batteryLevel - Math.random() * 2);
        device.lastPing = new Date().toISOString();
    });
    
    // Update current user if tourist
    if (currentUser && currentUser.type === 'tourist') {
        const updatedTourist = appData.touristProfiles.find(t => t.id === currentUser.id);
        if (updatedTourist) {
            currentUser.safetyScore = updatedTourist.safetyScore;
            updateSafetyScore(currentUser.safetyScore);
            updateHealthMetrics();
        }
    }
    
    // Update government dashboard if active
    if (currentUser && currentUser.type === 'authority') {
        updateGovStats();
        if (document.getElementById('tourists-tbody')) {
            loadTouristsTable();
        }
    }
}

// Event Listeners Setup
function setupEventListeners() {
    console.log('Setting up enhanced event listeners...');
    
    // Landing page buttons
    const buttons = {
        touristLogin: document.getElementById('tourist-login-btn'),
        authorityLogin: document.getElementById('authority-login-btn'),
        signup: document.getElementById('signup-btn'),
        backToLanding: document.getElementById('back-to-landing')
    };
    
    if (buttons.touristLogin) {
        buttons.touristLogin.addEventListener('click', () => {
            console.log('Tourist login button clicked');
            showTouristLogin();
        });
    }
    
    if (buttons.authorityLogin) {
        buttons.authorityLogin.addEventListener('click', () => {
            console.log('Authority login button clicked');
            showAuthorityLogin();
        });
    }
    
    if (buttons.signup) {
        buttons.signup.addEventListener('click', () => {
            console.log('Signup button clicked');
            showSignup();
        });
    }
    
    if (buttons.backToLanding) {
        buttons.backToLanding.addEventListener('click', () => {
            console.log('Back to landing button clicked');
            showLanding();
        });
    }
    
    // Auth tab switching
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const tabName = this.getAttribute('data-tab');
            
            // Update active tab
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Update active content
            document.querySelectorAll('.auth-content').forEach(content => {
                content.classList.remove('active');
            });
            const targetContent = document.getElementById(tabName);
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });
    
    // Back buttons
    ['tourist-back-btn', 'authority-back-btn'].forEach(id => {
        const btn = document.getElementById(id);
        if (btn) {
            btn.addEventListener('click', () => {
                console.log(`${id} clicked`);
                showLanding();
            });
        }
    });
    
    // Logout buttons
    ['tourist-logout-btn', 'gov-logout-btn'].forEach(id => {
        const btn = document.getElementById(id);
        if (btn) {
            btn.addEventListener('click', () => {
                console.log(`${id} clicked`);
                logout();
            });
        }
    });
    
    // Theme toggle buttons
    ['theme-toggle', 'theme-toggle-gov'].forEach(id => {
        const btn = document.getElementById(id);
        if (btn) {
            btn.addEventListener('click', () => {
                console.log(`${id} clicked`);
                toggleTheme();
            });
        }
    });
    
    // Language toggle
    const langToggle = document.getElementById('lang-toggle');
    if (langToggle) {
        langToggle.addEventListener('click', function() {
            currentLanguage = currentLanguage === 'EN' ? 'HI' : 'EN';
            this.textContent = currentLanguage;
            showNotification('Language Changed', `Interface language changed to ${currentLanguage === 'EN' ? 'English' : 'Hindi'}`, 'info');
        });
    }
    
    // Authentication forms
    const touristLoginForm = document.getElementById('tourist-login-form');
    if (touristLoginForm) {
        touristLoginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            console.log('Tourist login form submitted');
            const id = document.getElementById('tourist-id').value.trim();
            const doc = document.getElementById('tourist-doc').value.trim();
            
            if (authenticateTourist(id, doc)) {
                console.log('Tourist authenticated successfully');
                initTouristDashboard();
                showPage('tourist-dashboard');
            } else {
                console.log('Tourist authentication failed');
                showNotification('Login Failed', 'Invalid credentials. Try: DID001 with 1234-5678-9012', 'error');
            }
        });
    }
    
    const authorityLoginForm = document.getElementById('authority-login-form');
    if (authorityLoginForm) {
        authorityLoginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            console.log('Authority login form submitted');
            const officerId = document.getElementById('officer-id').value.trim();
            const department = document.getElementById('department').value;
            
            if (authenticateAuthority(officerId, department)) {
                console.log('Authority authenticated successfully');
                initGovDashboard();
                showPage('gov-dashboard');
            } else {
                console.log('Authority authentication failed');
                showNotification('Login Failed', 'Please fill in all fields', 'error');
            }
        });
    }
    
    // Signup forms
    ['tourist-signup-form', 'authority-signup-form'].forEach(formId => {
        const form = document.getElementById(formId);
        if (form) {
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                showNotification('Registration Submitted', 'Your registration request has been submitted for approval.', 'success');
                setTimeout(() => showLanding(), 2000);
            });
        }
    });
    
    // Government sidebar menu
    document.querySelectorAll('.menu-item').forEach(item => {
        item.addEventListener('click', function() {
            const section = this.getAttribute('data-section');
            if (section) {
                console.log('Menu item clicked:', section);
                showGovSection(section);
            }
        });
    });
    
    // Profile dropdown
    const profileBtn = document.getElementById('profile-btn');
    const profileDropdown = document.getElementById('profile-dropdown');
    
    if (profileBtn && profileDropdown) {
        profileBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            profileDropdown.classList.toggle('show');
        });
        
        document.addEventListener('click', function() {
            profileDropdown.classList.remove('show');
        });
    }
    
    // Quick action buttons
    const quickActions = {
        voiceAssistant: document.getElementById('voice-assistant-btn'),
        shareLocation: document.getElementById('share-location-btn'),
        findHelp: document.getElementById('find-help-btn'),
        planRoute: document.getElementById('plan-route-btn')
    };
    
    if (quickActions.voiceAssistant) {
        quickActions.voiceAssistant.addEventListener('click', activateVoiceAssistant);
    }
    
    if (quickActions.shareLocation) {
        quickActions.shareLocation.addEventListener('click', () => {
            showNotification('Location Shared', 'Your current location has been shared with emergency contacts.', 'success');
        });
    }
    
    if (quickActions.findHelp) {
        quickActions.findHelp.addEventListener('click', () => {
            showModal('notification-center');
        });
    }
    
    if (quickActions.planRoute) {
        quickActions.planRoute.addEventListener('click', () => {
            showModal('route-planner-modal');
        });
    }
    
    // Modal controls
    document.querySelectorAll('.modal-close').forEach(btn => {
        btn.addEventListener('click', function() {
            const modal = this.closest('.modal');
            if (modal) {
                console.log('Closing modal:', modal.id);
                closeModal(modal.id);
            }
        });
    });
    
    // Generate e-FIR button
    const generateEfirBtn = document.getElementById('generate-efir-btn');
    if (generateEfirBtn) {
        generateEfirBtn.addEventListener('click', () => showModal('efir-modal'));
    }
    
    // e-FIR form
    const efirForm = document.getElementById('efir-form');
    if (efirForm) {
        efirForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const efirId = 'FIR-' + Date.now();
            showNotification('e-FIR Generated', `e-FIR ${efirId} has been generated successfully.`, 'success');
            closeModal('efir-modal');
            if (typeof loadEFirList === 'function') loadEFirList();
        });
    }
    
    // Search functionality
    const touristSearch = document.getElementById('tourist-search');
    if (touristSearch) {
        touristSearch.addEventListener('input', function(e) {
            const searchTerm = e.target.value.toLowerCase();
            const rows = document.querySelectorAll('#tourists-tbody tr');
            
            rows.forEach(row => {
                const text = row.textContent.toLowerCase();
                row.style.display = text.includes(searchTerm) ? '' : 'none';
            });
        });
    }
    
    // Alert filters
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            const filter = this.getAttribute('data-filter');
            console.log('Filtering alerts by:', filter);
            // Implement filtering logic here
        });
    });
    
    // Initialize SOS button
    initSOSButton();
    
    // Modal background click to close
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('modal-overlay')) {
            const modal = e.target.closest('.modal');
            if (modal) {
                console.log('Modal overlay clicked, closing:', modal.id);
                closeModal(modal.id);
            }
        }
    });
    
    // Escape key to close modals
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            document.querySelectorAll('.modal:not(.hidden)').forEach(modal => {
                console.log('Escape pressed, closing modal:', modal.id);
                closeModal(modal.id);
            });
        }
    });
    
    // Location sharing toggle
    const locationSharing = document.getElementById('location-sharing');
    if (locationSharing) {
        locationSharing.addEventListener('change', function() {
            const status = this.checked ? 'enabled' : 'disabled';
            showNotification('Location Sharing', `Location sharing has been ${status}.`, this.checked ? 'success' : 'warning');
        });
    }
    
    console.log('All event listeners set up successfully');
}

console.log('SafeTrip Enhanced Application Script Loaded');