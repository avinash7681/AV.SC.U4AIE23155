# Stage 1

## REST API Design

### Create Notification

POST /notifications

### Get Notifications

GET /notifications/:studentId

### Mark Notification as Read

PUT /notifications/:id/read

---

# Stage 2

## Database Design

### students table

- id
- name

### notifications table

- id
- student_id
- type
- message
- priority
- is_read
- created_at

---

# Stage 3

## Query Optimization

Use composite indexing:

(student_id, is_read, created_at)

This improves filtering and sorting performance.

---

# Stage 4

## Caching

Use Redis caching to reduce DB load.

Flow:

Frontend → Redis → Database

---

# Stage 5

## Queue-based Notification System

Use RabbitMQ or Kafka.

Flow:

Producer → Queue → Worker → Email/SMS/Push

Benefits:

- retry failed jobs
- asynchronous processing
- scalability

---

# Stage 6

## Priority Inbox

Sort notifications using:

priority DESC,
created_at DESC

Limit:

Top 10 notifications