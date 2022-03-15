# NodeJS

# Applied concepts
- Distributed and asynchronous event-driven architecture
- Consumers and producers
- Topics and partitions
- Hash for sequential data

# Project scope
The system will have 3 producers and 3 consumers
  - News producer: will register new news in the database
  - Validator producer and consumer: it will validate if it is a news item that already exists in the database and change its status
  - Access producer: will request data from a news item from the database and generate access logs
  - Metrics consumer: will check how many hits a news has based on access logs
  - Notification consumer: will check and notify users about new news already validated
  