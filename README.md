Using [Nhost](https://nhost.io/) for backend services, [Bolt.new](https://bolt.new) for frontend development, and an n8n workflow integrated with [OpenRouter](https://openrouter.ai/) for AI-powered news summarization and sentiment analysis, your task is to create a website that delivers a personalized news digest with sentiment insights.

### Your Task

1. Backend:

- Use Nhost to handle database management and user authentication.
- Design a database schema to store user profiles, preferences (topics, keywords, preferred sources), raw news articles, processed summaries, sentiment labels, and explanations.
- Free n8n server https://newn8n.netlify.app

2. Frontend:

- Leverage Bolt.new to design and implement an intuitive user interface.
- Create a personalized dashboard where users can set their news preferences, view a curated feed of articles with concise summaries and sentiment indicators, and interact with the content (mark articles as read, save, or share).

3. AI Workflow Integration:

- Set up an n8n workflow to automate the following tasks:
- News Fetching: Use free news APIs to retrieve current articles based on user-defined topics.
- Content Processing: Send fetched articles to OpenRouter via n8n for AI-powered summarization and sentiment analysis.
- Data Update: Update your Nhost backend with the processed data (summary, sentiment label, and explanation).
This assignment is designed to evaluate your ability to quickly learn and integrate modern tools and concepts into a cohesive, end-to-end solution.
