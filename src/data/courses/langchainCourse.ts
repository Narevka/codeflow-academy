
import { Course } from "@/types/course";

export const langchainCourse: Course = {
  id: "langchain-fundamentals",
  title: "LangChain Fundamentals",
  description: "Comprehensive course on building AI applications with LangChain framework",
  lastActivity: new Date().toISOString(),
  progress: 0,
  modules: [
    {
      id: "module-1",
      title: "Introduction to LangChain",
      completed: false,
      lessons: [
        {
          id: "lesson-1-1",
          title: "What is LangChain?",
          displayTitle: "Understanding LangChain Basics",
          videoUrl: "https://example.com/videos/langchain-intro",
          thumbnailUrl: "/lovable-uploads/47b7ddeb-1880-457f-a354-85dfaae75dc0.png",
          completed: false,
          description: `
LangChain is a framework designed to simplify the creation of applications using large language models (LLMs). It provides a standard interface for integrating AI with external data sources, memory systems, and various application types.

In this lesson, you'll learn:
- The core components of LangChain
- How LangChain simplifies LLM application development
- Basic architecture of LangChain applications

LangChain addresses several key challenges in LLM application development:
1. **Data connection**: LLMs are trained on general data and need help connecting to your specific data
2. **Contextual awareness**: Standard LLMs lack memory of previous interactions
3. **Complex reasoning**: Many applications require breaking down problems into steps

By the end of this lesson, you'll understand how LangChain solves these problems and provides a robust framework for AI development.
          `
        },
        {
          id: "lesson-1-2",
          title: "Setting Up Your Environment",
          displayTitle: "LangChain Development Environment Setup",
          videoUrl: "https://example.com/videos/langchain-setup",
          thumbnailUrl: "/lovable-uploads/a45b3d74-6d23-4db5-91bf-d7a93f35d996.png",
          completed: false,
          description: `
Before diving into LangChain development, we need to set up our environment with all necessary tools and dependencies.

In this lesson, you'll:
- Install Python and necessary packages
- Set up API keys for various language models
- Configure your development environment
- Run your first LangChain script

Required installations:
- Python 3.8 or newer
- LangChain library
- OpenAI API keys (or alternatives)
- Jupyter Notebook (recommended for interactive development)

After this setup, you'll be ready to start building with LangChain in the next lessons.
          `
        },
        {
          id: "lesson-1-3",
          title: "Your First LangChain Application",
          displayTitle: "Building Your First LangChain App",
          videoUrl: "https://example.com/videos/first-langchain-app",
          thumbnailUrl: "/lovable-uploads/6e30cc63-f5d8-4bea-a2ca-b258fdbda9e1.png",
          completed: false,
          isQuest: true,
          description: `
Now that you've set up your environment, let's build your first LangChain application!

# QUEST: Simple Question-Answering System

In this practical exercise, you'll create a basic Q&A system using LangChain and an LLM of your choice.

## Requirements:
1. Create a simple chat interface that accepts user questions
2. Connect to an LLM (OpenAI, Anthropic, or similar)
3. Implement basic prompt templates
4. Return formatted answers to the user

Sample code to get you started:

\`\`\`python
from langchain.llms import OpenAI
from langchain.prompts import PromptTemplate

# Initialize the LLM
llm = OpenAI(temperature=0.7)

# Create a prompt template
template = """
Question: {question}
Answer: 
"""
prompt = PromptTemplate(template=template, input_variables=["question"])

# Get user input
user_question = "What is LangChain used for?"

# Generate the prompt
final_prompt = prompt.format(question=user_question)

# Get the response from the LLM
response = llm(final_prompt)
print(response)
\`\`\`

Complete this quest by enhancing the sample code with your own improvements and submitting your solution.
          `
        }
      ]
    },
    {
      id: "module-2",
      title: "LangChain Components",
      completed: false,
      lessons: [
        {
          id: "lesson-2-1",
          title: "Models, Prompts, and Output Parsers",
          displayTitle: "Core Components: Models, Prompts, and Parsers",
          videoUrl: "https://example.com/videos/langchain-components",
          thumbnailUrl: "/lovable-uploads/a1c38628-4c03-427f-987c-9f87ffbbb673.png",
          completed: false,
          description: `
In this lesson, we'll explore the three core components that form the foundation of LangChain:

## Models
LangChain provides interfaces and integrations for two types of models:
- Language models (both LLMs and chat models)
- Text embedding models for creating vector representations

## Prompts
Prompts are the instructions you give to language models. LangChain offers:
- Prompt templates for dynamic prompt generation
- Example selectors for few-shot learning
- Output parsers to structure model responses

## Output Parsers
Output parsers help structure model responses into more usable formats:
- Structured output (JSON, CSV)
- List parsing
- Datetime parsing

By mastering these components, you'll be able to effectively communicate with language models and process their responses in your applications.
          `
        },
        {
          id: "lesson-2-2",
          title: "Chains",
          displayTitle: "Understanding LangChain Chains",
          videoUrl: "https://example.com/videos/langchain-chains",
          thumbnailUrl: "/lovable-uploads/af41dcbe-22e6-4e86-a8f3-d5878acd2e55.png",
          completed: false,
          description: `
Chains are a core concept in LangChain that allow you to combine multiple components together to create a single, coherent application.

In this lesson, you'll learn:
- What chains are and why they're useful
- Different types of chains available in LangChain
- How to create custom chains for your specific needs

Common types of chains:
1. **LLMChain**: The simplest chain that combines a prompt template with an LLM
2. **SequentialChain**: Executes multiple chains in sequence, passing outputs as inputs
3. **RouterChain**: Dynamically selects which chain to use based on inputs
4. **ConversationChain**: Maintains conversation history for contextual interactions

By the end of this lesson, you'll be able to combine LangChain components into sophisticated processing pipelines.
          `
        },
        {
          id: "lesson-2-3",
          title: "Memory Systems",
          displayTitle: "Implementing Memory in LangChain",
          videoUrl: "https://example.com/videos/langchain-memory",
          thumbnailUrl: "/lovable-uploads/38f3e653-b2e9-48bf-8257-d3567c2369a3.png",
          completed: false,
          isQuest: true,
          description: `
Memory is essential for creating conversational applications that can remember previous interactions. In this lesson, we'll explore LangChain's memory systems.

# QUEST: Building a Chatbot with Memory

Your challenge is to create a simple chatbot that remembers previous conversations using LangChain's memory components.

## Requirements:
1. Implement a chatbot using ConversationChain
2. Use ConversationBufferMemory to store conversation history
3. Enhance the bot with ConversationSummaryMemory to handle longer conversations
4. Test with at least 5 turns of conversation

Sample code to get you started:

\`\`\`python
from langchain.chains import ConversationChain
from langchain.memory import ConversationBufferMemory
from langchain.llms import OpenAI

# Initialize the language model
llm = OpenAI(temperature=0.7)

# Set up conversation memory
memory = ConversationBufferMemory()

# Create the conversation chain
conversation = ConversationChain(
    llm=llm,
    memory=memory,
    verbose=True
)

# First interaction
response = conversation.predict(input="Hi, my name is Alice")
print(response)

# Second interaction - the AI should remember the name
response = conversation.predict(input="What's my name?")
print(response)
\`\`\`

Complete this quest by implementing a chatbot with more advanced memory features and submit your solution.
          `
        }
      ]
    },
    {
      id: "module-3",
      title: "Working with External Data",
      completed: false,
      lessons: [
        {
          id: "lesson-3-1",
          title: "Document Loaders",
          displayTitle: "Loading External Documents in LangChain",
          videoUrl: "https://example.com/videos/langchain-documents",
          thumbnailUrl: "/lovable-uploads/2fd49611-13df-49b8-a6fe-2b83183c4e83.png",
          completed: false,
          description: `
LangChain provides tools to load documents from various sources, preparing them for use with language models.

In this lesson, you'll learn:
- How to load documents from different file types (PDF, HTML, Markdown)
- Loading from different data sources (web, databases, APIs)
- Processing and chunking documents for further use

Example document loaders:
- TextLoader for plain text files
- PDFLoader for PDF documents
- WebBaseLoader for web content
- NotionDirectoryLoader for Notion exports

By the end of this lesson, you'll be able to import various document types into your LangChain applications, making them available for further processing with language models.
          `
        },
        {
          id: "lesson-3-2",
          title: "Text Splitters",
          displayTitle: "Document Chunking with Text Splitters",
          videoUrl: "https://example.com/videos/langchain-text-splitting",
          thumbnailUrl: "/lovable-uploads/1d7bf1cd-3c85-48bc-9805-e81d55d79db5.png",
          completed: false,
          description: `
When working with long documents, you need to split them into manageable chunks for language models. LangChain's text splitters help with this process.

Key topics covered:
- Why text splitting is necessary
- Character-based vs. token-based splitting
- Recursive text splitting strategies
- Maintaining context across splits

Common text splitters:
1. CharacterTextSplitter - splits by character count
2. RecursiveCharacterTextSplitter - splits by characters with recursive fallbacks
3. TokenTextSplitter - splits based on token estimates
4. MarkdownTextSplitter - splitting that respects Markdown structure

You'll learn best practices for splitting documents while preserving semantic meaning, which is crucial for accurate LLM responses when working with your data.
          `
        },
        {
          id: "lesson-3-3",
          title: "Retrievers and Vector Stores",
          displayTitle: "Semantic Search with Vector Databases",
          videoUrl: "https://example.com/videos/langchain-vector-stores",
          thumbnailUrl: "/lovable-uploads/d938f15f-d924-4207-97b6-4e33a01db497.png",
          completed: false,
          isQuest: true,
          description: `
Vector stores enable semantic search by converting text into vector embeddings and finding similar content. This lesson covers retrievers and vector databases in LangChain.

# QUEST: Build a Document Question-Answering System

In this quest, you'll create a system that can answer questions about a specific set of documents using vector search.

## Requirements:
1. Load and process at least 3 documents (PDFs, web pages, or text files)
2. Split documents into appropriate chunks
3. Create embeddings and store them in a vector database
4. Implement a retrieval system that finds relevant document sections
5. Connect the retriever to an LLM to answer questions

Sample code to start with:

\`\`\`python
from langchain.document_loaders import TextLoader
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain.embeddings import OpenAIEmbeddings
from langchain.vectorstores import Chroma
from langchain.chains import RetrievalQA
from langchain.llms import OpenAI

# 1. Load the document
loader = TextLoader("./sample_data.txt")
documents = loader.load()

# 2. Split the document into chunks
text_splitter = RecursiveCharacterTextSplitter(chunk_size=1000, chunk_overlap=100)
docs = text_splitter.split_documents(documents)

# 3. Create embeddings and store them
embeddings = OpenAIEmbeddings()
db = Chroma.from_documents(docs, embeddings)

# 4. Create a retriever
retriever = db.as_retriever()

# 5. Create a QA chain
qa = RetrievalQA.from_chain_type(
    llm=OpenAI(),
    chain_type="stuff",
    retriever=retriever
)

# Test with a question
query = "What are the key points in this document?"
response = qa.run(query)
print(response)
\`\`\`

Complete this quest by enhancing the system with more sophisticated retrieval methods and better prompting strategies.
          `
        }
      ]
    },
    {
      id: "module-4",
      title: "Building Agents",
      completed: false,
      lessons: [
        {
          id: "lesson-4-1",
          title: "Introduction to Agents",
          displayTitle: "LangChain Agents: Autonomous AI Systems",
          videoUrl: "https://example.com/videos/langchain-agents-intro",
          thumbnailUrl: "/lovable-uploads/f64a3252-7933-4dfb-b697-21e384387f01.png",
          completed: false,
          description: `
Agents are autonomous systems that use language models to determine which actions to take and in what order. This lesson introduces the concept of agents in LangChain.

In this lesson, you'll learn:
- What agents are and how they differ from chains
- The agent execution loop
- Different agent types available in LangChain
- When to use agents vs. other approaches

The agent framework consists of:
1. Agent - The logic for determining actions
2. Tools - Functions the agent can use
3. Toolkits - Collections of related tools
4. AgentExecutor - Runs the agent's decision loop

By the end of this lesson, you'll understand how agents can create more dynamic and powerful AI applications capable of reasoning and tool use.
          `
        },
        {
          id: "lesson-4-2",
          title: "Tools and Toolkits",
          displayTitle: "Extending Agents with Tools and Toolkits",
          videoUrl: "https://example.com/videos/langchain-tools",
          thumbnailUrl: "/lovable-uploads/abedc481-fffb-44d7-b01d-f810315d5fba.png",
          completed: false,
          isQuest: true,
          description: `
Tools give agents the ability to interact with external systems and data sources. This lesson explores the various tools and toolkits available in LangChain.

# QUEST: Build a Research Assistant Agent

Create an agent that can perform web research, process information, and provide summaries on any topic.

## Requirements:
1. Create an agent with at least 3 tools:
   - Web search tool
   - Calculator for numerical operations
   - A custom tool you define yourself
2. Implement a ReAct agent that shows its reasoning
3. Create a simple interface for interacting with the agent
4. Test the agent with complex research questions

Sample code:

\`\`\`python
from langchain.agents import load_tools, initialize_agent, AgentType
from langchain.llms import OpenAI

# Initialize the language model
llm = OpenAI(temperature=0.7)

# Load some tools to use
tools = load_tools(["serpapi", "llm-math"], llm=llm)

# Create an agent with the tools
agent = initialize_agent(
    tools, 
    llm, 
    agent=AgentType.ZERO_SHOT_REACT_DESCRIPTION,
    verbose=True
)

# Run the agent
agent.run("What was the high temperature in SF yesterday in Fahrenheit? What is that number raised to the .023 power?")
\`\`\`

Complete this quest by creating a more versatile research agent with additional tools and better error handling.
          `
        }
      ]
    },
    {
      id: "module-5",
      title: "Advanced LangChain Patterns",
      completed: false,
      lessons: [
        {
          id: "lesson-5-1",
          title: "Function Calling and Structured Outputs",
          displayTitle: "Function Calling with LangChain",
          videoUrl: "https://example.com/videos/langchain-function-calling",
          thumbnailUrl: "/lovable-uploads/af41dcbe-22e6-4e86-a8f3-d5878acd2e55.png",
          completed: false,
          description: `
Function calling allows you to get structured data from language models, which is essential for reliable application integration. This lesson covers LangChain's tools for function calling and structured outputs.

Key topics:
- Using OpenAI's function calling capability
- Creating structured output schemas
- Parsing and validating model outputs
- Building reliable systems with structured data

You'll learn how to:
1. Define output schemas using Pydantic
2. Create parser classes for different output formats
3. Implement error handling for malformed outputs
4. Integrate structured outputs with downstream systems

This technique is crucial for building production-grade applications where you need consistent, machine-readable responses from language models.
          `
        },
        {
          id: "lesson-5-2",
          title: "Evaluation and Testing",
          displayTitle: "Testing and Evaluating LangChain Applications",
          videoUrl: "https://example.com/videos/langchain-evaluation",
          thumbnailUrl: "/lovable-uploads/2fd49611-13df-49b8-a6fe-2b83183c4e83.png",
          completed: false,
          isQuest: true,
          description: `
Evaluating and testing LLM-based applications is challenging but essential. This lesson covers evaluation frameworks and testing strategies for LangChain applications.

# QUEST: Create an Evaluation Framework

Build a system to evaluate and benchmark different LangChain configurations for a specific task.

## Requirements:
1. Define at least 3 different metrics for evaluation (e.g., accuracy, relevance, hallucination rate)
2. Create a test dataset with ground truth answers
3. Implement multiple model/chain configurations to compare
4. Build a scoring system and generate evaluation reports
5. Recommend improvements based on evaluation results

Sample code:

\`\`\`python
from langchain.evaluation import QAEvalChain
from langchain.llms import OpenAI

# Example data
examples = [
    {
        "question": "What is the capital of France?",
        "answer": "Paris"
    },
    {
        "question": "Who wrote Romeo and Juliet?",
        "answer": "William Shakespeare"
    }
]

# Get model predictions (in a real scenario, you would use your actual chain)
predictions = {}
for ex in examples:
    predictions[ex["question"]] = "Sample predicted answer"

# Create an evaluator
llm = OpenAI(temperature=0)
eval_chain = QAEvalChain.from_llm(llm)

# Evaluate
graded = eval_chain.evaluate(examples, predictions)
print(graded)
\`\`\`

Complete this quest by building a comprehensive evaluation framework for one of your previous LangChain applications.
          `
        }
      ]
    }
  ]
};
