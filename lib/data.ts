export const siteData = {
  "users": [
    {
      "id": 1,
      "name": "John Smith",
      "email": "john@example.com",
      "role": "Admin",
      "lastLogin": "2024-01-15T10:30:00Z",
      "status": "active"
    },
    {
      "id": 2,
      "name": "Sarah Johnson",
      "email": "sarah@example.com",
      "role": "Manager",
      "lastLogin": "2024-01-15T09:15:00Z",
      "status": "active"
    },
    {
      "id": 3,
      "name": "Mike Davis",
      "email": "mike@example.com",
      "role": "Analyst",
      "lastLogin": "2024-01-14T16:45:00Z",
      "status": "active"
    }
  ],
  "reports": [
    {
      "id": 1,
      "name": "Monthly Sales Report",
      "type": "sales",
      "createdAt": "2024-01-15T08:00:00Z",
      "status": "completed",
      "fileSize": "2.4 MB",
      "format": "PDF"
    },
    {
      "id": 2,
      "name": "User Engagement Analysis",
      "type": "analytics",
      "createdAt": "2024-01-12T10:30:00Z",
      "status": "completed",
      "fileSize": "1.8 MB",
      "format": "Excel"
    }
  ],
  "metrics": [
    {
      "id": "revenue",
      "name": "Total Revenue",
      "value": 124592,
      "currency": "USD",
      "change": 12.5,
      "period": "month"
    },
    {
      "id": "users",
      "name": "Active Users",
      "value": 8492,
      "change": 8.2,
      "period": "month"
    },
    {
      "id": "conversion",
      "name": "Conversion Rate",
      "value": 3.24,
      "change": -0.8,
      "period": "month"
    }
  ],
  "settings": {
    "appName": "Analytics Pro Dashboard",
    "description": "Comprehensive reporting dashboard for business analytics and insights",
    "version": "1.0.0",
    "theme": "light",
    "currency": "USD",
    "timezone": "UTC",
    "notifications": {
      "email": true,
      "push": true,
      "reports": true
    },
    "dashboard": {
      "defaultView": "overview",
      "refreshInterval": 300,
      "showAnimations": true
    }
  }
};

export const navigation = {
  "main": [
    {
      "label": "Dashboard",
      "route": "/",
      "icon": "dashboard",
      "active": true
    },
    {
      "label": "Analytics",
      "route": "/analytics",
      "icon": "chart-bar"
    },
    {
      "label": "Reports",
      "route": "/reports",
      "icon": "document-text"
    },
    {
      "label": "Settings",
      "route": "/settings",
      "icon": "cog"
    }
  ],
  "footer": [
    {
      "label": "Help",
      "route": "/help",
      "icon": "question-mark"
    },
    {
      "label": "Support",
      "route": "/support",
      "icon": "support"
    }
  ]
};