#  Travel Planner

A simple, user-friendly **travel planning website** that helps users plan their journeys more efficiently by integrating multiple travel elements (routes, costs, booking links, layover suggestions, and destination guides) into one platform.  

This project is being developed iteratively using Agile Sprints. The current version is the **Walking Skeleton (Sprint 1)**, providing a minimal end-to-end workflow.


##  Feature

- Multi-Modal Route Planning
  Plan routes using flights, trains, buses, and local transit (mocked data for now).  

- Cost Comparison (Basic)
  Estimated ticket prices across transport options.  

- Booking Links 
  Redirects to trusted external platforms for bookings.  

-Layover Exploration
  Suggestions for attractions or food spots during layovers (basic placeholders in this version).  

- Destination Guide 
  Simple guides with top attractions, culture highlights, and travel tips.  

---

## 🏗Tech Stack

-  [Vite](https://vitejs.dev/) – fast development & build tool  
-  TypeScript – type-safe development  
-  [Tailwind CSS](https://tailwindcss.com/) – styling framework  
-  React (assumed from Vite setup) – frontend framework
-  ```mermaid
flowchart TD
    subgraph UI[" User Interface (Frontend)"]
        A1[Origin & Destination Input]
        A2[Route & Cost Results Page]
        A3[Layover Suggestions]
        A4[Destination Guide]
    end

    subgraph BL["⚙ Backend Logic"]
        B1[Route Planner Engine]
        B2[Cost Comparison Service]
        B3[Layover Recommendation Service]
        B4[Destination Info Service]
    end

    subgraph EXT["External APIs / Services"]
        C1[Flights API]
        C2[Trains API]
        C3[Buses & Local Transit API]
        C4[Booking Platforms]
        C5[Attractions / Maps API]
        C6[Weather & Currency API]
    end

    A1 --> B1
    B1 --> B2
    B1 --> B3
    B1 --> B4
    B2 --> A2
    B3 --> A3
    B4 --> A4

    B1 --> C1
    B1 --> C2
    B1 --> C3
    B2 --> C4
    B3 --> C5
    B4 --> C6



