# Vacation Rental Marketplace Architecture

```mermaid
flowchart TB
  User[Desktop browser]
  CDN[CDN / edge cache]
  Web[Next.js web application]
  API[API gateway]
  Listings[Listing and availability service]
  Booking[Booking and payments service]
  Reviews[Reviews and host service]
  Search[Search service]
  Queue[Event queue]
  DB[(PostgreSQL primary + read replicas)]
  Cache[(Redis cache)]
  Blob[(Object storage for photos)]
  Analytics[(Analytics warehouse)]
  Deploy[Container platform / autoscaling]

  User --> CDN --> Web
  Web --> API
  API --> Listings
  API --> Booking
  API --> Reviews
  API --> Search
  Listings --> Cache
  Search --> Cache
  Listings --> DB
  Booking --> DB
  Reviews --> DB
  Web --> Blob
  Booking --> Queue
  Listings --> Queue
  Reviews --> Queue
  Queue --> Analytics
  Web -. deployed on .-> Deploy
  API -. deployed on .-> Deploy
```

The web tier is stateless and horizontally scalable behind the CDN. Listing photos are served from object storage through immutable CDN URLs. Read-heavy listing and search traffic is absorbed by Redis and database read replicas, while booking writes remain transactional in the primary database. Domain events are published asynchronously for notifications, search indexing, and analytics.
